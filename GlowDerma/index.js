const express=require("express")
const PORT=5000||3000
let products=[]
const app=express();
app.use(express.json());
app.get("/",(req,res)=>{
    res.json(products);
})
app.post("/product",(req,res)=>{
    const {name,price,description}=req.body;
    const newItem={
        name,
        price,
        description
    }
    products.push(newItem);
    res.json(newItem)
})
app.listen(PORT,()=>{
    console.log(`your server successfully running at port no ${PORT}`)
})