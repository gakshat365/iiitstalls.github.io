const canteenName = "Vindhya Canteen";
const timings = "8 AM - 5 PM";

const menuCategories = [
    {
        name: "Beverages",
        items: [
            {name: "Tea", price: 10, type: "Veg"},
            {name: "Coffee", price: 20, type: "Veg"},
            {name: "Capachino", price: 30, type: "Veg"},
            {name: "Black coffee", price: 25, type: "Veg"},
            {name: "Lemon tea", price: 25, type: "Veg"},
            {name: "Cold coffee", price: 35, type: "Veg"},
            {name: "Iced tea", price: 30, type: "Veg"},
            {name: "Masala chai", price: 15, type: "Veg"},
            {name: "Green tea", price: 20, type: "Veg"},
            {name: "Milk shake", price: 40, type: "Veg"}
        ]
    },
    {
        name: "Rolls",
        items: [
            {name: "Veg roll", price: 25, type: "Veg"},
            {name: "Panner roll", price: 30, type: "Veg"},
            {name: "Egg roll", price: 30, type: "Non-Veg"},
            {name: "Chicken roll", price: 40, type: "Non-Veg"},
            {name: "Chicken 65 roll", price: 50, type: "Non-Veg"},
            {name: "Mutton roll", price: 60, type: "Non-Veg"}
        ]
    },
    {
        name: "Burgers",
        items: [
            {name: "Veg burger", price: 60, type: "Veg"},
            {name: "Chicken burger", price: 70, type: "Non-Veg"},
            {name: "Cheese burger", price: 65, type: "Veg"},
            {name: "Paneer burger", price: 70, type: "Veg"}
        ]
    },
    {
        name: "Bakery",
        items: [
            {name: "Masala bun", price: 30, type: "Veg"},
            {name: "Chacolav", price: 40, type: "Veg"},
            {name: "Dhillpasand, dhilkush", price: 20, type: "Veg"},
            {name: "Cream bun, Jambun", price: 20, type: "Veg"},
            {name: "Cake", price: 40, type: "Veg"},
            {name: "Pastry", price: 35, type: "Veg"}
        ]
    },
    {
        name: "Fast Food",
        items: [
            {name: "Mini pizza", price: 50, type: "Veg"},
            {name: "Veg hotdog", price: 60, type: "Veg"},
            {name: "Chicken hotdog", price: 70, type: "Non-Veg"},
            {name: "Bread omlette", price: 45, type: "Non-Veg"},
            {name: "Plain omlette", price: 35, type: "Non-Veg"},
            {name: "Cheese bread omlette", price: 60, type: "Non-Veg"}
        ]
    },
    {
        name: "Noodles & Pasta",
        items: [
            {name: "Plain maggi", price: 35, type: "Veg"},
            {name: "Cheese Maggi", price: 50, type: "Veg"},
            {name: "Vegetable Maggi", price: 50, type: "Veg"},
            {name: "Egg Maggi", price: 60, type: "Non-Veg"},
            {name: "Chicken Maggi", price: 70, type: "Non-Veg"},
            {name: "White sauce pasta", price: 50, type: "Veg"},
            {name: "Red sauce pasta", price: 50, type: "Veg"}
        ]
    },
    {
        name: "Momos & Snacks",
        items: [
            {name: "Veg momos", price: 70, type: "Veg"},
            {name: "Chicken momos", price: 80, type: "Non-Veg"},
            {name: "French fries", price: 60, type: "Veg"},
            {name: "Aloo tikki", price: 60, type: "Veg"},
            {name: "Chilly garlic nuggets", price: 60, type: "Veg"},
            {name: "Spring rolls", price: 50, type: "Veg"},
            {name: "Chicken spring rolls", price: 60, type: "Non-Veg"}
        ]
    },
    {
        name: "Sandwiches",
        items: [
            {name: "Veg sandwich", price: 40, type: "Veg"},
            {name: "Cheese potato sandwich", price: 50, type: "Veg"},
            {name: "Spinach corn sandwich", price: 60, type: "Veg"},
            {name: "Italian pasta sandwich", price: 60, type: "Veg"},
            {name: "Paneer tikka sandwich", price: 70, type: "Veg"},
            {name: "Chocolate truffle sandwich", price: 60, type: "Veg"},
            {name: "Chicken sandwich", price: 70, type: "Non-Veg"},
            {name: "Egg sandwich", price: 60, type: "Non-Veg"}
        ]
    },
    {
        name: "Dosas",
        items: [
            {name: "Plain dosa", price: 35, type: "Veg"},
            {name: "Onion dosa", price: 45, type: "Veg"},
            {name: "Masala dosa", price: 55, type: "Veg"},
            {name: "Uthappam", price: 45, type: "Veg"},
            {name: "Set dosa", price: 50, type: "Veg"},
            {name: "Karam dosa", price: 45, type: "Veg"},
            {name: "Ghee dosa", price: 50, type: "Veg"},
            {name: "Butter dosa", price: 40, type: "Veg"},
            {name: "Egg dosa (separate pan)", price: 50, type: "Non-Veg"},
            {name: "Chicken dosa", price: 60, type: "Non-Veg"}
        ]
    },
    {
        name: "Evening Snacks (Weekly Once)",
        items: [
            {name: "Pav Bhaji", price: 50, type: "Veg"},
            {name: "Chat", price: 40, type: "Veg"},
        ]
    }
];

