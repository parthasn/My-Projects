

export default function loadData(){
    let restaurant = [{
        name: "Gyani's Restaurant",
        menu: [{
            item: "Chilli Chicken",
            price: 230
        },
        {
            item: "Garlic Chicken",
            price: 240
        },
        ]
    },
    {
        name: "Neelam Restaurant",
        menu: [{
            item: "Chicken Hakka Chowmein",
            price: 210
        },
        {
            item: "Chicken Munchurian",
            price: 240
        },
        ]
    },
    {
        name: "Blue Diamond Restaurant",
        menu: [{
            item: "Chicken Butter Masala",
            price: 250
        },
        {
            item: "Chicken Munchurian",
            price: 240
        },
        ]
    },
    {
        name: "Frank's Chinese Restaurant",
        menu: [{
            item: "Chicken Gravy Chowmein",
            price: 210
        },
        {
            item: "Chicken Munchurian",
            price: 250
        },
        ]
    },
    {
        name: "The Biriyani House",
        menu: [{
            item: "Chicken Biriyani",
            price: 270
        },
        {
            item: "Mutton Biriyani",
            price: 320
        },
        ]
    }]

    localStorage.setItem("restaurant", JSON.stringify(restaurant))
}



