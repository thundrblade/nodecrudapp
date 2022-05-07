import express from "express";
import connectDB from "./db/conn.js";
import {join} from 'path';
import web from "./routes/web.js"

const app = express();

const port =process.env.PORT || 3000;

// const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017";
const DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://bhoyaramit:amit9404@cluster0.280fx.mongodb.net/nodeCrud?retryWrites=true&w=majority";

connectDB(DATABASE_URL)

//app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use('/student',express.static(join(process.cwd(),"./public")));
app.use('/student/edit',express.static(join(process.cwd(),"./public")));


app.set("view engine", 'ejs');


app.use("/student", web);

app.listen(port,()=>{
    console.log(`connection successful ${port}`);
})