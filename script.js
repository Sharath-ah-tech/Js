const p = document.createElement('p');
p.textContent="Hello"
document.body.appendChild(p)

const pi = document.createElement('p')
document.body.appendChild(pi)
function btn(){
    alert("Alert Message is Displayed")
    pi.innerHTML="How Are You!"
}

document.querySelector(".heading").textContent="I'm Sharath"

const ele = document.querySelectorAll(".list");
for (let i = 0; i < ele.length; i++) {
    ele[i].textContent = i+1;
}

var li = document.querySelector(".list");
li.innerHTML="<b>Sai</b>"

console.log(document.body.childNodes)
function button(){
    const d = document.getElementById("password").value 
    var alpha=/[a-zA-Z]/.test(d)
    if (d.length<4){
        alert("Length is not sufficient")
    }
    else if(d.length>12){
        alert("Length is too long")
    }
    else if(!alpha){
        alert("Alphabets Required")
    }
    else{
        alert("Password Created!")
    }
}
