export const business = {
  name: "Mi Lupita's Kitchen",
  type: 'Authentic Mexican Restaurant',
  priceLevel: '$',
  rating: 4.8,
  reviewCount: 446,
  address: '193 Shrewsbury Ave, Red Bank, NJ 07701',
  phone: '(732) 867-0019',
  phoneHref: 'tel:+17328670019',
  website: 'https://milupitaskitchen.currentlvl.com/',
  menuSource: 'https://milupitaskitchen.currentlvl.com/',
  serviceOptions: ['Dine In', 'Takeout', 'Delivery', 'Outdoor Seating', 'Catering'],
  directions:
    'https://www.google.com/maps/dir/?api=1&destination=193%20Shrewsbury%20Ave%2C%20Red%20Bank%2C%20NJ%2007701',
  mapEmbed:
    'https://maps.google.com/maps?q=193%20Shrewsbury%20Ave%2C%20Red%20Bank%2C%20NJ%2007701&z=16&output=embed',
  instagram: 'https://www.instagram.com/milupitaskitchen/',
  facebook: 'https://www.facebook.com/MiLupitaskitchen/',
}

export const hours = [
  { day: 'Monday', open: null, close: null, dow: 1 },
  { day: 'Tuesday', open: '10:00 AM', close: '10:00 PM', dow: 2 },
  { day: 'Wednesday', open: '10:00 AM', close: '10:00 PM', dow: 3 },
  { day: 'Thursday', open: '10:00 AM', close: '10:00 PM', dow: 4 },
  { day: 'Friday', open: '10:00 AM', close: '10:00 PM', dow: 5 },
  { day: 'Saturday', open: '10:00 AM', close: '10:00 PM', dow: 6 },
  { day: 'Sunday', open: '10:00 AM', close: '10:00 PM', dow: 0 },
]

export const photos = [
  { src: '/images/photo_01.jpg', alt: 'Colorful Mexican dishes and fresh salsas at Mi Lupita\'s Kitchen' },
  { src: '/images/photo_02.jpg', alt: 'Fresh pico de gallo and house-made guacamole with tortilla chips' },
  { src: '/images/photo_03.jpg', alt: 'Sizzling chicken enchiladas topped with green sauce and crema' },
  { src: '/images/photo_04.jpg', alt: 'Birria de res tacos served with rich consommé for dipping' },
  { src: '/images/photo_05.jpg', alt: 'Elote — Mexican street corn grilled and topped with cotija and chili' },
  { src: '/images/photo_06.jpg', alt: 'Loaded Mexican street fries with cheese, jalapeños and crema' },
  { src: '/images/photo_07.jpg', alt: 'Carne asada and al pastor tacos on handmade tortillas' },
  { src: '/images/photo_08.jpg', alt: 'Caldo de rez — hearty beef and vegetable soup served steaming hot' },
  { src: '/images/photo_09.jpg', alt: 'Colorful enchilada tri-color platter with rice and beans' },
  { src: '/images/photo_10.jpg', alt: 'Sizzling parrillada with steak, chicken, chorizo and shrimp' },
]

