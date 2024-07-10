"use client";
import { useState } from "react";
import { useSocket } from "../context/socket_provider";
import classes from "./page.module.css";

export default function Page(){

  const { sendMessage } = useSocket();
  const [message, setMessage] = useState("");


  return (
    <div>
      <div><h1> All messages will appear hear </h1></div>
      <div>
        <input
          onChange={(e) => setMessage(e.target.value)}
          className={classes["chat-input"]}
          placeholder="Message..."
        />
        <button
          onClick={(e) => sendMessage(message)}
          className={classes["button"]}
        >
          Send
        </button>
      </div>
      {/* <div>
        {messages.map((e) => (
          <li>{e}</li>
        ))}
      </div> */}
    </div>
  );
}