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
        message: 'new project created',
        project: group
        
    })
})

// Update project by id
router.put('/groupid/:groupid/projectid/:projectid', async (req, res) => {
    //Find specific group by id
    const group = await Group.findById(req.params.groupid)

    //Find specific project in selected group via id
    const project = group.projects.id(req.params.projectid)
    
    //Find index of selected group
    const index = group.projects.indexOf(project)

    //Modify group and save since subdocs don't save unless parent saves
    group.projects.splice(index, 1, req.body)
    group.save();

    //Response sent from request
    res.json({
        status: 200,
        message: 'project edited',
        project: group
    })
})

// Delete project by id
router.delete('/groupid/:groupid/projectid/:projectid', async (req, res) => {
    //Find specific group by id
    const group = await Group.findById(req.params.groupid)

    //Find specific project in selected group via id
    const project = group.projects.id(req.params.projectid)
    
    //Find index of selected group
    const index = group.projects.indexOf(project)

    //Modify group with subdoc deletion and save since subdocs don't save unless parent saves
    group.projects.splice(index, 1)
    group.save();

    //Response sent from request
    res.json({
        status: 200,
        message: 'project deleted',
        project: group
    })
})

module.exports = router;