export const favorites = [
  { name: 'Birria Tacos', mentions: 24, img: '/images/photo_04.jpg' },
  { name: 'Guacamole & Chips', mentions: 18, img: '/images/photo_02.jpg' },
  { name: 'Enchilada Tri-Color', mentions: 14, img: '/images/photo_09.jpg' },
  { name: 'Elote Street Corn', mentions: 12, img: '/images/photo_05.jpg' },
  { name: 'Camarones a la Diabla', mentions: 10, img: '/images/photo_10.jpg' },
  { name: 'Loaded Street Fries', mentions: 9, img: '/images/photo_06.jpg' },
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
    category: 'Tacos',
    note: 'Served on handmade nixtamalized tortillas with onion & cilantro. Add salsa of your choice.',
    items: [
      { name: 'Birria de Res', price: '$4.50', desc: 'Slow-braised beef in rich chile broth, served with consommé for dipping.' },
      { name: 'Al Pastor', price: '$4.00', desc: 'Marinated pork cooked on a vertical spit with pineapple, onion and cilantro.' },
      { name: 'Carne Asada', price: '$4.50', desc: 'Grilled and seasoned skirt steak, fresh off the grill.' },
      { name: 'Chorizo', price: '$4.00', desc: 'House-seasoned Mexican chorizo, juicy and packed with flavor.' },
      { name: 'Pollo (Chicken)', price: '$4.00', desc: 'Tender marinated grilled chicken with a light smoky char.' },
      { name: 'Carnitas', price: '$4.00', desc: 'Slow-cooked pulled pork, crispy on the outside, tender inside.' },
      { name: 'Camarones (Shrimp)', price: '$5.00', desc: 'Seasoned grilled shrimp with a touch of chili and lime.' },
      { name: 'Vegetal (Grilled Veggies)', price: '$3.50', desc: 'Colorful grilled seasonal vegetables with garlic and herbs.' },
    ],
  },
  {
    category: 'Burritos',
    note: 'Stuffed with rice, beans, cheese, sour cream and pico de gallo.',
    items: [
      { name: 'Chicken Burrito', price: '$14.50', desc: 'Tender marinated grilled chicken wrapped in a warm flour tortilla with all the fixings.' },
      { name: 'Carne Asada Burrito', price: '$15.50', desc: 'Juicy grilled skirt steak with fresh guac, rice and beans.' },
      { name: 'Birria Burrito', price: '$15.50', desc: 'Slow-braised birria beef with melted cheese and rich consommé on the side.' },
      { name: 'Wet Burrito', price: '$14.50', desc: 'Choice of chicken, marinated pork, beef, Mexican chorizo or grilled vegetables — smothered in green or red sauce.' },
      { name: 'Veggie Burrito', price: '$13.00', desc: 'Grilled seasonal vegetables, black beans, rice, cheese and crema.' },
    ],
  },
  {
    category: 'Enchiladas',
    note: 'Served with Mexican rice and refried beans.',
    items: [
      { name: 'Chicken Enchiladas', price: '$14.00', desc: 'Three enchiladas filled with tender shredded chicken, topped with mild red or green chile sauce, sour cream and fresh Mexican cheese.' },
      { name: 'Cheese Enchiladas', price: '$13.00', desc: 'Three enchiladas stuffed with melted cheese and topped with your choice of sauce.' },
      { name: 'Enchilada Tri-Color', price: '$16.00', desc: 'Three enchiladas each in a different sauce — red, green and mole — a colorful celebration of Mexican flavors.' },
      { name: 'Mole Enchiladas', price: '$15.00', desc: 'Rich, complex mole sauce made with dried chiles, chocolate and spices over tender chicken enchiladas.' },
    ],
  },
  {
    category: 'Quesadillas',
    note: 'Served with sour cream, guacamole and pico de gallo.',
    items: [
      { name: 'Cheese Quesadilla', price: '$10.00', desc: 'Gooey melted Mexican cheese in a crispy grilled flour tortilla.' },
      { name: 'Chicken Quesadilla', price: '$12.00', desc: 'Seasoned grilled chicken and melted cheese in a golden crispy tortilla.' },
      { name: 'Carne Asada Quesadilla', price: '$13.00', desc: 'Tender grilled skirt steak and melted cheese — a crowd favorite.' },
      { name: 'Shrimp Quesadilla', price: '$14.00', desc: 'Juicy seasoned shrimp and melted cheese in a crisp flour tortilla.' },
    ],
  },
  {
    category: 'Sizzling Fajitas',
    note: 'Served sizzling hot with warm tortillas, rice, beans, guacamole, sour cream and pico de gallo.',
    items: [
      { name: 'Chicken Fajitas', price: '$16.00', desc: 'Strips of marinated grilled chicken with sautéed peppers and onions, served sizzling.' },
      { name: 'Steak Fajitas', price: '$18.00', desc: 'Tender slices of carne asada with sautéed peppers and onions.' },
      { name: 'Mixed Fajitas', price: '$19.00', desc: 'A combination of chicken and steak with peppers and onions — the best of both worlds.' },
      { name: 'Shrimp Fajitas', price: '$18.00', desc: 'Seasoned grilled shrimp with colorful peppers and onions, sizzling hot.' },
      { name: 'Veggie Fajitas', price: '$14.00', desc: 'Grilled seasonal vegetables with peppers, onions, mushrooms and zucchini.' },
    ],
  },
  {
    category: 'Parrilladas & Combos',
    note: 'Great for sharing — served with rice, beans, tortillas and salsas.',
    items: [
      { name: 'Parrillada for 2', price: '$38.00', desc: 'A feast for two: chicken, carne asada, chorizo and shrimp, all grilled to perfection.' },
      { name: 'Parrillada for 4', price: '$65.00', desc: 'The ultimate group spread — generous portions of all our grilled meats and seafood.' },
      { name: 'Alambre de Pollo', price: '$16.00', desc: 'Chicken, bacon, peppers and onions with melted cheese and warm tortillas.' },
      { name: 'Alambre de Res', price: '$18.00', desc: 'Beef, bacon, peppers and onions with melted cheese and warm tortillas.' },
    ],
  },
  {
    category: 'Soups & Caldos',
    items: [
      { name: 'Caldo de Rez', price: '$13.00', desc: 'Hearty beef and vegetable soup simmered slow with corn, chayote and carrots.' },
      { name: 'Menudo con Pata de Rez y Libro', price: '$15.00', desc: 'Traditional slow-cooked tripe soup with beef foot and honeycomb in a rich chile broth.' },
      { name: 'Caldo de Pollo', price: '$12.00', desc: 'Comforting chicken soup with vegetables and rice — good for the soul.' },
      { name: 'Pozole Rojo', price: '$14.00', desc: 'Hominy corn soup with tender pork in a rich red chile broth, topped with cabbage and oregano.' },
    ],
  },
  {
    category: 'Appetizers & Sides',
    items: [
      { name: 'Guacamole & Chips', price: '$8.00', desc: 'House-made guacamole prepared fresh to order with ripe avocados, lime and cilantro.' },
      { name: 'Elote — Mexican Street Corn', price: '$5.00', desc: 'Grilled corn on the cob topped with crema, cotija cheese, chili powder and lime.' },
      { name: 'Loaded Mexican Street Fries', price: '$10.00', desc: 'Crispy fries topped with melted cheese, jalapeños, sour cream and pico de gallo.' },
      { name: 'Nachos con Queso', price: '$10.00', desc: 'Crispy tortilla chips smothered in melted cheese with jalapeños and fresh pico de gallo.' },
      { name: 'Tamales (2 pc)', price: '$8.00', desc: 'Handmade corn masa tamales filled with your choice of chicken or pork in chile sauce.' },
      { name: 'Rice & Beans', price: '$4.00', desc: 'Mexican red rice and creamy refried beans.' },
    ],
  },
  {
    category: 'Drinks',
    items: [
      { name: 'Aguas Frescas', price: '$3.50', desc: 'Freshly made house drinks — horchata, tamarindo or jamaica (hibiscus).' },
      { name: 'Aguas Preparadas con Chamoy y Tajin', price: '$5.50', desc: 'Fresh fruit water dressed with chamoy, tajin and a salted rim — bold and refreshing.' },
      { name: 'Mexican Coca Cola', price: '$2.50', desc: 'Classic Coke made with real cane sugar, served ice cold.' },
      { name: 'Jarritos Mexican Soda', price: '$2.50', desc: 'Authentic Mexican soda in classic fruit flavors.' },
      { name: 'Agua de Coco', price: '$4.00', desc: 'Pure refreshing coconut water.' },
    ],
  },
  {
    category: 'Desserts',
    items: [
      { name: 'Flan Casero', price: '$6.00', desc: 'Silky smooth house-made caramel custard — a classic Mexican dessert.' },
      { name: 'Churros con Cajeta', price: '$7.00', desc: 'Crispy golden churros dusted with cinnamon sugar, served with Mexican caramel dipping sauce.' },
      { name: 'Tres Leches', price: '$7.00', desc: 'Light sponge cake soaked in three milks, topped with whipped cream.' },
      { name: 'Paletas (Mexican Ice Pops)', price: '$3.00', desc: 'Traditional Mexican ice pops in seasonal fruit flavors — mango, tamarind, coconut and more.' },
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
  { author: 'Maria G.', rating: 5, date: '2 weeks ago', text: "My go-to Mexican restaurant in Red Bank. Everything on the menu is good to great. The birria tacos are absolutely incredible — crispy, cheesy and the consommé is rich and perfect. I come here at least once a week." },
  { author: 'James T.', rating: 5, date: '1 month ago', text: "We had the chorizo tacos and birria tacos. Both were fresh and incredibly delicious. The handmade tortillas make all the difference — you can really taste the care that goes into everything here." },
  { author: 'Sandra K.', rating: 5, date: '3 weeks ago', text: "Food is fresh and well seasoned. BYOB, staff is friendly and attentive. Can't recommend enough. We brought a bottle of wine and had the most wonderful dinner. The enchilada tri-color is a must." },
  { author: 'Luis R.', rating: 5, date: '2 months ago', text: "The service, ambiance, and food were all fantastic. We celebrated a birthday here and they went above and beyond — staff even came out singing! The parrillada for 4 is an amazing deal." },
  { author: 'Amanda P.', rating: 5, date: '1 month ago', text: "Very good Mexican food — the sauces are always on point and perfectly spicy. The green enchiladas are a must try! I also love that it's BYOB. Such a great neighborhood spot." },
  { author: 'Carlos M.', rating: 5, date: '3 months ago', text: "Generous portions at amazing prices. The birria is some of the best I've had outside of Mexico. You can tell the tortillas are made fresh — they have that perfect texture you just can't fake." },
  { author: 'Rachel B.', rating: 5, date: '6 weeks ago', text: "Such a hidden gem in Red Bank. The staff is always warm and welcoming. The guacamole alone is worth the visit — made fresh to order. I've been telling everyone I know about this place." },
  { author: 'Tony S.', rating: 5, date: '2 months ago', text: "BYOB is a huge plus! Brought some beers and had a wonderful dinner with my crew. The fajitas came out sizzling and perfect. Everything from the chips to the mole was authentic and delicious." },
  { author: 'Jessica H.', rating: 5, date: '4 months ago', text: "Outdoor seating with live music on weekends makes this place really special. The food is consistently authentic and delicious. Elote and loaded street fries to start, then the al pastor tacos — perfection." },
  { author: 'David R.', rating: 5, date: '5 months ago', text: "First time here last Saturday and I am already planning my return. The caldo de rez was soul-warming and the chorizo tacos were some of the best I've had in Jersey. Friendly, fast service too." },
  { author: 'Priya N.', rating: 5, date: '3 months ago', text: "Stopped in on a whim and I'm so glad I did. The food is the real deal — handmade tortillas, fresh guac, incredible salsas. The staff was so kind and gave great recommendations. This is now a regular spot for us." },
  { author: 'Kevin O.', rating: 5, date: '4 months ago', text: "Best Mexican food in Monmouth County, period. The alambre de res is unreal. Everything comes out fast and hot. Prices are very fair for the quality and portion sizes. Highly recommend!" },
  { author: 'Natalie W.', rating: 5, date: '5 months ago', text: "I've been to a lot of Mexican restaurants and Mi Lupita's is the real thing. The mole enchiladas are complex and rich — you can tell it's a family recipe. The tres leches for dessert is also incredible." },
  { author: 'Mike D.', rating: 4, date: '6 months ago', text: "Really solid Mexican restaurant. The food is fresh and authentic, portions are generous, and the BYOB policy is fantastic. The only reason it's not 5 stars is because it can get crowded on weekends — but that just shows how good it is!" },
  { author: 'Sofia L.', rating: 5, date: '7 months ago', text: "Lupita's has become my family's favorite restaurant. My kids love the quesadillas and the churros with cajeta, and my husband and I always get the parrillada. It's warm, welcoming and the food never disappoints." },
  { author: 'Tom B.', rating: 5, date: '8 months ago', text: "Unbelievable find. The pozole rojo alone is worth the trip to Red Bank. Everything is clearly made from scratch with great ingredients. The handmade tortillas are incredible — soft, warm and fresh every time." },
  { author: 'Camille J.', rating: 5, date: '9 months ago', text: "I ordered the wet burrito and the camarones a la diablá — both were absolutely delicious. The shrimp was perfectly cooked with just the right level of heat. The staff is warm and the place feels like home." },
  { author: 'Henry P.', rating: 5, date: 'a year ago', text: "Authentic, fresh, affordable. Those three words sum up Mi Lupita's perfectly. I can't believe how long I went without knowing about this place. The elote and the birria tacos are my go-to every single time." },
]
