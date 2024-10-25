let db=require('../DatabaseConfig')


exports.TaskSave = async (req, res)=>{
    let CustomerName = req.body.CustomerName
    let email = req.body.email
    let phone = req.body.phone
    let Address = req.body.Address
    let Status = req.body.Status
    

      let value = [[CustomerName,email,phone,Address,Status]]

      db.query('insert into taskform (CustomerName,email,phone,Address,Status) values ?', [value], (err, result)=>{
          if(err) throw err
          else{
             res.send("data saved")
          }
      })
  }

  exports.GetTask=(req,res)=>{
    let sql="select * from taskform"
    db.query(sql,(err,result)=>{
        if(err) throw err
        else{
            res.json(result)
        }
    })
}