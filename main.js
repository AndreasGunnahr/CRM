// class todo {
//     constructor(items){
//         this.items = []
//     }


// }

// class addItem {
//     constructor(text) {
//         this.newItem = newItem;
//         this.newDate = newDate;
//         this.item = item;
//         this.x = x;
//         this.addNewItem.addNewItem();

//     }

//     addNewItem () {
//         this.item = document.createElementById("item");
//         this.newItem = document.getElementById("new_todo").value;
//         this.x = document.createTextNode(newItem);
//         item.appendChild(x); 
//     }

//     newDate () {
//         let today = newDate();
//         today.setHours(0, 0, 0, 0);
//     }

// }

// class finishedItem {
//     constructor(finishedItem) {
//         this.finishedItem = finishedItem;
//     }

// }

class TodoList {
    constructor() {


    }
}

class TodoItem {
    constructor(text, date) {
        this.text = text;
        this.date = date;
        this.items = [];
    }

    //Metod för att lägga till ett item
    addNewItem() {
        this.item = document.createElement("li");
        this.item.setAttribute("class", "fa fa-check-circle");
        this.newItem = document.getElementById("new_todo").value;
        this.x = document.createTextNode(this.newItem);
        document.getElementById("current_items_list").appendChild(this.item);
        this.item.appendChild(this.x);

        // var myNodelist = document.getElementsByTagName("trash");
        // var i;
        // for (i = 1; i < myNodelist.length; i++) {
        //   var button = document.createElement("button");
        //   button.className = "fa fa-trash";
        //   myNodelist[i].appendChild(button);
        // }
    }

    // addNewTrash() {
    //     this.trash = document.createElement("button");
    //     this.trash.setAttribute("class", "fa fa-trash");
    //     document.getElementById("current_items_list").appendChild(this.item);
    //     this.trash.appendChild(this.trash);
    // }



    //Metod för att radera ett item
    removeItem() {

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






