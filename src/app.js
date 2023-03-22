const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const db = require("./utils/database")
const initModels = require("./models/initModels")
const UserRoutes = require('./routes/user.routes')
const PostsRoutes = require('./routes/post.routes')
const AnswerRoutes = require("./routes/answer.routes")

initModels();
const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json())

const PORT = 8000;

db.authenticate()
    .then(() => {
        console.log("Base de datos conectada")
    })
    .catch((error) => console.log(error));

db.sync({ alter: true }) 
    .then(() => console.log("Synced database"))
    .catch((error) => console.log(error));
// Crea las tablas sino existe, si existe 
//y hay diferencias modifica la base de datos
//alter: true si existe la tabla pero 
//existen diferencias realizara las modificaciones 
//force: true, elimina de lleno las tablas y las vuelve a crear

app.use(UserRoutes);
app.use(PostsRoutes);
app.use(AnswerRoutes);

app.get("/", (req, res) => {
    res.send("Welcome to API")
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})