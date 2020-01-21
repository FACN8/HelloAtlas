// // const fs = require("fs");
// // const path = require("path");



// // const handlePublic = (request, response) => {
// //     const endpoint = request.url;
// //     const extension = endpoint.split(".")[1];
// //     const extensionType = {
// //       html: "text/html",
// //       css: "text/css",
// //       js: "application/javascript",
// //       ico: "image/x-icon",
// //       jpg: "image/x-icon",
// //       png: "image/x-icon"
// //     };
  
// //     const filePath = path.join(__dirname, "..", "/public/", endpoint);
// //     console.log(filePath);
// //     fs.readFile(filePath, (error, file) => {
// //       if (error) {
// //         console.log(error);
// //         response.writeHead(500);
// //         response.end("Cant handle this!");
// //       } else {
// //         response.writeHead(200, { "Content-Type": extensionType[extension] });
// //         response.end(file);
// //       }
// //     });
// //   };
  
// //   module.exports = {
// //     handleHomeRoute,
// //     handlePublic,
// //     handleNode,







// const getPosts = (request, response) => {
//     const postsPath = path.join(__dirname, "..", "src/posts.json");
  
//     fs.readFile(postsPath, (error, file) => {
//       if (error) {
//         console.log(error);
//         response.writeHead(500);
//         response.end("ah fuck we got shit on by an error");
//       } else {
//         response.writeHead(200, { "Content-Type": "application/json" });
//         response.end(file);
//       }
//     });
//   };