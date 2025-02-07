import { useState } from "react";
import ButtonSend from "./ButtonSend";
import InputMessage from "./InputMessage";
import MessageTemplate from "./MessageTemplate";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isSentByUser, setIsSentByUser] = useState(true);

  const sendMessage = () => {
    if (inputValue.trim() !== "") {
      setMessages([
        ...messages,
        { text: inputValue, sentByUser: isSentByUser },
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
      </div>
      <div className="flex-1 flex w-full items-center justify-center bg-gray-600 gap-4 p-4">
        <InputMessage
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <ButtonSend sendMessage={sendMessage} />
      </div>
    </div>
  );
}
