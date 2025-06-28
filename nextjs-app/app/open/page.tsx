'use client';
import { useState } from 'react';
import { trpc } from '../trpcClient';

export default function OpenTicket() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const createTicket = trpc.createTicket.useMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createTicket.mutateAsync({ email, name, subject, message });
    setEmail('');
    setName('');
    setSubject('');
    setMessage('');
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
        <button type="submit" disabled={createTicket.isLoading}>Submit</button>
      </form>
    </main>
  );
}
