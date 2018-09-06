// case 1: Import library
var http = require('http');

// case 2 : new server
var server = http.createServer(function(request, response){
    // bien request : la bien gui len cua client
    // bien response : la bien luu tru thong tin tra ve tu phia client

    // thiet lap heaer
    response.writeHead(200, {
        "Content-Type" : "text/plain"
    });

    // show infomation
    response.write('Your url is ' + request.url);

    // end
    response.end();
});

// case 3: lang nghe cong 300 thi thuc hien chuong trinh
server.listen(3000, function () {
    console.log('contected successfull!');
});
