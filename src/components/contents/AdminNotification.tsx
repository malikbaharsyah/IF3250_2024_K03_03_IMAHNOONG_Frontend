// App.tsx
import React, { useEffect, useState } from 'react';

const AdminNotification: React.FC = () => {
    const [messages, setMessages] = useState<string[]>([]);

    useEffect(() => {
        const eventSource = new EventSource('https://jopibe-image-mxr5n7vreq-et.a.run.app/api/adminnotifs');

        eventSource.onmessage = (event) => {
            console.log("Message received");
            const newMessage = event.data;
            setMessages((prevMessages) => [...prevMessages, newMessage]);
        };

        return () => {
            eventSource.close();
        };
    }, []);

    return (
        <div>
            <h1>Server-Sent Events</h1>
            <ul>
                {messages.map((message, index) => (
                    <li key={index}>{message}</li>
                ))}
            </ul>
        </div>
    );
};

export default AdminNotification;
