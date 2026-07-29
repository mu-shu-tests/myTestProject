import { useEffect, useState } from "react";
import { Chatbot } from "supersimpledev";
import { ChatMessages } from "./components/ChatMessages";
import { ChatInput } from "./components/ChatInput";
import "./App.css";

// to use a component we can call it like:
//{ChatMessage()}

// but we can create our own html element like below;
// <ChatInput></ChatInput> the code below is a shortcut for this.

function App() {
  //const chatMessageComponents = ....;
  /*
             //const array = React.useState([
                {
                  message: "hello Chatbot",
                  sender: "user",
                  id: "id1",
                },
                {
                  message: "Hello! How can I help you?",
                  sender: "robot",
                  id: "id2",
                },
                {
                  message: "can you get today's date?",
                  sender: "user",
                  id: "id3",
                },
                {
                  message: "Today is June 3",
                  sender: "robot",
                  id: "id4",
                },
                {
                  message: "how about flip a coin",
                  sender: "user",
                  id: "id5",
                },
                {
                  message: "Sure! You got tails",
                  sender: "robot",
                  id: "id6",
                },
              ]);
              */
  useEffect(() => {
    Chatbot.addResponses({
      "assalamu alaikum": "w'alaikum salam",
      "how to make a paragarph using html code": function write() {
        return `this very simple use this code 😊
          <p> hey this is a simple paragraph in html! </p>`;
      },
    });
  });

  const [chatMessages, setChatMessage] = useState([]);
  // const chatMessages = ;
  // const chatMessages = array[0];
  // const setChatMessage = array[1];

  return (
    <div className="app-container">
      <p className="welcome-para">
        Welcome to the chatbot project! Send a message using the textbox below.
      </p>
      <ChatMessages chatMessages={chatMessages} />

      <ChatInput chatMessages={chatMessages} setChatMessage={setChatMessage} />
    </div>
  );
}

// const chatbotApp = (

//);

export default App;
