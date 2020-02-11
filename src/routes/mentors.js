
const express = require('express')
const mentor = require('../usesCases/mentors')
const router = express.Router()

router.get('/', async (req, res) => {
  try {

    const mentors = await mentor.getAll()
    res.json({
      success: true,
      message: 'all mentor',
      data: {
        mentors
      }
    })
  } catch (error) {
    res.status(400),
      res.json({
        success: false,
        message: error.message
      })
  }
})

router.post('/',async(request, response) => {
  try {
    const newMentor = await mentor.create(request.body)
    response.status(200),
    response.json({
      success:true,
      message:'mentor create',
      data:{
        mentor:newMentor
      }
    })
  } catch (error) {
    response.status(400),
      response.json({
        success: false,
        message: error.message
      })
  }
})

router.get('/:id',async (req, res) => {
  try {
    const id = req.params.id
    const koderfound =  await mentor.getById(id)
    res.json({
      success: true,
      message: 'mentor by Id',
      data: {
        mentor:koderfound
      }
    })
  } catch (error) {
    res.status(400),
      res.json({
        success: false,
        message: error.message
      })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id
    const koderDel = await mentor.deletebyId(id)
    res.json({
      success: true,
      message: 'mentor Delete',
      data: {
        mentor:koderDel
      }
    })
  } catch (error) {
    res.status(400),
      res.json({
        success: false,
        message: error.message
      })
  }
})

router.patch('/:id', async (req, res) => {
  try {
    const id = req.params.id
    const info = req.body 
    const upDatementor = await mentor.updateById(id,info)
    
    res.json({
      success: true,
      message: 'Changes Done',
      data: {
        mentor:upDatementor
      }
    })
  } catch (error) {
    res.status(400),
      res.json({
        success: false,
        message: error.message
      })
  }
})

module.exports = router