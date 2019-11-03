let searchBar = document.getElementById("searchBar");
let searchResult = document.getElementsByClassName("search-list")[0];
let arr = [];


const searchStates = async searchText => {
    const states = await mockup.getRandom('customer', 25);
    arr = states;
    localStorage.setItem("array",JSON.stringify(arr));
    let matches = states.filter( state => {
        /* Filter our search results */
        let regex = new RegExp(`^${searchText}`, 'gi');
        return state.firstName.match(regex) || state.lastName.match(regex) || state.companyName.match(regex);    
    });

    if(searchText.length === 0){
        // matches = [];
        searchResult.innerHTML = "";
    }
    
    showSearchResult(matches);
};

function showSearchResult(matches){
    if(matches.length > 0){
        const html = matches.map(match => `
            <a class = "search-customer">
                ${match.firstName} ${match.lastName}
                <span class = "search-company"> ${match.companyName} </span>
            </a>
            
        `).join('');

        searchResult.innerHTML = html;
    }
}

/* Calling our search function for our dropdown and searchbar. Also display it for the user*/
searchBar.addEventListener("input", () => searchStates(searchBar.value));
searchBar.addEventListener("focus", () => {
    searchStates(searchBar.value);
    searchBar.value = "";
    searchResult.style.display = "flex";
    document.getElementById("wrapper").classList.toggle("overlay");
});

/* Checks if user have removed the focus from the searchbar */
searchBar.addEventListener("focusout", (e) => {
    searchBar.value = "";
    searchResult.innerHTML = "";
    searchResult.style.display = "none";
    document.getElementById("wrapper").classList.toggle("overlay");
});

/* Checks if user have chosen a customer from the dropdown */
searchResult.addEventListener("mousedown",(e) =>{
    if(e.target.className == "search-customer" || e.target.className == "search-company" ){
        localStorage.setItem("UserInfo", JSON.stringify(e.target.textContent.trim().split("\n")));
        /* Checks if the user have made a search from the dashboard - then redirect the user to the customer page */
        if(window.location.pathname == ("/dashboard.html") || window.location.pathname == ("/index.html")){
            localStorage.setItem("movedToDashboardPage", false);
            localStorage.setItem("pickedCustomerDropdown",true);
            document.location.href = "index.html";
        }
        else{
            let userInfo = e.target.textContent.trim().split("\n");
            document.getElementsByClassName("customer-name-h1")[0].innerHTML = userInfo[0] + " - " + userInfo[1];
            generateRandomComments();
            generateContactInfo(arr,userInfo[0]);
            
        }
    }
});




/* Checks if the user have made a search from the dashboard  */
window.onload  = function(){
    let movedToDashboardPage = localStorage.getItem("movedToDashboardPage");
    let clickedCustomersNav = localStorage.getItem("clickedCustomersNav");
    let pickedCustomerDropdown = localStorage.getItem("pickedCustomerDropdown");
    createSurveyContent();
   console.log("clicked customerNav" + clickedCustomersNav);
   console.log("Moved to dashboard" + movedToDashboardPage);
    if(window.location.pathname == "/index.html" && (clickedCustomersNav == "true")){ 
        document.getElementById("main-content").style.gridTemplateColumns = "1fr 1fr 420px";
        document.getElementById("main-content").style.gridTemplateRows = "50vh 50vh";
        document.getElementsByClassName("contact-container")[0].style.display = "none";
        document.getElementsByClassName("deals-container")[0].style.display = "none";
        document.getElementsByClassName("comments-container")[0].style.display = "none";
        document.getElementsByClassName("survey-container")[0].style.display = "none";
        document.getElementsByClassName("todo-container")[0].style.gridRow = "2";
        document.getElementsByClassName("todo-container")[0].style.margin = "0 0 auto 0";
        document.getElementsByTagName("bg-container")[0].style.left = "0";
        document.getElementsByTagName("bg-container")[0].style.width = "calc(100vw - 420px)";
        createAllCustomerContent();
    
        
        localStorage.setItem("clickedCustomersNav", false);

    }
    
    else if(window.location.pathname == "/index.html" && pickedCustomerDropdown == "true"){
        document.getElementsByClassName("all-customers-container")[0].style.display = "none";
        
            let userInfo = JSON.parse(localStorage.getItem("UserInfo"));
            document.getElementsByClassName("customer-name-h1")[0].innerHTML = userInfo[0] + " - " + userInfo[1];
            generateRandomComments();
            
            generateContactInfo(JSON.parse(localStorage.getItem("array")),userInfo[0]);
            // getDeals();
    }
        
        

    else if(window.location.pathname == "/dashboard.html" && movedToDashboardPage == "true"){
        localStorage.setItem("movedToDashboardPage", false);
        localStorage.setItem("clickedCustomersNav", false);
    }
}

let customerNav = document.getElementsByClassName("customerNav");
[...customerNav].forEach(nav => {
    nav.addEventListener("click", () =>{
         localStorage.setItem("clickedCustomersNav", true);
        localStorage.setItem("movedToDashboardPage", false);
    });
});

let dashboardNav = document.getElementsByClassName("dashboardNav");
[...dashboardNav].forEach(nav => {
    nav.addEventListener("click", () =>{
        localStorage.setItem("clickedCustomersNav", false);
        localStorage.setItem("movedToDashboardPage", true);
    });
});

// async function getDeals() {
//     let deals = await mockup.getRandom('Order', 10);
// deals.forEach((deal, i) => {
//     let orderWhenOnCustomerPage = new DealsOnCustomerPage(deal.productName, deal.price);
//     orderWhenOnCustomerPage.noCompanyTd();
// })
// }




