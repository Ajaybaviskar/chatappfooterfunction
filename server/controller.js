// const ToDoModel = require('../models/TodoModel');


// module.exports.getToDo = async (req, res) => {
//     const toDo = await ToDoModel.find()
//     res.send(toDo)
// }

// // For Save our To-Do item
// module.exports.saveToDo = async (req, res) => {
//     const { text } = req.body    

//     ToDoModel
//         .create({ text })
        

//         .then((data) => {
//             console.log("Added Sucessfully...");
//             console.log(data);
//             res.send(data);          
//         })  
// }

// // For update our To-Do item
// module.exports.updateToDo = async (req, res) => {
//     const { _id, text } = req.body
//     ToDoModel
//         .findByIdAndUpdate(_id, { text })
//         .then(() => res.send("Updated Successfully..."))
//         .catch((err) => console.log(err));        
// }
// // For deleting To-Do item
// module.exports.deleteToDo = async (req, res) => {
//     const { _id} = req.body
//     ToDoModel
//         .findByIdAndDelete(_id)
//         .then(() => res.send("Deleted Successfully..."))
//         .catch((err) => console.log(err));        
// }