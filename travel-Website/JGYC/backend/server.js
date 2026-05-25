import app from "./app.js"

app.listen(Process.env.PORT, ()=>{
    console.log(`server is running on port ${Process.env.PORT}`);
    
})