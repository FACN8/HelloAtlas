const fs = require("fs");
const path = require("path");
const logic = require(".\logic.js")

const handleHome = (request, response) => {
    const indexFilePath = path.join(__dirname, '..', 'public', 'index.html');
    fs.readFile(indexFilePath, (err, file) => {
        if (err) {
            console.log(err);
            response.writeHead(500);
            response.end('an error occured');
        } else {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.end(file)
        }
    })
}

const handlePublic = (request, response) => {
    const endpoint = request.url;
    const extension = endpoint.split(".")[1];
    const extensionType = {
        html: "text/html",
        css: "text/css",
        js: "application/javascript",
        ico: "image/x-icon",
        jpg: "image/x-icon",
        png: "image/x-icon"
    };
    const filePath = path.join(__dirname, "..", "/public/", endpoint);
    console.log(filePath);
    fs.readFile(filePath, (error, file) => {
        if (error) {
            console.log(error);
            response.writeHead(500);
            response.end("Cant handle this!");
        } else {
            response.writeHead(200, { "Content-Type": extensionType[extension] });
            response.end(file);
        }
    });
};

const handleType = (request, response) => {
    const postsPath = path.join(__dirname, "..", "src/posts.json");

    fs.readFile(postsPath, (error, file) => {
        if (error) {
            console.log(error);
            response.writeHead(500);
            response.end("problem looking for typing");
        } else {
            response.end(createOptions());
        }
    });
};

const handleSearch = (request, response) => {
    const postsPath = path.join(__dirname, "..", "src/posts.json");

    fs.readFile(postsPath, (error, file) => {
        if (error) {
            console.log(error);
            response.writeHead(500);
            response.end("ah fuck we got shit on by an error");
        } else {
            response.writeHead(200, { "Content-Type": "application/json" });
            response.end(file);
        }
    });
};

const handleError = (request, response) => {
    response.writeHead(404);
    response.end("ah fuck we got shit on by an error");
}


module.exports = { handleHome, handlePublic, handleSearch, handleType, handleError }