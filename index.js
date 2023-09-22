const http = require("http");
const fs = require("fs");

const PORT = 3500;

const server = http.createServer((req, res) =>{
    // request handler goes here

    // Content with plain text format
    if (req.url === "/"){
        res.writeHead (200, {
            "Content-Type": "text/plain"
        })
        res.end("ini adalah halaman utama dengan content type plain text.")
    }

    // Content with JSON format
    else if (req.url === "/contacts"){
        res.writeHead (200, {
            "Content-Type": "application/json"
        });

        let contacts =JSON.stringify([
            {name:"Dania Nafila", phone: "085251835087"},
            {name: "Ardhito Rifqi Pramono", phone: "087327384998"},
            {name: "Daniel Baskara Putra", phone: "0974356676644"},
        ]);
        
        res.end(contacts);
    }

    // Content with HTML Format
    else if (req.url === "/about"){
        res.writeHead (200, {
            "Content-Type": "text/html"
        })
        res.end("<h1>Ini halaman about dengan tipe konten HTML</h1>");
    } 
    
    // Content with HTML file
    else if (req.url === "/products"){
      fs.readFile("./public/index.html", (err, data) => {
        if (err) {
            res.writeHead(404);
            res.write("Halaman ini tidak ditemukan")
        } else {
            res.writeHead(200);
            res.end(data);
        }
    });
    }
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});