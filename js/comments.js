// "id":"1","name":"Emile Kuhn V","comment":"input Wooden override","date":"2019-07-27T06:22:02.089Z"

class Comment {
    constructor(name, comment, date) {
        //this.id = 256756;
        this.name = name;
        this.comment = comment;
        this.date = date;
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
        let fullDate = date.getUTCFullYear() + "-" + date.getUTCDate() + "-" + date.getUTCMonth();
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
        commentInput.value = "";
        let newComment = new Comment("Andreas", "Ringde ICA", "1970-01-01");
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
        commentSpan.appendChild(commentP);
        commentContainer.appendChild(commentSpan);
    });
}