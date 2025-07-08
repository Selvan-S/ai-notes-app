"use client";

import { useQuery, useMutation } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { useState } from "react";

export default function MessagesPage() {
  const messages = useQuery(api.messages.list);
  const send = useMutation(api.messages.send);
  const [newMessage, setNewMessage] = useState("");

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!newMessage) return;
    await send({ text: newMessage });
    setNewMessage("");
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Messages</h1>

      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <input
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="border p-2 rounded w-full"
          placeholder="Write a message..."
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded" disabled={!newMessage}>
          Send
        </button>
      </form>

      {messages === undefined ? (
        <p>Loading messages...</p>
      ) : messages.length === 0 ? (
        <p>No messages yet.</p>
      ) : (
        <ul>
          {messages.map((message) => (
            <li key={message._id} className="border-b p-2">
              {message.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
