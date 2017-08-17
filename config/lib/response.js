
module.exports = {
  error(res, err){
    console.log(`Error: ${err}`);
    if(!res)
      return;

    let errorMessage = {};
    try{
      errorMessage = JSON.parse(err);
    }catch(e){
      errorMessage = err;
    }

    res.status(400).send({
      error: true,
      errorMessage: errorMessage,
    });
  },
  success(res, result){
    if(!res)
      return;

    let body = {};
    try{
      body = JSON.parse(result);
    }catch(e){
      body = result;
    }

    res.json({
      error: false,
      body: body,
    });
  }
}
