let mongoose = required("mongoose");

const tareaSchema = new mongoose.Schema({
    nombre:{type:String, required:true},
    descripcion:{type:String, required:true},
    completed:{type:Boolean, default:false}
});

module.exports = mongoose.model( 'Tarea', tareaSchema)