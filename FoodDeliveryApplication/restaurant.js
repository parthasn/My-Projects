let data = JSON.parse(localStorage.getItem("restaurant"))
let bill = 0
window.onload = function () {
    getQuery()


}



const getQuery = () => {
    let query = window.location.search;

    let url = new URLSearchParams(query);
    let name = url.get("name");
    //console.log(name)
    getRestaurantDetails(name)
}

const getNameFromUrl = () => {
    let query = window.location.search;
  
    let url = new URLSearchParams(query);
    let name = url.get("name");
  
    return name;
  };

const getRestaurantDetails = (name) => {
    for (let i = 0; i < data.length; i++) {
        if (name === data[i].name) {
            let restaurantObject = data[i]
            console.log(restaurantObject)
            displayMenu(restaurantObject)
        }
    }
}

const displayMenu = (object) => {
    let displayDiv = document.getElementById("restaurant")

    let heading = document.createElement("h2")
    heading.textContent = object.name

    let menu = object.menu

    let frag = document.createDocumentFragment()

    for (let i = 0; i < menu.length; i++) {


        let row = document.createElement("tr")

        let col1 = document.createElement("td")
        col1.setAttribute("class", "table")
        col1.textContent = i + 1 + ". " + menu[i].item

        let col2 = document.createElement("td")
        col2.setAttribute("class", "table")
        col2.textContent = "Rs. " + menu[i].price

        let col3 = document.createElement("td")
        col3.setAttribute("class", "table")

        let btn = document.createElement("button")
        btn.style.width = "50px;"
        btn.textContent = "ADD+"
        btn.addEventListener("click", function () {
            btn.textContent = "ADDED"
            bill += menu[i].price
            console.log(menu[i].item, menu[i].price)



        })
        col3.append(btn)

        row.append(col1, col2, col3)


        frag.append(row)


    }

    let toCart = document.createElement("button")
        toCart.textContent = "Go To Cart"
       toCart.addEventListener("click", goToCart)
    displayDiv.append(heading, frag, toCart)
}

function goToCart () {
    let name = getNameFromUrl();

    let params = new URLSearchParams();
    params.set("name", name);
    //params.set("bill", bill)
  
    window.location.href = `./bill.html?name=${name}`
    
    }




