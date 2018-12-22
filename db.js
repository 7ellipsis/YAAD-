//Created by Ashay Mandwarya

var app=require('express')();
var http=require('http').Server(app);
var bodyParser = require('body-parser')
var pouch = require('PouchDB');
var db = new pouch('my_database');
var sno=0;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get('/',(req,res)=>res.sendFile(__dirname+"/index.html"));
app.get('/gather',(req,res)=>{
    db.allDocs({
        include_docs:true
    }).then((result)=>{res.send(JSON.stringify({"count":result.total_rows,"data":result.rows}))
       sno=result.total_rows;
    });
})
app.post('/del',(req,res)=>{
    db.get(req.body.a.toString()).then(function (doc) {
        return db.remove(doc._id, doc._rev);
      });
      res.sendStatus(200);
    });
app.post('/note',async (req,res)=>{doc.data=req.body.note;
    res.sendStatus(200);

await put();
});
app.listen(3000,()=>console.log("Server started at port : 3000"));
//Creating the database object

console.log ("Database created Successfully.");
doc = {
    "_id" : null,
    "date" : null,
    "data" : null
    }
    function put()
    {
        var k=++sno;
doc._id=k.toString();
doc.date=new Date().toLocaleDateString();
db.put(doc).then((res)=>console.log(res)).catch((err)=>console.log(err));
    }
    