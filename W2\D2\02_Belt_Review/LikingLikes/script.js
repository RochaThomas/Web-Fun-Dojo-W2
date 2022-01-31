
var clicked1 = false
function likeIt1(element) {
    var likes = document.querySelector("#user1Likes");
    if (clicked1 == false){
        likes.innerText = "10 like(s)";
        element.innerText = "Unlike";
        element.classList.add("clicked");
        clicked1 = true;
    }
    else {
        likes.innerText = "9 like(s)";
        element.innerText = "Like";
        element.classList.remove("clicked");
        clicked1 = false;
    }
}

var clicked2 = false
function likeIt2(element) {
    var likes = document.querySelector("#user2Likes");
    if (clicked2 == false){
        likes.innerText = "13 like(s)";
        element.innerText = "Unlike";
        element.classList.add("clicked");
        clicked2 = true;
    }
    else {
        likes.innerText = "12 like(s)";
        element.innerText = "Like";
        element.classList.remove("clicked");
        clicked2 = false;
    }
}

var clicked3 = false
function likeIt3(element) {
    var likes = document.querySelector("#user3Likes");
    if (clicked3 == false){
        likes.innerText = "10 like(s)";
        element.innerText = "Unlike";
        element.classList.add("clicked");
        clicked3 = true;
    }
    else {
        likes.innerText = "9 like(s)";
        element.innerText = "Like";
        element.classList.remove("clicked");
        clicked3 = false;
    }
}