"use client";
import Image from "next/image";
import ChatMessage from "@/components/ui/chatmessage";
import ChatInput from "./chatinput";

export default function TeamsChatBody() {
  return (
    // <div className="flex  flex-1 ">
    <div className="flex-1  bg-white p-2">
      {/* Sender messages (left side) */}
      <ChatMessage
        isUser={true}
        sender="Marie Beaudouin"
        time="11:14 AM"
        message="Thank you for always being so positive!"
        message1="I will push Krystal to give us a few more days. That shouldn’t be a problem."
        file="July_Promotion"
        showAvatar={true}
        showTime={true}
      />
      <ChatMessage
        isUser={true}
        sender=""
        time="11:18 AM"
        message="We haven’t had a break in a while."
        showAvatar={false}
        showTime={false}
      />

      <ChatMessage
        time="5/12 9:15 AM"
        message="Cupcake ipsum dolor sit amet muffin sesame snaps caramels. Gingerbread chupa chups 
cupcake tiramisu croissant. Pastry apple pie halvah cheesecake candy tiramisu cake."
      />

      {/* User messages (right side) */}
      <ChatMessage
        time="5/12 9:15 AM"
        message="Cupcake ipsum dolor sit amet muffin sesame snaps caramels. Gingerbread chupa chups 
cupcake tiramisu croissant. Pastry apple pie halvah cheesecake candy tiramisu cake."
        reactions={[
          { src: "/images/thumb.png", count: 3 },
          { src: "/images/heart.png", count: 2 },
          { src: "/images/smile.png", count: 1 },
        ]}
      />

      <ChatMessage
        time="11:22 AM"
        message="Cupcake ipsum dolor sit amet muffin sesame snaps caramels. Gingerbread chupa chups 
cupcake tiramisu croissant. Pastry apple pie halvah cheesecake candy tiramisu cake."
      />
    </div>
  /* Fixed input
      <div className="absolute bottom-0 left-0 right-0 border-t bg-white">
        <ChatInput />
      </div> */
    // </div>
  );
}
