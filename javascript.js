// 1 first defind the id_es
const inputBox =document.getElementById("input-box");
const listContainer=document.getElementById("list-container");


// 2  this is for click funtion which is comes buttton
function addTask(){
if(inputBox.value === ''){
    alert('you must write something')
}else{
    let li=document.createElement("li");
    li.innerHTML=inputBox.value;
    listContainer.appendChild(li);
    let span =document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
}
inputBox.value ="";

// this is function call for save localstoreage
saveData()
}

// 3 for click evenlistener 
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");

// this is function call for save localstoreage
        saveData()

    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();

// this is function call for save localstoreage
        saveData()
    }
},false);


// 4 for save data
function saveData(){
  localStorage.setItem("data", listContainer.innerHTML);
}

// 5 for show data
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask()
