
const express = require('express')
const koder = require ('../usesCases/koder')
const router = express.Router()

router.get('/',async (req,res) => {
  try {
    const koders = await koder.getAll()
    res.json({
      success:true,
      message: 'all koders',
      data: {
        koders
      }
    })
  } catch(error) {
    res.status(400),
    res.json({
      success:false,
      message:error.message
    })
  }
})

module.exports = router