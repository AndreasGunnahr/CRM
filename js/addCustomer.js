class dropdownContent{
    constructor(){
        this.icons = ["\uf007","\uf0b1","\uf0e0","\uf095","\uf155"];
        this.text = ["Full name", "Company","Email", "Phone","Price"];
        this.fontAwesome = "fontAwesome";
        this.dropBtn = "drop-btn";

    }

    generateContent(dropdown){
        let exit = document.createElement("i");
        exit.classList.add("fas");
        exit.classList.add("fa-times");
        dropdown.appendChild(exit);
        let h1 = document.createElement("h1");
        h1.innerHTML = "Add new customer";
        h1.classList.add("add-h1");
        dropdown.appendChild(h1);
        for(let x in this.icons){
            console.log(x);
            let input = document.createElement("input");
            input.classList.add(this.fontAwesome);
            input.classList.add(this.dropBtn);
            input.setAttribute("placeholder", this.icons[x] + " " + this.text[x]);
            dropdown.appendChild(input);
        }
        let button = document.createElement("button");
        button.innerHTML = "Add customer";
        button.classList.add("add-btn");
        dropdown.appendChild(button);
    }
}

/* Creating our dropdown menu by our dropdownContent class*/
let dropdownInformation = new dropdownContent();
let dropdown = document.getElementById("myDropdown");
dropdownInformation.generateContent(dropdown);


/* When the user clicks on the button, toggle between hiding and showing the dropdown */ 
function toggleDropdown() {
    if(window.screen.width < 779){

    }else{
        document.getElementById("myDropdown").classList.toggle("show");
        document.getElementById("wrapper").classList.toggle("overlay");
    }
}

/* Close the dropdown if the user clicks outside of it */
let exitDropdown = document.getElementsByClassName("fa-times")[0].addEventListener("click", () => {
    var dropdownContent = document.getElementsByClassName("dropdown-content")[0];
    dropdownContent.classList.remove('show');
    document.getElementById('wrapper').classList.remove('overlay')
});

