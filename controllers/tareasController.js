const Tarea = require('../model/tarea');


exports.getTareas= async (req,res) =>{
    const tareas = await Tarea.find();
    console.log(`El numero de tareas es ${tareas.length}`);
    res.json(tareas);
};

exports.addTarea = async (req,res) => {
    let {nombre, descripcion, completed} = req.body;
    let nuevo = new Tarea ({nombre, descripcion, completed});
    await nuevo.save();
    console.log('Se agregaron nuevas tareas')
    res.status(201).json(nuevo);
};

exports.deleteTarea = (req,res) =>{
    let id = Number(req.params.id)
    let tareaExistente = tareas.find((t)=>t.id == id);  
    if(!tareaExistente){
        return res.status(404).json({error: "Tarea no encontrada"})
    }

    tareas = tareas.filter(t => t.id != req.params.id);
    res.send("Tarea eliminada");
};

exports.actualizarTarea = (req,res) =>{
    let id = Number(req.params.id)
    let tarea = tareas.find(t => t.id === id);
    if (!tarea) {
        return res.status(404).json({ mensaje: "Tarea no encontrada" });
    }
    
    if (nombre !== undefined) tarea.nombre = nombre;
    if (completed !== undefined) tarea.completed = completed;
    res.send("Tarea eliminada");
};