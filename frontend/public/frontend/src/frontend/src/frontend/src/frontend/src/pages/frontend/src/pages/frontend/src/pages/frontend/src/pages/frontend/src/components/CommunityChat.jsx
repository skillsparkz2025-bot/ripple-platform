import { useState } from "react";

const bannedWords = ["badword1", "badword2"];

export default function CommunityChat() {
  const [msg, setMsg] = useState("");
  const [chat, setChat] = useState([]);

  function send() {
    if (bannedWords.some(w => msg.toLowerCase().includes(w))) {
      alert("Message contains restricted words");
      return;
    }
    setChat([...chat, msg]);
    setMsg("");
  }

  return (
    <div>
      <h3>Community Chat</h3>
      {chat.map((c, i) => (
        <p key={i}>{c}</p>
      ))}
      <input value={msg} onChange={e => setMsg(e.target.value)} />
      <button onClick={send}>Send</button>
    </div>
  );
        }
