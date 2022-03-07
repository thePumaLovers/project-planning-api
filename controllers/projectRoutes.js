const express = require('express')
const router = express.Router()

const Group = require('./../models/Group')

// Create new project
router.post('/', async (req, res) => {
    const newProject = await Group.children.push({projects: req.body})

    res.json({
        status: 200,
        message: 'new group created',
        newProject: newProject,
    })
})


module.exports = router;