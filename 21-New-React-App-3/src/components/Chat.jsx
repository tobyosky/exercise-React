import { useState } from "react";
import ButtonSend from "./ButtonSend";
import InputMessage from "./InputMessage";
import MessageTemplate from "./MessageTemplate";
import { useRef } from "react";
import { useEffect } from "react";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isSentByUser, setIsSentByUser] = useState(true);
  const lastMessage = useRef(null);
  const inputText = useRef(null);

  useEffect(() => {
    inputText.current.focus();
    lastMessage.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      setMessages([
        ...messages,
        { text: inputValue.trim(), sentByUser: isSentByUser },
      ]);
      setInputValue("");
    }
  };

  return (
    <div className="flex flex-col w-screen h-screen border-gray-400">
      <div className="flex-1 flex w-full items-center justify-center bg-gray-600 gap-2">
        <button
          className="inline-flex bg-blue-400 p-2 rounded-full hover:bg-blue-500 hover:cursor-pointer"
          onClick={() => setIsSentByUser(!isSentByUser)}
        >
          Modalità: {isSentByUser ? "Invia" : "Ricevi"}
        </button>
        <h1 className="text-white text-2xl font-medium">Chat</h1>
      </div>
      <div className="flex-9 p-4 overflow-y-auto bg-gray-100">
        {messages.map((msg, index) => (
          <MessageTemplate key={index} msg={msg} />
        ))}
        <div ref={lastMessage}></div>
      </div>
      <form onSubmit={(e) => sendMessage(e)}>
        <div className="flex-1 flex w-full items-center justify-center bg-gray-600 gap-4 p-4">
          <InputMessage
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            ref={inputText}
          />
          <ButtonSend />
        </div>
      </form>
    </div>
  );
}
