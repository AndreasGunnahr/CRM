let surveyTexts = ["Total number of survey sent: ", "Total number of answers: ", "Latest survey sent: "];
let surveySpan = [Math.floor(Math.random() * (200 - 180 + 1) + 180), Math.floor(Math.random() * (150 - 100 + 1) + 100), "Work Ethics"];
let surveyContainer = document.getElementsByClassName("survey-container")[0];

function createSurveyContent(){
    let h1 = document.createElement("H1");
    h1.innerHTML = "NPS-Survey History";
    surveyContainer.appendChild(h1);
    let div = document.createElement("DIV");
    let index = 0;
    div.classList.add("survey-texts");
    surveyContainer.appendChild(div);
    surveyTexts.forEach(text => {
        // console.log(text);
        let h2 = document.createElement("H2");
        let span = document.createElement("SPAN");
        span.innerHTML = surveySpan[index];
        h2.innerHTML = text;
        h2.appendChild(span);
        div.appendChild(h2);
        index ++;
    });
    let button = document.createElement("BUTTON");
    button.innerHTML = "Send Survey";
    button.classList.add("survey-send");
    surveyContainer.appendChild(button);

    document.getElementsByClassName("survey-send")[0].addEventListener("click", () => {
        if(emailAdress != undefined){
            var emailBodyText = fetch("email.json")
                .then((response) => response.json())
                .then((responseJSON) => {
                let subjectEmail= "We value your opinion! ";
                let bodyEmail = responseJSON.body.replace(/\s\s+/g, "%0D%0A%0D%0A");
    
    
                window.open("mailto:" + emailAdress + "?subject=" + subjectEmail +  "&body=" + bodyEmail);
         });
        }
    });

}


