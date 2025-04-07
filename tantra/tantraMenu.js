const canteenName = "Tantra Canteen";
const timings = "2 PM - 1 AM";

const menuCategories = [
    {
        name: "Starters",
        items: [
            { name: "Veg Manchurian", price: 80 },
            { name: "Gobi Manchurian", price: 80 },
            { name: "Paneer Manchurian", price: 135 },
            { name: "Chilli Paneer", price: 135 },
            { name: "Paneer 65", price: 135 },
            { name: "Chilli Gobi", price: 80 },
            { name: "Gobi 65", price: 80 },
            { name: "Chilli Babycorn", price: 110 },
            { name: "Babycorn Manchurian", price: 110 },
            { name: "Babycorn 65", price: 110 },
            { name: "Mushroom Manchurian", price: 115 },
            { name: "Chilli Mushroom", price: 115 },
            { name: "Mushroom 65", price: 115 },
            { name: "French Fries", price: 80 },
            { name: "Peri Peri French Fries", price: 90 },
            { name: "Chicken Manchurian", price: 145, type:"Non-Veg" },
            { name: "Chicken 65", price: 145, type:"Non-Veg" },
            { name: "Chilli Chicken", price: 145, type:"Non-Veg" },
            { name: "Chicken Lollipop", price: 145, type:"Non-Veg" },
            { name: "Tandoori Chicken Tikka Kebab (Bl)", price: 165, type:"Non-Veg" },
            { name: "Tandoori Chicken Full Leg", price: 115, type:"Non-Veg" }
        ]
    },
    {
        name: "Omlettes",
        items: [
            { name: "Masala Omllete", price: 35, type:"Non-Veg" },
            { name: "Bread Omlette", price: 55, type:"Non-Veg" },
            { name: "Sunny Side Up", price: 35, type:"Non-Veg" },
        ]
    },
    {
        name: "Maggi",
        items: [
            { name: "Veg Maggi", price: 45 },
            { name: "Masala Maggi", price: 40 },
            { name: "Veg Schezwan Maggi", price: 50 },
            { name: "Paneer Maggi", price: 55 },
            { name: "Paneer Schezwan Maggi", price: 65 },
            { name: "Cheese Maggi", price: 55 },
            { name: "Corn Maggi", price: 45 },
            { name: "Egg Maggi", price: 50, type:"Non-Veg" },
            { name: "Double Egg Maggi", price: 60, type:"Non-Veg" },
            { name: "Chicken Maggi", price: 65, type:"Non-Veg" },
            { name: "Schezwan Chicken Maggi", price: 75, type:"Non-Veg" },
            { name: "Schezwan Egg Maggi", price: 65, type:"Non-Veg" },
            { name: "Plain Maggi", price: 30 }
        ]
    },
    {
        name: "Shawarma",
        items: [
            { name: "Indo Paneer Shawarma", price: 90 },
            { name: "Mix Veg Coleslaw Shawarma", price: 70 },
            { name: "Pizza Cheese Corn Shawarma", price: 110 },
            { name: "Pasand Paneer Shawarma", price: 100 },
            { name: "Barbeque Veg with Paneer Shawarma", price: 70 },
            { name: "Isthi Chicken Shawarma", price: 105, type:"Non-Veg" },
            { name: "Arabic Chicken Shawarma", price: 85, type:"Non-Veg" },
            { name: "Double Egg Shawarma", price: 70, type:"Non-Veg" },
            { name: "Pizza Cheese Chicken Shawarma", price: 120, type:"Non-Veg" },
            { name: "Charminar Chicken Shawarma", price: 110, type:"Non-Veg" }
        ]
    },
    {
        name: "Pastas (only served in the evening)",
        items: [
            { name: "White Sauce Cheese Pasta", price: 75 },
            { name: "White Sauce Paneer Pasta", price: 95 },
            { name: "White Sauce Chicken Pasta", price: 95, type:"Non-Veg" },
            { name: "Red Sauce Cheese Pasta", price: 75 },
            { name: "Red Sauce Paneer Pasta", price: 95 },
            { name: "Red Sauce Chicken Pasta", price: 95, type:"Non-Veg" },
            { name: "Veg Fried Macaroni", price: 60 },
            { name: "Egg Fried Macaroni", price: 70, type:"Non-Veg" },
            { name: "Chicken Fried Macaroni", price: 90, type:"Non-Veg" }
        ]
    },
    {
        name: "Tandoori Bread",
        items: [
            { name: "Tandoori Roti", price: 20 },
            { name: "Butter Roti", price: 25 },
            { name: "Plain Naan", price: 35 },
            { name: "Butter Naan", price: 45 },
            { name: "Garlic Butter Naan", price: 55 },
            { name: "Cheese Chilli Naan", price: 75 },
            { name: "Lachha Paratha", price: 45 },
            { name: "Aloo Paratha", price: 50 },
            { name: "Aloo Kulcha", price: 55 },
            { name: "Gobi Paratha", price: 50 },
            { name: "Gobi Kulcha", price: 55 },
            { name: "Onion Paratha", price: 50 },
            { name: "Onion Kulcha", price: 55 },
            { name: "Paneer Paratha", price: 75 },
            { name: "Paneer Kulcha", price: 75 },
            { name: "Masala Kulcha", price: 35 },
            { name: "Chicken Paratha", price: 100, type:"Non-Veg" },
            { name: "Rumali Roti (only served from 3:30 to 6:30 pm)",  price: 20 }
        ]
    },
    {
        name: "Biryani",
        items: [
            { name: "Mushroom Biryani", price: 130 },
            { name: "Paneer Biryani", price: 145 },
            { name: "Chilli Paneer Biryani", price: 145 },
            { name: "Veg Manchurian Biryani", price: 90 },
            { name: "Pulav Rice (Basmathi)", price: 90 },
            { name: "Jeera Rice (Basmathi)", price: 100 },
            { name: "Fry Piece Chicken Biryani", price: 165, type:"Non-Veg" },
            { name: "Chicken Lollipop Biryani", price: 165, type:"Non-Veg" },
            { name: "Andhra Chicken Roast Biryani", price: 145, type:"Non-Veg" },
            { name: "Tandoori Chicken Tikka (bl) Biryani", price: 165, type:"Non-Veg" },
            { name: "Chicken 65 (bl) Biryani", price: 165, type:"Non-Veg" },
            { name: "Masaledar Egg Biryani", price: 120, type:"Non-Veg" },
            { name: "Chicken Joint Biryani", price: 175, type:"Non-Veg" },
            { name: "Chicken Kheema Biryani", price: 180, type:"Non-Veg" }
        ]
    },
    {
        name: "Curry",
        items: [
            { name: "Dal Tadka", price: 75 },
            { name: "Paneer Butter Masala", price: 135 },
            { name: "Kadai Paneer", price: 135 },
            { name: "Mushroom Do Pyaza", price: 115 },
            { name: "Kadai Veg", price: 110 },
            { name: "Mix Veg Curry", price: 110 },
            { name: "Subzi Meloniee", price: 120 },
            { name: "Aloo Jeera", price: 80 },
            { name: "Palak Paneer", price: 135 },
            { name: "Kaju Tomato Curry", price: 140 },
            { name: "Aloo Gobi Matar Masala", price: 100 },
            { name: "Amritsari Chole Masala", price: 90 },
            { name: "Chicken Tikka Masala (boneless)", price: 170, type:"Non-Veg" },
            { name: "Chicken Tikka Masala (with bone)", price: 135, type:"Non-Veg" },
            { name: "Egg Burji", price: 80, type:"Non-Veg" },
            { name: "Egg Curry", price: 110, type:"Non-Veg" },
            { name: "Kadai Chicken Masala", price: 135, type:"Non-Veg" },
            { name: "Andhra Chicken Curry", price: 135, type:"Non-Veg" },
            { name: "Chicken Keema Masala", price: 150, type:"Non-Veg" },
            { name: "Chicken Egg Keema Masala", price: 160, type:"Non-Veg" },
            { name: "Punjabi Chicken Curry", price: 140, type:"Non-Veg" }
        ]
    },
    {
        name: "Combos",
        items: [
            { name: "Punjabi Chole with 2 Masala Kulche", price: 115 },
            { name: "Yellow Dal with 2 Tandoori Roti", price: 80 },
            { name: "Chicken Keema with 2 Butter Naan", price: 170, type:"Non-Veg" },
            { name: "Egg Curry (Double Egg with 2 Masala Kulcha)", price: 120, type:"Non-Veg" },
            { name: "Veg Fried Rice + Veg Manchurian", price: 110 },
            { name: "Veg Noodles + Veg Manchurian", price: 110 }
        ]
    },
    {
        name: "Chinese",
        items: [
            { name: "Veg Fried Rice", price: 85 },
            { name: "Veg Garlic Fried Rice", price: 90 },
            { name: "Veg Schezwan Fried Rice", price: 95 },
            { name: "Paneer Fried Rice", price: 110 },
            { name: "Paneer Schezwan Fried Rice", price: 120 },
            { name: "Mushroom Fried Rice", price: 110 },
            { name: "Mushroom Schezwan Fried Rice", price: 120 },
            { name: "Babycorn Fried Rice", price: 110 },
            { name: "Babycorn Schezwan Fried Rice", price: 120 },
            { name: "Veg Noodles", price: 85 },
            { name: "Veg Garlic Noodles", price: 90 },
            { name: "Veg Schezwan Noodles", price: 95 },
            { name: "Paneer Noodles", price: 110 },
            { name: "Paneer Schezwan Noodles", price: 120 },
            { name: "Mushroom Noodles", price: 110 },
            { name: "Mushroom Schezwan Noodles", price: 120 },
            { name: "Babycorn Noodles", price: 110 },
            { name: "Babycorn Schezwan Noodles", price: 120 },
            { name: "Double Egg Fried Rice", price: 100, type:"Non-Veg" },
            { name: "Garlic Double Egg Fried Rice", price: 110, type:"Non-Veg" },
            { name: "Schezwan Double Egg Fried Rice", price: 110, type:"Non-Veg" },
            { name: "Chicken Fried Rice", price: 110, type:"Non-Veg" },
            { name: "Garlic Chicken Fried Rice", price: 120, type:"Non-Veg" },
            { name: "Schezwan Chicken Fried Rice", price: 115, type:"Non-Veg" },
            { name: "Double Egg Noodles", price: 100, type:"Non-Veg" },
            { name: "Garlic Egg Noodles", price: 95, type:"Non-Veg" },
            { name: "Chicken Noodles", price: 110, type:"Non-Veg" },
            { name: "Schezwan Chicken Noodles", price: 110, type:"Non-Veg" },
            { name: "Double Egg Chicken Fried Rice", price: 120, type:"Non-Veg" },
            { name: "Double Egg Chicken Noodles", price: 120, type:"Non-Veg" }
        ]
    },
    {
        name: "Beverages",
        items: [
            { name: "Pudina Salty Soda", price: 15 },
            { name: "Minty Salty Soda", price: 15 },
            { name: "Cola Soda", price: 25 },
            { name: "Blueberry Soda", price: 25 },
            { name: "Sprite Soda", price: 25 },
            { name: "7'up Soda", price: 25 },
            { name: "Fruit Beer", price: 25 },
            { name: "Mint Mojito", price: 30 },
            { name: "Orange Mojito", price: 35 },
            { name: "Bacardi Mojito", price: 35 },
            { name: "Strawberry Mojito", price: 40 },
            { name: "Pineapple Mojito", price: 35 },
            { name: "Kiwi Mojito", price: 35 },
            { name: "Bubblegum Mojito", price: 40 },
            { name: "Honey Ginger Mojito", price: 35 },
            { name: "Lassi", price: 50 },
            { name: "Buttermilk", price: 50 },
            { name: "Sugar Cane Juice", price: 30 }
        ]
    },
    {
        name: "Add-ons",
        items: [
            { name: "Garlic", price: 10 },
            { name: "Schezwan", price: 10 },
            { name: "Mayonnaise", price: 10 },
            { name: "Curd", price: 10 }
        ]
    }
];
