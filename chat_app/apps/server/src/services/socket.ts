import {Server} from 'socket.io'

class Socket_service{
    private _io:Server;

    constructor(){
        console.log("init socket server")
        this._io=new Server();
    }

    get io(){
        return this._io;
    }
}

export default Socket_service

