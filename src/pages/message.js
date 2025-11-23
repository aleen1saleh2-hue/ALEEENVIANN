import React, { useState } from "react";

const initialMessages = [
  {
    id: 1,
    sender: "Administrator",
    content: "Please submit your crime reports by 5 PM today.",
    timestamp: "2024-06-10 09:00"
  },
  {
    id: 2,
    sender: "Officer Ali",
    content: "Meeting at HQ tomorrow at 10 AM.",
    timestamp: "2024-06-10 10:30"
  },
  {
    id: 3,
    sender: "Administrator",
    content: "New protocol for field investigations is now available.",
    timestamp: "2024-06-10 11:15"
  }
];

export default function Message() {
  const [messages] = useState(initialMessages);

  return (
    <div className="messages-container">
      <h2>Received Messages</h2>
      <ul className="messages-list">
        {messages.map(msg => (
          <li key={msg.id} className="message-item">
            <strong>{msg.sender}:</strong> {msg.content}
            <div className="message-timestamp">{msg.timestamp}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}