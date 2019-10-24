let contactArray = ["Contact","Name","Email","Phone","Company"];

let contactContainer = document.getElementsByClassName("contact-container")[0];
let contactH1 = document.createElement("h1");
contactH1.innerHTML = contactArray[0]
contactContainer.appendChild(contactH1);



function generateContactInfo(arr,name){
    let fullName;
    let emailAdress;  
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

    document.getElementById("sendEmail").addEventListener("click",() =>{
        var emailBodyText = fetch("email.json")
            .then((response) => response.json())
            .then((responseJSON) => {
            // do stuff with responseJSON here...
            // console.log(responseJSON.body);
            let subjectEmail= "Help your company create better customer relationships! ";
            let bodyEmail = responseJSON.body.replace(/\s\s+/g, "%0D%0A%0D%0A");
    
            console.log(bodyEmail);
            // let test = responseJSON.body;
            // console.log(test);
            window.open("mailto:" + emailAdress + "?subject=" + subjectEmail +  "&body=" + bodyEmail);
            
        });
    }); 
}








let contactTest = {
    "body": [
        "To create customer relationships, and keep them strong, you must do all you can to engage customers. Here are five ways to build customer relationships and keep them coming back.",

        "1. Communicate.",
        "As a key to any good relationship, communication is an essential way to build customer relationships. Promoting your business and listening to your customers are equally important.",     
        "Rather than just telling customers about your business, have conversations with them. Find out what your customers need, then show them that you have a solution to their problem." ,
        "If you have employees, teach them how to effectively communicate with customers. Instead of waiting for customer service to become a problem, foster communication skills with customers while onboarding new employees. Maintain an employee policy, requiring timely follow-up, to make sure the customer's needs are met. Make sure your staff returns voicemail messages and emails promptly.",     
        
        "2. Exceed expectations.",
        "Your customers expect great products or services from you. You should continue to raise the bar on what your company offers.",     
        "To put it simply, under promise, and over deliver. When you impress customers, they keep coming back.",
        "To exceed customer expectations, you can deliver a product or service faster than anticipated. When you deliver earlier than expected, the customer will be happy about the surprise. For example, tell a customer their order will be ready by the end of the month, knowing you will have it ready a week earlier.",
         
        "3. Ask for feedback.",
        "Whether customers have a good or bad opinion about your business, they will make their feelings known. Invite customer feedback to show you are listening. Place comment cards on your business counter, or conduct a survey.",
        "Customer feedback helps you hone your customers' specific needs so you can find the best solutions to their problems. The better your offering meets their needs, the more your business will grow.",
        "Always listen carefully to comments and respond promptly, whether it`s a compliment or a complaint. The worst thing you can do is ask for feedback then not address concerns. Even negative feedback is valuable and can give you an honest gauge of customer satisfaction",
        "Related: 9 Networking Blunders That Undermine Your Reputation",     
        
        "4. Connect",
        "With technology, there are more ways to begin conversations with your customers than ever before. There are many online tools and social media outlets you can use to reach customers.",
        "When you engage with customers online, be careful not to create a one-way conversation. Ask customers questions, and respond to their inquiries.",
        "Also, make sure your website is top-notch, and start a blog to engage your customers and prospects. Build customer relationships through your online presence.",
        
        "5. Show appreciation.",     
        "Reward long-time customers with a loyalty discount program. You can hand out reward cards, or use a loyalty program app to track customer rewards."
    ]
}

// console.log()