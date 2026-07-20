export const business = {
  name: "Mi Lupita's Kitchen",
  type: 'Authentic Mexican Restaurant',
  priceLevel: '$',
  rating: 4.8,
  reviewCount: 446,
  address: '78 Bridge Ave, Red Bank, NJ 07701',
  phone: '(732) 867-0019',
  phoneHref: 'tel:+17328670019',
  website: 'https://milupitaskitchen.currentlvl.com/',
  menuSource: 'https://milupitaskitchen.currentlvl.com/',
  serviceOptions: ['Dine In', 'Takeout', 'Delivery', 'Outdoor Seating', 'Catering'],
  directions:
    'https://www.google.com/maps/dir/?api=1&destination=78%20Bridge%20Ave%2C%20Red%20Bank%2C%20NJ%2007701',
  mapEmbed:
    'https://maps.google.com/maps?q=78%20Bridge%20Ave%2C%20Red%20Bank%2C%20NJ%2007701&z=16&output=embed',
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
  { src: '/images/menu_carne_asada.jpg', alt: 'Carne asada — grilled skirt steak with fresh salsas and handmade tortillas' },
  { src: '/images/menu_tacos.jpg', alt: 'Tacos on nixtamalized handmade tortillas with onion and cilantro' },
  { src: '/images/menu_quesabirria.jpg', alt: 'Quesabirria — crispy cheese-dipped tacos with rich consommé' },
  { src: '/images/menu_parillada.jpg', alt: 'Parrillada — sizzling mixed grill platter for sharing' },
  { src: '/images/menu_enchiladas_mole.jpg', alt: 'Enchiladas mole — rich complex mole sauce over tender chicken enchiladas' },
  { src: '/images/menu_guacamole.jpg', alt: 'House-made guacamole prepared fresh to order with chips' },
  { src: '/images/menu_molcajete.jpg', alt: 'Molcajete — sizzling lava stone bowl with grilled meats and fresh salsas' },
  { src: '/images/menu_mulitas.jpg', alt: 'Mulitas — pressed corn tortilla sandwiches with melted cheese and meats' },
  { src: '/images/menu_nachos.jpg', alt: 'Nachos con queso — crispy chips smothered in melted cheese and toppings' },
  { src: '/images/menu_chips_salsa.jpg', alt: 'Chips and house-made salsa — the perfect way to start your meal' },
  { src: '/images/menu_choriqueso_dip.jpg', alt: 'Choriqueso dip — melted cheese with house chorizo' },
  { src: '/images/menu_tortillas_handmade.jpg', alt: 'Handmade nixtamalized tortillas pressed fresh every day' },
  { src: '/images/interior_01.jpg', alt: 'Mi Lupita\'s Kitchen dining room — warm and welcoming atmosphere' },
  { src: '/images/interior_03.jpg', alt: 'Mi Lupita\'s Kitchen — cozy interior with colorful Mexican decor' },
  { src: '/images/interior_05.jpg', alt: 'Mi Lupita\'s Kitchen — beautifully decorated dining space' },
  { src: '/images/interior_07.jpg', alt: 'Mi Lupita\'s Kitchen — the heart of our restaurant in Red Bank, NJ' },
  { src: '/images/menu_margarita.jpg', alt: 'Fresh margarita — the perfect BYOB complement' },
  { src: '/images/menu_alambre.jpg', alt: 'Alambre — sizzling skillet of grilled meat, bacon, peppers and melted cheese' },
]

