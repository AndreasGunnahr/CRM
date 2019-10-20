class Navbar{
    constructor(){
        this.icons = ["\uf015","\uf007","\uf234","\uf2f5"];
        this.text = ["Dashboard", "Customer","Add customer", "Log out"];
        this.fontAwesome = "fontAwesome";
        this.dropBtn = "drop-btn";
    }

    createLinks(position,index){
        for(let x = index; x < index + 2; x++){
            let link = document.createElement("a");
            let span = document.createElement("span");
            link.innerHTML = this.icons[x];
            span.innerHTML = this.text[x];
            link.appendChild(span);
            link.classList.add(this.fontAwesome);
            if(x == 2){
                link.classList.add(this.dropBtn);
                span.classList.add(this.dropBtn);
                dropdownContainer.appendChild(link);
                sidebarContent.appendChild(link.cloneNode(true));
                link.addEventListener("click", toggleDropdown);
            } else{
                position.appendChild(link);
                sidebarContent.appendChild(link.cloneNode(true));
            }
        }
    }
    
    createInput(position){
        let input = document.createElement("input");
        input.classList.add(this.fontAwesome);
        input.classList.add(this.dropBtn);
        input.setAttribute("placeholder", "\uf002 Search for customer");
        position.appendChild(input);
    }

    createExit(){
        let exit = document.createElement("i");
        exit.classList.add("fas");
        exit.classList.add("fa-times");
        exit.addEventListener("click", closeNav);
        sidebarContent.appendChild(exit);
    }
    
    createImage(){
        let image = document.createElement("img");
        image.src = "./img/logo.svg";
        sidebarContent.appendChild(image);
    }
 }

class Hamburger{
    constructor(){
        this.line = ["bar1","bar2","bar3"];
    }

    createLines(position){
        this.line.forEach(element => {
            let div = document.createElement("div");
            div.classList.add(element);
            position.appendChild(div);
        });
    }
}

/* Creating our top navigation menu by our navbar- and hamburger class*/
let navbarMenu = new Navbar();
let hamburgerMenu = new Hamburger();
let hamburger = document.getElementById("hamburger");
let left = document.getElementsByClassName("left")[0];
let center = document.getElementsByClassName("center")[0];
let right = document.getElementsByClassName("right")[0];
let sidebarContent = document.getElementsByClassName("sidebar-content")[0];
let dropdownContainer = document.getElementsByClassName("dropdown")[0];

navbarMenu.createImage();
navbarMenu.createExit();
navbarMenu.createLinks(left,0);
navbarMenu.createLinks(right,2);
navbarMenu.createInput(center);
hamburgerMenu.createLines(hamburger);


/* Open our sidebar when clicking the hamburger menu */
function openNav() {
    document.getElementById("sidebar").style.width = "300px";
    // document.getElementById("main").style.marginLeft = "250px";
}

/* Close our sidebar when clicking the X */
function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    // document.getElementById("main").style.marginLeft= "0";
}