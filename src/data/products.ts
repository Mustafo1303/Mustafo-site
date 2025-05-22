export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: number;
  stock: number;
  features?: string[];
  discount?: number;
  isNew?: boolean;
}

const generateProducts = (): Product[] => {
  // Clothing products
  const clothing: Product[] = [
    {
      id: 1,
      name: "Erkaklar uchun futbolka",
      price: 120000,
      category: "clothing",
      description: "Yumshoq va qulay erkaklar uchun paxta futbolka. Turli xil ranglarda mavjud.",
      image: "https://images.pexels.com/photos/5384423/pexels-photo-5384423.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.5,
      stock: 50,
      features: ["100% paxta", "Yengil", "Mashinada yuvish mumkin"],
      isNew: true
    },
    {
      id: 2,
      name: "Ayollar uchun ko'ylak",
      price: 250000,
      category: "clothing",
      description: "Zamonaviy ayollar uchun yozgi ko'ylak. Yengil va nafis dizayn.",
      image: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.7,
      stock: 30,
      features: ["Yumshoq material", "A-shaklidagi dizayn", "Mashinada yuvish mumkin"],
      discount: 10
    },
    {
      id: 3,
      name: "Erkaklar uchun jinsi shim",
      price: 350000,
      category: "clothing",
      description: "Sifatli va qulay erkaklar uchun jinsi shim. Har qanday kiyim bilan mos keladi.",
      image: "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.2,
      stock: 25,
      features: ["Elastik material", "Cho'ntak bilan", "Qattiq chidamli"]
    },
    {
      id: 4,
      name: "Ayollar uchun jinsi shim",
      price: 320000,
      category: "clothing",
      description: "Zamonaviy ayollar uchun jinsi shim. Qulay va chiroyli dizayn.",
      image: "https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.6,
      stock: 35,
      features: ["Yumshoq va cho'ziluvchan", "Yuksak bel", "Zamonaviy uslub"]
    },
    {
      id: 5,
      name: "Erkaklar uchun kostyum",
      price: 1200000,
      category: "clothing",
      description: "Rasmiy tadbirlar uchun zamonaviy kostyum. Elegant va qulay.",
      image: "https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.8,
      stock: 15,
      features: ["Klassik dizayn", "Sifatli material", "To'liq komplekt"],
      discount: 15
    },
    {
      id: 6,
      name: "Ayollar uchun qishki palto",
      price: 700000,
      category: "clothing",
      description: "Issiq va chiroyli qishki palto. Sovuq kunlar uchun ideal.",
      image: "https://images.pexels.com/photos/7691336/pexels-photo-7691336.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.5,
      stock: 20,
      features: ["Issiq qatlam", "Suv o'tkazmaydigan", "Kapyushon bilan"]
    },
    {
      id: 7,
      name: "Erkaklar uchun sport kiyimi",
      price: 450000,
      category: "clothing",
      description: "Sport va dam olish uchun qulay kiyim to'plami.",
      image: "https://images.pexels.com/photos/6311662/pexels-photo-6311662.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.3,
      stock: 30,
      features: ["Nafas oladigan material", "Ter shimuvchi", "Elastik"],
      isNew: true
    },
    {
      id: 8,
      name: "Ayollar uchun sport kiyimi",
      price: 420000,
      category: "clothing",
      description: "Ayollar uchun zamonaviy sport kiyimlari to'plami.",
      image: "https://images.pexels.com/photos/6787202/pexels-photo-6787202.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.6,
      stock: 25,
      features: ["Yengil material", "Qulay dizayn", "Sport faoliyati uchun mos"]
    },
    {
      id: 9,
      name: "Bolalar uchun kiyim to'plami",
      price: 350000,
      category: "clothing",
      description: "Bolalar uchun qulay va sifatli kiyimlar to'plami.",
      image: "https://images.pexels.com/photos/5693889/pexels-photo-5693889.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.7,
      stock: 40,
      features: ["Yumshoq material", "Allergik emas", "Mashinada yuvish mumkin"],
      discount: 10
    },
    {
      id: 10,
      name: "Ayollar uchun yozgi shlyapa",
      price: 120000,
      category: "clothing",
      description: "Yozgi dam olish uchun chiroyli va qulay shlyapa.",
      image: "https://images.pexels.com/photos/984619/pexels-photo-984619.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.4,
      stock: 20,
      features: ["Quyoshdan himoya", "Yengil", "Zamonaviy uslub"]
    },
    {
      id: 11,
      name: "Erkaklar uchun kepka",
      price: 80000,
      category: "clothing",
      description: "Sportiv va kundalik kiyim uchun qulay kepka.",
      image: "https://images.pexels.com/photos/844867/pexels-photo-844867.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.2,
      stock: 45,
      features: ["Nafas oladigan material", "Sozlanadigan o'lcham", "Turli ranglar"]
    },
    {
      id: 12,
      name: "Ayollar uchun sumka",
      price: 350000,
      category: "clothing",
      description: "Chiroyli va sig'imli ayollar uchun sumka.",
      image: "https://images.pexels.com/photos/5119407/pexels-photo-5119407.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.6,
      stock: 15,
      features: ["Mustahkam material", "Ko'p cho'ntaklar", "Zamonaviy dizayn"],
      isNew: true
    },
    {
      id: 13,
      name: "Erkaklar uchun qo'lqop",
      price: 75000,
      category: "clothing",
      description: "Qish uchun issiq va qulay qo'lqoplar.",
      image: "https://images.pexels.com/photos/45055/pexels-photo-45055.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.3,
      stock: 30,
      features: ["Issiq saqlash", "Suv o'tkazmaydigan", "Chidamli material"]
    },
    {
      id: 14,
      name: "Ayollar uchun sharf",
      price: 120000,
      category: "clothing",
      description: "Yumshoq va issiq ayollar uchun sharf.",
      image: "https://images.pexels.com/photos/6045028/pexels-photo-6045028.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.7,
      stock: 25,
      features: ["Yumshoq material", "Uzun", "Turli ranglar"],
      discount: 5
    },
    {
      id: 15,
      name: "Bolalar uchun qishki kiyim",
      price: 480000,
      category: "clothing",
      description: "Bolalar uchun issiq qishki kiyimlar to'plami.",
      image: "https://images.pexels.com/photos/5560510/pexels-photo-5560510.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.8,
      stock: 20,
      features: ["Issiq qatlam", "Suv o'tkazmaydigan", "Yengil"]
    },
    {
      id: 16,
      name: "Erkaklar uchun shimlar",
      price: 200000,
      category: "clothing",
      description: "Kundalik kiyim uchun qulay erkaklar shimlar.",
      image: "https://images.pexels.com/photos/52518/jeans-pants-blue-shop-52518.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.1,
      stock: 35,
      features: ["Mustahkam material", "Qulay kesim", "Turli ranglar"]
    },
    {
      id: 17,
      name: "Ayollar uchun yubka",
      price: 230000,
      category: "clothing",
      description: "Zamonaviy va elegant ayollar uchun yubka.",
      image: "https://images.pexels.com/photos/6045043/pexels-photo-6045043.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.5,
      stock: 25,
      features: ["A-shakl", "Yumshoq material", "Elegant dizayn"],
      isNew: true
    },
    {
      id: 18,
      name: "Erkaklar uchun sviter",
      price: 280000,
      category: "clothing",
      description: "Kuz va qish mavsumi uchun issiq erkaklar sviter.",
      image: "https://images.pexels.com/photos/45982/pexels-photo-45982.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.4,
      stock: 30,
      features: ["Issiq", "Yumshoq", "Klassik dizayn"]
    },
    {
      id: 19,
      name: "Ayollar uchun sviter",
      price: 270000,
      category: "clothing",
      description: "Ayollar uchun zamonaviy va issiq sviter.",
      image: "https://images.pexels.com/photos/6311613/pexels-photo-6311613.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.6,
      stock: 25,
      features: ["Nafis dizayn", "Yumshoq material", "Turli ranglar"],
      discount: 10
    },
    {
      id: 20,
      name: "Bolalar uchun sport poyabzali",
      price: 180000,
      category: "clothing",
      description: "Bolalar uchun qulay va chidamli sport poyabzali.",
      image: "https://images.pexels.com/photos/1619652/pexels-photo-1619652.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.7,
      stock: 40,
      features: ["Yengil", "Bardoshli", "Qulay kiyish"]
    },
    {
      id: 21,
      name: "Erkaklar uchun klassik tufli",
      price: 450000,
      category: "clothing",
      description: "Rasmiy tadbirlar uchun elegant erkaklar tufli.",
      image: "https://images.pexels.com/photos/267202/pexels-photo-267202.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.8,
      stock: 15,
      features: ["Chinakam teri", "Bardoshli", "Klassik dizayn"]
    },
    {
      id: 22,
      name: "Ayollar uchun sandal",
      price: 280000,
      category: "clothing",
      description: "Yoz mavsumi uchun elegant ayollar sandal.",
      image: "https://images.pexels.com/photos/847380/pexels-photo-847380.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.5,
      stock: 20,
      features: ["Qulay", "Elegant", "Mustahkam"],
      isNew: true
    },
    {
      id: 23,
      name: "Erkaklar uchun sport poyabzali",
      price: 350000,
      category: "clothing",
      description: "Sport va dam olish uchun qulay erkaklar poyabzali.",
      image: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.6,
      stock: 30,
      features: ["Yengil", "Nafas olish imkoniyati", "Amortizatsiya"]
    },
    {
      id: 24,
      name: "Ayollar uchun etik",
      price: 550000,
      category: "clothing",
      description: "Kuz va qish mavsumi uchun ayollar etik.",
      image: "https://images.pexels.com/photos/5214139/pexels-photo-5214139.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.7,
      stock: 15,
      features: ["Issiq", "Suv o'tkazmaydigan", "Zamonaviy dizayn"],
      discount: 15
    },
    {
      id: 25,
      name: "Bolalar uchun etik",
      price: 220000,
      category: "clothing",
      description: "Bolalar uchun issiq va qulay qishki etik.",
      image: "https://images.pexels.com/photos/267278/pexels-photo-267278.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.5,
      stock: 25,
      features: ["Issiq", "Suv o'tkazmaydigan", "Oson kiyish"]
    },
  ];

  // Food products
  const food: Product[] = [
    {
      id: 101,
      name: "Non mahsulotlari to'plami",
      price: 40000,
      category: "food",
      description: "Yangi pishirilgan turli xil non mahsulotlari to'plami.",
      image: "https://images.pexels.com/photos/1756061/pexels-photo-1756061.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.7,
      stock: 30,
      features: ["Yangi", "Tabiiy ingredientlar", "Qo'shimchalarsiz"],
      isNew: true
    },
    {
      id: 102,
      name: "Mevalar to'plami",
      price: 120000,
      category: "food",
      description: "Yangi va mazali mevalar to'plami. 5 kg.",
      image: "https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.8,
      stock: 25,
      features: ["Organik", "Mazali", "Vitaminlarga boy"]
    },
    {
      id: 103,
      name: "Sabzavotlar to'plami",
      price: 100000,
      category: "food",
      description: "Yangi va sifatli sabzavotlar to'plami. 5 kg.",
      image: "https://images.pexels.com/photos/3025236/pexels-photo-3025236.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.6,
      stock: 30,
      features: ["Yangi", "Mavsumiy", "Mahalliy dehqonlardan"],
      discount: 10
    },
    {
      id: 104,
      name: "Go'sht mahsulotlari",
      price: 180000,
      category: "food",
      description: "Yangi va sifatli mol go'shti. 1 kg.",
      image: "https://images.pexels.com/photos/618775/pexels-photo-618775.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.5,
      stock: 20,
      features: ["Yangi", "Mahalliy fermerlardan", "Sifat nazorati"]
    },
    {
      id: 105,
      name: "Baliq mahsulotlari",
      price: 140000,
      category: "food",
      description: "Yangi va sifatli baliq. 1 kg.",
      image: "https://images.pexels.com/photos/2454533/pexels-photo-2454533.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.4,
      stock: 15,
      features: ["Yangi", "Dengiz mahsulotlari", "Sifat nazorati"]
    },
    {
      id: 106,
      name: "Sut mahsulotlari to'plami",
      price: 90000,
      category: "food",
      description: "Yangi va sifatli sut mahsulotlari to'plami.",
      image: "https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.7,
      stock: 25,
      features: ["Tabiiy", "Qo'shimchalarsiz", "Mahalliy fermerlardan"],
      isNew: true
    },
    {
      id: 107,
      name: "Qahva donalari",
      price: 120000,
      category: "food",
      description: "Yuqori sifatli qahva donalari. 500 g.",
      image: "https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.8,
      stock: 30,
      features: ["Yangi qovurilgan", "Kuchli aromat", "Premium sifat"]
    },
    {
      id: 108,
      name: "Choy to'plami",
      price: 80000,
      category: "food",
      description: "Turli xil choy turlari to'plami. 10 ta xaltacha.",
      image: "https://images.pexels.com/photos/230477/pexels-photo-230477.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.6,
      stock: 40,
      features: ["Tabiiy", "Xushbo'y", "Turli xil"]
    },
    {
      id: 109,
      name: "Shirinliklar to'plami",
      price: 150000,
      category: "food",
      description: "Turli xil shirinliklar to'plami. 1 kg.",
      image: "https://images.pexels.com/photos/3020226/pexels-photo-3020226.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.9,
      stock: 20,
      features: ["Mazali", "Yangi tayyorlangan", "Turli xil"],
      discount: 15
    },
    {
      id: 110,
      name: "Ziravorlar to'plami",
      price: 60000,
      category: "food",
      description: "Turli xil ziravorlar to'plami. 10 ta tur.",
      image: "https://images.pexels.com/photos/1309489/pexels-photo-1309489.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.5,
      stock: 35,
      features: ["Tabiiy", "Xushbo'y", "Turli xil"]
    },
    {
      id: 111,
      name: "Makaron mahsulotlari",
      price: 25000,
      category: "food",
      description: "Yuqori sifatli makaron mahsulotlari. 500 g.",
      image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.3,
      stock: 50,
      features: ["Sifatli", "Tabiiy", "Turli shakllarda"]
    },
    {
      id: 112,
      name: "Guruch",
      price: 30000,
      category: "food",
      description: "Yuqori sifatli guruch. 1 kg.",
      image: "https://images.pexels.com/photos/7421242/pexels-photo-7421242.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.6,
      stock: 40,
      features: ["Sifatli", "Tabiiy", "Mazali"]
    },
    {
      id: 113,
      name: "Yog'",
      price: 45000,
      category: "food",
      description: "Tabiiy va sifatli o'simlik yog'i. 1 litr.",
      image: "https://images.pexels.com/photos/8605198/pexels-photo-8605198.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.4,
      stock: 30,
      features: ["Tabiiy", "Siqilgan", "Qo'shimchalarsiz"],
      isNew: true
    },
    {
      id: 114,
      name: "Tuxum",
      price: 22000,
      category: "food",
      description: "Yangi va sifatli tuxumlar. 10 ta.",
      image: "https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.7,
      stock: 50,
      features: ["Yangi", "Tabiiy", "Mahalliy fermerlardan"]
    },
    {
      id: 115,
      name: "Asal",
      price: 110000,
      category: "food",
      description: "Tabiiy asal. 500 g.",
      image: "https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.9,
      stock: 20,
      features: ["Tabiiy", "Sof", "Mahalliy asalarichilardan"],
      discount: 5
    },
    {
      id: 116,
      name: "Sharbatlar to'plami",
      price: 80000,
      category: "food",
      description: "Tabiiy meva sharbatlari to'plami. 5 ta tur.",
      image: "https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.5,
      stock: 30,
      features: ["Tabiiy", "Qo'shimchalarsiz", "Vitaminlarga boy"]
    },
    {
      id: 117,
      name: "Mineral suv",
      price: 8000,
      category: "food",
      description: "Tabiiy mineral suv. 1 litr.",
      image: "https://images.pexels.com/photos/327090/pexels-photo-327090.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.3,
      stock: 100,
      features: ["Tabiiy", "Minerallar bilan boyitilgan", "Sof"]
    },
    {
      id: 118,
      name: "Qand",
      price: 15000,
      category: "food",
      description: "Oq shakar. 1 kg.",
      image: "https://images.pexels.com/photos/1292543/pexels-photo-1292543.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.2,
      stock: 80,
      features: ["Toza", "Sifatli", "Oq"]
    },
    {
      id: 119,
      name: "Tuz",
      price: 5000,
      category: "food",
      description: "Osh tuzi. 1 kg.",
      image: "https://images.pexels.com/photos/8965711/pexels-photo-8965711.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.1,
      stock: 100,
      features: ["Toza", "Iodlangan", "Sifatli"]
    },
    {
      id: 120,
      name: "Konservalar to'plami",
      price: 120000,
      category: "food",
      description: "Turli xil konservalar to'plami. 5 ta tur.",
      image: "https://images.pexels.com/photos/5946081/pexels-photo-5946081.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.4,
      stock: 40,
      features: ["Uzoq muddatli", "Tabiiy", "Turli xil"],
      isNew: true
    },
    {
      id: 121,
      name: "Pishloq to'plami",
      price: 150000,
      category: "food",
      description: "Turli xil pishloqlar to'plami. 500 g.",
      image: "https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.8,
      stock: 20,
      features: ["Tabiiy", "Mazali", "Turli xil"],
      discount: 10
    },
    {
      id: 122,
      name: "Kolbasa mahsulotlari",
      price: 90000,
      category: "food",
      description: "Turli xil kolbasa mahsulotlari. 500 g.",
      image: "https://images.pexels.com/photos/9287186/pexels-photo-9287186.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.3,
      stock: 25,
      features: ["Yangi", "Sifatli", "Turli xil"]
    },
    {
      id: 123,
      name: "Shokolad to'plami",
      price: 70000,
      category: "food",
      description: "Turli xil shokolad to'plami. 300 g.",
      image: "https://images.pexels.com/photos/65882/chocolate-dark-coffee-confiserie-65882.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.7,
      stock: 30,
      features: ["Mazali", "Sifatli", "Turli xil"]
    },
    {
      id: 124,
      name: "Chipslar",
      price: 15000,
      category: "food",
      description: "Kartoshka chipslar. 150 g.",
      image: "https://images.pexels.com/photos/4046599/pexels-photo-4046599.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.2,
      stock: 50,
      features: ["Mazali", "Qarsildoq", "Turli ta'mlar"]
    },
    {
      id: 125,
      name: "Muzqaymoq",
      price: 25000,
      category: "food",
      description: "Turli xil muzqaymoqlar. 500 ml.",
      image: "https://images.pexels.com/photos/1294943/pexels-photo-1294943.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.6,
      stock: 30,
      features: ["Mazali", "Sovuq", "Turli xil"]
    },
  ];

  // Electronics products
  const electronics: Product[] = [
    {
      id: 201,
      name: "Smartfon",
      price: 3500000,
      category: "electronics",
      description: "Zamonaviy smartfon eng so'nggi texnologiyalar bilan.",
      image: "https://images.pexels.com/photos/1294886/pexels-photo-1294886.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.8,
      stock: 25,
      features: ["6.5 dyuym ekran", "128GB xotira", "48MP kamera"],
      isNew: true
    },
    {
      id: 202,
      name: "Noutbuk",
      price: 8500000,
      category: "electronics",
      description: "Zamonaviy va quvvatli noutbuk.",
      image: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.7,
      stock: 15,
      features: ["15.6 dyuym ekran", "16GB RAM", "512GB SSD", "Intel Core i7"],
      discount: 10
    },
    {
      id: 203,
      name: "Televizor",
      price: 5500000,
      category: "electronics",
      description: "Yuqori sifatli tasvir va tovushga ega Smart TV.",
      image: "https://images.pexels.com/photos/6782570/pexels-photo-6782570.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.9,
      stock: 10,
      features: ["55 dyuym", "4K UHD", "Smart TV", "HDR"],
      isNew: true
    },
    {
      id: 204,
      name: "Planshet",
      price: 3200000,
      category: "electronics",
      description: "Qulay va ko'p funksiyali planshet.",
      image: "https://images.pexels.com/photos/4065629/pexels-photo-4065629.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.6,
      stock: 20,
      features: ["10.2 dyuym ekran", "64GB xotira", "Wi-Fi", "Yuqori ishlash tezligi"]
    },
    {
      id: 205,
      name: "Simsiz quloqchinlar",
      price: 850000,
      category: "electronics",
      description: "Zamonaviy va qulay simsiz quloqchinlar.",
      image: "https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.5,
      stock: 30,
      features: ["Bluetooth 5.0", "Shovqin yo'qotish", "8 soat ishlash vaqti"],
      discount: 15
    },
    {
      id: 206,
      name: "Kamera",
      price: 7500000,
      category: "electronics",
      description: "Professional suratga olish kamerasi.",
      image: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.8,
      stock: 10,
      features: ["24MP", "4K video", "Wi-Fi", "Bluetooth"],
      isNew: true
    },
    {
      id: 207,
      name: "Proektor",
      price: 4200000,
      category: "electronics",
      description: "Yuqori sifatli tasvirni aks ettiruvchi proektor.",
      image: "https://images.pexels.com/photos/1462012/pexels-photo-1462012.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.6,
      stock: 8,
      features: ["Full HD", "3500 Lyumen", "HDMI", "Bluetooth"]
    },
    {
      id: 208,
      name: "Konditsioner",
      price: 6500000,
      category: "electronics",
      description: "Energiya tejaydigan zamonaviy konditsioner.",
      image: "https://images.pexels.com/photos/4431320/pexels-photo-4431320.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.7,
      stock: 15,
      features: ["Invertor", "Energiya samarali", "Wi-Fi boshqaruv"],
      discount: 5
    },
    {
      id: 209,
      name: "Kir yuvish mashinasi",
      price: 4800000,
      category: "electronics",
      description: "Avtomatik kir yuvish mashinasi.",
      image: "https://images.pexels.com/photos/5816346/pexels-photo-5816346.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.5,
      stock: 12,
      features: ["8 kg yuklanish", "1200 ayl/min", "Energiya tejamkor"]
    },
    {
      id: 210,
      name: "Muzlatgich",
      price: 7500000,
      category: "electronics",
      description: "Ko'p funksiyali zamonaviy muzlatgich.",
      image: "https://images.pexels.com/photos/5825428/pexels-photo-5825428.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.8,
      stock: 10,
      features: ["No Frost", "Energiya tejamkor", "Katta hajm"]
    },
    {
      id: 211,
      name: "Mikroto'lqinli pech",
      price: 1200000,
      category: "electronics",
      description: "Ko'p funksiyali mikroto'lqinli pech.",
      image: "https://images.pexels.com/photos/6758739/pexels-photo-6758739.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.4,
      stock: 18,
      features: ["20 litr hajm", "800W quvvat", "Ko'p funksiyali"],
      isNew: true
    },
    {
      id: 212,
      name: "Blender",
      price: 850000,
      category: "electronics",
      description: "Ko'p funksiyali oshxona blenderi.",
      image: "https://images.pexels.com/photos/4327001/pexels-photo-4327001.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.3,
      stock: 25,
      features: ["600W quvvat", "Ko'p funksiyali", "Oson tozalanadi"]
    },
    {
      id: 213,
      name: "Changyutgich",
      price: 1500000,
      category: "electronics",
      description: "Quvvatli va qulay changyutgich.",
      image: "https://images.pexels.com/photos/4327176/pexels-photo-4327176.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.5,
      stock: 20,
      features: ["2000W quvvat", "HEPA filtr", "Qulay ishlatish"],
      discount: 10
    },
    {
      id: 214,
      name: "Dazmol",
      price: 450000,
      category: "electronics",
      description: "Zamonaviy va qulay dazmol.",
      image: "https://images.pexels.com/photos/12639602/pexels-photo-12639602.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.2,
      stock: 30,
      features: ["2200W quvvat", "Bug' funksiyasi", "O'z-o'zini tozalash"]
    },
    {
      id: 215,
      name: "Elektr choynagi",
      price: 250000,
      category: "electronics",
      description: "Tez va qulay elektr choynagi.",
      image: "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.3,
      stock: 40,
      features: ["1.7 litr hajm", "2000W quvvat", "Tez qaynatish"]
    },
    {
      id: 216,
      name: "Toster",
      price: 320000,
      category: "electronics",
      description: "Ikkita non bo'lagini bir vaqtda qovurish uchun toster.",
      image: "https://images.pexels.com/photos/175417/pexels-photo-175417.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.1,
      stock: 35,
      features: ["750W quvvat", "Qovurish darajasini sozlash", "Qulay ishlatish"]
    },
    {
      id: 217,
      name: "Ventilyator",
      price: 450000,
      category: "electronics",
      description: "Turli xil tezlikka ega zamonaviy ventilyator.",
      image: "https://images.pexels.com/photos/6757695/pexels-photo-6757695.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.2,
      stock: 25,
      features: ["3 xil tezlik", "Oscillation funksiyasi", "Timer"]
    },
    {
      id: 218,
      name: "Qahva mashinasi",
      price: 2500000,
      category: "electronics",
      description: "Zamonaviy avtomatik qahva mashinasi.",
      image: "https://images.pexels.com/photos/6400887/pexels-photo-6400887.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.7,
      stock: 15,
      features: ["15 bar bosim", "Sut ko'pirgich", "Avtomatik tozalash"],
      isNew: true
    },
    {
      id: 219,
      name: "O'yin konsoli",
      price: 5500000,
      category: "electronics",
      description: "Zamonaviy o'yin konsoli.",
      image: "https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.9,
      stock: 10,
      features: ["1TB xotira", "4K o'yin", "Wi-Fi", "Bluetooth"],
      discount: 5
    },
    {
      id: 220,
      name: "Smart soat",
      price: 1800000,
      category: "electronics",
      description: "Ko'p funksiyali smart soat.",
      image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.5,
      stock: 20,
      features: ["Yurak urish monitori", "GPS", "Suv o'tkazmaydigan", "Bluetooth"]
    },
    {
      id: 221,
      name: "Bosh telefonlar",
      price: 1200000,
      category: "electronics",
      description: "Yuqori sifatli ovozni ta'minlovchi bosh telefonlar.",
      image: "https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.6,
      stock: 25,
      features: ["Shovqin yo'qotish", "Bluetooth", "30 soat ishlash vaqti"]
    },
    {
      id: 222,
      name: "Printer",
      price: 2500000,
      category: "electronics",
      description: "Ko'p funksiyali rangli printer.",
      image: "https://images.pexels.com/photos/6913125/pexels-photo-6913125.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.4,
      stock: 15,
      features: ["Wi-Fi", "Ikki tomonlama chop etish", "Skaner", "Kopir"]
    },
    {
      id: 223,
      name: "Quvvat banki",
      price: 350000,
      category: "electronics",
      description: "Mobil qurilmalar uchun quvvat banki.",
      image: "https://images.pexels.com/photos/5723256/pexels-photo-5723256.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.3,
      stock: 50,
      features: ["20000mAh", "Tez quvvatlash", "2 USB port"]
    },
    {
      id: 224,
      name: "Wi-Fi router",
      price: 850000,
      category: "electronics",
      description: "Yuqori tezlikdagi internet uchun Wi-Fi router.",
      image: "https://images.pexels.com/photos/4218546/pexels-photo-4218546.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.5,
      stock: 20,
      features: ["Dual-Band", "Gigabit Ethernet", "USB port"],
      discount: 10
    },
    {
      id: 225,
      name: "USB fleshka",
      price: 120000,
      category: "electronics",
      description: "Katta hajmli USB fleshka.",
      image: "https://images.pexels.com/photos/4792729/pexels-photo-4792729.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.2,
      stock: 100,
      features: ["128GB", "USB 3.0", "Tez ma'lumot uzatish"]
    },
  ];

  // Home products
  const home: Product[] = [
    {
      id: 301,
      name: "Divan",
      price: 4500000,
      category: "home",
      description: "Uch o'rinli qulay va chiroyli divan.",
      image: "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.7,
      stock: 10,
      features: ["Yumshoq", "Mustahkam", "Zamonaviy dizayn"],
      isNew: true
    },
    {
      id: 302,
      name: "Krovat",
      price: 3800000,
      category: "home",
      description: "Ikki kishilik qulay va mustahkam krovat.",
      image: "https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.8,
      stock: 8,
      features: ["Ikki kishilik", "Mustahkam", "Matrasli"],
      discount: 10
    },
    {
      id: 303,
      name: "Shkaf",
      price: 2800000,
      category: "home",
      description: "Kiyimlar uchun sig'imli shkaf.",
      image: "https://images.pexels.com/photos/5824884/pexels-photo-5824884.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.6,
      stock: 12,
      features: ["Sig'imli", "Mustahkam", "Zamonaviy dizayn"]
    },
    {
      id: 304,
      name: "Stol",
      price: 1500000,
      category: "home",
      description: "Oshxona uchun qulay stol.",
      image: "https://images.pexels.com/photos/279646/pexels-photo-279646.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.5,
      stock: 15,
      features: ["Mustahkam", "Zamonaviy", "Oson tozalanadi"]
    },
    {
      id: 305,
      name: "Stullar to'plami",
      price: 1200000,
      category: "home",
      description: "4 ta stuldan iborat to'plam.",
      image: "https://images.pexels.com/photos/8082294/pexels-photo-8082294.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.4,
      stock: 20,
      features: ["Qulay", "Mustahkam", "Zamonaviy dizayn"],
      discount: 15
    },
    {
      id: 306,
      name: "Gilam",
      price: 1800000,
      category: "home",
      description: "Yumshoq va chiroyli gilam.",
      image: "https://images.pexels.com/photos/6262022/pexels-photo-6262022.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.7,
      stock: 15,
      features: ["Yumshoq", "Sifatli", "Zamonaviy naqsh"]
    },
    {
      id: 307,
      name: "Yotoq to'plami",
      price: 850000,
      category: "home",
      description: "Ikki kishilik yotoq to'plami.",
      image: "https://images.pexels.com/photos/4916521/pexels-photo-4916521.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.6,
      stock: 25,
      features: ["Yumshoq", "100% paxta", "Nafis dizayn"],
      isNew: true
    },
    {
      id: 308,
      name: "Choyshab to'plami",
      price: 350000,
      category: "home",
      description: "Ikki kishilik choyshab to'plami.",
      image: "https://images.pexels.com/photos/4210338/pexels-photo-4210338.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.5,
      stock: 30,
      features: ["Yumshoq", "100% paxta", "Oson tozalanadi"]
    },
    {
      id: 309,
      name: "Sochiq to'plami",
      price: 180000,
      category: "home",
      description: "6 ta sochiqdan iborat to'plam.",
      image: "https://images.pexels.com/photos/4210384/pexels-photo-4210384.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.4,
      stock: 40,
      features: ["Yumshoq", "Nam shimuvchi", "Tez quriydi"]
    },
    {
      id: 310,
      name: "Yostiq",
      price: 120000,
      category: "home",
      description: "Qulay va yumshoq yostiq.",
      image: "https://images.pexels.com/photos/5816309/pexels-photo-5816309.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.3,
      stock: 50,
      features: ["Yumshoq", "Gipoallergenik", "Qulay"]
    },
    {
      id: 311,
      name: "Oshxona anjomlari to'plami",
      price: 650000,
      category: "home",
      description: "Sifatli oshxona anjomlari to'plami.",
      image: "https://images.pexels.com/photos/4252140/pexels-photo-4252140.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.7,
      stock: 20,
      features: ["Sifatli", "Zanglamaydigan po'lat", "To'liq to'plam"],
      discount: 10
    },
    {
      id: 312,
      name: "Qozon to'plami",
      price: 950000,
      category: "home",
      description: "Turli o'lchamdagi qozonlar to'plami.",
      image: "https://images.pexels.com/photos/5824829/pexels-photo-5824829.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.8,
      stock: 15,
      features: ["Sifatli", "Kuymaydigan qoplama", "Turli o'lchamlar"]
    },
    {
      id: 313,
      name: "Tova",
      price: 280000,
      category: "home",
      description: "Sifatli va kuymaydigan tova.",
      image: "https://images.pexels.com/photos/4494023/pexels-photo-4494023.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.5,
      stock: 25,
      features: ["Kuymaydigan qoplama", "Oson tozalanadi", "Bardoshli"]
    },
    {
      id: 314,
      name: "Idish-tovoq to'plami",
      price: 750000,
      category: "home",
      description: "6 kishilik idish-tovoq to'plami.",
      image: "https://images.pexels.com/photos/6114764/pexels-photo-6114764.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.6,
      stock: 20,
      features: ["Chiroyli dizayn", "Oson tozalanadi", "Mustahkam"],
      isNew: true
    },
    {
      id: 315,
      name: "Stakan to'plami",
      price: 180000,
      category: "home",
      description: "6 ta stakandan iborat to'plam.",
      image: "https://images.pexels.com/photos/1282275/pexels-photo-1282275.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.4,
      stock: 30,
      features: ["Shisha", "Elegant dizayn", "Mustahkam"]
    },
    {
      id: 316,
      name: "Choynak to'plami",
      price: 350000,
      category: "home",
      description: "Choy va qahva uchun choynak to'plami.",
      image: "https://images.pexels.com/photos/1025806/pexels-photo-1025806.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.5,
      stock: 20,
      features: ["Chiroyli dizayn", "Sifatli", "To'liq to'plam"]
    },
    {
      id: 317,
      name: "Ko'zgu",
      price: 450000,
      category: "home",
      description: "Devordagi katta ko'zgu.",
      image: "https://images.pexels.com/photos/6492397/pexels-photo-6492397.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.3,
      stock: 15,
      features: ["Katta o'lcham", "Zamonaviy ramka", "Sifatli ko'zgu"]
    },
    {
      id: 318,
      name: "Vanna jihozlari to'plami",
      price: 250000,
      category: "home",
      description: "Vanna xonasi uchun jihozlar to'plami.",
      image: "https://images.pexels.com/photos/6045400/pexels-photo-6045400.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.2,
      stock: 25,
      features: ["Sifatli", "Zamonaviy dizayn", "To'liq to'plam"],
      discount: 5
    },
    {
      id: 319,
      name: "Tualetgoh uchun aksessuarlar",
      price: 180000,
      category: "home",
      description: "Tualetgoh uchun kerakli aksessuarlar to'plami.",
      image: "https://images.pexels.com/photos/6045384/pexels-photo-6045384.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.1,
      stock: 30,
      features: ["Sifatli", "Zamonaviy dizayn", "Oson o'rnatish"]
    },
    {
      id: 320,
      name: "Kir savatcha",
      price: 120000,
      category: "home",
      description: "Sig'imli kir savatcha.",
      image: "https://images.pexels.com/photos/4210811/pexels-photo-4210811.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.2,
      stock: 40,
      features: ["Sig'imli", "Chidamli", "Yengil"]
    },
    {
      id: 321,
      name: "Dekorativ yostiqchalar",
      price: 150000,
      category: "home",
      description: "3 ta dekorativ yostiqchadan iborat to'plam.",
      image: "https://images.pexels.com/photos/3757055/pexels-photo-3757055.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.6,
      stock: 30,
      features: ["Chiroyli dizayn", "Yumshoq", "Zamonaviy"]
    },
    {
      id: 322,
      name: "Dekorativ guldon",
      price: 220000,
      category: "home",
      description: "Chiroyli dekorativ guldon.",
      image: "https://images.pexels.com/photos/5825573/pexels-photo-5825573.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.4,
      stock: 20,
      features: ["Original dizayn", "Sifatli", "Zamonaviy"]
    },
    {
      id: 323,
      name: "Devor soati",
      price: 180000,
      category: "home",
      description: "Zamonaviy devor soati.",
      image: "https://images.pexels.com/photos/3846245/pexels-photo-3846245.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.3,
      stock: 25,
      features: ["Zamonaviy dizayn", "Aniq ishlaydi", "Batareyali"],
      isNew: true
    },
    {
      id: 324,
      name: "Dekorativ rasmlar to'plami",
      price: 350000,
      category: "home",
      description: "3 ta dekorativ rasmdan iborat to'plam.",
      image: "https://images.pexels.com/photos/1047458/pexels-photo-1047458.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.5,
      stock: 15,
      features: ["Chiroyli", "Zamonaviy", "Ramkali"]
    },
    {
      id: 325,
      name: "Kitob javoni",
      price: 1500000,
      category: "home",
      description: "Sig'imli va chiroyli kitob javoni.",
      image: "https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.7,
      stock: 10,
      features: ["Sig'imli", "Mustahkam", "Zamonaviy dizayn"],
      discount: 10
    },
  ];

  return [...clothing, ...food, ...electronics, ...home];
};

