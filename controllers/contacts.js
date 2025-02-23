// let contacts = require("../contacts");

// //get - returns all 
// exports.list =  function list(request, response) {
//     return response.json(contacts);
// }
// //get one contact by id
//    exports.show = function show(request, response) {
//     let contact = contacts.filter (p=>p._id == request.params.id);
//     response.json(contact);
// }

// //post
//    exports.create =  function create(request, response) {
//     let newContact = request.body;
//     contacts.push(newContact);
//     response.json(newContact)
// }

// //put
//    exports.update =  function update(request, response) {
//     let contact = contacts.find (p=>p._id == request.params.id);
//     contact.make = body.make;
//     response.json(contact);
// }

// //delete
//    exports.remove =  function remove(request, response) {
//     let contact = contacts.find(i => i._id == request.params.contactId);
//     contact.isActive = false;
//     response.send("deleted");
// }
   

let ContactModel = require("../models/contactsModel")

exports.list =  function list(request, response) {
   ContactModel.find((e,v)=>{
       return response.json(v);
   });
}
exports.show = function show(request, response) {
   ContactModel.findById(request.params.id, (err,v)=>{
       return response.json(v);
   });
}
exports.create =  function create(request, response) {
   let newContact = new ContactModel(request.body);
   newContact.save(()=>{
       return response.json(newContact);
   });
}