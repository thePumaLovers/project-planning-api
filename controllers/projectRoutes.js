const express = require('express')
const router = express.Router()

const Group = require('./../models/Group')

// Create new project
router.post('/groupid/:groupid', async (req, res) => {
    const group = await Group.findById(req.params.groupid)

    group.projects.push(req.body)
    group.save();

    res.json({
        status: 200,
        message: 'new group created',
        project: group
        
    })
})


module.exports = router;