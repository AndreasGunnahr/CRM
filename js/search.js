let searchBar = document.getElementById("searchBar");
let searchResult = document.getElementsByClassName("search-list")[0];
let arr = [];

const searchStates = async searchText => {
    const states = await mockup.getRandom('customer', 25);
    arr = states;
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


/* Removing the search results and overlay if the user click outside the searchbar */
searchBar.addEventListener("input", () => searchStates(searchBar.value));
searchBar.addEventListener("focus", () => {
    searchStates(searchBar.value);
    searchBar.value = "";
    searchResult.style.display = "flex";
    document.getElementById("wrapper").classList.toggle("overlay");
});
searchBar.addEventListener("focusout", (e) => {
    searchBar.value = "";
    searchResult.innerHTML = "";
    searchResult.style.display = "none";
    document.getElementById("wrapper").classList.toggle("overlay");
});

searchResult.addEventListener("mousedown",(e) =>{
    if(e.target.className == "search-customer" || e.target.className == "search-company" ){
        let userInfo = e.target.textContent.trim().split("\n");
        document.getElementsByClassName("customer-name-h1")[0].innerHTML = userInfo[0] + " - " + userInfo[1];
        generateRandomComments();
        generateContactInfo(arr,userInfo[0]);
    }
});








