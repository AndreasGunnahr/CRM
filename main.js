
class TodoList {
    constructor() {
        this.items = [];
        // this.itemID = 0;
        this.finished = [];
    }

    //Metod för alla items som är markerade som färdiga
    finishedItem() {
        // let checkedItem = document.getElementById("item");
        // let finishedItems = [];

        // finishedItems.push(checkedItem.checked);
        // this.finished.push(new Item(finishedItems));

    }

    collectItem() {
        let collect = new TodoItem();
        this.items.push(collect.item);
        console.log(this.items);
    }

}

class Item {
    constructor(finishedItems) {
        this.finishedItems = finishedItems;
    }
}

class TodoItem {
    constructor(text, date, id) {
        this.item = item;
        this.text = text;
        this.date = date;
        this.checked = 0;
        this.id = id;
        this.i = 0;
        this.itemID = [];
    }

    //Metod för att lägga till ett item
    addNewItem() {
        let date = document.getElementById("todo_date").value;
            console.log(date);
        let customer = document.getElementById("customer_id").value;    
        this.item = document.createElement("li");
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = "chk";
        this.item.appendChild(checkbox);
        this.item.setAttribute("class", "fa fa-check-circle");
        this.item.setAttribute("id", "itemID" + i);
        this.newItem = document.getElementById("new_todo").value;
        this.x = document.createTextNode(this.newItem + " " + date + " " + customer);
        document.getElementById("current_items_list").appendChild(this.item);
        this.item.appendChild(this.x);
        i++;

        this.itemID++;

        console.log(this.item);


        allTodos.collectItem();

        //Lägger till X för att kunna stänga varje item
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
                // let actualItem = (this.item + checkbox);
                if (checkbox.checked) {
                    allTodos.finished.push(checkbox);
                    console.log("checked");
                }
            });
        }

        console.log(allTodos.finished);

    }



    //         var list = document.querySelector('#chk');
    // list.addEventListener('click', function(ev) {
    //   if (ev.target === 'chk') {
    //     ev.target.classList.toggle('checked');
    //   }
    // }, false);


}



let allTodos = new TodoList();
let todo = null;

todo = new TodoItem(" ", " ");

//Lägger till en X för varje nytt item
var LI = document.getElementsByTagName("li");
var i;
for (i = 0; i < LI.length; i++) {
    var span = document.createElement("SPAN");
    var text = document.createTextNode("\u00D7");

    // var date = document.createElement("i"); 
    // date.innerHTML = "fa fa-calendar";
    span.className = "close";
    span.appendChild(text);
    // date.appendChild(date);
    LI[i].appendChild(span);
    // LI[i].appendChild(date);
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


// for (let item of items) {
//     let x = new Item(item.text, item.date, item.id);
//     allTodos.items.push(x);
// }

function openDate () {

    var date = document.getElementById('todo_date');
    if (date.style.display === 'block') {
        date.style.display = 'none';
    } else {
        date.style.display = 'block';
    }
};
    document.getElementById("todo_date").addEventListener("change", function () {
        var date = this.value;
        // var dateEntered = new Date(date);
        console.log(date);
    });


function openCustomerId () {
    var customer = document.getElementById("customer_id");
    if (customer.style.display === "block") {
        customer.style.display = "none";
    } else {
        customer.style.display = "block";
    }
    };

document.getElementById("customer_id").addEventListener("change", function () {
    var customerID = this.value;
    // var dateEntered = new Date(customerID);
    console.log(customerID);
    document.getElementsByTagName("li").innerHTML = this.value;
});
