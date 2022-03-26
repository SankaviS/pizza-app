import  express  from "express"; 

const app = express();
const PORT=4000;

const MONGO_URL = "mongodb://localhost";
async function createConnection()
 {const client = new MongoClient(MONGO_URL);
  await client.connect();
  console.log("Mongo is connected ✌️😊");
   return client;
}
 const client = await createConnection();
 
 const pizzas = [
  {
    name: "Pepper Barbecue Chicken",
    varients: ["small", "medium", "large"],
    Base: [
      "Stuffed Crust",
      "Cracker Crust",
      "Flat Bread Crust",
      "Thin Crust",
      "Cheese Crust Pizza",
    ],
    sauce: [
      "Pesto",
      " White Garlic Sauce",
      "Garlic Ranch Sauce",
      "Hummus",
      "Marinara Sauce",
    ],
    cheese: [
      "Mozzarella Cheese",
      "Provolone Cheese",
      "Cheddar Cheese",
      "Parmesan Cheese",
    ],
    meat: [
      "Pepperoni",
      "Sausage",
      "Prosciutto",
      "Meatballs",
      "Bacon",
      "Buffalo Chicken",
    ],
    veggies: [
      "bell peppers",
      "corn",
      "broccoli",
      "tomatoes",
      "eggplant",
      "mushroom",
      "onion",
      "green pepper",
      "black olives",
    ],
    prices: [
      {
        small: 200,
        medium: 350,
        large: 400,
      },
    ],
    category: "nonveg",
    image: "https://www.dominos.co.in/files/items/Pepper_Barbeque.jpg",
    description:
      "This bbq chicken pizza is loaded with seasoned chicken, melty mozzarella cheese, barbecue sauce, roasted jalapenos, and spiced with just the right amount of heat and flavor. A spicy food lover's dream.",
  },
  {
    name: "Non Veg Supreme",
    varients: ["small", "medium", "large"],
    Base: [
      "Stuffed Crust",
      "Cracker Crust",
      "Flat Bread Crust",
      "Thin Crust",
      "Cheese Crust Pizza",
    ],
    sauce: [
      "Pesto",
      " White Garlic Sauce",
      "Garlic Ranch Sauce",
      "Hummus",
      "Marinara Sauce",
    ],
    cheese: [
      "Mozzarella Cheese",
      "Provolone Cheese",
      "Cheddar Cheese",
      "Parmesan Cheese",
    ],
    meat: [
      "Pepperoni",
      "Sausage",
      "Prosciutto",
      "Meatballs",
      "Bacon",
      "Buffalo Chicken",
    ],
    veggies: [
      "bell peppers",
      "corn",
      "broccoli",
      "tomatoes",
      "eggplant",
      "mushroom",
      "onion",
      "green pepper",
      "black olives",
    ],
    prices: [
      {
        small: 200,
        medium: 350,
        large: 400,
      },
    ],
    category: "nonveg",
    image: "https://www.dominos.co.in/files/items/Non-Veg_Supreme.jpg",
    description:
      "Bite into supreme delight of Black Olives, Onions, Grilled Mushrooms, Pepper BBQ Chicken, Peri-Peri Chicken, Grilled Chicken Rashers",
  },
  {
    name: "Golden Corn Pizza",
    varients: ["small", "medium", "large"],
    Base: [
      "Stuffed Crust",
      "Cracker Crust",
      "Flat Bread Crust",
      "Thin Crust",
      "Cheese Crust Pizza",
    ],
    sauce: [
      "Pesto",
      " White Garlic Sauce",
      "Garlic Ranch Sauce",
      "Hummus",
      "Marinara Sauce",
    ],
    cheese: [
      "Mozzarella Cheese",
      "Provolone Cheese",
      "Cheddar Cheese",
      "Parmesan Cheese",
    ],
    meat: [
      "Pepperoni",
      "Sausage",
      "Prosciutto",
      "Meatballs",
      "Bacon",
      "Buffalo Chicken",
    ],
    veggies: [
      "bell peppers",
      "corn",
      "broccoli",
      "tomatoes",
      "eggplant",
      "mushroom",
      "onion",
      "green pepper",
      "black olives",
    ],
    prices: [
      {
        small: 180,
        medium: 250,
      },
    ],
    category: "veg",
    description:
      "Corn over the base makes it look beautiful. It is served with tomato sauce and chili flakes are sprinkled over the topping according the taste. After mixing all the ingredients, it is baked by adding cheese and corn for added flavor to pizza. Corn adds health and sweet taste to the pizza.",
    image: "https://parcelwalaa.in/wp-content/uploads/2021/08/Corn__Cheese.jpg",
  },
  {
    name: "Jalapeno & Red Paprika Pizza",
    varients: ["small", "medium", "large"],
    Base: [
      "Stuffed Crust",
      "Cracker Crust",
      "Flat Bread Crust",
      "Thin Crust",
      "Cheese Crust Pizza",
    ],
    sauce: [
      "Pesto",
      " White Garlic Sauce",
      "Garlic Ranch Sauce",
      "Hummus",
      "Marinara Sauce",
    ],
    cheese: [
      "Mozzarella Cheese",
      "Provolone Cheese",
      "Cheddar Cheese",
      "Parmesan Cheese",
    ],
    meat: [
      "Pepperoni",
      "Sausage",
      "Prosciutto",
      "Meatballs",
      "Bacon",
      "Buffalo Chicken",
    ],
    veggies: [
      "bell peppers",
      "corn",
      "broccoli",
      "tomatoes",
      "eggplant",
      "mushroom",
      "onion",
      "green pepper",
      "black olives",
    ],
    prices: [
      {
        small: 200,
        medium: 300,
        large: 420,
      },
    ],
    category: "veg",
    image: "https://www.dominos.co.in//files/items/5_Pepper.jpg",
    description:
      "This pizza is amazing and can become more delicious if we will add some more cheese in it. Ingredients are yeast, sugar, olive oil, salt, and all-purpose flour in a big bowl. After mixing all the ingredients, it is baked by adding Jalapeno and Paprika with corns over the cheese layer. The base is made crunchy to give it best taste. It can be made more tasty by sprinkling chili flakes and Oregano as per the taste.",
  },
  {
    name: "margherita",
    varients: ["small", "medium", "large"],
    Base: [
      "Stuffed Crust",
      "Cracker Crust",
      "Flat Bread Crust",
      "Thin Crust",
      "Cheese Crust Pizza",
    ],
    sauce: [
      "Pesto",
      " White Garlic Sauce",
      "Garlic Ranch Sauce",
      "Hummus",
      "Marinara Sauce",
    ],
    cheese: [
      "Mozzarella Cheese",
      "Provolone Cheese",
      "Cheddar Cheese",
      "Parmesan Cheese",
    ],
    meat: [
      "Pepperoni",
      "Sausage",
      "Prosciutto",
      "Meatballs",
      "Bacon",
      "Buffalo Chicken",
    ],
    veggies: [
      "bell peppers",
      "corn",
      "broccoli",
      "tomatoes",
      "eggplant",
      "mushroom",
      "onion",
      "green pepper",
      "black olives",
    ],
    prices: [
      {
        small: 150,
        medium: 220,
        large: 300,
      },
    ],
    category: "veg",
    image: "https://www.dominos.co.in//files/items/Margherit.jpg",
    description:
      "The pizza base is made by mixing yeast, sugar, olive oil, salt, and all-purpose flour in a big bowl. After mixing all the ingredients, it is baked by adding the cheese as topping over it. The base is perfectly prepared by adding single layer of cheese over it. It is mouth-watering pizza for cheese lovers.",
  },
  {
    name: "Double Cheese Margherita Pizza",
    varients: ["small", "medium", "large"],
    Base: [
      "Stuffed Crust",
      "Cracker Crust",
      "Flat Bread Crust",
      "Thin Crust",
      "Cheese Crust Pizza",
    ],
    sauce: [
      "Pesto",
      " White Garlic Sauce",
      "Garlic Ranch Sauce",
      "Hummus",
      "Marinara Sauce",
    ],
    cheese: [
      "Mozzarella Cheese",
      "Provolone Cheese",
      "Cheddar Cheese",
      "Parmesan Cheese",
    ],
    meat: [
      "Pepperoni",
      "Sausage",
      "Prosciutto",
      "Meatballs",
      "Bacon",
      "Buffalo Chicken",
    ],
    veggies: [
      "bell peppers",
      "corn",
      "broccoli",
      "tomatoes",
      "eggplant",
      "mushroom",
      "onion",
      "green pepper",
      "black olives",
    ],
    prices: [
      {
        small: 250,
        medium: 380,
      },
    ],
    category: "veg",
    image:
      "https://www.dominos.co.in//files/items/Double_Cheese_Margherita.jpg",
    description:
      "This is a plain pizza which have cheese on it which is margherita and is delicious because of the loads of cheese. After mixing all the ingredients, it is baked by adding the cheese as topping over it. The base is perfectly prepared by adding double layer of cheese over it",
  },
];

  app.get("/",function(request,response){
    response.send("hello this is lee fullstack developer");
})

app.get("/pizzas", async function(request,response){
    const pizza= await client.db("b30wd").collection("pizzas").find({}).toArray();
    response.send(pizza)
  });
 


app.listen(PORT,()=>console.log(`server is started ${PORT}`));