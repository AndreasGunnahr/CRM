
class TodoList {
    constructor() {
        this.items = [];
        this.finished = [];
        this.textExamples = [
            "Meeting",
            "Check up on order",
            "Send invoice reminder",
            "Introduce to CEO",
            "Call",
            "Email",
            "Add new order",
            "Coffee at Starbucks",
            "Send NPS-survey",
            "Remove customer from list",
            "Add new contact person",
            "Schedule a meeting",
            "Present to client",
            "Deliver to customer",
        ]
    }

    collectItem() {
        let collect = new TodoItem();
        this.items.push(collect.item);
    }

    //Lägger till nytt item och pushar upp till array.
    addNewItem() {
        let date = document.getElementById("todo_date").value;
        let customer = document.getElementById("customer_id").value;
        let text = document.getElementById("new_todo").value;
        let item = new TodoItem(text, date, customer);
        item.createHTML();
        item.addToDatabase();
        this.items.push(item);
        document.getElementById("new_todo").value = "";
        exportTodo(this.items);
    }

    //Hämtar 5 random todos för 5 random kunder från api.
    async getItems() {
        let items = await mockup.getRandom('todo', 7);
        let companies = await mockup.getRandom('customer', 7);
        companies = companies.map((customer) => {
            return customer.companyName;
        })

        //För varje item ska ett random datum skrivas ut.
        items.forEach((item, i) => {
            let year = 2019 + Math.round(1 - Math.sin(Math.random() * (Math.PI)));
            let month = Math.round(Math.random() * (12-7 + 1) + 7);
            let date = 1 + Math.round(Math.random() * 30 + 1);
            let rand = Math.floor(Math.random() * this.textExamples.length) - 1;
            let data = this.textExamples[rand];
            let todoItem = new TodoItem(data, `${year}-${month}-${date}`, companies[i]);
            todoItem.createHTML();
            this.items.push(todoItem);
            exportTodo(this.items);
        })
    }
}

class Item {
    constructor(finishedItems) {
        this.finishedItems = finishedItems;
    }
}

class TodoItem {
    constructor(text, date, customer) {
        this.item;
        this.text = text;
        this.date = date;
        this.checked = 0;
        this.customer = customer;
        this.i = 0;
        this.itemID = [];
    }

    //Metod för att skapa ett item
    createHTML() {
        this.item = document.createElement("li");
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = "chk";
        this.item.appendChild(checkbox);
        this.item.setAttribute("id", "itemID" + i);
        this.x = document.createTextNode(this.text + "  -  " + this.customer + "  -  " + this.date);
        document.getElementById("current_items_list").appendChild(this.item);
        this.item.appendChild(this.x);
        i++;

        this.itemID++;
        //allTodos.collectItem();

        //Lägger till X för att kunna stänga/ta bort varje item
        var span = document.createElement("SPAN");
        var text = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(text);
        this.item.appendChild(span);

        for (i = 0; i < close.length; i++) {
            close[i].onclick = function () {
                var div = this.parentElement;
                div.style.display = "none";
            }
        }

        for (let i = 0; i < allTodos.items.length; i++) {
            document.getElementById("chk").addEventListener("click", function (e) {
                if (checkbox.checked) {
                    allTodos.finished.push(checkbox);
                    console.log("checked");
                }
            });
        }
    }

    //Sätter in itemet i databasen
    addToDatabase() {  
        let data = {
            data: this.text,
            rank: Math.round(Math.random() * 100),
            date: this.date,
        };

        mockup.post('todo', data);
    }
}

let allTodos = new TodoList();
let todo = null;

//Lägger till en X för varje nytt item
var LI = document.getElementsByTagName("li");
var i;
for (i = 0; i < LI.length; i++) {
    var span = document.createElement("SPAN");
    var text = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(text);
    LI[i].appendChild(span);
}

// Döljer item om man klickar på X
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

//Döljer och visar datum-inputen
function openDate() {
    var date = document.getElementById('todo_date');
    var customer = document.getElementById("customer_id");
    if (date.style.display === 'block') {
        date.style.display = 'none';
        customer.style.display = "none";
    } else {
        date.style.display = 'block';
    }
};

document.getElementById("todo_date").addEventListener("change", function () {
    var date = this.value;
    console.log(date);
});

//Döljer och visar kund-inputen och skriver ut när användaren skrivit in vald kund
function openCustomerId() {
    var customer = document.getElementById("customer_id");
    var date = document.getElementById('todo_date');
    if (customer.style.display === "block") {
        customer.style.display = "none";
        date.style.display = "none";
    } else {
        customer.style.display = "block";
    }
};

document.getElementById("customer_id").addEventListener("change", function () {
    var customerID = this.value;
    console.log(customerID);
    document.getElementsByTagName("li").innerHTML = this.value;
});

//Kallar på getItems för att generera ut 5 random items när sidan laddas.
document.addEventListener("DOMContentLoaded", function () {
    allTodos.getItems();
});



