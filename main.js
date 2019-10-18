
class TodoList {
    constructor() {
        this.items = [];
        this.itemID = 0;
        this.finished = [];
    }

    //Metod för alla items som är markerade som färdiga
    finishedItem() {
        let checkedItem = document.getElementById("item");
        let finishedItems = [];

        finishedItems.push(checkedItem.checked);
        this.finished.push(new Item(finishedItems));

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
        this.checked = false;
        this.id = id;
    }

    //Metod för att lägga till ett item
    addNewItem() {
        this.itemID++;
        this.item = document.createElement("li");
        this.item.setAttribute("class", "fa fa-check-circle");
        this.newItem = document.getElementById("new_todo").value;
        this.x = document.createTextNode(this.newItem);
        document.getElementById("current_items_list").appendChild(this.item);
        this.item.appendChild(this.x);

        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        this.item.appendChild(span);
      
        for (i = 0; i < close.length; i++) {
          close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
          }
        }
     }
}



let allTodos = new TodoList();
let todo = null;

todo = new TodoItem(" ", " ");

//Lägger till en X för varje nytt item
var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Döljer item om man klickar på X
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}


// for (let item of items) {
//     let x = new Item(item.text, item.date, item.id);
//     allTodos.items.push(x);
// }

document.getElementById("todo_date").addEventListener("change", function() {
    var date = this.value;
    var dateEntered = new Date(date);
    console.log(date); 
});

document.getElementById("customer_id").addEventListener("change", function() {
    var customerID = this.value;
    // var dateEntered = new Date(customerID);
    console.log(customerID); 
});
    