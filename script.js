let farms = [];
let crops = [];
let farmers = [];
let buyers = [];

// Farm
document.getElementById("farmForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const farmName = document.getElementById("farmName").value.trim();
    const location = document.getElementById("location").value.trim();
    const farmArea = document.getElementById("farmArea").value;

    farms.push({
        name: farmName,
        location: location,
        area: farmArea
    });

    this.reset();
    displayFarms();
    updateDashboard();
});

function displayFarms() {
    const container = document.getElementById("farmRecords");

    container.innerHTML = farms.map((farm, index) => `
        <div class="record">
            <h3>${farm.name}</h3>
            <p><strong>Location:</strong> ${farm.location}</p>
            <p><strong>Area:</strong> ${farm.area} Acres</p>
        </div>
    `).join("");
}


// Crop
document.getElementById("cropForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const cropName = document.getElementById("cropName").value.trim();
    const cropType = document.getElementById("cropType").value.trim();
    const cropArea = document.getElementById("cropArea").value;
    const cropStatus = document.getElementById("cropStatus").value;

    crops.push({
        name: cropName,
        type: cropType,
        area: cropArea,
        status: cropStatus
    });

    this.reset();
    displayCrops();
    updateDashboard();
});

function displayCrops() {
    const container = document.getElementById("cropRecords");

    container.innerHTML = crops.map(crop => `
        <div class="record">
            <h3>${crop.name}</h3>
            <p><strong>Type:</strong> ${crop.type}</p>
            <p><strong>Area:</strong> ${crop.area} Acres</p>
            <p><strong>Status:</strong> ${crop.status}</p>
        </div>
    `).join("");
}


// Farmer
document.getElementById("farmerForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("farmerName").value.trim();
    const phone = document.getElementById("farmerPhone").value.trim();
    const email = document.getElementById("farmerEmail").value.trim();

    farmers.push({
        name: name,
        phone: phone,
        email: email
    });

    this.reset();
    displayFarmers();
    updateDashboard();
});

function displayFarmers() {
    const container = document.getElementById("farmerRecords");

    container.innerHTML = farmers.map(farmer => `
        <div class="record">
            <h3>${farmer.name}</h3>
            <p><strong>Phone:</strong> ${farmer.phone}</p>
            <p><strong>Email:</strong> ${farmer.email}</p>
        </div>
    `).join("");
}


// Buyer
document.getElementById("buyerForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("buyerName").value.trim();
    const phone = document.getElementById("buyerPhone").value.trim();
    const email = document.getElementById("buyerEmail").value.trim();

    buyers.push({
        name: name,
        phone: phone,
        email: email
    });

    this.reset();
    displayBuyers();
    updateDashboard();
});

function displayBuyers() {
    const container = document.getElementById("buyerRecords");

    container.innerHTML = buyers.map(buyer => `
        <div class="record">
            <h3>${buyer.name}</h3>
            <p><strong>Phone:</strong> ${buyer.phone}</p>
            <p><strong>Email:</strong> ${buyer.email}</p>
        </div>
    `).join("");
}


// Dashboard
function updateDashboard() {
    document.getElementById("farmCount").textContent = farms.length;
    document.getElementById("cropCount").textContent = crops.length;
    document.getElementById("farmerCount").textContent = farmers.length;
    document.getElementById("buyerCount").textContent = buyers.length;
}

updateDashboard();