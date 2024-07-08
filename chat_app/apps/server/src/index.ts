// console.log("Hello from server");

import http from 'http'

async function init(){
    const httpSrv=http.createServer();
    const PORT=process.env.PORT ? process.env.PORT : 8000;

    httpSrv.listen(PORT, () => console.log("Http server started to listen on port " + PORT));
}

init() // it initialises our server and ports.
