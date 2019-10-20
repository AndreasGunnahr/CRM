class Navbar{
    constructor(){
        this.icons = ["\uf015","\uf007","\uf234","\uf2f5"];
        this.text = ["Dashboard", "Customer","Add customer", "Log out"];
        this.fontAwesome = "fontAwesome";
        this.dropBtn = "drop-btn";
    }

    createLinks(position1,position2,index){
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
                position2.appendChild(link);
                // sidebarContent.appendChild(link);
                link.addEventListener("click", toggleDropdown);
            } else{
                position1.appendChild(link);
                // sidebarContent.appendChild(link);
            }
        }
    }
    
    // createSidebarLinks(position,index){
    //     let link = document.createElement("a");
    //     link.innerHTML = "X";
    //     link.classList.add("closebtn");
    //     link.addEventListener("click", closeNav);
    //     position.appendChild(link);
    //     for(let x = index; x < index + 2; x++){
    //         let link = document.createElement("a");
    //         let span = document.createElement("span");
    //         link.innerHTML = this.icons[x];
    //         span.innerHTML = this.text[x];
    //         link.appendChild(span);
    //         link.classList.add(this.fontAwesome);
    //         if(x == 2){
    //             link.classList.add(this.dropBtn);
    //             span.classList.add(this.dropBtn);
    //             let dropdownContainer = document.getElementsByClassName("dropdown")[0];
    //             dropdownContainer.appendChild(link);
    //             link.addEventListener("click", toggleDropdown);
    //         }
    //         position.appendChild(link);
    //         console.log(position)
    //     }
    // }
    
    createInput(position){
        let input = document.createElement("input");
        input.classList.add(this.fontAwesome);
        input.classList.add(this.dropBtn);
        input.setAttribute("placeholder", "\uf002 Search for customer");
        position.appendChild(input);
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

navbarMenu.createLinks(left,dropdownContainer,0);
navbarMenu.createLinks(right,dropdownContainer,2);
navbarMenu.createInput(center);
navbarMenu.createLinks(sidebarContent,0);
navbarMenu.createLinks(sidebarContent,2);




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