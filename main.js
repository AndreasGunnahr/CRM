


//     newDate () {
//         let today = newDate();
//         today.setHours(0, 0, 0, 0);
//     }

var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}


class TodoList {
    constructor() {
        this.items = [];
        this.itemID = 0;
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
        this.item = document.createElement("li");
        this.item.setAttribute("class", "fa fa-check-circle");
        this.newItem = document.getElementById("new_todo").value;
        this.x = document.createTextNode(this.newItem);
        document.getElementById("current_items_list").appendChild(this.item);
        this.item.appendChild(this.x);

        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.setAttribute("class", "fa fa-trash")
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

    

    addNewTrash() {
        this.trash = document.createElement("button");
        this.trash.setAttribute("class", "fa fa-trash");
        document.getElementById("current_items_list").appendChild(this.item);
        this.trash.appendChild(this.trash);
    }



    //Metod för att radera ett item
    removeItem() {
        var close = document.getElementsByClassName("fa fa-trash");
        var i;
        for (i = 0; i < close.length; i++) {
            close[i].onclick = function () {
                var div = this.parentElement;
                div.style.display = "none";
            }
        }
    }
}



//Class för alla items som är markerade som färdiga
class FinishedItem {
    constructor() {
        this.finishedItems = [];
    }
}

let allTodos = new TodoList();
let todo = null;

todo = new TodoItem(" ", " ");


// document.getElementById("dateInput").addEventListener("change", function() {
//     var input = this.value;
//     var dateEntered = new Date(input);
//     console.log(input); //e.g. 2015-11-13
    