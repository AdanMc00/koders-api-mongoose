
const Koder= require('../models/koder')
function create ({name, gender, email, birthDate}) {
  const newKoder = new Koder({name, gender, email, birthDate})
  return newKoder.save()
}

function getAll() {
  return Koder.find({})
}

function getById(id){
return Koder.findById(id)

}

function deletebyId(id){
  return Koder.findByIdAndDelete(id)
}

function updateById(id, koderInfoToUpdate){
  return Koder.findByIdAndUpdate(id,koderInfoToUpdate)
}

module.exports = {
  create,
  deletebyId,
  getAll,
  getById,
  updateById
}