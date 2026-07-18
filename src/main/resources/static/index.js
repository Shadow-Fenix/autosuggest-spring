console.log("hello from js")  
var user = [
    {
        "name" : "Jane Doe",
        "gender" : "Femail",
        "img" : "jane.png"
    },
    {
        "name" : "John Doe",
        "gender" : "Mail",
        "img" : "john.png"
    }
];
var id=0;
function Toggleuser(){
    id=(id+1)%2;
    var userImage = document.getElementById("img");
    userImage.src = user[id].img;

     var username = document.getElementById("name");
     username.innerHTML = user[id].name;

     var usergender = document.getElementById("gender");
     usergender.innerHTML = user[id].gender;
    
}