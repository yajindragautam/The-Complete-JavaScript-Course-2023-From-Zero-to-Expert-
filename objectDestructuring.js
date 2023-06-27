const restaurant = {
    name:"Himalyan Momo",
    location:"Mahalaxmi, Tikathali",
    categories:["Italian","Pizzeria","Vegetarian","Organic"],
    startMenu:["Focaccia","Bruschetta","Garlic Bread","Caprese Salad"],
    mainMenu:['Pizza',"Pasta","Risotto"],
    openingHours:{
        thu:{
            open:12,
            close:22
        },
        fri:{
            open:11,
            close:23
        },
        sun:{
            open:0,
            close:24
        }
    }
}

// Object Destructuring need exact name and orber of object doest not matter like as array
 const {name,openingHours,categories} = restaurant;
 console.log(name, openingHours, categories);