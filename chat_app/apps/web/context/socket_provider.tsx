'use client'

import { useEffect } from "react"
import React, { useCallback , useContext , useState} from "react"
import {io,Socket} from "socket.io-client"


interface SocketProviderProps 
{
    children?: React.ReactNode
}

interface ISocketContext {
    sendMessage : (msg:string) => any;
}

const socket_context = React.createContext<ISocketContext | null > (null);

export const useSocket = () => {
    const state=useContext(socket_context)
    if(!state) throw new Error('state is undefined ')
    return state;
}

export const SocketProvider:React.FC<SocketProviderProps> = ({ children }) => {  

    const [socket,setSocket]=useState<Socket>()

    const sendMessage: ISocketContext["sendMessage"] = useCallback((msg)=> {
            console.log("send message",msg);

            if(socket)
            {
                socket.emit("event:message",{message:msg});
            }
    },[socket]);


    useEffect(() => {
        const _socket = io("http://localhost:8000"); // after mount of this connection is set up

        setSocket(_socket);

        return () => {
            _socket.disconnect();
            setSocket(undefined)
        };
    } , []);
    
    // return (

    //     <socket_context.Provider value={null}>
    //     {children}
    //     </socket_context.Provider>
        
    //     );

    const socketContextValue = {
        sendMessage
    }; // added new 

        return (
            <socket_context.Provider value={socketContextValue}>
                {children}
            </socket_context.Provider>
        );
}
