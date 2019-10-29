let contactArray = ["Contact","Name","Email","Phone","Company"];

let contactContainer = document.getElementsByClassName("contact-container")[0];
// let contactH1 = document.createElement("h1");
// contactH1.innerHTML = contactArray[0]
// contactContainer.appendChild(contactH1);
let emailAdress,fullName;  



function generateContactInfo(arr,name){
    contactContainer.innerHTML = "";
    let contactH1 = document.createElement("h1");
    contactH1.innerHTML = contactArray[0]
    contactContainer.appendChild(contactH1);
    arr.forEach(element => {
        fullName = element.firstName + " " + element.lastName; 
        if(fullName === name){
            let index = 1;
            for(let item in element){
                if(item != "id" && !element[item].includes("/") && item != "lastName"){
                    if(index <= 5){
                        let contactH3 = document.createElement("h3");
                        contactH3.innerHTML = contactArray[index]
                        contactContainer.appendChild(contactH3);
                    }
                    if(index == 1){
                        let contactA = document.createElement("a");
                        contactA.innerHTML = name;
                        contactContainer.appendChild(contactA);
                    }else if(index != 1){
                        let contactA = document.createElement("a");
                        contactA.innerHTML = element[item];
                        if(item == "email"){
                            emailAdress = element[item];
                            contactA.setAttribute("id","sendEmail");
                        }
                        contactContainer.appendChild(contactA);
                    }
                    index++;
                }
            }
        }
     
    });

    // let emailSend = document.getElementById("sendEmail").addEventListener("click", () => { 
    //     var emailBodyText = fetch("email.json")
    //         .then((response) => response.json())
    //         .then((responseJSON) => {
    //         let subjectEmail= "Help your company create better customer relationships! ";
    //         let bodyEmail = responseJSON.body.replace(/\s\s+/g, "%0D%0A%0D%0A");
    

    //         window.open("mailto:" + emailAdress + "?subject=" + subjectEmail +  "&body=" + bodyEmail);
            
    //     });
    // }); 
}






// console.log()