class Navbar {
  constructor() {
    this.icons = ["\uf015", "\uf007", "\uf234", "\uf2f5"];
    this.text = ["Dashboard", "Customer", "Add customer", "Log out"];
    this.href = ["dashboard.html", "index.html", "frontpages.html"];
    this.fontAwesome = "fontAwesome";
    this.dropBtn = "drop-btn";
  }

  createLinks(position, index) {
    for (let x = index; x < index + 2; x++) {
      let link = document.createElement("A");
      let span = document.createElement("SPAN");
      link.innerHTML = this.icons[x];
      span.innerHTML = this.text[x];
      link.appendChild(span);
      link.classList.add(this.fontAwesome);
      if (x == 0) {
        link.classList.add("dashboardNav");
        link.href = this.href[0];
        position.appendChild(link);
        sidebarContent.appendChild(link.cloneNode(true));
      } 
      else if (x == 1) {
        link.classList.add("customerNav");
        link.href = this.href[1];
        position.appendChild(link);
        sidebarContent.appendChild(link.cloneNode(true));
      }
      else if (x == 2) {
        link.classList.add(this.dropBtn);
        span.classList.add(this.dropBtn);
        dropdownContainer
          .appendChild(link)
          .addEventListener("click", toggleDropdown);
        sidebarContent
          .appendChild(link.cloneNode(true))
          .addEventListener("click", toggleDropdown);
      } else if (x == 3) {
        link.href = this.href[2];
        position.appendChild(link);
        sidebarContent.appendChild(link.cloneNode(true));
      } else {
        position.appendChild(link);
        sidebarContent.appendChild(link.cloneNode(true));
      }
    }
    // for(let x = 0; x < 2; x++){
    //     console.log(dashboardNav[x])   
    // }
    // dashboardNav[0].addEventListener("click", () =>{
    //     console.log("här")
    // });
    // }
    // [...dashboardNav].forEach(nav => {
    //     nav.addEventListener("click", () => {
    //         document.location.href = this.href[0];
    //         localStorage.setItem("clickedCustomersNav", false);
    //         localStorage.setItem("movedToDashboardPage", true);
    //     });
    // });
    // document.getElementById("customerNav").addEventListener("click", () => {
    //   document.location.href = this.href[1];
    //   localStorage.setItem("clickedCustomersNav", true);
    //   localStorage.setItem("movedToDashboardPage", false);
    // });
  }

  createInput(position) {
    let input = document.createElement("INPUT");
    input.classList.add(this.fontAwesome);
    input.classList.add(this.dropBtn);
    input.setAttribute("id", "searchBar");
    input.setAttribute("placeholder", "\uf002 Search for customer or company");
    position.appendChild(input);
  }

  createExit() {
    let exit = document.createElement("I");
    exit.classList.add("fas");
    exit.classList.add("fa-times");
    exit.addEventListener("click", closeNav);
    sidebarContent.appendChild(exit);
  }

  createImage() {
    let logo = document.createElement("IMG");
    logo.src = "./img/logo.svg";
    sidebarContent.appendChild(logo);
  }
}

class Hamburger {
  constructor() {
    this.line = ["bar1", "bar2", "bar3"];
  }

  createLines(position) {
    this.line.forEach(element => {
      let div = document.createElement("DIV");
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
navbarMenu.createLinks(left, 0);
navbarMenu.createLinks(right, 2);
navbarMenu.createInput(center);
hamburgerMenu.createLines(hamburger);

/* Open our sidebar when clicking the hamburger menu */
function openNav() {
  document.getElementById("sidebar").style.width = "300px";
  secondCheck = true;
  // document.getElementById("main").style.marginLeft = "200px";
}

/* Close our sidebar when clicking the X */
function closeNav() {
  document.getElementById("sidebar").style.width = "0";
  secondCheck = false;
  // document.getElementById("main").style.marginLeft= "0";
}
