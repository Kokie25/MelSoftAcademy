// const http = require("http")
// const PORT = 8000

// const server = http.createServer(function(req, res) {
//     res.writeHead(200, {'Content-Type': 'application/json'})
//     // res.write
//     res.write("Hello User")
//     res.end( )
// })


// server.listen(PORT, function(error) {
//     if (error) {
//         console.log("Internal Server Error", + error)
//     } else {
//         console.log("Server is listening on port "  + PORT)
//     }
// })


// // http.createServer(function (req, res) {
// //   res.writeHead(200, {'Content-Type': 'application/json'});
// //   res.end(JSON.stringify({'greeting' : 'Hello World!' }));
// // }).listen(PORT);

// const http = require("http");
// const fs = require("fs");
// const PORT = 8000;

// const server = http.createServer((req, res) => {
//     const log = `${Date.now()} : ${req.url} Received\n`;

//     // Append to log file
//     fs.appendFile("log.txt", log, (err) => {
//         if (err) {
//             res.writeHead(500, { 'Content-Type': 'application/json' });
//             res.write(JSON.stringify({ "error": "Could not write to log file" }));
//             return res.end();
//         }

//         // Handle requests
//         res.writeHead(200, { 'Content-Type': 'application/json' });

//         switch (req.url) {
//             case "/":
//                 res.end(JSON.stringify({ "greeting": "from home page" }));
//                 break;
//             case "/register":
//                 res.end(JSON.stringify({ "greeting": "registration" }));
//                 break;
//             default:
//                 res.writeHead(404, { 'Content-Type': 'application/json' });
//                 res.end(JSON.stringify({ "error": "Page not found" }));
//                 break;
//         }
//     });
// });

// server.listen(PORT, () => console.log("Server running on port " + PORT));
