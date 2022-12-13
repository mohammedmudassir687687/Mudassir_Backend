const http = require('http')
const fs= require("fs")
const path = require('path')

// const dirPath = path.join(__dirname,'/public')

const PORT = process.env.PORT || 7000;

const server = http.createServer(async (req, res) => {
    res.setHeader(
        "Access-Control-Allow-Origin",
        "*"
    );
    
    if (req.url=='/api/students')
    {
        fs.readFile(
            path.join(__dirname, 'students.json'),'utf-8',
                    (err, content) => {
                                    
                                    if (err) throw err;
                                    // Please note the content-type here is application/json
                                    res.writeHead(200, { 'Content-Type': 'application/json' });
                                    res.end(content);
                        }
              );
    }
    else if (req.url=='/api/faculty')
    {
        fs.readFile(
            path.join(__dirname, 'grades.json'),'utf-8',
                    (err, content) => {
                                    
                                    if (err) throw err;
                                    // Please note the content-type here is application/json
                                    res.writeHead(200, { 'Content-Type': 'application/json' });
                                    res.end(content);
                        }
              );
    }
    else if (req.url=='/api')
    {
        fs.readFile(
            path.join(__dirname, 'students.json'),'utf-8',
                    (err, content) => {
                                    
                                    if (err) throw err;
                                    // Please note the content-type here is application/json
                                    res.writeHead(200, { 'Content-Type': 'application/json' });
                                    res.end(content);
                        }
              );
    }
    else if(req.url === "/"){
        fs.readFile("./public/index.html", "UTF-8", function(err, html){
            // res.writeHead(200, {"Content-Type": "text/html"});
            res.end(html);
        });
    }
    else if (req.url == "/style.css") {
        fs.readFile(path.join(__dirname, "public", "style.css"), (err, content) => {
          if (err) throw err;
          res.writeHead(200, { "Content-Type": "text/css" });
          res.end(content);
        })
    }
    const images = [
        "aws.png",
        "ethereum.jpeg",
        "pythonnode.jpeg",
        "studying.jpg"
    ];
    for (const img of images) {
        if (req.url === `/images/${img}`) {
            fs.readFile(
            path.join(__dirname, "public/images", img),
            (err, content) => {
                if (err) console.log(err);;

                res.writeHead(200, { "Content-Type": `image/${img.split(".")[1]}` });
                res.end(content);
            });
        }
    }
    // // else{
    //     res.end("<h1> 404 nothing is here</h1>");
    // }
    
});


server.listen(PORT, () => {
    console.log(`server started on port: ${PORT}`);
});
