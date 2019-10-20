class DropdownContent{
    constructor(){
        this.icons = ["\uf007","\uf0b1","\uf0e0","\uf095","\uf155"];
        this.text = ["Full name", "Company","Email", "Phone","Price"];
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
let createCustomer = document.getElementById("createCustomer");
dropdownInformation.generateContent(dropdown);
dropdownInformation.generateContent(createCustomer);


/* When the user clicks on the button, toggle between hiding and showing the dropdown */ 
function toggleDropdown() {
    if(window.screen.width < 779){
        document.getElementById("sidebar").style.width = "0";
        document.getElementById("wrapper").classList.toggle("overlay");
        document.getElementsByClassName("create-screen")[0].classList.toggle('show');
        // document.getElementsByClassName("create-screen")[0].style.height = "100vh";
    }else{
        document.getElementById("myDropdown").classList.toggle("show");
        document.getElementById("wrapper").classList.toggle("overlay");
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
}


/* Resetting our menus depending on which screen size we have */ 
window.addEventListener('resize', () =>{
    let firstBreakpoint = window.matchMedia( "(min-width: 779px)" );
    let secondBreakpoint = window.matchMedia( "(max-width: 779px)" );
    if(secondBreakpoint.matches){
        dropdownContent.classList.remove('show');
        // document.getElementById('wrapper').classList.remove('overlay');
    }
    else if(firstBreakpoint.matches){
        document.getElementsByClassName("create-screen")[0].classList.remove('show');
        document.getElementById('wrapper').classList.remove('overlay');
        document.getElementById("sidebar").style.width = "0px";
    }
  });