export const products = generateProducts();

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getNewProducts = (limit = 8): Product[] => {
  return products
    .filter(product => product.isNew)
    .sort(() => 0.5 - Math.random())
    .slice(0, limit);
};

export const getDiscountedProducts = (limit = 8): Product[] => {
  return products
    .filter(product => product.discount)
    .sort(() => 0.5 - Math.random())
    .slice(0, limit);
};

export const searchProducts = (query: string): Product[] => {
  const searchTerm = query.toLowerCase();
  return products.filter(
    product => 
      product.name.toLowerCase().includes(searchTerm) || 
      product.description.toLowerCase().includes(searchTerm) || 
      product.category.toLowerCase().includes(searchTerm)
  );
};

export const filterProducts = (
  category?: string,
  minPrice?: number,
  maxPrice?: number,
  inStock?: boolean,
  minRating?: number
): Product[] => {
  let filteredProducts = [...products];
  
  if (category) {
    filteredProducts = filteredProducts.filter(product => product.category === category);
  }
  
  if (minPrice !== undefined) {
    filteredProducts = filteredProducts.filter(product => product.price >= minPrice);
  }
  
  if (maxPrice !== undefined) {
    filteredProducts = filteredProducts.filter(product => product.price <= maxPrice);
  }
  
  if (inStock) {
    filteredProducts = filteredProducts.filter(product => product.stock > 0);
  }
  
  if (minRating !== undefined) {
    filteredProducts = filteredProducts.filter(product => product.rating >= minRating);
  }
  
  return filteredProducts;
};

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('uz-UZ', { style: 'currency', currency: 'UZS', maximumFractionDigits: 0 }).format(price);
};