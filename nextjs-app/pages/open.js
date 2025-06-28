import { useState } from 'react';

export default function OpenTicket() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Placeholder: API call to create ticket
    console.log({ email, name, subject, message });
  };

  return (
    <main>
      <h1>Create a Support Ticket</h1>
      <form onSubmit={handleSubmit}>
        <label>Email
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>Name
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>Subject
          <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} required />
        </label>
        <label>Message
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} required />
        </label>
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
