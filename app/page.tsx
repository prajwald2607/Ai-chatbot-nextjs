"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import ReactDOMServer from 'react-dom/server';

const HomePage = () => {
  const [message, setMessage] = useState('');
  const [apiResponse, setApiResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messageHistory, setMessageHistory] = useState([]);

  const handleSendMessage = async () => {
    setIsLoading(true);
    try {
      // Prepare the request body
      const requestBody = {
        question: message,
        randomness: 0.1 // Adjust the randomness factor as needed
      };
      // Send the request to the API
      const response = await fetch('https://api.worqhat.com/api/ai/content/v2', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'U2FsdGVkX187FPQxzgbmIVjXh3O1+xyor30KWVrIBMuFEqGv8NfzXPjE53e3Ju+T',
          'x-org-key': 'U2FsdGVkX19lq3bhhF5TRouMiyL2HvEBD2V5j5nNl6dNL9JWPbsXW0rqlzssW8GieFki6oRVDKTb/z01Hc7m+Q=='
        },
        body: JSON.stringify(requestBody)
      });

      // Parse the API response
      const data = await response.json();

      // Update the state with the API generated response
      setApiResponse(data.content);

      // Add the current message to the message history
      setMessageHistory(prevHistory => [
        ...prevHistory,
        { message, response: data.content }
      ]);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div>
      <div className='container'>
        <h1>Worqhat Chatbot</h1>
        
        <div className='history'>
        <div className='message-history'>
        {messageHistory.map((item, index) => (
          <div key={index} className='message-item'>
            <div className='message'>{item.message}</div>
            <div className='response'>{item.response}</div>
          </div>
        ))}
      </div>
      </div>

        <div className='tp'>
          <input
            className='inputt'
            type="text"
            placeholder='Send a message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className='send' onClick={handleSendMessage} disabled={isLoading}>
            {isLoading ? 'Loading...' : 'Send'}
          </button>
        </div>
      </div>
      
      <div className='logo' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h2>Powered By</h2>
        <Image src="/logo.png" alt="Logo" width={100} height={50} />
      </div>
    </div>
  );
};

export default HomePage;
