localStorage.getItem("restaurant")

window.onload = function(){
    getQuery()
    
}

const getQuery = ()=>{
    let query = window.location.search;

    let url = new URLSearchParams(query);
    let name = url.get("name");
    console.log(name)
}