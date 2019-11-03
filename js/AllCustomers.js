const tableHeaders = ["Name","Company","Email","Phone"];
const tableContainer = document.getElementsByClassName("show-all-table")[0];
const customerContainer = document.getElementsByClassName("show-all-customers-container")[0];
let searchCustomer = document.getElementById("searchAllCustomer");
let customerTbody = document.createElement("tbody");
let customerTable = document.createElement("TABLE");
let hasClickedCustomer = false;
let arrayAllCustomers,tempArr = [];


const searchAllCustomer = async searchText => {
    const states = await mockup.getRandom('customer', 25);
    arrayAllCustomers = states;
    localStorage.setItem("array",JSON.stringify(arrayAllCustomers));
    let matches = states.filter( state => {
        /* Filter our search results */
        let regex = new RegExp(`^${searchText}`, 'gi');
        return state.firstName.match(regex) || state.lastName.match(regex) || state.companyName.match(regex);    
    });

    if(searchText.length === 0){
        // matches = [];
        searchResult.innerHTML = "";
    }

    showAllCustomers(matches);
};

function showAllCustomers(matches){
    if(matches.length > 0){
        const html = matches.map(match => `
            <tr class = "row">
                <td>${match.firstName} ${match.lastName}</td>
                <td>${match.companyName}</td>
                <td>${match.email}</td>
                <td>${match.phoneNumber}</td>
            </tr>
            
        `).join('');

        customerTbody.innerHTML = html;
        customerTable.appendChild(customerTbody);
        let rows = document.getElementsByClassName("row");
        for(var row in rows){
           rows[row].addEventListener("click", (e) =>{
                window.location.href = "/index.html";
                tempArr[0] = e.path[1].children[0].innerHTML;
                tempArr[1] = e.path[1].children[1].innerHTML;
                localStorage.setItem("UserInfo", JSON.stringify(tempArr));
                localStorage.setItem("pickedAllCustomer",true);
                hasClickedCustomer = true;
           });
        }
    }
}

window.addEventListener('resize', e => {
    if(window.innerWidth < 980) {
        setDisplayTodoCalendar(false);
    } else {
        setDisplayTodoCalendar(true);
    }
})

function setDisplayTodoCalendar(display) {
    let todo = document.getElementsByClassName('todo-container')[0];
    let calendar = document.getElementsByClassName('calender-container')[0];
    if(display && !hasClickedCustomer) {
        todo.style.display = 'initial';
        calendar.style.display = 'initial';
    } else if(!display && !hasClickedCustomer) {
        todo.style.display = 'none';
        calendar.style.display = 'none';
    }
}

function createAllCustomerContent(){
    tableContainer.appendChild(customerTable);
    let customerThead = document.createElement("THEAD");
    tableHeaders.forEach(header => {
        let customerTh = document.createElement("TH");
        customerTh.innerHTML = header;
        customerThead.appendChild(customerTh);
    });
    customerTable.appendChild(customerThead);
    searchAllCustomer(searchCustomer.value);
}


searchCustomer.addEventListener("input", () => searchAllCustomer(searchCustomer.value));