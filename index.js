let express = require('express');
let app = express();
let tareasRoutes = require('./routes/tareas');


app.use('/tareas', tareasRoutes);

app.listen(3000,()=>{
    console.log("servidor corriendo en el puerto 3000")
})