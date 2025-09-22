const sampleListings = [
  {
    title: "Modern Glass House in the Hills",
    description:
      "A sleek architectural masterpiece with floor-to-ceiling glass walls and panoramic mountain views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    },
    price: 4500,
    location: "Santa Monica",
    country: "United States",
  },
  {
    title: "Traditional Ryokan with Onsen",
    description:
      "Immerse yourself in Japanese culture with tatami rooms, sliding doors, and a private hot spring bath.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    },
    price: 2200,
    location: "Kyoto",
    country: "Japan",
  },
  {
    title: "Floating Villa on the Lake",
    description:
      "Stay in a unique floating villa with direct access to calm lake waters for kayaking and swimming.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1533777324565-a040eb52fac1",
    },
    price: 3000,
    location: "Lake Bled",
    country: "Slovenia",
  },
  {
    title: "Luxury Cave House",
    description:
      "Experience a stay inside a modernized cave with natural stone interiors and breathtaking sunsets.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    },
    price: 2800,
    location: "Santorini",
    country: "Greece",
  },
  {
    title: "Countryside Farmhouse Retreat",
    description:
      "Enjoy rustic charm with fresh produce, farm animals, and wide open fields perfect for relaxation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba",
    },
    price: 900,
    location: "Provence",
    country: "France",
  },
  {
    title: "Desert Dome Stay",
    description:
      "Glamp under the stars in a luxury dome with desert views and clear night skies perfect for stargazing.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    },
    price: 1300,
    location: "Wadi Rum",
    country: "Jordan",
  },
  {
    title: "Ice Hotel Experience",
    description:
      "Sleep in an ice-sculpted room at this world-famous seasonal hotel, complete with thermal bedding.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1617196039688-7a1189a6b426",
    },
    price: 2500,
    location: "Jukkasjärvi",
    country: "Sweden",
  },
  {
    title: "Tropical Jungle Lodge",
    description:
      "Wake up surrounded by rainforest sounds in this eco-lodge with open-air design and canopy views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    },
    price: 1400,
    location: "Ubud",
    country: "Indonesia",
  },
  {
    title: "Historic Monastery Stay",
    description:
      "Spend the night in a centuries-old monastery converted into a serene guesthouse with cloister gardens.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    },
    price: 1600,
    location: "Seville",
    country: "Spain",
  },
  {
    title: "Skyline Pod on Rooftop",
    description:
      "Sleep under the city lights in a futuristic glass pod built on top of a skyscraper.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
    },
    price: 3500,
    location: "Singapore",
    country: "Singapore",
  },
  {
      title: "Skyline Glass Penthouse",
      description: "A luxurious penthouse with 360° views of the skyline and rooftop pool.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd",
      },
      price: 4800,
      location: "Toronto",
      country: "Canada",
    },
    {
      title: "Countryside Manor",
      description: "An elegant countryside manor with vast gardens and horse stables.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
      },
      price: 3200,
      location: "Oxford",
      country: "United Kingdom",
    },
    {
      title: "Beachfront Bamboo Villa",
      description: "Stay in a sustainable bamboo villa right on the beach, eco-friendly and stylish.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
      },
      price: 1800,
      location: "Goa",
      country: "India",
    },
  {
      title: "Floating Bungalow",
      description: "A romantic floating bungalow with crystal-clear lagoon views.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      },
      price: 4200,
      location: "Bora Bora",
      country: "French Polynesia",
    },
  {
      title: "Medieval Castle Stay",
      description: "Sleep like royalty in a fully preserved medieval castle with stone walls.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98",
      },
      price: 6000,
      location: "Prague",
      country: "Czech Republic",
    },
  {
      title: "Cliffside Infinity Pool Villa",
      description: "A villa perched on a cliff with an infinity pool overlooking the ocean.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9",
      },
      price: 5200,
      location: "Madeira",
      country: "Portugal",
    },
  {
      title: "Luxury Desert Camp",
      description: "Experience the desert in style with luxury tents and sunset camel rides.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      },
      price: 1900,
      location: "Marrakech",
      country: "Morocco",
    },
  {
      title: "Private Vineyard Estate",
      description: "Stay in a vineyard estate with wine tasting and rolling countryside views.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba",
      },
      price: 3500,
      location: "Napa Valley",
      country: "United States",
    },
  {
      title: "Snow Igloo Village",
      description: "Stay in a glass-roof igloo under the Northern Lights.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1617196039688-7a1189a6b426",
      },
      price: 2600,
      location: "Lapland",
      country: "Finland",
    },
  {
      title: "Luxury Safari Camp",
      description: "Stay in a luxury tent with wildlife views and guided safari tours.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
      },
      price: 4100,
      location: "Kruger National Park",
      country: "South Africa",
    },
  {
      title: "Historic Riadh in Medina",
      description: "A traditional Moroccan riadh with mosaic tiles and a central courtyard.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      },
      price: 1500,
      location: "Fes",
      country: "Morocco",
    },
  {
      title: "Alpine Wooden Chalet",
      description: "Rustic charm meets modern luxury in this ski chalet with hot tub.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb",
      },
      price: 3700,
      location: "Zermatt",
      country: "Switzerland",
    },
  {
      title: "Tree Pod Eco-Lodge",
      description: "Unique eco-pods suspended among the trees with full amenities.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7",
      },
      price: 1100,
      location: "Chiang Mai",
      country: "Thailand",
    },
  {
      title: "Luxury Cliff House",
      description: "An ultra-modern house built into the cliffside with private elevators.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f",
      },
      price: 7200,
      location: "Big Sur",
      country: "United States",
    },
  {
      title: "Historic Desert Caravanserai",
      description: "A renovated caravanserai in the desert offering luxury stays.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1518684079-3c830dcef090",
      },
      price: 2800,
      location: "Isfahan",
      country: "Iran",
    },
  {
      title: "Underwater Room Experience",
      description: "Sleep surrounded by marine life in a submerged underwater suite.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000",
      },
      price: 9500,
      location: "Zanzibar",
      country: "Tanzania",
    },
  {
      title: "Luxury Mountain Dome",
      description: "A geodesic dome with panoramic mountain views and luxury amenities.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1533777324565-a040eb52fac1",
      },
      price: 2100,
      location: "Patagonia",
      country: "Chile",
    },
  {
      title: "Canal Boat Stay",
      description: "A cozy houseboat experience along the historic canals.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4",
      },
      price: 1700,
      location: "Amsterdam",
      country: "Netherlands",
    },
  {
      title: "Lighthouse Retreat",
      description: "Stay in a historic lighthouse converted into a guesthouse.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
      },
      price: 2600,
      location: "Maine",
      country: "United States",
    },
];

