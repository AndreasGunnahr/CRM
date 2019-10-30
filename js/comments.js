// "id":"1","name":"Emile Kuhn V","comment":"input Wooden override","date":"2019-07-27T06:22:02.089Z"

class Comment {
    constructor(name, comment, date) {
        //this.id = 256756;
        this.name = name;
        this.comment = comment;
        this.date = date;
        this.image1 = '<i class="fas fa-phone-alt"></i>';
        this.image2 = '<i class="fas fa-envelope"></i>';
        this.image3 = '<i class="fas fa-envelope"></i>';
        this.image4 = '<i class="fas fa-poll"></i>';
        this.image5 = '<i class="fas fa-poll"></i>';
        this.image6 = '<i class="fas fa-comment-dots"></i>';
        this.image7 = '<i class="fas fa-comment-dots"></i>';
        this.events = [
            {image: this.image1, title: "Logged phone call"},
            {image: this.image2, title: "Sent email"},
            {image: this.image3, title: "Email received"},
            {image: this.image4, title: "Sent NPS-survey"},
            {image: this.image5, title: "NPS-survey answered"},
            {image: this.image6, title: "Sent text message"},
            {image: this.image7, title: "Text message received"}
        ]; 
    }
}

let commentInput = document.getElementsByClassName("comment-input")[0];
let commentsAddBtn = document.getElementsByClassName("comment-add-btn")[0];
let commentContainer = document.getElementsByClassName("comment-inner-container")[0];

/* Adding eventListener to our add comment button and if the user hit enter to send the comment. */
commentsAddBtn.addEventListener("click", createComments);
commentInput.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
        commentsAddBtn.click();
    }
});

/* Function that creates our comments and appending it to the comments screen */
function createComments() {
    if (commentInput.value != "") {
        let date = new Date();
        let commentSpan = document.createElement("SPAN");
        let commentP = document.createElement("P");
        let fullDate = date.getUTCFullYear().toString().padStart(2, "0") + "-" + (date.getMonth() + 1).toString().padStart(2, "0") + "-" + date.getUTCDate().toString().padStart(2, "0");
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let fullTime = hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0');
        commentSpan.classList.add("comment-span");
        commentP.classList.add("comment-p");
        commentSpan.innerHTML = fullDate + " " + fullTime + ":";
        commentP.innerHTML = commentInput.value;
        commentSpan.appendChild(commentP);
        commentContainer.appendChild(commentSpan);
        commentSpan.scrollIntoView(false);
        commentInput.value = "";
        // let newComment = new Comment("Ella", "Ringde ICA", "1970-01-01");
        // let postComment = mockup.post("comment");
        // console.log(values);
    }
}

/* Function that creates our random comments when user choose a customer from the search bar */
async function generateRandomComments() {
    commentContainer.innerHTML = "";
    let randomComments = await mockup.getRandom("comment", 8);

    randomComments.forEach(comment => {
        let commentSpan = document.createElement("SPAN");
        let commentP = document.createElement("P");
        commentSpan.classList.add("comment-span");
        commentP.classList.add("comment-p");
        commentSpan.innerHTML = comment.date.substr(0, 10);
        commentP.innerHTML = comment.comment;

        commentContainer.appendChild(commentSpan);
        commentSpan.appendChild(commentP);
        
        //Creates random events and append it randomly between ordinary comments
        let rand = Math.floor((Math.random() * newComment.events.length));
        let historyEvents = newComment.events[rand]; 

        let eventSpan = document.createElement("SPAN");
        let eventP = document.createElement("P");
        eventSpan.classList.add("event-span");
        eventP.classList.add("event-p");
        
        eventSpan.innerHTML = comment.date.substr(0, 10);
        eventP.innerHTML = historyEvents.image + " " + historyEvents.title;
        
        if ((Math.random() < 0.5)) {
            commentContainer.appendChild(eventSpan);
            eventSpan.appendChild(eventP);
        }
        
    });
 }

let newComment = new Comment();