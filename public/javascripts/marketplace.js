// const temp = require('graphql');

var query = `query{
  getUsers{
    name,
    id
  }
}`;

fetch('/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  body: JSON.stringify({
    query,
    // variables: { dice, sides },
  })
})
  .then(r => r.json())
  .then(data => console.log('data returned:', data));

const Commodity = [
  { id: 1, commodityName: "Apple", available: true },
  { id: 2, commodityName: "Mango", available: true },
  { id: 3, commodityName: "Carrots", available: true },
  { id: 4, commodityName: "Kale", available: true },
  { id: 5, commodityName: "Spinach", available: true }
];

const Certification = [
  { id: 1, certificate: "GAP Certified" },
  { id: 2, certificate: "Organic Certified" },
  { id: 3, certificate: "Non-GMO Certified" },
  { id: 4, certificate: "USDA Organic" }
];

const Grade = [
  { id: 1, grade: "Combination" },
  { id: 2, grade: "Juicer" },
  { id: 3, grade: "Packer" },
  { id: 4, grade: "Processor" }
];

const PackageType = [
  { id: 1, type: "Bon" },
  { id: 2, type: "Box" },
  { id: 3, type: "Drum" },
  { id: 4, type: "Pail" }
];

const Location = [
  { id: 1, location: "Abbostford" },
  { id: 2, location: "Vancouver" },
  { id: 3, location: "North Vancouver" },
  { id: 4, location: "Kitslano" }
];




const Product = [
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

$(document).ready(function () {
  populateCommodity();
  populateCertificate();
  populateGrade();
  populatePackageType();
  populateLocation();
  loadProduct();
});

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function showDropdown(id) {
  document.getElementById(id).classList.toggle("show");
}

function filterFunction(inputId, parentId) {
  var input, filter, ul, li, a, i;
  input = document.getElementById(inputId);
  filter = input.value.toUpperCase();
  div = document.getElementById(parentId);
  a = div.getElementsByTagName("button");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

function commodityDropdownClick(x) {
  console.log(x);
}

// Populate Commodity DropDown
function populateCommodity() {
  var element = document.getElementById('commodity-dropdown');
  for (var i = 0; i < Commodity.length; i++) {
    if (Commodity[i]['available'] == true) {
      element.innerHTML = element.innerHTML +
        `<button class="btn active" onclick="commodityDropdownClick('` + Commodity[i]['commodityName'] + `')">` + Commodity[i]['commodityName'] + `</button><br>`
    }
  };
}

// Populate Certification DropDown
function populateCertificate() {
  var element = document.getElementById('certification-dropdown');
  for (var i = 0; i < Certification.length; i++) {
    element.innerHTML = element.innerHTML +
      `<button class="btn active" onclick="commodityDropdownClick('` + Certification[i]['certificate'] + `')">` + Certification[i]['certificate'] + `</button><br>`
  };
}

// Populate Grade DropDown
function populateGrade() {
  var element = document.getElementById('grade-dropdown');
  for (var i = 0; i < Grade.length; i++) {
    element.innerHTML = element.innerHTML +
      `<button class="btn active" onclick="commodityDropdownClick('` + Grade[i]['grade'] + `')">` + Grade[i]['grade'] + `</button><br>`
  };
}

// Populate Package Type DropDown
function populatePackageType() {
  var element = document.getElementById('packageType-dropdown');
  for (var i = 0; i < PackageType.length; i++) {
    element.innerHTML = element.innerHTML +
      `<button class="btn active" onclick="packageTypeDropdownClick('` + PackageType[i]['type'] + `')">` + PackageType[i]['type'] + `</button><br>`
  };
}

// Populate Location
function populateLocation() {
  var element = document.getElementById('location-dropdown');
  for (var i = 0; i < Location.length; i++) {
    element.innerHTML = element.innerHTML +
      `<button class="btn active" onclick="locationDropdownClick('` + Location[i]['location'] + `')">` + Location[i]['location'] + `</button><br>`
  };
}


function loadProduct(){
  var element = document.getElementById('test');

  for(var i=0; i<7; i++){
    element.innerHTML = element.innerHTML +

  `<div class="card" style="width: 18rem;">
      <img class="card-img-top" src="..." alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${Product[0].title}</h5>
        <p class="card-text">${Product[0].description.slice(0,100)} ... </p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item"><strong>Price: </strong> $${Product[0].price}/Kg</li>
        <li class="list-group-item"><strong>Min Quantity:</strong>  ${Product[0].minimumQuantity} Kg (Per Order)</li>
        <li class="list-group-item"><strong>Origin:</strong>  ${Product[0].cityOfOrigin}, ${Product[0].provinceOfOrigin}</li>
      </ul>
      <div class="card-body">
        <a href="#" class="card-link">Add to Cart</a>
        <a href="#" class="card-link">View More</a>
      </div>
        <div class="card-footer">
        <small class="text-muted">Deliver is Available from ${Product[0].available}</small>
      </div>
    </div>`
  }
}