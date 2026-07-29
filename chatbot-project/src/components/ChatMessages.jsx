import { useRef, useEffect } from "react";
import { ChatMessage } from "./ChatMessage";
import "./ChatMessages.css";

function useAutoScroll(dependencies) {
  const chatMessageRef = useRef(null);
  useEffect(() => {
    // console.log(chatMessageRef.current);
    // console.log('updated');
    const chatMessageElm = chatMessageRef.current;
    if (chatMessageElm) {
      chatMessageElm.scrollTop = chatMessageElm.scrollHeight;
    }
  }, [dependencies]);
  return chatMessageRef;
}

export function ChatMessages({ chatMessages }) {
  const chatMessageRef = useAutoScroll(chatMessages);
  /*
              function check() {
                if (chatMessages.length === 0) {
                  console.log("true");
                } else {
                  console.log("false");
                }
              }
              check();
              */

  /*
              function sendMessages() {
                setChatMessage([
                  ...chatMessages,
                  {
                    message: "test",
                    sender: "user",
                    id: crypto.randomUUID(),
                  },
                ]);
              }
      */
  /*  function sendMessages() {
                chatMessages.push({
                  message: "Test",
                  sender: "user",
                  id: crypto.randomUUID(),
                });

                console.log(chatMessages);

                 <button onClick={sendMessages}>send message</button>
              }
                */

  return (
    <div ref={chatMessageRef} className="chat-messages-container">
      {chatMessages.map((chatMessage) => {
        return (
          <ChatMessage
            message={chatMessage.message}
            sender={chatMessage.sender}
            key={chatMessage.id}
          />
        );
      })}
    </div>
  );
}
