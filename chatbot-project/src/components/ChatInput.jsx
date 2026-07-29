import { useState } from "react";
import { Chatbot } from "supersimpledev";
import "./ChatInput.css";
import SpinnerLoadingImage from "../assets/loading-spinner.gif";

export function ChatInput({ chatMessages, setChatMessage }) {
  const [inputText, setInputText] = useState("");
  const [isLoading] = useState("");

  const newChatMessages = [
    ...chatMessages,
    {
      message: inputText,
      sender: "user",
      id: crypto.randomUUID(),
    },
  ];

  function noSendMessage() {
    console.log("message can't be sent!");
  }

  async function sendMessage() {
    setChatMessage(newChatMessages);

    setInputText("");
    //    setIsLoading(!response);

    if (!isLoading === true) {
      console.log("true");
    } else {
      console.log("false");
    }

    // console.log(!response);
    // console.log(!isLoading);

    /*
                   if (!response) {
                  setChatMessage([
                    ...newChatMessages,
                    {
                      message: "Loading...",
                      sender: "robot",
                      id: crypto.randomUUID,
                    },
                  ]);
                }
                */

    const response = await Chatbot.getResponseAsync(inputText);

    //console.log(response);

    setChatMessage([
      ...newChatMessages,
      {
        message: response,
        sender: "robot",
        id: crypto.randomUUID(),
      },
    ]);
  }

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  function sendMessageEnter(event) {
    if (event.key === "Enter") {
      sendMessage();
    } else if (event.key === "Escape") {
      setInputText("");
    }
  }
  return (
    <div className="chat-input-container">
      <input
        className="chat-input"
        onChange={saveInputText}
        onKeyDown={sendMessageEnter}
        type="text"
        placeholder="Send a message to a Chatbot"
        size="30"
        value={inputText}
      />
      <button
        className="send-button"
        onClick={inputText === "" ? noSendMessage : sendMessage}
      >
        Send
      </button>
    </div>
  );
}