const moreListings = [
  {
    "title": "Art District Penthouse #1",
    "description": "Gallery-inspired penthouse with double-height ceilings and terrace.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
    },
    "price": 750,
    "location": "Sapporo",
    "country": "Japan"
  },
  {
    "title": "Ski-Out Alpine Apartment #2",
    "description": "Clip in and go—true ski-out access with a steaming sauna après-ski.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9"
    },
    "price": 4500,
    "location": "Hoi An",
    "country": "Vietnam"
  },
  {
    "title": "Savannah Garden Manor #3",
    "description": "Columned porch, magnolias, and sweet-tea afternoons.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
    },
    "price": 5600,
    "location": "Doha",
    "country": "Qatar"
  },
  {
    "title": "Palm Grove Bungalow #4",
    "description": "Breezy bungalow shaded by palms, perfect for hammock naps and slow mornings.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1500375592092-40eb2168fd21"
    },
    "price": 2000,
    "location": "Lombok",
    "country": "Indonesia"
  },
  {
    "title": "Secluded Cliff Cabin #5",
    "description": "Hideaway cabin cantilevered over a rocky cove with epic ocean spray.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb"
    },
    "price": 3200,
    "location": "Santorini",
    "country": "Greece"
  },
  {
    "title": "Cliff-Edge Sky Suite #6",
    "description": "Glass-walled suite hovering dramatically over a blue bay.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd"
    },
    "price": 2800,
    "location": "Munich",
    "country": "Germany"
  },
  {
    "title": "Modern Desert Adobe #7",
    "description": "Thick adobe walls keep things cool; stargazing deck by night.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba"
    },
    "price": 8200,
    "location": "Quito",
    "country": "Ecuador"
  },
  {
    "title": "Garden Carriage House #8",
    "description": "Former carriage house now a sunlit suite with ivy-wrapped patio.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1439066615861-d1af74d74000"
    },
    "price": 750,
    "location": "Amman",
    "country": "Jordan"
  },
  {
    "title": "River Gorge Chalet #9",
    "description": "Timber chalet perched above a roaring river gorge.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1585543805890-6051f7829f98"
    },
    "price": 4000,
    "location": "Lagos",
    "country": "Nigeria"
  },
  {
    "title": "Historic Canal Loft #10",
    "description": "Industrial loft in a converted canal-side mill with water views.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
    },
    "price": 7200,
    "location": "Paphos",
    "country": "Cyprus"
  },
  {
    "title": "Solar-Powered Eco Dome #11",
    "description": "Off-grid geodome with solar power and rainwater harvesting.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1533777324565-a040eb52fac1"
    },
    "price": 3200,
    "location": "San José",
    "country": "Costa Rica"
  },
  {
    "title": "Ski-Out Alpine Apartment #12",
    "description": "Clip in and go—true ski-out access with a steaming sauna après-ski.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd"
    },
    "price": 5200,
    "location": "Cusco",
    "country": "Peru"
  },
  {
    "title": "Old Town Stone Maisonette #13",
    "description": "Charming split-level stone home tucked in narrow medieval lanes.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
    },
    "price": 3700,
    "location": "Porto",
    "country": "Portugal"
  },
  {
    "title": "Historic Canal Loft #14",
    "description": "Industrial loft in a converted canal-side mill with water views.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1500375592092-40eb2168fd21"
    },
    "price": 900,
    "location": "Mombasa",
    "country": "Kenya"
  },
  {
    "title": "Lakeview Boathouse #15",
    "description": "Light-filled boathouse with kayaks and a wraparound deck.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1502784444187-359ac186c5bb"
    },
    "price": 2000,
    "location": "Kandy",
    "country": "Sri Lanka"
  },
  {
    "title": "Hilltop Windmill Home #16",
    "description": "Converted windmill with spiral stairs and sweeping hills.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
    },
    "price": 2000,
    "location": "Rotorua",
    "country": "New Zealand"
  },
  {
    "title": "Designer Warehouse Loft #17",
    "description": "Converted warehouse with exposed brick, steel beams, and artful lighting.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba"
    },
    "price": 3200,
    "location": "Batumi",
    "country": "Georgia"
  },
  {
    "title": "Terraced Vineyard Cottage #18",
    "description": "Grape rows tumble below this rustic cottage with outdoor oven.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
    },
    "price": 1900,
    "location": "Dubrovnik",
    "country": "Croatia"
  },
  {
    "title": "Nordic Glass Cabin #19",
    "description": "Sleek glass cabin for aurora watching and midnight sun views.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
    },
    "price": 3500,
    "location": "Maafushi",
    "country": "Maldives"
  },
  {
    "title": "Lantern-lit Courtyard Riad #20",
    "description": "Elegant riad with carved cedar doors and a plunge pool in the courtyard.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1439066615861-d1af74d74000"
    },
    "price": 1300,
    "location": "Reims",
    "country": "France"
  },
  {
    "title": "Lantern-lit Courtyard Riad #21",
    "description": "Elegant riad with carved cedar doors and a plunge pool in the courtyard.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4"
    },
    "price": 1900,
    "location": "Cape Town",
    "country": "South Africa"
  },
  {
    "title": "Seaside A-Frame Cabin #22",
    "description": "Cozy A-frame with cedar interiors steps from a wind-swept beach.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1622396483200-31d7e4e1c5ed"
    },
    "price": 1900,
    "location": "Queenstown",
    "country": "New Zealand"
  },
  {
    "title": "Designer Warehouse Loft #23",
    "description": "Converted warehouse with exposed brick, steel beams, and artful lighting.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1533777324565-a040eb52fac1"
    },
    "price": 1200,
    "location": "Quito",
    "country": "Ecuador"
  },
  {
    "title": "Savannah Garden Manor #24",
    "description": "Columned porch, magnolias, and sweet-tea afternoons.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1470165301023-58dab8118cc9"
    },
    "price": 2000,
    "location": "Lahore",
    "country": "Pakistan"
  },
  {
    "title": "Cotswold Thatched Cottage #25",
    "description": "Storybook cottage with inglenook fireplace and a rose garden.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1470165301023-58dab8118cc9"
    },
    "price": 4500,
    "location": "Hoi An",
    "country": "Vietnam"
  },
  {
    "title": "Secluded Cliff Cabin #26",
    "description": "Hideaway cabin cantilevered over a rocky cove with epic ocean spray.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1493809842364-78817add7ffb"
    },
    "price": 1200,
    "location": "Banff",
    "country": "Canada"
  },
  {
    "title": "Ski-Out Alpine Apartment #27",
    "description": "Clip in and go—true ski-out access with a steaming sauna après-ski.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
    },
    "price": 2200,
    "location": "Thimphu",
    "country": "Bhutan"
  },
  {
    "title": "Palm Grove Bungalow #28",
    "description": "Breezy bungalow shaded by palms, perfect for hammock naps and slow mornings.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
    },
    "price": 1300,
    "location": "Siem Reap",
    "country": "Cambodia"
  },
  {
    "title": "River Gorge Chalet #29",
    "description": "Timber chalet perched above a roaring river gorge.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1439066615861-d1af74d74000"
    },
    "price": 6000,
    "location": "Valparaíso",
    "country": "Chile"
  },
  {
    "title": "Cobblestone Courtyard Flat #30",
    "description": "Quiet flat off a cobblestone courtyard, artisan cafés nearby.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1470165301023-58dab8118cc9"
    },
    "price": 2600,
    "location": "Batumi",
    "country": "Georgia"
  },
  {
    "title": "Art District Penthouse #31",
    "description": "Gallery-inspired penthouse with double-height ceilings and terrace.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9"
    },
    "price": 900,
    "location": "Quito",
    "country": "Ecuador"
  },
  {
    "title": "Historic Canal Loft #32",
    "description": "Industrial loft in a converted canal-side mill with water views.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1617196039688-7a1189a6b426"
    },
    "price": 900,
    "location": "Reykjavík",
    "country": "Iceland"
  },
  {
    "title": "Palm Grove Bungalow #33",
    "description": "Breezy bungalow shaded by palms, perfect for hammock naps and slow mornings.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f"
    },
    "price": 2800,
    "location": "Thimphu",
    "country": "Bhutan"
  },
  {
    "title": "Ski-Out Alpine Apartment #34",
    "description": "Clip in and go—true ski-out access with a steaming sauna après-ski.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
    },
    "price": 1700,
    "location": "Yogyakarta",
    "country": "Indonesia"
  },
  {
    "title": "Cotswold Thatched Cottage #35",
    "description": "Storybook cottage with inglenook fireplace and a rose garden.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4"
    },
    "price": 3500,
    "location": "Amman",
    "country": "Jordan"
  },
  {
    "title": "Designer Warehouse Loft #36",
    "description": "Converted warehouse with exposed brick, steel beams, and artful lighting.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba"
    },
    "price": 2800,
    "location": "Maafushi",
    "country": "Maldives"
  },
  {
    "title": "Seaside A-Frame Cabin #37",
    "description": "Cozy A-frame with cedar interiors steps from a wind-swept beach.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1493809842364-78817add7ffb"
    },
    "price": 1800,
    "location": "Lagos",
    "country": "Nigeria"
  },
  {
    "title": "Urban Micro-Studio #38",
    "description": "Smartly designed micro-studio with modular furniture and huge windows.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b"
    },
    "price": 2000,
    "location": "Kyoto",
    "country": "Japan"
  },
  {
    "title": "Designer Warehouse Loft #39",
    "description": "Converted warehouse with exposed brick, steel beams, and artful lighting.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
    },
    "price": 2600,
    "location": "Quito",
    "country": "Ecuador"
  },
  {
    "title": "Solar-Powered Eco Dome #40",
    "description": "Off-grid geodome with solar power and rainwater harvesting.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1439066615861-d1af74d74000"
    },
    "price": 1700,
    "location": "Sapa",
    "country": "Vietnam"
  },
  {
    "title": "Rooftop Infinity Pool Loft #41",
    "description": "Sip sunsets from a private rooftop with a dazzling infinity pool above the city.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
    },
    "price": 1900,
    "location": "Paros",
    "country": "Greece"
  },
  {
    "title": "Urban Micro-Studio #42",
    "description": "Smartly designed micro-studio with modular furniture and huge windows.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb"
    },
    "price": 2600,
    "location": "Reims",
    "country": "France"
  },
  {
    "title": "Palm Grove Bungalow #43",
    "description": "Breezy bungalow shaded by palms, perfect for hammock naps and slow mornings.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1622396483200-31d7e4e1c5ed"
    },
    "price": 2600,
    "location": "Nara",
    "country": "Japan"
  },
  {
    "title": "Art District Penthouse #44",
    "description": "Gallery-inspired penthouse with double-height ceilings and terrace.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1502784444187-359ac186c5bb"
    },
    "price": 1500,
    "location": "Mombasa",
    "country": "Kenya"
  },
  {
    "title": "Jungle Canopy Treehouse #45",
    "description": "Suspended walkways connect suites amid birdsong and orchids.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba"
    },
    "price": 3000,
    "location": "Nairobi",
    "country": "Kenya"
  },
  {
    "title": "Hidden Alley Studio #46",
    "description": "Secret studio with skylights and plants, tucked off a buzzing alley.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f"
    },
    "price": 3700,
    "location": "Hvar",
    "country": "Croatia"
  },
  {
    "title": "Garden Carriage House #47",
    "description": "Former carriage house now a sunlit suite with ivy-wrapped patio.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1500375592092-40eb2168fd21"
    },
    "price": 900,
    "location": "Koh Samui",
    "country": "Thailand"
  },
  {
    "title": "Savannah Garden Manor #48",
    "description": "Columned porch, magnolias, and sweet-tea afternoons.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1502784444187-359ac186c5bb"
    },
    "price": 3500,
    "location": "Budapest",
    "country": "Hungary"
  },
  {
    "title": "Secluded Cliff Cabin #49",
    "description": "Hideaway cabin cantilevered over a rocky cove with epic ocean spray.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4"
    },
    "price": 4800,
    "location": "Lucerne",
    "country": "Switzerland"
  },
  {
    "title": "Designer Warehouse Loft #50",
    "description": "Converted warehouse with exposed brick, steel beams, and artful lighting.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1617196039688-7a1189a6b426"
    },
    "price": 7200,
    "location": "Bagan",
    "country": "Myanmar"
  },
  {
    "title": "Seaside A-Frame Cabin #51",
    "description": "Cozy A-frame with cedar interiors steps from a wind-swept beach.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b"
    },
    "price": 900,
    "location": "Muscat",
    "country": "Oman"
  },
  {
    "title": "Cotswold Thatched Cottage #52",
    "description": "Storybook cottage with inglenook fireplace and a rose garden.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
    },
    "price": 3200,
    "location": "Hallstatt",
    "country": "Austria"
  },
  {
    "title": "Mediterranean Blue Villa #53",
    "description": "Whitewashed villa with blue shutters and tiled plunge pool.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
    },
    "price": 2400,
    "location": "Karachi",
    "country": "Pakistan"
  },
  {
    "title": "Riverfront Tiny House #54",
    "description": "Minimalist tiny home perched on a riverbank with fishing right out the door.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f"
    },
    "price": 1800,
    "location": "Valparaíso",
    "country": "Chile"
  },
  {
    "title": "Hidden Alley Studio #55",
    "description": "Secret studio with skylights and plants, tucked off a buzzing alley.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba"
    },
    "price": 900,
    "location": "Interlaken",
    "country": "Switzerland"
  },
  {
    "title": "River Gorge Chalet #56",
    "description": "Timber chalet perched above a roaring river gorge.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1439066615861-d1af74d74000"
    },
    "price": 750,
    "location": "Koh Samui",
    "country": "Thailand"
  },
  {
    "title": "Lantern-lit Courtyard Riad #57",
    "description": "Elegant riad with carved cedar doors and a plunge pool in the courtyard.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
    },
    "price": 1600,
    "location": "Karachi",
    "country": "Pakistan"
  },
  {
    "title": "Palm Grove Bungalow #58",
    "description": "Breezy bungalow shaded by palms, perfect for hammock naps and slow mornings.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b"
    },
    "price": 4000,
    "location": "Porto",
    "country": "Portugal"
  },
  {
    "title": "Secluded Cliff Cabin #59",
    "description": "Hideaway cabin cantilevered over a rocky cove with epic ocean spray.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1502784444187-359ac186c5bb"
    },
    "price": 5200,
    "location": "Reykjavík",
    "country": "Iceland"
  },
  {
    "title": "Modern Desert Adobe #60",
    "description": "Thick adobe walls keep things cool; stargazing deck by night.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb"
    },
    "price": 2200,
    "location": "Tulum",
    "country": "Mexico"
  },
  {
    "title": "Historic Canal Loft #61",
    "description": "Industrial loft in a converted canal-side mill with water views.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
    },
    "price": 7200,
    "location": "Hoi An",
    "country": "Vietnam"
  },
  {
    "title": "Art District Penthouse #62",
    "description": "Gallery-inspired penthouse with double-height ceilings and terrace.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9"
    },
    "price": 8200,
    "location": "Seoul",
    "country": "South Korea"
  },
  {
    "title": "Jungle Canopy Treehouse #63",
    "description": "Suspended walkways connect suites amid birdsong and orchids.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba"
    },
    "price": 3000,
    "location": "Tulum",
    "country": "Mexico"
  },
  {
    "title": "Modern Desert Adobe #64",
    "description": "Thick adobe walls keep things cool; stargazing deck by night.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4"
    },
    "price": 1700,
    "location": "Vienna",
    "country": "Austria"
  },
  {
    "title": "Modern Desert Adobe #65",
    "description": "Thick adobe walls keep things cool; stargazing deck by night.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1585543805890-6051f7829f98"
    },
    "price": 2600,
    "location": "Hanoi",
    "country": "Vietnam"
  },
  {
    "title": "Historic Canal Loft #66",
    "description": "Industrial loft in a converted canal-side mill with water views.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
    },
    "price": 750,
    "location": "Hallstatt",
    "country": "Austria"
  },
  {
    "title": "Mediterranean Blue Villa #67",
    "description": "Whitewashed villa with blue shutters and tiled plunge pool.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1439066615861-d1af74d74000"
    },
    "price": 1600,
    "location": "Lombok",
    "country": "Indonesia"
  },
  {
    "title": "Jungle Canopy Treehouse #68",
    "description": "Suspended walkways connect suites amid birdsong and orchids.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1493809842364-78817add7ffb"
    },
    "price": 1700,
    "location": "Queenstown",
    "country": "New Zealand"
  },
  {
    "title": "Rooftop Infinity Pool Loft #69",
    "description": "Sip sunsets from a private rooftop with a dazzling infinity pool above the city.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd"
    },
    "price": 8200,
    "location": "Yogyakarta",
    "country": "Indonesia"
  },
  {
    "title": "Cotswold Thatched Cottage #70",
    "description": "Storybook cottage with inglenook fireplace and a rose garden.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1622396483200-31d7e4e1c5ed"
    },
    "price": 4200,
    "location": "Lagos",
    "country": "Nigeria"
  },
  {
    "title": "Rooftop Infinity Pool Loft #71",
    "description": "Sip sunsets from a private rooftop with a dazzling infinity pool above the city.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba"
    },
    "price": 2200,
    "location": "Quito",
    "country": "Ecuador"
  },
  {
    "title": "Cotswold Thatched Cottage #72",
    "description": "Storybook cottage with inglenook fireplace and a rose garden.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1493809842364-78817add7ffb"
    },
    "price": 1300,
    "location": "Hobart",
    "country": "Australia"
  },
  {
    "title": "River Gorge Chalet #73",
    "description": "Timber chalet perched above a roaring river gorge.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4"
    },
    "price": 1600,
    "location": "Kyoto",
    "country": "Japan"
  },
  {
    "title": "Salt Flats Desert Pod #74",
    "description": "Futuristic pod on otherworldly salt flats—a photographer’s dream.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
    },
    "price": 1500,
    "location": "Mykonos",
    "country": "Greece"
  },
  {
    "title": "Lakeview Boathouse #75",
    "description": "Light-filled boathouse with kayaks and a wraparound deck.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba"
    },
    "price": 1700,
    "location": "Nara",
    "country": "Japan"
  },
  {
    "title": "Cobblestone Courtyard Flat #76",
    "description": "Quiet flat off a cobblestone courtyard, artisan cafés nearby.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1502784444187-359ac186c5bb"
    },
    "price": 3700,
    "location": "Bali",
    "country": "Indonesia"
  },
  {
    "title": "Savannah Garden Manor #77",
    "description": "Columned porch, magnolias, and sweet-tea afternoons.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba"
    },
    "price": 2000,
    "location": "Limassol",
    "country": "Cyprus"
  },
  {
    "title": "Ski-Out Alpine Apartment #78",
    "description": "Clip in and go—true ski-out access with a steaming sauna après-ski.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
    },
    "price": 9500,
    "location": "Prague",
    "country": "Czech Republic"
  },
  {
    "title": "Salt Flats Desert Pod #79",
    "description": "Futuristic pod on otherworldly salt flats—a photographer’s dream.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
    },
    "price": 1200,
    "location": "Lagos",
    "country": "Nigeria"
  },
  {
    "title": "Jungle Canopy Treehouse #80",
    "description": "Suspended walkways connect suites amid birdsong and orchids.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba"
    },
    "price": 4800,
    "location": "Gold Coast",
    "country": "Australia"
  },
  {
    "title": "Modern Desert Adobe #81",
    "description": "Thick adobe walls keep things cool; stargazing deck by night.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f"
    },
    "price": 1100,
    "location": "Prague",
    "country": "Czech Republic"
  },
  {
    "title": "Nordic Glass Cabin #82",
    "description": "Sleek glass cabin for aurora watching and midnight sun views.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4"
    },
    "price": 6000,
    "location": "Queenstown",
    "country": "New Zealand"
  },
  {
    "title": "River Gorge Chalet #83",
    "description": "Timber chalet perched above a roaring river gorge.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba"
    },
    "price": 1500,
    "location": "Zagreb",
    "country": "Croatia"
  },
  {
    "title": "Terraced Vineyard Cottage #84",
    "description": "Grape rows tumble below this rustic cottage with outdoor oven.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
    },
    "price": 3700,
    "location": "Auckland",
    "country": "New Zealand"
  },
  {
    "title": "Solar-Powered Eco Dome #85",
    "description": "Off-grid geodome with solar power and rainwater harvesting.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1493809842364-78817add7ffb"
    },
    "price": 4000,
    "location": "Dubrovnik",
    "country": "Croatia"
  },
  {
    "title": "Hidden Alley Studio #86",
    "description": "Secret studio with skylights and plants, tucked off a buzzing alley.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1493809842364-78817add7ffb"
    },
    "price": 1700,
    "location": "Tallinn",
    "country": "Estonia"
  },
  {
    "title": "Riverfront Tiny House #87",
    "description": "Minimalist tiny home perched on a riverbank with fishing right out the door.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1617196039688-7a1189a6b426"
    },
    "price": 1900,
    "location": "Karachi",
    "country": "Pakistan"
  },
  {
    "title": "Savannah Garden Manor #88",
    "description": "Columned porch, magnolias, and sweet-tea afternoons.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1500375592092-40eb2168fd21"
    },
    "price": 3000,
    "location": "Split",
    "country": "Croatia"
  },
  {
    "title": "Terraced Vineyard Cottage #89",
    "description": "Grape rows tumble below this rustic cottage with outdoor oven.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1617196039688-7a1189a6b426"
    },
    "price": 2600,
    "location": "Lahore",
    "country": "Pakistan"
  },
  {
    "title": "Designer Warehouse Loft #90",
    "description": "Converted warehouse with exposed brick, steel beams, and artful lighting.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb"
    },
    "price": 7200,
    "location": "Lucerne",
    "country": "Switzerland"
  },
  {
    "title": "Art District Penthouse #91",
    "description": "Gallery-inspired penthouse with double-height ceilings and terrace.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
    },
    "price": 2600,
    "location": "Osaka",
    "country": "Japan"
  },
  {
    "title": "Cobblestone Courtyard Flat #92",
    "description": "Quiet flat off a cobblestone courtyard, artisan cafés nearby.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f"
    },
    "price": 3200,
    "location": "Florence",
    "country": "Italy"
  },
  {
    "title": "Rooftop Infinity Pool Loft #93",
    "description": "Sip sunsets from a private rooftop with a dazzling infinity pool above the city.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba"
    },
    "price": 1100,
    "location": "Hobart",
    "country": "Australia"
  },
  {
    "title": "Harbor View Townhome #94",
    "description": "Three-story townhome with a rooftop firepit overlooking the harbor.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1439066615861-d1af74d74000"
    },
    "price": 1800,
    "location": "Rotorua",
    "country": "New Zealand"
  },
  {
    "title": "Cotswold Thatched Cottage #95",
    "description": "Storybook cottage with inglenook fireplace and a rose garden.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba"
    },
    "price": 1900,
    "location": "Baku",
    "country": "Azerbaijan"
  },
  {
    "title": "Harbor View Townhome #96",
    "description": "Three-story townhome with a rooftop firepit overlooking the harbor.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f"
    },
    "price": 1300,
    "location": "Dubrovnik",
    "country": "Croatia"
  },
  {
    "title": "Rooftop Infinity Pool Loft #97",
    "description": "Sip sunsets from a private rooftop with a dazzling infinity pool above the city.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1493809842364-78817add7ffb"
    },
    "price": 1800,
    "location": "Cappadocia",
    "country": "Turkey"
  },
  {
    "title": "Seaside A-Frame Cabin #98",
    "description": "Cozy A-frame with cedar interiors steps from a wind-swept beach.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1439066615861-d1af74d74000"
    },
    "price": 4200,
    "location": "Budapest",
    "country": "Hungary"
  },
  {
    "title": "Cotswold Thatched Cottage #99",
    "description": "Storybook cottage with inglenook fireplace and a rose garden.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4"
    },
    "price": 1700,
    "location": "Rotorua",
    "country": "New Zealand"
  },
  {
    "title": "Lakeview Boathouse #100",
    "description": "Light-filled boathouse with kayaks and a wraparound deck.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4"
    },
    "price": 8200,
    "location": "Kandy",
    "country": "Sri Lanka"
  }
];
const combinedListings = [...sampleListings, ...moreListings];
module.exports = { data: combinedListings, combinedListings };
