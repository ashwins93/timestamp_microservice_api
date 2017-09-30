var express = require('express')
var strftime = require('strftime')
var app = express()

app.use(express.static(__dirname))
app.get('/:dateStr', function(req, res) {
  let datenum = Date.parse(req.params.dateStr)
  let resobj = {}
  if(datenum) {
    resobj.unix = new Date(datenum).getTime()
    resobj.natural = strftime('%B %d, %Y', new Date(datenum))
  } else {
    resobj.unix = null
    resobj.natural = null
  }
  res.json(resobj)
});
app.listen(3030)
