let db=require('../DatabaseConfig')

exports.clientSave = async (req, res)=>{
    let username = req.body.username
    let email = req.body.email
    let password = req.body.password

      let value = [[username,email,password]]

      db.query('insert into agent (username,email,password) values ?', [value], (err, result)=>{
          if(err) throw err
          else{
             res.send("data saved")
          }
      })
  }

  exports.getclient=(req,res)=>{
    let sql="select * from agent"
    db.query(sql,(err,result)=>{
        if(err) throw err
        else{
            res.json(result)
        }
    })
} 