exports.getProducts = (req, res, next)=>{
      res.status(200).json({
          success : true,
          message : "This Route Will Show All Products  in Database"
      })
}

exports.listProducts = (req, res, next)=>{
    res.status(200).json({
        success : true,
        message : "This Route Will List All Products  in Database"
    })
}