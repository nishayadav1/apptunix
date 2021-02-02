const express =require("express");

const app1 = express();
const port1 =4000;
app1.get("/",(req,res) =>
{
res.write("<h1>welcome to home page</h1>");
res.write("<h1>welcome to again home page</h1>");
res.send();
});

app1.get("/about",(req,res) =>
{
res.send("welcome to about page");
});

app1.get("/contact",(req,res) =>
{
res.send("welcome to contact page");
});
app1.get("/temp",(req,res) =>
{
res.json({
    id:1,
    name:"nisha",
});
});


app1.listen(port1,() => {
    console.log(`listening to the port ${port1}`);
});