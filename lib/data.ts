export const business = {
  name: 'Minas Grill & Market',
  type: 'Brazilian Restaurant & Market',
  priceLevel: '$',
  rating: 4.8,
  reviewCount: 153,
  address: '128 Wyckoff Rd, Eatontown, NJ 07724',
  phone: '(732) 997-3111',
  phoneHref: 'tel:+17329973111',
  website: 'https://minasgrillandmarket.com/?utm_source=google',
  menuSource: 'https://minasgrillandmarket.com/menu?utm_source=menu',
  serviceOptions: ['Dine In', 'Curbside Pickup', 'Delivery'],
  directions:
    'https://www.google.com/maps/dir/?api=1&destination=128%20Wyckoff%20Rd%2C%20Eatontown%2C%20NJ%2007724',
  mapEmbed:
    'https://maps.google.com/maps?q=128%20Wyckoff%20Rd%2C%20Eatontown%2C%20NJ%2007724&z=16&output=embed',
  instagram: 'https://instagram.com',
  facebook: 'https://facebook.com',
}

export const hours = [
  { day: 'Monday', open: '7:30 AM', close: '9:00 PM', dow: 1 },
  { day: 'Tuesday', open: '7:30 AM', close: '9:00 PM', dow: 2 },
  { day: 'Wednesday', open: '7:30 AM', close: '9:00 PM', dow: 3 },
  { day: 'Thursday', open: '7:30 AM', close: '9:00 PM', dow: 4 },
  { day: 'Friday', open: '7:30 AM', close: '9:00 PM', dow: 5 },
  { day: 'Saturday', open: '7:30 AM', close: '9:00 PM', dow: 6 },
  { day: 'Sunday', open: '7:30 AM', close: '4:00 PM', dow: 0 },
]

export const photos = [
  { src: '/images/photo_01.jpg', alt: 'Fresh-baked breads, pastries and donuts on the bakery counter' },
  { src: '/images/photo_02.jpg', alt: 'Fresh tomato and red onion salad on the hot food bar' },
  { src: '/images/photo_03.jpg', alt: 'Chicken parmigiana sub with melted mozzarella' },
  { src: '/images/photo_04.jpg', alt: 'Tuna sub on a fresh baguette with lettuce and tomato' },
  { src: '/images/photo_05.jpg', alt: 'Scrambled egg and peppers breakfast sandwich' },
  { src: '/images/photo_06.jpg', alt: 'Brazilian sausage sandwich on a fresh roll' },
  { src: '/images/photo_07.jpg', alt: 'Golden fried risoles and empanadas with shredded chicken' },
  { src: '/images/photo_08.jpg', alt: 'Brazilian meatball soup with bowtie pasta' },
  { src: '/images/photo_09.jpg', alt: 'Chicken salad sandwich on whole wheat with grapes' },
  { src: '/images/photo_10.jpg', alt: 'Sausage and peppers sub on a hoagie roll' },
]

export const favorites = [
  { name: 'Rice & Beans', mentions: 15, img: '/images/photo_02.jpg' },
  { name: 'Cheese Empanadas', mentions: 6, img: '/images/photo_07.jpg' },
  { name: 'Cheese Bread', mentions: 6, img: '/images/photo_01.jpg' },
  { name: 'Rib & Chicken Combo', mentions: 6, img: '/images/photo_06.jpg' },
  { name: 'Beef & Yucca', mentions: 6, img: '/images/photo_10.jpg' },
  { name: 'Corn & Cheese', mentions: 9, img: '/images/photo_05.jpg' },
]

export type MenuItem = {
  name: string
  price: string
  desc?: string
}

export type MenuCategory = {
  category: string
  note?: string
  items: MenuItem[]
}

