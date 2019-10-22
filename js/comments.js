// "id":"1","name":"Emile Kuhn V","comment":"input Wooden override","date":"2019-07-27T06:22:02.089Z"

class Comment{
    constructor(name,comment,date){
        //this.id = 256756;
        this.name = name; 
        this.comment = comment; 
        this.date = date; 
    }
}

let commentsAddBtn = document.getElementsByClassName("comment-add-btn")[0].addEventListener("click",createComments);
let commentContainer = document.getElementsByClassName("comment-inner-container")[0];


function createComments(){
    let commentInput = document.getElementsByClassName("comment-input")[0];
    if(commentInput.value != ""){
        let date = new Date();
        let commentSpan = document.createElement("SPAN");
        let commentP = document.createElement("P");
        commentSpan.classList.add("comment-span");
        commentP.classList.add("comment-p");
        let fullDate = date.getUTCFullYear() + "-" + date.getUTCDate() + "-" + date.getUTCMonth();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let fullTime = hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0');
        // + ':' + seconds.toString().padStart(2, '0');
        commentSpan.innerHTML = fullDate + " " + fullTime + ":";
        commentP.innerHTML = commentInput.value;
        commentSpan.appendChild(commentP);
        commentContainer.appendChild(commentSpan);
        commentInput.value = "";
        let newComment = new Comment("Andreas","Ringde ICA","1970-01-01");
        // let postComment = mockup.post("comment");
        // console.log(values);
    }
}