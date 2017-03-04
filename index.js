const express = require("express");
bodyParser=require("body-parser");

let app = express();

app.use(express.static('public'));

app.use(bodyParser.urlencoded());

app.set("view engine", "hbs");

app.get('/',(req, res) => {
  return res.render("view");
});
app.get('/test', (req, res)=>{
	return res.render("test");
});

app.listen(3000, () => {
	console.log("Listening on port 3000...");
});


