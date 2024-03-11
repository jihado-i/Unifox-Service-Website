const list = document.getElementById("list");
const showList = document.getElementById("showList");
const none = document.getElementById("none");

list.onmouseenter = ()=>{
    showList.style.display = "block";
}

none.onclick= ()=>{
    showList.style.display = "none";
}