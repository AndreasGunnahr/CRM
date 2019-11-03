class Customer{
    constructor(firstname,lastname,avatar,email,phone,company){
        this.firstname = firstname
        this.lastname = lastname 
        this.avatar = avatar; 
        this.email = email;
        this.phone = phone
        this.company = company 
    } 
}


class DropdownContent{
    constructor(){
        this.icons = ["\uf007","\uf0b1","\uf0e0","\uf095","\uf0c1"];
        this.text = ["Full name", "Company","Email", "Phone","Image"];
        this.fontAwesome = "fontAwesome";
        this.dropBtn = "drop-btn";
    }

    generateContent(menu){
        let exit = document.createElement("i");
        exit.classList.add("fas");
        exit.classList.add("fa-times");
        menu.appendChild(exit);
        let h1 = document.createElement("h1");
        h1.innerHTML = "Add new customer";
        h1.classList.add("add-h1");
        menu.appendChild(h1);
        for(let x in this.icons){
            let input = document.createElement("input");
            input.classList.add(this.fontAwesome);
            input.classList.add(this.dropBtn);
            input.setAttribute("placeholder", this.icons[x] + " " + this.text[x]);
            menu.appendChild(input);
        }
        let button = document.createElement("button");
        button.innerHTML = "Add customer";
        button.classList.add("add-btn");
        menu.appendChild(button);
    }
}

/* Creating our dropdown menu by our dropdownContent class*/
let dropdownInformation = new DropdownContent();
let dropdown = document.getElementById("myDropdown");
let dropdownContent = document.getElementsByClassName("dropdown-content")[0];
let createCustomerMenu = document.getElementById("createCustomer");
dropdownInformation.generateContent(dropdown);
dropdownInformation.generateContent(createCustomerMenu);


/* When the user clicks on the button, toggle between hiding and showing the dropdown */ 
function toggleDropdown() {
    if(document.body.clientWidth < 779){
        document.getElementById("sidebar").style.width = "0px"; 
        document.getElementsByClassName("create-screen")[0].classList.add('show');
        document.getElementById("main-content").style.display = "none";
        secondCheck = true;
    }else{
        document.getElementById("myDropdown").classList.add("show");
        document.getElementById("searchBar").style.zIndex = "2";
        document.getElementById("wrapper").classList.add("overlay");
        firstCheck = true;
    }
}

/* Close the dropdown if the user clicks outside of it */
let exitMenu = document.getElementsByClassName("fa-times");
[...exitMenu].forEach(element => {
       element.addEventListener("click", resetStates); 
});

function resetStates(){
    dropdownContent.classList.remove('show');
    document.getElementsByClassName("create-screen")[0].classList.remove('show');
    document.getElementById('wrapper').classList.remove('overlay')
    document.getElementById("main-content").style.display = "grid";
}


/* Resetting our menus depending on which screen size we have */ 
let firstCheck,secondCheck;
window.addEventListener('resize', () => {
    let firstBreakpoint = window.matchMedia( "(min-width: 779px)" );
    let secondBreakpoint = window.matchMedia( "(max-width: 779px)" );
    if(secondBreakpoint.matches){;
        if(firstCheck){
            document.getElementById("wrapper").classList.remove("overlay");
            dropdownContent.classList.remove('show')
            // document.getElementById("main-content").style.display = "grid";
            firstCheck = false;
        }
       
    }
    else if(firstBreakpoint.matches){
        if(secondCheck){
            console.log("här")
            document.getElementById("sidebar").style.width = "0px";
            document.getElementById("wrapper").classList.remove("overlay");
            document.getElementsByClassName("create-screen")[0].classList.remove('show');
            document.getElementById("main-content").style.display = "grid";
            secondCheck = false;
        }
    }
});

let newCustomer;
let addCustomer = document.getElementsByClassName("add-btn");
[...addCustomer].forEach(button => {
    button.addEventListener("click", () => {
        let storeArray = [];
        let inputFields = document.getElementsByClassName("drop-btn"); 
        [...inputFields].forEach(element => {
            if(element.value != "" && !undefined && element.tagName == "INPUT"){
                storeArray.push(element.value);
            }
            element.value = "";
        });
        newCustomer = new Customer(storeArray[0].split(" ")[0], storeArray[0].split(" ")[1], storeArray[1], storeArray[2], storeArray[3],storeArray[4]);
        mockup.post("customer",newCustomer);
        resetStates();
    });    
});
