// login start

function Submit(){

    const username = document.getElementById("username").value;
    const Gmail = document.getElementById("Gmail").value;

    localStorage.setItem('name', username);
    localStorage.setItem('gmail', Gmail)


    window.location.href = "index.html";



}


function refresHome(){
    window.location.href = "index.html"
}





// login end




// profile jika data dari localhost ada






    const name = localStorage.getItem('name');
const gmail = localStorage.getItem('gmail');
const username_value = document.getElementById("username_value");
const gmail_value = document.getElementById("gmail_value");


const profile = document.getElementById("profile");


if(name && gmail){
    profile.style.display = "block"
    username_value.innerHTML = name;
    gmail_value.innerHTML = gmail;
} else{
    profile.style.display = "none"
}


function logout(){
    localStorage.clear();
    window.location.href = "index.html"
}

