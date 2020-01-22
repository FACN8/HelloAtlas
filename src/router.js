const handlers = require('./handlers.js')

/*--- Router Function Section ---*/
const router = function(request, response) {
    const url = request.url;

    /*--- Managing Different URL ends ---*/
    if (url === '/') {
        response.end("Success")
    } else if (url === 'TBD') {

    } else {
        response.end("Wrong")
    }
}

/*--- Router Function Section - End ---*/

module.exports = router;