export const menu: MenuCategory[] = [
  {
    category: 'Morning Grill',
    note: 'Mon-Sat 7:30 AM-9 PM / Sun 7:30 AM-4 PM',
    items: [
      { name: 'Two Eggs On A Roll Sandwich', price: '$4.50', desc: 'Fluffy scrambled or fried eggs on a soft roll — a simple, satisfying classic breakfast.' },
      { name: 'Egg & Cheese on a Roll', price: '$5.00', desc: 'Fluffy eggs and melted cheese on a soft roll.' },
      { name: 'Ham, Egg & Cheese on a Roll', price: '$6.50', desc: 'Savory ham, fluffy eggs and melted cheese on a soft roll.' },
      { name: 'Bacon, Egg & Cheese on a Roll', price: '$6.50', desc: 'Crispy bacon, fluffy eggs and melted cheese on a soft roll.' },
      { name: 'Breakfast Sandwich Pork Roll & Cheese', price: '$6.99', desc: 'Savory pork roll and melted cheese on a fresh roll.' },
      { name: 'Pork Roll, Egg & Cheese Sandwich', price: '$6.50', desc: 'Savory pork roll, fluffy eggs and melted cheese on a soft roll.' },
      { name: 'Sausage, Egg & Cheese on a Roll', price: '$6.50', desc: 'Savory sausage, fluffy eggs and melted cheese on a soft roll.' },
      { name: '3 Eggs White & Cheese on a Roll', price: '$6.99', desc: 'Fluffy egg whites and melted cheese on a soft roll — a lighter option.' },
      { name: 'Minas Belly Buster', price: '$8.99', desc: 'A hearty, indulgent sandwich piled high with meats, cheese and toppings.' },
      { name: 'Ham & Cheese on a Roll', price: '$6.50', desc: 'Tender ham and melted cheese on a soft roll.' },
    ],
  },
  {
    category: 'Breakfast & Omelettes',
    items: [
      { name: 'Any Style 2 Eggs Bacon or Sausage', price: '$8.95', desc: 'Two eggs cooked to your preference with crispy bacon or savory sausage.' },
      { name: 'Western Omelette', price: '$10.95', desc: 'Fluffy eggs with peppers, onions and tender ham.' },
      { name: 'Ham & Cheese Omelette', price: '$10.95', desc: 'Fluffy eggs filled with tender ham and melted cheese.' },
      { name: 'Bacon Cheese Omelette', price: '$10.95', desc: 'Fluffy eggs filled with crispy bacon and melted cheese.' },
      { name: 'Cheese Omelette', price: '$10.95', desc: 'Fluffy eggs filled with melted cheese.' },
      { name: 'Spinach & Cheese Omelette', price: '$10.95', desc: 'Fluffy eggs filled with fresh spinach and melted cheese.' },
      { name: 'Egg White & Cheese Omelette', price: '$9.95', desc: 'Fluffy egg whites with melted cheese — a lighter option.' },
      { name: 'French Toast Plain', price: '$7.95', desc: 'Thick slices dipped in rich egg batter and grilled golden — buttery and lightly sweet.' },
      { name: 'French Toast w/ Banana', price: '$10.95', desc: 'Golden French toast topped with freshly sliced bananas.' },
    ],
  },
  {
    category: 'From The Rotisserie',
    note: 'The best rotisserie chicken in town!',
    items: [
      { name: 'Rotisserie Chicken', price: '$9.99', desc: 'Juicy, perfectly seasoned rotisserie chicken.' },
    ],
  },
  {
    category: 'Combos',
    items: [
      { name: '1/2 Chicken & 1/2 Pork Ribs', price: '$25.96', desc: 'Juicy seasoned chicken and fall-off-the-bone pork ribs, grilled to perfection.' },
      { name: 'Combo Sirloin, Skirt, Ribs & Sausage', price: '$64.90', desc: 'A meat lover\'s feast — juicy sirloin, tender skirt steak, smoky ribs and flavorful sausage.' },
    ],
  },
  {
    category: 'Soups',
    items: [
      { name: 'Manioc Soup', price: '$5.95', desc: 'Hearty soup made with manioc (cassava), simmered with vegetables, meats and seasonings.' },
      { name: 'Soup of the Day', price: '$5.95', desc: 'Ask about our daily special soup.' },
    ],
  },
  {
    category: 'Salads',
    items: [
      { name: 'Antipasto Salad', price: '$12.95', desc: 'Cured meats, cheese, olives, tomatoes and roasted vegetables with olive oil and vinegar.' },
      { name: 'Tossed Salad', price: '$8.95', desc: 'Fresh lettuce, tomatoes, cucumbers and vegetables with your choice of dressing.' },
      { name: 'Caesar Salad', price: '$9.95', desc: 'Crisp romaine, creamy Caesar dressing, croutons and shredded parmesan.' },
      { name: 'Apple Walnut Salad', price: '$12.95', desc: 'Crisp apples, toasted walnuts and fresh greens with a light vinaigrette.' },
      { name: 'Chef Salad', price: '$12.95', desc: 'Fresh greens, sliced deli meats, cheese, boiled eggs and vegetables.' },
    ],
  },
  {
    category: 'Hot Subs',
    note: 'Available as a 10" sub or a Whole Loaf of Bread.',
    items: [
      { name: 'Eggplant Parmigiana Sub — 10"', price: '$9.95', desc: 'Crispy breaded eggplant, marinara and melted mozzarella on a sub roll.' },
      { name: 'Eggplant Parmigiana Sub — Whole Loaf', price: '$19.99', desc: 'Crispy breaded eggplant, marinara and melted mozzarella on a fresh-baked loaf.' },
      { name: 'Grilled Chicken Sub — 10"', price: '$9.95', desc: 'Tender grilled chicken breast with fresh veggies on a soft sub roll.' },
      { name: 'Grilled Chicken Sub — Whole Loaf', price: '$19.99', desc: 'Tender grilled chicken breast on a fresh-baked loaf with your choice of toppings.' },
      { name: 'Meatball Parmigiana Sub — 10"', price: '$9.95', desc: 'Savory meatballs, marinara and melted mozzarella on a sub roll.' },
      { name: 'Meatball Parmigiana Sub — Whole Loaf', price: '$19.99', desc: 'Savory meatballs, marinara and melted mozzarella on a fresh-baked loaf.' },
      { name: 'Meatball Sub — 10"', price: '$9.95', desc: 'Succulent meatballs in marinara on a soft sub roll.' },
      { name: 'Meatball Sub — Whole Loaf', price: '$19.95', desc: 'Tender meatballs in marinara on a fresh-baked loaf.' },
      { name: 'Pepper and Egg Sub — 10"', price: '$9.95', desc: 'Scrambled eggs and sautéed peppers on a soft sub roll.' },
      { name: 'Pepper and Egg — Whole Loaf', price: '$19.99', desc: 'Scrambled eggs and sautéed peppers on a fresh-baked loaf.' },
      { name: 'Sausage and Pepper Sub — 10"', price: '$9.95', desc: 'Italian sausage and sautéed peppers on a soft sub roll.' },
      { name: 'Sausage and Pepper — Whole Loaf', price: '$19.99', desc: 'Juicy Italian sausage and sautéed peppers on a fresh-baked loaf.' },
      { name: 'Sausage Sub — 10"', price: '$9.95', desc: 'Savory Italian sausage on a soft sub roll.' },
      { name: 'Sausage Sub — Whole Loaf', price: '$19.99', desc: 'Juicy Italian sausage on a fresh-baked loaf.' },
      { name: 'Chicken Parmigiana Sub — 10"', price: '$9.95', desc: 'Crispy breaded chicken, marinara and melted mozzarella on a sub roll.' },
      { name: 'Chicken Parmigiana Sub — Whole Loaf', price: '$19.99', desc: 'Crispy breaded chicken, marinara and melted mozzarella on a fresh-baked loaf.' },
      { name: 'Sausage Parmigiana — 10"', price: '$9.95', desc: 'Italian sausage, marinara and melted mozzarella on a soft sub roll.' },
      { name: 'Sausage Parmigiana — Whole Loaf', price: '$19.99', desc: 'Italian sausage, marinara and melted mozzarella on a fresh-baked loaf.' },
    ],
  },
  {
    category: 'Cold Subs',
    note: 'Available as a 10" sub or a Whole Loaf of Bread.',
    items: [
      { name: 'Cheese Sub — 10"', price: '$9.99', desc: 'Melted cheese on a soft sub roll with lettuce, tomato and condiments.' },
      { name: 'Cheese Sub — Whole Loaf', price: '$19.96', desc: 'Melty cheese on a fresh-baked loaf, customizable with your favorite toppings.' },
      { name: 'Chicken Sub — 10"', price: '$9.99', desc: 'Tender chicken breast on a soft sub roll with fresh veggies and sauce.' },
      { name: 'Chicken Sub — Whole Loaf', price: '$19.96', desc: 'Tender seasoned chicken on a fresh-baked loaf.' },
      { name: 'Egg Salad Sub — 10"', price: '$10.95', desc: 'Creamy egg salad made with boiled eggs and seasonings on a soft sub roll.' },
      { name: 'Egg Salad Sub — Whole Loaf', price: '$19.96', desc: 'Freshly prepared creamy egg salad with your choice of toppings.' },
      { name: 'Ham & Cheese Sub — 10"', price: '$9.95', desc: 'Tender ham and melted cheese on a soft sub roll.' },
      { name: 'Ham & Cheese Sub — Whole Loaf', price: '$19.96', desc: 'Savory ham and melted cheese on a fresh-baked loaf.' },
      { name: 'Ham, Cheese & Salami Sub — 10"', price: '$10.95', desc: 'Savory ham, rich salami and melted cheese on a soft sub roll.' },
      { name: 'Ham, Cheese & Salami Sub — Whole Loaf', price: '$19.96', desc: 'Savory ham, rich salami and melted cheese on a fresh-baked loaf.' },
      { name: 'Roast Beef Sub — 10"', price: '$10.95', desc: 'Tender thinly sliced roast beef on a fresh sub roll.' },
      { name: 'Roast Beef Sub — Whole Loaf', price: '$19.96', desc: 'Tender, thinly sliced roast beef on a fresh-baked loaf.' },
      { name: 'Roast Beef & Turkey Sub — 10"', price: '$10.95', desc: 'Tender roast beef and juicy turkey on a soft sub roll.' },
      { name: 'Roast Beef & Turkey Sub — Whole Loaf', price: '$19.96', desc: 'Tender roast beef and juicy turkey on a fresh-baked loaf.' },
      { name: 'Tuna Fish Sub — 10"', price: '$10.95', desc: 'Creamy seasoned tuna salad on a fresh sub roll.' },
      { name: 'Tuna Fish Sub — Whole Loaf', price: '$19.96', desc: 'Creamy seasoned tuna salad on a fresh-baked loaf.' },
      { name: 'Turkey Sub — 10"', price: '$10.99', desc: 'Freshly sliced turkey breast with veggies and condiments on a soft sub roll.' },
      { name: 'Turkey Sub — Whole Loaf', price: '$19.96', desc: 'Freshly sliced turkey breast on a soft fresh-baked loaf.' },
    ],
  },
  {
    category: 'Grill Favorites',
    items: [
      { name: 'Hot Pastrami or Corned Beef (rye)', price: '$12.95', desc: 'Tender seasoned pastrami or corned beef stacked high on fresh rye.' },
      { name: 'Hot Pastrami Swiss Reuben (rye)', price: '$13.95', desc: 'Hot pastrami, melted Swiss, sauerkraut and Russian dressing on toasted rye.' },
    ],
  },
  {
    category: 'Burgers Off The Grill',
    items: [
      { name: 'Hamburger', price: '$9.95', desc: 'Succulent beef patty on a soft bun with classic toppings.' },
      { name: 'Cheeseburger', price: '$10.95', desc: 'Juicy beef patty with melted cheese and classic toppings.' },
      { name: 'Bacon Cheeseburger', price: '$11.95', desc: 'Juicy beef patty with melted cheese and crispy bacon.' },
      { name: 'BBQ Burger', price: '$10.95', desc: 'Juicy patty with smoky barbecue sauce, crispy onions and cheese.' },
      { name: 'Jalapeño Burger', price: '$10.95', desc: 'Juicy patty with melted cheese and spicy jalapeños.' },
      { name: 'X-Tudo Burger', price: '$12.95', desc: 'Brazilian-style: beef patty, cheese, ham, egg, bacon and fresh toppings.' },
      { name: 'X-Picanha Sandwich', price: '$14.95', desc: 'Brazilian-style with succulent picanha beef, cheese, lettuce and sauce.' },
    ],
  },
  {
    category: 'Off The Grill',
    items: [
      { name: 'Plain Jane Grilled Chicken Sandwich', price: '$9.95', desc: 'Simple grilled chicken breast on a soft roll with your choice of toppings.' },
      { name: 'Chipotle Grilled Chicken Sandwich', price: '$8.95', desc: 'Grilled chicken with smoky chipotle sauce and fresh veggies.' },
      { name: 'Whiskey River Sandwich', price: '$9.95', desc: 'Grilled chicken with barbecue sauce, crispy onion rings and melted cheese.' },
      { name: 'Honey Mustard Chicken', price: '$9.95', desc: 'Grilled or crispy chicken drizzled with sweet-and-tangy honey mustard.' },
      { name: 'All American Cheese Steak Sandwich', price: '$10.95', desc: 'Thinly sliced steak with melted American cheese on a soft roll.' },
      { name: 'Garlic Bread Cheese Steak', price: '$10.95', desc: 'Thinly sliced steak and melted cheese on garlic-infused bread.' },
    ],
  },
  {
    category: 'Side Orders',
    note: 'Porções Extras',
    items: [
      { name: 'Skirt Steak', price: '$8.99', desc: 'Flavorful, tender thin cut of beef, grilled to perfection.' },
      { name: 'Sirloin Steak Side', price: '$6.50', desc: 'Tender sirloin grilled to perfection, served as a side.' },
      { name: 'Spinach', price: '$7.00', desc: 'Nutritious leafy greens, lightly cooked.' },
      { name: 'Broccoli Rabe', price: '$11.95', desc: 'Sautéed with garlic and olive oil — bold and slightly nutty.' },
      { name: 'Chicken & Beef Quesadilla', price: '$12.99', desc: 'Grilled tortilla with seasoned chicken, beef, melted cheese and spices.' },
      { name: 'Fried Pork Belly w/ Yucca', price: '$12.00', desc: 'Crispy tender fried pork belly with golden fried yucca.' },
      { name: 'Brazilian Sausage w/ Fried Yuca', price: '$11.00', desc: 'Juicy grilled Brazilian sausage with crispy golden fried yuca.' },
      { name: 'Jumbo Wings (6)', price: '$9.95', desc: 'Crispy, juicy seasoned chicken wings.' },
      { name: 'Jumbo Wings (10)', price: '$12.95', desc: 'A generous portion of crispy seasoned wings — great for sharing.' },
      { name: 'Garlic Bread', price: '$3.95', desc: 'Buttery toasted bread with garlic and herbs.' },
      { name: 'Garlic Bread w/ Cheese', price: '$4.95', desc: 'Buttery garlic bread topped with melted cheese.' },
      { name: 'Chicken Tenders', price: '$9.95', desc: 'Crispy breaded chicken, lightly fried golden.' },
      { name: 'Mozzarella Sticks', price: '$9.95', desc: 'Crispy breaded mozzarella, perfect with marinara.' },
      { name: 'Onion Rings', price: '$6.95', desc: 'Crispy golden-fried onion rings.' },
      { name: 'French Fries', price: '$4.99', desc: 'Crispy golden-brown fries.' },
    ],
  },
  {
    category: 'Brazilian Specialty Items',
    note: 'Made fresh — the real taste of Brazil. (Starred items are fried)',
    items: [
      { name: 'Enroladinho Assado', price: '$5.00', desc: 'Baked dough rolled around ham, golden and crispy.' },
      { name: 'Enroladinho de Salsicha', price: '$4.00', desc: 'Sausage wrapped in soft dough, baked golden — a Brazilian pig-in-a-blanket.' },
      { name: 'Pastel Carne', price: '$4.00', desc: 'Crispy fried pastry filled with seasoned ground beef.' },
      { name: 'Pastel Queijo', price: '$4.00', desc: 'Crispy fried pastry with gooey melted cheese.' },
      { name: 'Quibe (Meat Croquette)', price: '$5.00', desc: 'Ground beef, bulgur wheat and spices, deep-fried crispy.' },
      { name: 'Risole Carne', price: '$4.00', desc: 'Breaded fried pastry with seasoned ground beef.' },
      { name: 'Risole Frango', price: '$4.00', desc: 'Crispy breaded croquette with creamy seasoned chicken.' },
      { name: 'Risole Milho Queijo', price: '$4.00', desc: 'Crispy breaded croquette with creamy corn and cheese.' },
      { name: 'Risole Pizza', price: '$4.00', desc: 'Crispy breaded croquette with cheese, tomato and pizza seasoning.' },
      { name: 'Coxinha', price: '$4.00', desc: 'Shredded-chicken dough shaped like a drumstick, deep-fried golden.' },
      { name: 'Empada', price: '$5.00', desc: 'Flaky buttery pastry filled with chicken, shrimp or beef, baked golden.' },
      { name: 'Bolinho de Bacalhau (Codfish)', price: '$1.25', desc: 'Salted codfish, potato and herbs, deep-fried crispy.' },
      { name: 'Pão de Queijo', price: '$0.75', desc: 'Soft, chewy gluten-free Brazilian cheese bread.' },
      { name: 'Kibe', price: '$5.00', desc: 'Middle-Eastern style meat croquette.' },
      { name: 'Espetinho de Frango', price: '$6.00', desc: 'Grilled chicken skewer.' },
      { name: '50 Mini Coxinhas', price: '$37.50', desc: 'Party tray of 50 mini chicken coxinhas.' },
      { name: '100 Mini Salgados de Festa', price: '$75.00', desc: 'Party tray of 100 assorted Brazilian mini savories.' },
    ],
  },
  {
    category: 'Padaria (Bakery)',
    items: [
      { name: 'Pão Francês / Brazilian Roll', price: '$0.69', desc: 'Classic Brazilian crusty roll.' },
      { name: 'Rosca Caseira', price: '$3.00', desc: 'Homemade twisted bread.' },
      { name: 'Pão Sovado / Brazilian Sweet Bread', price: '$9.99', desc: 'Soft, sweet Brazilian bread.' },
      { name: 'Biscoito de Polvilho Caseiro (10-pack)', price: '$8.99', desc: 'Homemade tapioca starch crackers.' },
      { name: 'Bolo Inteiro', price: '$11.00', desc: 'Whole cake.' },
      { name: 'Pão de Queijo Bag (10-pack)', price: '$6.99', desc: 'Bag of 10 cheese breads.' },
      { name: 'Broa Doce (10-pack)', price: '$6.99', desc: 'Sweet corn biscuits (10 pack).' },
      { name: 'Broa Sal (10-pack)', price: '$6.99', desc: 'Savory corn biscuits (10 pack).' },
      { name: 'Salgadinhos de Festa (20 units)', price: '$15.00', desc: 'Party savory snacks (20 pieces).' },
      { name: 'Sonho', price: '$4.00', desc: 'Brazilian cream-filled donut.' },
      { name: 'Bolo Festa (1 pc)', price: '$15.00', desc: 'Party cake slice.' },
      { name: 'Bolacha Caseira (1 pc)', price: '$3.00', desc: 'Homemade cookie.' },
    ],
  },
  {
    category: 'Mercado Brasileiro (Market)',
    note: 'A selection of authentic Brazilian groceries available in-store.',
    items: [
      { name: 'Pilão Café Extra Forte 500g', price: '$11.49', desc: 'Strong Brazilian coffee.' },
      { name: 'Pilão Café Tradicional 500g', price: '$11.49', desc: 'Traditional Brazilian coffee.' },
      { name: '3 Corações Café Extraforte 500g', price: '$10.49', desc: 'Extra strong coffee.' },
      { name: 'Toddy 370g', price: '$5.19', desc: 'Chocolate drink mix.' },
      { name: 'Leite Ninho 360g — Nestlé', price: '$9.36', desc: 'Powdered milk.' },
      { name: 'Nestlé Leite Condensado Moça 397g', price: '$4.15', desc: 'Sweetened condensed milk.' },
      { name: 'Guaraná Antarctica 2L', price: '$3.99', desc: 'Classic Brazilian soda.' },
      { name: 'Guaraná Antarctica 11.83 fl oz', price: '$1.50', desc: 'Brazilian soda (can).' },
      { name: 'Requeijão Catupiry 200g', price: '$5.49', desc: 'Brazilian cream cheese spread.' },
      { name: 'Pão de Queijo Mix 500g', price: '$4.99', desc: 'Cheese bread mix.' },
      { name: 'Farofa Tradicional 300g', price: '$4.79', desc: 'Toasted cassava flour.' },
      { name: 'Feijão Preto 1kg', price: '$4.44', desc: 'Black beans.' },
      { name: 'Feijão Carioca 1kg', price: '$4.99', desc: 'Pinto beans.' },
      { name: 'Arroz Tio João 10lb', price: '$13.99', desc: 'Long grain white rice.' },
      { name: 'Farinha de Mandioca 1kg', price: '$3.49', desc: 'Cassava flour.' },
      { name: 'Linguiça Toscana 14oz', price: '$9.99', desc: 'Tuscan-style sausage.' },
      { name: 'Queijo Minas Padrão', price: '$16.48', desc: 'Traditional Minas cheese.' },
      { name: 'Manteiga Itambé 200g', price: '$4.20', desc: 'Brazilian butter.' },
    ],
  },
]

