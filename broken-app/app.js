const express = require('express');
const axios = require('axios');
const app = express();
const ExpressError = require("./expresserror");

app.use(express.json());

app.post('/', async function(req, res, next) {
  try {
    let devInfo = []
    let developers = req.body.developers;
    for(let d of developers){
      let result = await axios.get(`https://api.github.com/users/${d}`);
      devInfo.push({"bio": result.data.bio, "name": result.data.name});
    }

    return res.json(devInfo);
  } 
  catch(err){
    return next(err);
  }
});

app.use((req, res, next) => {
  const err = new ExpressError("Not Found", 404);
  return next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);

  return res.json({
    error: err,
    message: err.message
  });
});

module.exports = app;
