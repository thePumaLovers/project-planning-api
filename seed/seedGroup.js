const Group = require('./../models/Group');
const seedDataGroup = require('./seedDataGroup.json');

// Group.deleteMany({}).then(() => {
//     Group.insertMany(seedDataGroup).then(() => {
//         console.log('Group data added')
//         process.exit()
//     })
// })

const runSeed = async () => {
    await Group.deleteMany({})
    await Group.insertMany(seedDataGroup)
    console.log('Group data added')
    process.exit()
}
runSeed();