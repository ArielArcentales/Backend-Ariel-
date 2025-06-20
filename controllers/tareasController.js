let tareas = [];

exports.getTareas=(req,res) =>{
    console.log(tareas.length)
    res.json(tareas);
}

exports.addTarea = (req,res) => {
    let {nombre, completed} = req.body;
    let nuevo = {id: Date.now(), nombre, completed};
    tareas.push(nuevo);
    res.status(201).json(nuevo);
}

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