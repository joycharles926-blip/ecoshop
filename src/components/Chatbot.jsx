// Chatbot.jsx
import React, { useState } from "react";
import "./Chatbot.css";

function Chatbot({ cart }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! I'm your assistant. Ask me about your cart or products.", from: "bot" },
  ]);
  const [input, setInput] = useState("");

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { text: input, from: "user" }];
    setMessages(newMessages);

    let botReply = "Sorry, I didn't understand that.";

    if (input.toLowerCase().includes("cart")) {
      if (cart.length === 0) botReply = "Your cart is empty.";
      else botReply = "Here’s what you have in your cart:";
    }

    setMessages((prev) => [...prev, { text: botReply, from: "bot" }]);
    setInput("");
  };

  return (
    <div className="chatbot-container">
      <button className="chatbot-toggle" onClick={toggleChat}>💬</button>

      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-messages">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`chatbot-message ${msg.from}`}
              >
                {msg.from === "bot" && msg.text === "Here’s what you have in your cart:" ? (
                  <div>
                    <strong>{msg.text}</strong>
                    {cart.map((item, i) => (
                      <div key={i} className="chatbot-cart-item">
                        <img src={item.product_photo} alt={item.product_name} />
                        <div>
                          <strong>{item.product_name}</strong>
                          <div>{item.product_description.slice(0, 30)}...</div>
                          <div>KSH {item.product_cost.toLocaleString()}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <span className="chatbot-bubble">{msg.text}</span>
                )}
              </div>
            ))}
          </div>

          <div className="chatbot-input-container">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chatbot;