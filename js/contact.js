let contactArray = ["Contact","Name","Email","Phone","Company"];

let contactContainer = document.getElementsByClassName("contact-container")[0];
let contactH1 = document.createElement("h1");
contactH1.innerHTML = contactArray[0]
contactContainer.appendChild(contactH1);



function generateContactInfo(arr,name){
    contactContainer.innerHTML = "";
    let contactH1 = document.createElement("h1");
    contactH1.innerHTML = contactArray[0]
    contactContainer.appendChild(contactH1);
    arr.forEach(element => {
        let fullName = element.firstName + " " + element.lastName; 
        if(fullName === name){
            console.log(element);
            let index = 1;
            for(let item in element){
                if(item != "id" && !element[item].includes("/") && item != "lastName"){
                    console.log(item);
                    console.log(index);
                    if(index <= 5){
                        let contactH3 = document.createElement("h3");
                        contactH3.innerHTML = contactArray[index]
                        contactContainer.appendChild(contactH3);
                    }
                    if(index == 1){
                        let contactH2 = document.createElement("h2");
                        contactH2.innerHTML = name;
                        contactContainer.appendChild(contactH2);
                    }else if(index != 1){
                        let contactH2 = document.createElement("h2");
                        contactH2.innerHTML = element[item];
                        contactContainer.appendChild(contactH2);
                    }
                    index++;
                }
            }
        }
     
    });
    
}
