class Deals {
    constructor() {
        this.companies;

    }


async getDeals() {
    let deals = await mockup.getRandom('Order', 5);
    let companies = await mockup.getRandom('customer', 5);
    companies = companies.map((customer) => {
        return customer.companyName;
    })

    // console.log(companies);

    deals.forEach((deal, i) => {
        let orderDeal = new Order (deal.company, deal.fullName, deal.productName, deal.price);
        orderDeal.createDeal();
    })
}

addNewDeal () {

}

}

class Order {
    constructor(company, contact, product, price) {
        this.deal;
        this.company = company;
        this.contact = contact;
        this.product = product;
        this.price = price;
    }

    generateRandom() {

    }

createDeal() {

    var table = document.getElementsByClassName("deals_table");
  
    
    var row = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");  

    td1.innerHTML = document.getElementById("company").value;
    td2.innerHTML  = document.getElementById("contact").value;
    td3.innerHTML  = document.getElementById("product").value;
    td4.innerHTML  = document.getElementById("price").value;

    td1.innerHTML = this.company;
    td2.innerHTML  = this.contact;
    td3.innerHTML  = this.product;
    td4.innerHTML  = this.price;

    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    row.appendChild(td4);

    // let td5 = document.createElement("td");
    // let td6 = document.createElement("td");
    // let td7 = document.createElement("td");
    // let td8 = document.createElement("td");  


    
    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    row.appendChild(td4);


    // row.appendChild(this.company, this.contact, this.product, this.price);

    table[0].children[0].appendChild(row);

    document.getElementsByClassName("deals_table")[0].style.display = "block";
    document.getElementsByClassName("addDeal_container")[0].style.display = "none";
};
}


let allDeals = new Deals();
let deal = null;
let allOrders = new Order ();

function openPlus() {
    var add = document.getElementsByClassName("addDeal_container")[0];
    if (add.style.display === "block") {
        add.style.display = "none";
        document.getElementsByClassName("deals_table")[0].style.display = "block";
    } else {
        add.style.display = "block";
        document.getElementsByClassName("deals_table")[0].style.display = "none";
    }
};


document.addEventListener("DOMContentLoaded", function () {
    allDeals.getDeals();
});