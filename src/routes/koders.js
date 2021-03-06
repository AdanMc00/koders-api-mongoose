
const express = require('express')
const koder = require('../usesCases/koder')
const router = express.Router()

router.get('/', async (req, res) => {
  try {

    const koders = await koder.getAll()
    res.json({
      success: true,
      message: 'all koders',
      data: {
        koders
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
    const newkoder = await koder.create(request.body)
    response.status(200),
    response.json({
      success:true,
      message:'koder create',
      data:{
        koder:newkoder
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
    const koderfound =  await koder.getById(id)
    res.json({
      success: true,
      message: 'koders by Id',
      data: {
        koder:koderfound
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
    const koderDel = await koder.deletebyId(id)
    res.json({
      success: true,
      message: 'koder Delete',
      data: {
        koder:koderDel
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
    const upDateKoders = await koder.updateById(id,info)
    
    res.json({
      success: true,
      message: 'Changes Done',
      data: {
        koder:upDateKoders
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