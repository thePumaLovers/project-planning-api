const express = require('express')
const router = express.Router()

const Group = require('./../models/Group')

// Routes

// Get all groups
router.get('/', async (req, res) => {
    const groups = await Group.find()

    res.json({
        status: 200,
        groups: groups,
    })
})

// Get group by id
router.get('/:id', async (req, res) => {
    const group = await Group.findById(req.params.id)

    res.json({
        status: 200,
        group: group,
    })
})

// Create new group
router.post('/', async (req, res) => {
    const newGroup = await Group.create(req.body)

    res.json({
        status: 200,
        message: 'new group created',
        newGroup: newGroup,
    })
})

// Edit group by id
router.put('/:id', async (req, res) => {
    const updatedGroup = await Group.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.json({
        status: 200,
        message: 'group edited',
        updatedGroup: updatedGroup,
    })
})

// Delete group by id
router.delete('/:id', async (req, res) => {
    const deletedGroup = await Group.deleteOne({ _id: req.params.id})

    res.json({
        status: 200,
        message: 'group deleted',
        deletedGroup: deletedGroup,
    })
})

module.exports = router;