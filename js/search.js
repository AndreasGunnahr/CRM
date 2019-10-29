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
        if(window.location.pathname == ("/dashboard.html")){
            localStorage.setItem("checker", true);
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


/* Checks if the user have made a search from the dash  */
window.onload  = function(){
    let check = localStorage.getItem("checker");
    if((window.location.pathname == ("/index.html")) && check){
        let userInfo = JSON.parse(localStorage.getItem("UserInfo"));
        localStorage.setItem("checker", false);
        document.getElementsByClassName("customer-name-h1")[0].innerHTML = userInfo[0] + " - " + userInfo[1];
        generateRandomComments();
        generateContactInfo(JSON.parse(localStorage.getItem("array")),userInfo[0]);
        createSurveyContent();
    }
}








