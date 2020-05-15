const Commodity = [
  {id: 1, commodityName: "Apple"},
  {id: 2, commodityName: "Mango"},
  {id: 3, commodityName: "Carrots"},
  {id: 4, commodityName: "Kale"},
  {id: 5, commodityName: "Spinach"}
];

const Certification = [
  {id: 1, certificate: "GAP Certified"},
  {id: 2, certificate: "Organic Certified"},
  {id: 3, certificate: "Non-GMO Certified"},
  {id: 4, certificate: "USDA Organic"}
];

const Grade = [
  {id: 1, grade: "Combination"},
  {id: 2, grade: "Juicer"},
  {id: 3, grade: "Packer"},
  {id: 4, grade: "Processor"}
];

const PackageType =[
  {id: 1, type: "Bon"},
  {id: 2, type: "Box"},
  {id: 3, type: "Drum"},
  {id: 4, type: "Pail"}
];

const Location = [
  {id: 1, type: "Abbostford"},
  {id: 2, type: "Vancouver"},
  {id: 3, type: "North Vancouver"},
  {id: 4, type: "Kitslano"}
];

const product = [
  {
    title: `Peeler Fuji Apples Organic 24" bin`,
    description: `Apples of one variety, unless designated as mixed varieties, which are not overripe, which are free from decay, worm holes, bitter pit, codling moth, freezing injury and internal breakdown. Free from PLU stickers. Apples need not be fully colored. Russeting, minor hail damage and bruising is acceptable, as long as internal quality is not materially    `,
    certification: {
      certificate: "USDA",
      certificate: "Organic"
    },
    //Origin
    cityOfOrigin: "Chilliwack",
    provinceOfOrigin: "British Columbia",
    countryOfOrigin: "Canada",
    grade: {
      type: "Peeler"
    },
    size: `Approximately 88-113ct 2.5" min - 3.75" max diameter`,
    nonGMO: "yes",
    washed: "yes",
    // Storage
    temperature: "15 - 18 Celcius",
    humidity: "90-95%",
    chillDamageSensitive: "No",
    packWeight: "~ 675 lbs per bin",
    //Price
    price: 0.33,
    minimumQuantity: 500,
    available: "from May 15th"
  },
  {
    title: `Organic Organes`,
    description: `Apples of one variety, unless designated as mixed varieties, which are not overripe, which are free from decay, worm holes, bitter pit, codling moth, freezing injury and internal breakdown. Free from PLU stickers. Apples need not be fully colored. Russeting, minor hail damage and bruising is acceptable, as long as internal quality is not materially    `,
    certification: {
      certificate: "USDA",
      certificate: "Organic"
    },
    //Origin
    cityOfOrigin: "Chilliwack",
    provinceOfOrigin: "British Columbia",
    countryOfOrigin: "Canada",
    grade: {
      type: "Peeler"
    },
    size: `Approximately 88-113ct 2.5" min - 3.75" max diameter`,
    nonGMO: "yes",
    washed: "yes",
    // Storage
    temperature: "15 - 18 Celcius",
    humidity: "90-95%",
    chillDamageSensitive: "No",
    packWeight: "~ 675 lbs per bin",
    //Price
    price: 0.33,
    minimumQuantity: 500,
    available: "from May 15th"
  }
]


module.exports = {Commodity, Certification, Grade, PackageType, Location}