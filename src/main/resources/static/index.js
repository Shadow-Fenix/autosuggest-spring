console.log("hello from js")  
var user = [
    {
        "name" : "Jane Doe",
        "gender" : "Femail",
        "img" : "jane.png"
    },
    {
        "name" : "John Doe",
        "gender" : "Male",
        "img" : "john.png"
    },
    {
    "name" : "Asta",
    "gender" : "Male",
    "img" : "https://tse4.mm.bing.net/th/id/OIP.L4j_8dGO1ynj0FSWUgUm1gHaGL?r=0&pid=Api&h=220&P=0"
}
];
var id=0;
function Toggleuser(){
    id=(id+1)%3;
    var userImage = document.getElementById("img");
    userImage.src = user[id].img;

     var username = document.getElementById("name");
     username.innerHTML = user[id].name;

     var usergender = document.getElementById("gender");
     usergender.innerHTML = user[id].gender;
    
};
function randomUser(){
    fetch('https://randomuser.me/api')
    .then(function(response){
        console.log(response)
        return response.json();
    })
    .then(function(data){
        var userData = data.results[0];

        var userImage = document.getElementById("img");
        userImage.src = userData.picture.large;

        var userName = document.getElementById("name");
        userName = userData.name.first + " " + userData.name.last;

        var userGender = document.getElementById("gender");
        userGender.innerHTML = userData.gender;


    })
    .catch(function(err){
        console.log(err);
    })
}