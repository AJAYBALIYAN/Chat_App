import {Server} from 'socket.io'

class Socket_service{
    private _io:Server;

    constructor(){
        console.log("socket server initialized...")
        this._io=new Server();
    }
    
    public initListners()
    {
        console.log("initialized socket Listlistners...")  

        const io=this.io;
        io.on("connect",(socket)=>
        {
            console.log("new socket connected",socket.id)

            socket.on("event:message", async({message}:{message:string}) => {
                console.log("new message received",message)
            })
        })
    }
    // public :console.log("hello") 

    get io(){

        // console.log("getter called in Socket_service")
        return this._io;
    } // jitni baar service call hogi utni baar hi ye call hoga
    
}

export default Socket_service;

// this serivce is for initialising socket 

