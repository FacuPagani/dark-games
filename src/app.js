const express= require("express");
const app = express();
const path = require("path");
const mainRouter = require('./routes/mainRouter');
const methodOverride = require ('method-override');
var cors = require('cors')

//De aplicaciòn

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

app.use(express.urlencoded({extended: false}));
app.use(express.json())

app.use(express.static(path.join(__dirname,"../public")))


app.use(methodOverride('_method'));
app.use(cors())

//De ruta
app.use('/', mainRouter);



app.listen(process.env.PORT || 3000, function() {
    console.log("El servidor está corriendo en el puerto 3000");
    console.log("-------------------");
    console.log("http://localhost:3000");
})
