import { NextResponse } from 'next/server'

export const runtime = 'nodejs'

type OrderItem = { name: string; qty: number; price: number }
type OrderPayload = {
  name: string
  phone: string
  pickupTime: string
  notes?: string
  items: OrderItem[]
  subtotal: number
  tax: number
  total: number
}

const money = (n: number) => `$${Number(n || 0).toFixed(2)}`

export async function POST(req: Request) {
  let body: OrderPayload
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }

  // Basic validation
  if (!body?.name || !body?.phone || !Array.isArray(body.items) || body.items.length === 0) {
    return NextResponse.json(
      { error: 'Please include your name, phone, and at least one item.' },
      { status: 400 },
    )
  }

  const orderId = Date.now().toString().slice(-6)

  const itemLines = body.items
    .map((i) => `  ${i.qty} × ${i.name} — ${money(i.price * i.qty)}`)
    .join('\n')

  const textBody = [
    `NEW PICKUP ORDER  #${orderId}`,
    `─────────────────────────────`,
    `Name:   ${body.name}`,
    `Phone:  ${body.phone}`,
    `Pickup: ${body.pickupTime}`,
    body.notes ? `Notes:  ${body.notes}` : null,
    ``,
    `Items:`,
    itemLines,
    ``,
    `Subtotal: ${money(body.subtotal)}`,
    `Tax:      ${money(body.tax)}`,
    `TOTAL:    ${money(body.total)}  (pay at pickup)`,
  ]
    .filter(Boolean)
    .join('\n')

  const htmlRows = body.items
    .map(
      (i) =>
        `<tr><td style="padding:4px 12px 4px 0">${i.qty} ×</td><td style="padding:4px 12px 4px 0">${i.name}</td><td style="padding:4px 0;text-align:right">${money(
          i.price * i.qty,
        )}</td></tr>`,
    )
    .join('')

  const htmlBody = `
    <div style="font-family:system-ui,sans-serif;max-width:520px">
      <h2 style="margin:0 0 4px">🛍️ New Pickup Order #${orderId}</h2>
      <p style="margin:0 0 16px;color:#666">Mi Lupita's Kitchen</p>
      <table style="font-size:15px;margin-bottom:12px">
        <tr><td style="padding:2px 12px 2px 0;color:#888">Name</td><td><strong>${body.name}</strong></td></tr>
        <tr><td style="padding:2px 12px 2px 0;color:#888">Phone</td><td><a href="tel:${body.phone}">${body.phone}</a></td></tr>
        <tr><td style="padding:2px 12px 2px 0;color:#888">Pickup</td><td>${body.pickupTime}</td></tr>
        ${body.notes ? `<tr><td style="padding:2px 12px 2px 0;color:#888;vertical-align:top">Notes</td><td>${body.notes}</td></tr>` : ''}
      </table>
      <table style="font-size:15px;width:100%;border-top:1px solid #eee;border-bottom:1px solid #eee;padding:8px 0">${htmlRows}</table>
      <table style="font-size:15px;margin-top:12px;width:100%">
        <tr><td style="color:#888">Subtotal</td><td style="text-align:right">${money(body.subtotal)}</td></tr>
        <tr><td style="color:#888">Tax</td><td style="text-align:right">${money(body.tax)}</td></tr>
        <tr><td style="font-size:18px;font-weight:bold;padding-top:6px">TOTAL</td><td style="font-size:18px;font-weight:bold;text-align:right;padding-top:6px">${money(body.total)}</td></tr>
      </table>
      <p style="color:#888;font-size:13px;margin-top:12px">Customer pays at pickup.</p>
    </div>`

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.ORDER_EMAIL_TO
  const from = process.env.ORDER_EMAIL_FROM || 'Orders <onboarding@resend.dev>'

  // If email isn't configured yet, don't fail the customer — log the order so it
  // appears in the server/Vercel logs, and still confirm. (Configure RESEND_API_KEY
  // + ORDER_EMAIL_TO in your hosting env vars to receive emails.)
  if (!apiKey || !to) {
    console.warn('[order] Email not configured — order received but NOT emailed:\n' + textBody)
    return NextResponse.json({
      ok: true,
      orderId,
      warning: 'email-not-configured',
    })
  }

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: to.split(',').map((s) => s.trim()),
        reply_to: undefined,
        subject: `🛍️ Pickup Order #${orderId} — ${body.name} (${body.pickupTime})`,
        text: textBody,
        html: htmlBody,
      }),
    })

    if (!res.ok) {
      const detail = await res.text().catch(() => '')
      console.error('[order] Resend error:', res.status, detail)
      return NextResponse.json(
        { error: 'We could not send your order automatically. Please call us.' },
        { status: 502 },
      )
    }

    return NextResponse.json({ ok: true, orderId })
  } catch (err) {
    console.error('[order] Unexpected error:', err)
    return NextResponse.json(
      { error: 'We could not send your order automatically. Please call us.' },
      { status: 500 },
    )
  }
}