export type Review = {
  author: string
  rating: number
  date: string
  text: string
}

export const reviews: Review[] = [
  { author: 'Dom Bee', rating: 5, date: '3 months ago', text: "Seems like an up and coming business but I appreciate the fact that I can get a real and fresh meal here. I came for lunch around 1230, 1ish. Got a fresh salad, rice, beans, and ordered a rump steak from the back. Everything was delicious, that were playing Luan live so I sat there to eat. Nice staff. They have snacks like a deli, huge selection of drinks, but also coffee, fresh food, chocolates etc. if you in the area check it out and support our local Brazilians" },
  { author: 'Frank Motion', rating: 5, date: '4 months ago', text: "Very clean, friendly, and great hours/service! I come from out of state and whenever I'm in the area I make sure to stop by for Brazilian food and groceries. The staff is super helpful and gave me recommendations for their lunch plate as well :) Love this place" },
  { author: 'tim aanensen', rating: 5, date: '3 years ago', text: "I can't say enough about this market! I Love the Brazilian food here and Love the people who serve it! Such a well cared for business, so much attention to detail, and so much quality! They are very kind and it goes into their food. The owner even tried to make the environment autistic friendly by blocking the sound of the road when building and having peaceful lighting. I also love that there is plenty of parking compared to Long Branch spots. If you like baked goods try some here. Little food pockets like empanadas called pastels or coxinhas are really worth discovering if you haven't had them before. This spot serves a diverse clientele so everyone is welcome! Check it out and enjoy!" },
  { author: 'Mae-Lin Tang (Min)', rating: 5, date: '2 years ago', text: "The Brazilian food here is really delicious. Everything is freshly made here, the bread, pizza, desserts, hot foods, empanadas and more. They have a mini mart section carrying Brazilian foods and essentials. The food platter is also great, massive portions for their small platter, which definitely is like two meals. The staff is so friendly as well. Highly recommend!" },
  { author: 'Mae T', rating: 5, date: 'Edited 3 years ago', text: "Since I passed this area quite a lot, I decided to stop by for lunch. Entering, the store is very clean and neat! The ladies there were nice and greeted me as I went in and gave nice suggestions on food. I ordered the Chicken Marsala with yellow rice. Very tasty! The amount given was hefty — I could split it into at least 2 portions! For the price I think it was worth it. I'll definitely be coming back again to try other foods there!" },
  { author: 'Aurelios Vac', rating: 5, date: '6 months ago', text: "Great atmosphere with friendly staff. The food was delicious, especially their X-Tudo burger. You have earned a faithful customer." },
  { author: 'K. R', rating: 5, date: '8 months ago', text: "So wonderful highly recommend! I was just passing through and googled places to grab a small bite. The food was delicious, the establishment was clean and the people were very kind. We tried the chicken croquette, beef empanada, fried hotdog, cheesesteak, cheeseburger and passion fruit juice. If we lived closer we'd return to try the Brazilian hot buffet or rib & chicken combo." },
  { author: 'S. Denise Gratzel', rating: 4, date: 'a year ago', text: "What a nice find! Good food, great friendly service, and so much more. Must stop by again! Oh did I say lots of breads and sweets made in house." },
  { author: 'Val Val', rating: 5, date: '5 months ago', text: "The rotisserie chicken is my favorite — $10 for a great meal! The combos are very good! Also a great deal! Highly recommend!" },
  { author: 'Vinayagam', rating: 5, date: '5 months ago', text: "I visited Minas to get some authentic Brazilian groceries. They have very delicious Coxinha de frango. Amazing staff and hospitality." },
  { author: 'Kenny', rating: 5, date: '4 months ago', text: "You need to eat here. Not only is it a phenomenal bakery but the staff is very kind." },
  { author: 'D Williams', rating: 5, date: 'a year ago', text: "Decided to stop in today for the first time and went with the lunch buffet omg it was delicious! Beef and yucca with rice and a scoop of potato salad and macaroni salad was outstanding! Very fresh, also grabbed a cheese bread as well — so delicious! Will return, thanks again" },
  { author: "Kim's Little Gems", rating: 5, date: 'a year ago', text: "The food here is always fresh and delicious and the prices are great too! Their hot bar menu changes enough that you don't get bored and there are always many items to choose from. The bakery is lovely too. The staff are always very friendly. We used to go just to get very american breakfast sandwiches (the best on their fresh Portuguese Rolls!) and now I go for their hot lunch specials too." },
  { author: 'Pamela Talvacchia', rating: 5, date: '2 years ago', text: "This is a hidden treasure!!! All of the food is AMAZING!! The place is super clean too!! The service is OUTSTANDING!!! Try EVERYTHING!! You won't be sorry." },
  { author: 'Rebeca Gurgel', rating: 5, date: '4 months ago', text: "Our go-to place! Food is amazing and fresh." },
  { author: 'The Massage and Body Workshop', rating: 5, date: '3 years ago', text: "Delicious!!!! I got the beef with white rice, yucca and mixed veggies. Amazing flavor, great service. I'll return for sure!" },
  { author: 'E Luckey', rating: 5, date: '5 months ago', text: "Very clean. Service quick. Food is very tasty. Thank you Tammy." },
  { author: 'Nic Koch', rating: 5, date: '3 years ago', text: "Let me start by saying the staff is absolutely amazing. I stopped in and had very little idea of what to try and the owner helped me every step of the way. Everything I had was absolutely amazing, flavorful and delicious! I had yellow rice, 2 types of beans, beef with yucca and pumpkin all in one plate. For $13 I got well over a lb. of premium quality food. I will 100% be making this my regular spot!" },
  { author: 'Juliane Silva', rating: 5, date: '3 years ago', text: "Excellent food! I ordered the combo, it comes with a very generous portion of rice, beans and French fries. It also came with sirloin, skirt steak and sausage. The meat was so tender and delicious! Enough to feed a family of 4. Price was fair. Will be going back! Oh and all the natural fresh juices they have on hand — love it!" },
  { author: 'David', rating: 5, date: '5 months ago', text: "First time visit — food and service were awesome." },
  { author: 'Raymond Saada', rating: 5, date: '9 months ago', text: "Glad to have discovered this spot after recently traveling to Brazil, really great takeout, baked goods and groceries, and run by really friendly people." },
  { author: 'MARK NORTON', rating: 5, date: '2 years ago', text: "I found this place about a month ago and have been there about 8 times already. Very friendly and helpful staff. Delicious ready to eat food. Everything I've had here from the empanadas, breads, hot food station, soups and desserts has been delicious!! Support your local business and go here to eat." },
  { author: 'erin kelly', rating: 5, date: '2 years ago', text: "I stopped in not knowing anything about the shop. I was promptly greeted. Home made breads, empanadas, meals, sandwiches, pizza, desserts — their hot foods are made daily and always different. She recommended rice and beans and the beef on the daily menu. IT WAS FABULOUS! The portions are generous. You can tell the food is made with care. This will definitely become a go-to spot." },
  { author: 'Bruno Mamede', rating: 5, date: '4 years ago', text: "I recently moved to the area and went to this place after a friend told me to. It was one of the best choices ever, because now I can't go over a day without showing up. The staff is always lovely and the food is amazing. Highly recommend for anyone looking for authentic Brazilian food!" },
]