export const favorites = [
  { name: 'Quesabirria Tacos', mentions: 24, img: '/images/menu_quesabirria.jpg' },
  { name: 'Guacamole & Chips', mentions: 18, img: '/images/menu_guacamole.jpg' },
  { name: 'Carne Asada', mentions: 14, img: '/images/menu_carne_asada.jpg' },
  { name: 'Mexican Street Corn', mentions: 12, img: '/images/menu_street_corn.jpg' },
  { name: 'Loaded Street Fries', mentions: 10, img: '/images/menu_street_fries.jpg' },
  { name: 'Molcajete', mentions: 9, img: '/images/menu_molcajete.jpg' },
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

export const menuAdvisory =
  'Consumer Advisory: Consumption of undercooked meat, poultry, eggs, or seafood may increase the risk of food-borne illnesses. Alert your server if you have special dietary requirements. Taxes not included in price.'

export const menu: MenuCategory[] = [
  {
    category: 'Appetizers',
    note: 'First basket of chips and salsa is complimentary.',
    items: [
      { name: 'Chips', price: '$3.00', desc: 'Refried bean salsa, choice of green, red or arbolito salsa.' },
      { name: 'Guacamole', price: '$9.00', desc: 'Fresh home made guacamole mixed with jalapeños, onions and cilantro, topped with fresh Mexican cheese and served with chips.' },
      { name: 'Choriqueso con Tortillas Tostadas', price: '$12.00', desc: 'Mexican chorizo with melted Jack and Oaxacan cheese over 4 small toasted nixtamal home made corn tortillas.' },
      { name: 'Loaded Mexican Street Fries', price: '$14.00', desc: 'Bed of Mexican-spiced fries piled with beef or choice of meat, guac, pico de gallo, sour cream and Mexican cheese.' },
      { name: 'Elote (Mexican Street Corn)', price: '$5.00', desc: 'Corn on the cob smothered with mayo and sprinkled with Mexican cheese, spicy powder and fresh chopped cilantro.' },
      { name: 'Loaded Nachos', price: '$13.50', desc: 'Topped with a layer of beef (or choice of meat), refried beans and mix cheese, finished with sour cream sauce, pico de gallo, pickled jalapeños and guacamole.' },
      { name: 'Tortilla Soup', price: '$9.00', desc: 'Fried corn tortilla pieces submerged in a broth of tomato, served with pieces of pasilla chiles, chicken, avocado and fresh Mexican cheese.' },
      { name: 'Choriqueso Dip', price: '$13.00', desc: 'Mexican chorizo with melted Oaxacan and Jack cheese, topped with cilantro, served on a hot volcanic stone molcajete with chips and flour tortillas.' },
      { name: 'Flautas de Pollo', price: '$12.00', desc: 'Deep fried rolled-up tortilla filled with chicken or cheese, topped with sour cream, Mexican cheese, avocado and lettuce.' },
      { name: 'Sin Miedo Al Exito — Sampler Platter', price: '$75.00', desc: "Because no one can stop you! 8 tacos, 2 burritos, 2 quesadillas, 5 chicken flautas, and loaded Mexican fries. YOU CAN DO IT!!" },
    ],
  },
  {
    category: 'Antojitos',
    note: 'In Mexico antojitos are most often sold in open-air marketplaces or on the streets by vendors.',
    items: [
      { name: 'Huarache Rojo o Verde (2)', price: '$12.00', desc: 'Masa dough tortilla filled with refried beans, with choice of red or green sauce, topped with Mexican cheese. Pollo +$3.00, Huevo (Eggs) +$3.00, Carne Asada +$4.00.' },
      { name: 'Picaditas Rojas o Verdes (3)', price: '$11.00', desc: 'Corn cakes topped with green or red salsa, fresh onion, Mexican cheese. Pollo +$3.00, Huevo (Eggs) +$3.00, Carne Asada +$4.00.' },
      { name: 'Sopes (3) Rojos o Verdes', price: '$12.00', desc: 'Corn cakes topped with refried beans, lettuce, Mexican cheese and sour cream. Pollo +$3.00, Huevo (Eggs) +$3.00, Carne Asada +$4.00.' },
    ],
  },
  {
    category: 'Quesadillas de Maiz',
    note: '2 quesadillas with nixtamal home made tortillas filled with Oaxacan cheese, served with rice and beans.',
    items: [
      { name: 'Carne Asada, Chorizo o Campechanas', price: '$15.00', desc: 'Choice of grilled steak or Mexican chorizo or mixed.' },
      { name: 'Pollo o Al Pastor', price: '$14.00', desc: 'Choice of chicken or marinated pork.' },
      { name: 'Camaron', price: '$16.00', desc: 'Shrimp.' },
      { name: 'Vegetables', price: '$14.00', desc: 'Filled with grilled mushrooms, onions, squash and bell peppers, topped with onions and cilantro.' },
      { name: 'Tinga de Pollo', price: '$15.00', desc: 'Shredded chicken in a sauce made from tomatoes, chipotle chilis in adobo, and sliced onions.' },
      { name: 'Tinga de Res', price: '$16.00', desc: 'Shredded beef in a sauce made from tomatoes, chipotle chilis in adobo, and sliced onions.' },
      { name: 'Camaron con Carne Asada y Cebolla', price: '$16.00', desc: 'Mixed shrimp with beef and sautéed onions.' },
      { name: 'Champiñones', price: '$14.00', desc: 'Grilled mushrooms and onions.' },
      { name: 'Huitlacoche', price: '$15.00', desc: "Mexican truffle or corn smut, huitlacoche is considered a delicacy with its uniquely sweet, earthy, funky, antique corn flavor that was a staple in the Aztecs' diet. Sautéed with onions, jalapeños and corn." },
    ],
  },
  {
    category: 'Birria',
    note: "Addictive sweet, sour, slightly spicy, and utterly savory Mexican beef stew that's slow cooked until the beef is tender and fall-apart juicy and delicious. Tacos are topped with cilantro and onions. Extra broth +$3.00. Flour Tortilla +$3.00.",
    items: [
      { name: 'Tacos de Birria', price: '$14.00', desc: '3 birria tacos served with birria broth.' },
      { name: 'Quesabirria', price: '$15.50', desc: '3 birria tacos with jack cheese served with birria broth.' },
      { name: 'Mulitas', price: '$16.00', desc: '3 double decker corn tortillas filled with birria and jack cheese, topped with Mexican cheese. Served with birria broth.' },
    ],
  },
  {
    category: 'Tacos',
    note: 'Four tacos with corn tortillas topped with onions and cilantro, served with limes, radish, cucumbers and scallions on the side. Home made nixtamal tortillas +$3.00. Add melted cheese +$2.00, topped with guac +$3.00, pico de gallo +$1.50.',
    items: [
      { name: 'Carne Asada o Chorizo', price: '$14.00', desc: 'Choice of beef or Mexican chorizo.' },
      { name: 'Pollo o Al Pastor', price: '$13.00', desc: 'Choice of chicken or marinated pork.' },
      { name: 'Camaron', price: '$15.00', desc: 'Grilled shrimp topped with lettuce, pineapple and mango pico de gallo.' },
      { name: 'Camaron con Carne Asada', price: '$16.00', desc: 'Grilled shrimp and grilled steak.' },
      { name: 'Champechanos', price: '$15.00', desc: 'Mix of beef and Mexican chorizo.' },
      { name: 'Vegetables Tacos', price: '$13.00', desc: 'Mix of grilled mushrooms, onions, squash and bell peppers.' },
      { name: 'Tacos Arabes', price: '$15.00', desc: 'Beef tacos mixed with cooked onions, chipotle sauce and jack cheese, served rolled in flour tortillas.' },
    ],
  },
  {
    category: 'Quesadillas',
    note: 'Flour tortilla filled with mix cheese, served with sour cream, rice and beans. Pico de Gallo +$1.50.',
    items: [
      { name: 'Carne Asada, Chorizo o Campechano', price: '$15.00', desc: 'Choice of grilled steak or Mexican chorizo or mixed.' },
      { name: 'Pollo o Al Pastor', price: '$14.00', desc: 'Choice of chicken or marinated pork.' },
      { name: 'Camaron', price: '$16.00', desc: 'Shrimp.' },
      { name: 'Vegetables', price: '$14.00', desc: 'Filled with grilled mushrooms, onions, squash and bell peppers, topped with onions and cilantro.' },
    ],
  },
  {
    category: 'Burritos',
    note: 'Flour tortilla filled with rice and beans, onions, cilantro, mix cheese, guacamole, served with salad or rice and beans. Wet burrito green or red sauce +$1.00. Topped with melted jack cheese +$2.00. Topped with sour cream +$1.00.',
    items: [
      { name: 'Carne Asada, Chorizo o Campechano', price: '$15.50', desc: 'Filled with choice of beef or Mexican chorizo or mixed.' },
      { name: 'Pollo o Al Pastor', price: '$14.50', desc: 'Choice of chicken or marinated pork.' },
      { name: 'Vegetables', price: '$14.50', desc: 'Filled with grilled mushrooms, onions, squash and bell peppers, topped with onions and cilantro.' },
      { name: 'Birria', price: '$16.00' },
      { name: 'Camarones', price: '$16.50', desc: 'Shrimp.' },
    ],
  },
  {
    category: 'Enchiladas',
    note: 'Topped with sour cream, fresh Mexican cheese, onions, lettuce and avocado, served with rice. Extra sour cream +$1.00. Topped with melted jack cheese +$2.00. Add rice and beans +$3.00.',
    items: [
      { name: 'Enchilada Roja o Verde', price: '$14.00', desc: 'Chicken or cheese enchiladas topped with mild red or green chile sauce.' },
      { name: 'Enchilada Tri-Color', price: '$16.00', desc: 'Chicken or cheese enchiladas topped with mild green, red chile sauce and refried bean sauce.' },
      { name: 'Enchilada de Mole', price: '$14.00', desc: 'Chicken or cheese enchiladas topped with mole sauce.' },
    ],
  },
  {
    category: 'Platos',
    note: 'All plates served with nixtamal home made tortillas, rice and beans.',
    items: [
      { name: 'Carne Asada o Pechuga Asada', price: '$16.00', desc: 'Choice of grilled steak or grilled chicken breast served with cactus, scallions, corn, fried jalapeño and avocado.' },
      { name: 'Bisteck o Pechuga a la Mexicana', price: '$16.00', desc: 'Choice of thin-sliced beef or chicken breast braised in a fresh and zesty tomato sauce with onions, jalapeños and cilantro.' },
      { name: 'Camarones a la Mexicana', price: '$17.00', desc: 'Shrimp braised in a fresh and zesty tomato sauce with onions, jalapeños and cilantro.' },
      { name: 'Camarones a la Diabla', price: '$17.00', desc: 'Shrimp in a very spicy sauce with sautéed onions.' },
      { name: 'Camaron en Salsa Chipotle', price: '$17.00', desc: 'Shrimp in a creamy chipotle sauce with sautéed onions.' },
      { name: 'Pechuga en Salsa Chipotle', price: '$16.00', desc: 'Chicken breast in a creamy spicy chipotle sauce with sautéed onions.' },
      { name: 'Parrillada', price: '$27.50', desc: 'Grilled steak, grilled chicken breast, grilled shrimp and grilled Colombian chorizo served with french fries, fried onions, cactus, scallions, grilled corn, avocado, radish and fried jalapeño.' },
      { name: 'Molcajete', price: '$35.00', desc: 'Grilled steak, chicken breast, shrimp, chorizo, grilled cheese and pork in delicious mild sauce, topped with fried onions, cactus, scallions and jalapeños. Served on a hot volcanic stone molcajete.' },
    ],
  },
  {
    category: 'Alambre',
    note: 'Served on a hot skillet topped with melted Oaxacan cheese, chopped bacon, bell peppers, onions, cheese and avocado. Served with flour tortillas, rice and beans.',
    items: [
      { name: 'Al Pastor', price: '$16.00', desc: 'Marinated pork with cooked onions and pineapple.' },
      { name: 'Pollo o Asada', price: '$18.00', desc: 'Chicken breast or beef.' },
      { name: 'Camaron', price: '$20.00', desc: 'Shrimp.' },
      { name: 'Camaron con Carne Asada', price: '$20.00', desc: 'Shrimp with beef.' },
    ],
  },
  {
    category: 'Tostadas',
    note: '3 crispy fried corn tortillas topped with refried beans, Mexican cheese, avocado, tomato and sliced lettuce.',
    items: [
      { name: 'Carne Asada, Chorizo o Campechanas', price: '$14.00', desc: 'Grilled steak or Mexican chorizo or mixed.' },
      { name: 'Pollo o Al Pastor', price: '$13.00', desc: 'Choice of chicken or marinated pork.' },
      { name: 'Camaron', price: '$15.00', desc: 'Shrimp.' },
      { name: 'Tinga de Pollo', price: '$14.00', desc: 'Shredded chicken in a sauce made from tomatoes, chipotle chilis in adobo, and sliced onions.' },
      { name: 'Tingas de Res', price: '$15.00', desc: 'Shredded beef in a sauce made from tomatoes, chipotle chilis in adobo, and sliced onions.' },
    ],
  },
  {
    category: 'Tortas',
    note: 'Imagine that a sandwich and a taco got married and had a kid. That kid would be named Torta. Fluffy bun spread with butter and mayo topped with refried beans, Oaxacan cheese, lettuce, avocado, onions and tomatoes, served with french fries.',
    items: [
      { name: 'Carne Asada, Chorizo o Campechanas', price: '$15.00', desc: 'Choice of grilled steak or chorizo or mixed.' },
      { name: 'Pollo o Al Pastor', price: '$14.00', desc: 'Choice of chicken or marinated pork.' },
      { name: 'Cubana', price: '$16.00', desc: 'A big, meaty beast of a sandwich — chicken or beef milanese, ham, chorizo, eggs.' },
      { name: 'Milanesa de Res o Milanesa de Pollo', price: '$15.00', desc: 'Beef milanese or chicken milanese.' },
    ],
  },
  {
    category: 'Chilaquiles',
    note: 'Fried corn tortillas sautéed with green or red salsa, topped with Mexican cheese, sour cream, avocado, lettuce and onions, served with rice.',
    items: [
      { name: 'Carne Asada, Pollo o Chorizo', price: '$15.00', desc: 'Grilled steak, grilled chicken or Mexican chorizo.' },
      { name: 'Huevo Revueltos o Estrellados', price: '$14.00', desc: 'Scramble or fried eggs.' },
      { name: 'Divorciados con Carne y Huevos', price: '$18.00', desc: 'Two different chilaquiles that decided to call it quits on their union and go their own way — one spicy in all her red glory, and the other mellow in his bath of green chile. Served with grilled steak, 2 fried eggs and rice.' },
    ],
  },
  {
    category: 'Weekends Only',
    note: 'Served with nixtamal corn tortillas. Home made tamales served Saturdays and Sundays.',
    items: [
      { name: 'Menudo con Pata Rez y Libro', price: '$16.00', desc: "Made with cow's stomach (tripe) and cow feet in broth with a red chili pepper base." },
      { name: 'Caldo de Rez', price: '$15.00', desc: 'Mexican beef soup.' },
      { name: 'Caldo de Camarones', price: '$17.00', desc: 'Shrimp soup.' },
      { name: 'Tamales', price: '$3.00', desc: 'Chicken tamales with green or red sauce, and jalapeño with cheese tamales.' },
    ],
  },
  {
    category: 'Sides',
    items: [
      { name: 'Frijol o Arroz', price: '$3.50 / $7.00', desc: 'Rice or beans. Small / Large.' },
      { name: 'Papas Fritas', price: '$4.00 / $8.00', desc: 'French fries. Small / Large.' },
      { name: 'Tortilla de Nixtamal (1)', price: '$1.00', desc: 'Nixtamal corn tortilla.' },
      { name: 'Crema', price: '$1.50', desc: 'Sour cream.' },
      { name: 'Guacamole Side', price: '$3.00' },
      { name: 'Pico de Gallo', price: '$1.50 / $5.00', desc: 'Small / Large.' },
      { name: 'Jalapeño', price: '$1.00' },
    ],
  },
  {
    category: 'Kids Menu',
    note: 'Served with french fries.',
    items: [
      { name: 'Chicken Fingers', price: '$8.00' },
      { name: 'Quesadillas', price: '$8.00', desc: 'Add meat +$2.00.' },
      { name: 'Grilled Cheese Sandwich', price: '$8.00' },
      { name: 'Kids Burrito', price: '$10.00', desc: 'Small burrito, filled with rice and beans, guacamole and mix cheese. Choose chicken, steak or pork.' },
    ],
  },
  {
    category: 'Bebidas',
    items: [
      { name: 'Coca Cola de Vidro', price: '$3.75', desc: 'Mexican Coke.' },
      { name: 'Jarritos', price: '$3.25', desc: 'Pineapple, tamarind, lime, mango mandarin and more.' },
      { name: 'Coca Cola, Sprite, Fanta de Lata', price: '$2.00', desc: 'Can of Coca Cola, Sprite or Fanta.' },
      { name: 'Aguas Frescas', price: '$5.00 / $3.00 / $2.50', desc: 'Rice drink, hibiscus, watermelon, mango, cucumber with lime, chia seeds with lime, tamarind, pineapple, cantaloupe and more.' },
      { name: 'Aguas Frescas Preparadas', price: '$6.00 / $5.00 / $4.00', desc: 'Aguas frescas with chamoy, tamarind candies, tajin — among other ingredients.' },
      { name: 'Jarritos Preparados', price: '$10.00', desc: 'Jarritos with chamoy sauce, tamarind candies, tajin — among other ingredients.' },
      { name: 'Michelada Base', price: '$7.50', desc: 'Michelada base, add your own beer.' },
      { name: 'Margarita', price: '$5.00', desc: 'Non-alcoholic — passion fruit, mango, lime or strawberry. Add your own tequila.' },
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
  { author: 'Tony S.', rating: 5, date: '2 months ago', text: "BYOB is a huge plus! Brought some beers and had a wonderful dinner with my crew. The molcajete came out sizzling and perfect. Everything from the chips to the mole was authentic and delicious." },
  { author: 'Jessica H.', rating: 5, date: '4 months ago', text: "Outdoor seating with live music on weekends makes this place really special. The food is consistently authentic and delicious. Elote and loaded street fries to start, then the al pastor tacos — perfection." },
  { author: 'David R.', rating: 5, date: '5 months ago', text: "First time here last Saturday and I am already planning my return. The caldo de rez was soul-warming and the chorizo tacos were some of the best I've had in Jersey. Friendly, fast service too." },
  { author: 'Priya N.', rating: 5, date: '3 months ago', text: "Stopped in on a whim and I'm so glad I did. The food is the real deal — handmade tortillas, fresh guac, incredible salsas. The staff was so kind and gave great recommendations. This is now a regular spot for us." },
  { author: 'Kevin O.', rating: 5, date: '4 months ago', text: "Best Mexican food in Monmouth County, period. The alambre de res is unreal. Everything comes out fast and hot. Prices are very fair for the quality and portion sizes. Highly recommend!" },
  { author: 'Natalie W.', rating: 5, date: '5 months ago', text: "I've been to a lot of Mexican restaurants and Mi Lupita's is the real thing. The mole enchiladas are complex and rich — you can tell it's a family recipe. The quesabirria is also incredible." },
  { author: 'Mike D.', rating: 4, date: '6 months ago', text: "Really solid Mexican restaurant. The food is fresh and authentic, portions are generous, and the BYOB policy is fantastic. The only reason it's not 5 stars is because it can get crowded on weekends — but that just shows how good it is!" },
  { author: 'Sofia L.', rating: 5, date: '7 months ago', text: "Lupita's has become my family's favorite restaurant. My kids love the quesadillas and the elote, and my husband and I always get the parrillada. It's warm, welcoming and the food never disappoints." },
  { author: 'Tom B.', rating: 5, date: '8 months ago', text: "Unbelievable find. The caldo de rez alone is worth the trip to Red Bank. Everything is clearly made from scratch with great ingredients. The handmade tortillas are incredible — soft, warm and fresh every time." },
  { author: 'Camille J.', rating: 5, date: '9 months ago', text: "I ordered the wet burrito and the camarones a la diablá — both were absolutely delicious. The shrimp was perfectly cooked with just the right level of heat. The staff is warm and the place feels like home." },
  { author: 'Henry P.', rating: 5, date: 'a year ago', text: "Authentic, fresh, affordable. Those three words sum up Mi Lupita's perfectly. I can't believe how long I went without knowing about this place. The elote and the birria tacos are my go-to every single time." },
]
