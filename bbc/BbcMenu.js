const canteenName = "BBC Canteen"
const timings = "8 AM - 6 PM"
const menuCategories = [
    {
        name: "Dosa",
        items: [
            { name: "Plain Dosa", price: 35, type: "Veg" },
            { name: "Schewan Dosa", price: 40, type: "Veg" },
            { name: "Butter Schezwan Dosa", price: 60, type: "Veg" },
            { name: "Cheese Dosa", price: 55, type: "Veg" },
            { name: "Butter Cheese Dosa", price: 65, type: "Veg" },
            { name: "Butter Schezwan Cheese Dosa", price: 70, type: "Veg" },
            { name: "Butter Masala", price: 65, type: "Veg" },
            { name: "Masala Dosa", price: 55, type: "Veg" },
            { name: "Butter Masala Onion", price: 80, type: "Veg" },
            { name: "Masala Onion Cheese", price: 80, type: "Veg" },
            { name: "Masala Onion", price: 65, type: "Veg" },
            { name: "Paneer Dosa", price: 80, type: "Veg" },
            { name: "Butter Paneer", price: 90, type: "Veg" },
            { name: "Butter Paneer Cheese", price: 100, type: "Veg" },
            { name: "Masala Paneer", price: 100, type: "Veg" },
            { name: "Butter Masala Paneer", price: 110, type: "Veg" },
            { name: "Butter Masala Paneer Cheese", price: 120, type: "Veg" },
            { name: "Onion Dosa", price: 60, type: "Veg" },
            { name: "Onion Cheese", price: 70, type: "Veg" },
            { name: "Butter Onion Cheese", price: 80, type: "Veg" },
            { name: "Upma Dosa", price: 50, type: "Veg" },
            { name: "Upma Onion", price: 60, type: "Veg" },
            { name: "Upma Onion Cheese", price: 70, type: "Veg" },
            { name: "Butter Upma Onion Cheese", price: 80, type: "Veg" },
            { name: "Uthappam", price: 50, type: "Veg" },
            { name: "Butter Uthappam", price: 60, type: "Veg" },
            { name: "Double Egg Dosa", price: 65, type: "Non-Veg" },
            { name: "Butter Double Egg Dosa", price: 75, type: "Non-Veg" },
            { name: "Double Egg Paneer", price: 120, type: "Non-Veg" },
            { name: "Butter Double Egg Paneer Cheese", price: 130, type: "Non-Veg" },
            { name: "Karam Dosa", price: 40, type: "Veg" },
            { name: "Butter Karam", price: 55, type: "Veg" }
        ]
    },
    {
        name: "Idly",
        items: [
            { name: "Idly", price: 40, type: "Veg" }
        ]
    },
    {
        name: "Maggi",
        items: [
            { name: "Plain Maggi", price: 35, type: "Veg" },
            { name: "Cheese Maggi", price: 45, type: "Veg" },
            { name: "Extra Masala Maggi", price: 45, type: "Veg" },
            { name: "Extra Masala Cheese Maggi", price: 55, type: "Veg" },
            { name: "Onion Maggi", price: 40, type: "Veg" },
            { name: "Egg Maggi", price: 60, type: "Non-Veg" },
            { name: "Veg Maggi", price: 50, type: "Veg" },
            { name: "Atta Maggi", price: 50, type: "Veg" },
            { name: "Atta Cheese", price: 60, type: "Veg" },
            { name: "Egg Atta Cheese", price: 70, type: "Non-Veg" },
            { name: "Manchuria", price: 40, type: "Veg" },
            { name: "Cheese Manchuria", price: 50, type: "Veg" },
            { name: "Schezwan Maggi", price: 40, type: "Veg" },
            { name: "Cheese Schezwan Maggi", price: 50, type: "Veg" },
            { name: "Hot Garlic", price: 40, type: "Veg" },
            { name: "Cheese Hot Garlic", price: 50, type: "Veg" },
            { name: "Yippee Noodles", price: 35, type: "Veg" },
            { name: "Yippee Cheese", price: 50, type: "Veg" }
        ]
    },
    {
        name: "Coffee and Tea",
        items: [
            { name: "Coffee (Small)", price: 20, type: "Veg" },
            { name: "Coffee (Big)", price: 25, type: "Veg" },
            { name: "Tea (Small)", price: 15, type: "Veg" },
            { name: "Tea (Big)", price: 20, type: "Veg" },
            { name: "Milk (Big)", price: 20, type: "Veg" },
            { name: "Lemon Tea", price: 20, type: "Veg" },
            { name: "Green Tea", price: 20, type: "Veg" },
            { name: "Black Tea", price: 20, type: "Veg" },
            { name: "Black Coffee", price: 25, type: "Veg" },
            { name: "Boost", price: 30, type: "Veg" },
            { name: "Horlicks", price: 30, type: "Veg" },
            { name: "Bournvita", price: 30, type: "Veg" }
        ]
    },
    {
        name: "Egg Items",
        items: [
            { name: "Half Fried Egg (2 pieces)", price: 40, type: "Non-Veg" },
            { name: "Omlet (2 Eggs)", price: 50, type: "Non-Veg" },
            { name: "Omlet (3 Eggs)", price: 60, type: "Non-Veg" },
            { name: "Bread Omlet", price: 60, type: "Non-Veg" }
        ]
    },
    {
        name: "Juice",
        items: [
            { name: "Mango Juice", price: 40, type: "Veg" }
        ]
    }
]
