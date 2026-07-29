import UserProfileImage from "../assets/myProfile.jpg";
import RobotProfileImage from "../assets/robot.png";
import "./ChatMessage.css";
import dayjs from "dayjs";
import { useEffect } from "react";

export function ChatMessage({ message, sender }) {
   JSON.parse(localStorage.getItem("nowTime"));
  const time = dayjs().valueOf();
  const nowTime = dayjs(time).format("h:mma");

 

  // const message = props.message;
  // const sender = props.sender;

  //const {message,sender} = props;

  /*
                    if (sender === "robot") {
                      return (
                        <div>
                          <img src="images/robot.png" alt="" width="50" />
                          {message}
                        </div>
                      );
                    }
            */

  return (
    <div
      className={sender === "user" ? "chat-message-user" : "chat-message-robot"}
    >
      {sender === "robot" && <img src={RobotProfileImage} alt="" />}
      <div className="chat-messages">
        {message} <br />
        <span>{nowTime}</span>
      </div>
     {
      useEffect(()=>{
         {localStorage.setItem("nowTime", JSON.stringify(nowTime))}
      },)
     }
      {sender === "user" && (
        <img className="ProfileImages" src={UserProfileImage} alt="" />
      )}
    </div>
  );
}

console.log(UserProfileImage);
