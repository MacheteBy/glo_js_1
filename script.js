const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const main = document.getElementById("main");
const myList = document.getElementById("list");
const ul = document.getElementsByTagName("ul");
const story = myList.getElementsByClassName("item");
const popup = document.getElementsByClassName("popup")[0];
const closes = document.querySelector(".close");

let userAge = 22,
    userName = 'Вова',
    userAccess = true;



function addItem() {
    let newLi = document.createElement("li");
    newLi.innerHTML = "Новая задача";
    newLi.className = "item";
    myList.appendChild(newLi);
    if(story.length != 0){
        popup.style.display = "none";
    }
}

function delItem() {
    myList.removeChild(story[0]);
    if(story.length == 0){
        popup.style.display = "block";
    }
}

function closeModal() {
    popup.style.display = "none";
}


function findAccsess() {
    if(userAge >= 18 && userAccess == true){
        console.log(`Доступ пользователю: ${userName} разрешен!`);
    } else{
        console.log(`Доступ пользователю: ${userName} закрыт!`);
    }
}

findAccsess();

btn1.addEventListener("click", addItem);
btn2.addEventListener("click", delItem);
closes.addEventListener("click", closeModal);