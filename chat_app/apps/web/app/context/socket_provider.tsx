'use client'

import React, { useCallback } from "react"

interface SocketProviderProps 
{
    children?: React.ReactNode
}

interface ISocketContext {
    sendMessage : (msg:string) => any;
}

const socket_context = React.createContext<ISocketContext | null > (null);

export const SocketProvider:React.FC<SocketProviderProps> = ({ children }) => {
    
    // const sendMessage = (msg: string) => {
    //     // Implement your socket logic here
    // }

    const sendMessage: ISocketContext["sendMessage"] = useCallback((msg)=> {
            console.log("send message",msg);
    },[]);
    
    return (

        <socket_context.Provider value={null}>
        {children}
        </socket_context.Provider>
        
        );
}
