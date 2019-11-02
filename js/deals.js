class Deals {
    constructor() {
        this.companies;

    }

    async getDeals() {
        let deals = await mockup.getRandom('Order', 10);
        let companies = await mockup.getRandom('customer', 10);
        companies = companies.map((customer) => {
            return customer.companyName;
        })

        deals.forEach((deal, i) => {
            let orderDeal = new Order(deal.company, deal.fullName, deal.productName, deal.price);
            orderDeal.generateRandom();
        })
    }
}

class Order {
    constructor(company, contact, product, price) {
        this.deal;
        this.company = company;
        this.contact = contact;
        this.product = product;
        this.price = price;
        this.table = document.getElementsByClassName("deals_table");
        

    }

    generateRandom() {
        var row = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.setAttribute("class", "td1");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");

        td1.innerHTML = this.company;
        td2.innerHTML = this.contact;
        td3.innerHTML = this.product;
        td4.innerHTML = this.price;

        row.appendChild(td1);
        row.appendChild(td2);
        row.appendChild(td3);
        row.appendChild(td4);
        this.table[0].children[0].appendChild(row);

// if (window.location.pathname("/index.html")) {
//     td1.style.display = "none";   
// }
    }

    createDeal() {

        var row2 = document.createElement("tr");
        let td5 = document.createElement("td");
        let td6 = document.createElement("td");
        let td7 = document.createElement("td");
        let td8 = document.createElement("td");

        let compvalue = document.getElementById("company").value;
        let contvalue = document.getElementById("contact").value;
        let prodvalue = document.getElementById("product").value;
        let pricevalue = document.getElementById("price").value;
        console.log(compvalue);

        td5.innerHTML = compvalue;
        td6.innerHTML = contvalue;
        td7.innerHTML = prodvalue;
        td8.innerHTML = pricevalue;

        row2.appendChild(td5);
        row2.appendChild(td6);
        row2.appendChild(td7);
        row2.appendChild(td8);
        this.table[0].children[0].appendChild(row2);

        document.getElementsByClassName("deals_table")[0].style.display = "block";
        document.getElementsByClassName("addDeal_container")[0].style.display = "none";
    };

    removeTd () {
        window.location.pathname("customer");
        document.getElementsByClassName("thcompany")[0].style.display = "none";
        document.getElementById("company")[0].style.display = "none";
        this.company.style.display = "none";

    }
}


let allDeals = new Deals();
let deal = null;
let allOrders = new Order();

function openPlus() {
    var add = document.getElementsByClassName("addDeal_container")[0];
    var table = document.getElementsByClassName("deals_table")[0];
    
    if (add.style.display === "block") {
        add.style.display = "none";
        table.style.display = "block";
    } else {
        add.style.display = "block";
        table.style.display = "none";
    }
};


document.addEventListener("DOMContentLoaded", function () {
    allDeals.getDeals();
});




