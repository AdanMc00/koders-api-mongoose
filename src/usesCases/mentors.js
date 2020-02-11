const mentor = require('../models/mentors')

function create ({name, gender, email, birthDate}) {
  const newmentor = new mentor({name, gender, email, birthDate})
  return newmentor.save()
}

function getAll() {
  return mentor.find({})
}

function getById(id){
return mentor.findById(id)

}

function deletebyId(id){
  return mentor.findByIdAndDelete(id)
}

function updateById(id, mentorInfoToUpdate){
  return mentor.findByIdAndUpdate(id,mentorInfoToUpdate)
}

module.exports = {
  create,
  deletebyId,
  getAll,
  getById,
  updateById
}