import loadData from './data.js'

window.onload = function(){
    let searchBtn = document.getElementById("submit")
    searchBtn.addEventListener("click", goToRestaurant)
    //if(localStorage.getItem("restaurant") === ""){
        loadData()
    //}
    
}

const goToRestaurant = ()=>{
    event.preventDefault()
    let name = document.getElementById("restaurant").value
    let params = new URLSearchParams();
    params.set("name", name);
    window.location.href = `./restaurant.html?name=${name}`
}



