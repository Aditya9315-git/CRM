let express = require('express')
let router= express.Router()

let clientController=require("../Controller/AdminController")
let taskController=require('../Controller/TaskController')

router.post('/clientSave', clientController.clientSave)
router.get('/getclient', clientController.getclient)


// Task Routes

router.post('/TaskSave', taskController.TaskSave)
router.get('/GetTask', taskController.GetTask)




module.exports = router;



