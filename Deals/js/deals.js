class Deals {
    constructor(company, contact, product, price) {
        this.deal;
        this.company = company;
        this.contact = contact;
        this.product = product;
        this.price = price;

    }


async getDeals() {
    let deals = await mockup.getRandom('Order', 5);
    let companies = await mockup.getRandom('customer', 5);
    companies = companies.map((customer) => {
        return customer.companyName;
    })

    console.log(companies);

    deals.forEach((deal, i) => {
        let orderDeal = new Deals(deal.company, deal.contact, deal.product, deal.price);
        orderDeal.createDeal();
    })
}

createDeal() {
    
    var table = document.getElementsByClassName("deals_table");
    console.log(table);
    
    var row = document.createElement("tr");
    console.log(row);
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");    

    td1.innerHTML = document.getElementById("company").value;
    td2.innerHTML  = document.getElementById("contact").value;
    td3.innerHTML  = document.getElementById("product").value;
    td4.innerHTML  = document.getElementById("price").value;

    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    row.appendChild(td4);

    table[0].children[0].appendChild(row);
};
}


let allDeals = new Deals();
// let deal = null;

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

// function closePlus () {
//         var add = document.getElementsByClassName("addDeal_container")[0];
//         if (add.style.display === "block") {
//             add.style.display = "none";
//             document.getElementsByClassName("deals_table")[0].style.display = "block";
//         } else {
//             add.style.display = "block";
//             document.getElementsByClassName("deals_table")[0].style.display = "none";
//         }
// };

// document.getElementsByClassName("grid")[0].style.display = "block";
// document.getElementById("header").style.display = "none";