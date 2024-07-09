// console.log("Hello from server");

import http from 'http'
import Socket_service from './services/socket';

async function init(){

    const socketService=new Socket_service();
    const httpSrv=http.createServer();
    const PORT=process.env.PORT ? process.env.PORT : 8000;

    socketService.io.attach(httpSrv);
    socketService.initListners();
    httpSrv.listen(PORT, () => console.log("Http server started to listen on port " + PORT));

}

init() // it initialises our server and ports.


