'use client';

import { useState } from 'react';

const JoinWaitlist = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const mailtoLink = `mailto:admin@beatstream.app?subject=Join Waitlist&body=Please add me to the waitlist.%0AEmail: ${email}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="mx-auto max-w-md">
      <form onSubmit={handleSubmit} className="flex space-x-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-grow bg-white/10 border-white/20 text-white placeholder-gray-400 px-4 py-2 rounded"
          required
        />
        <button
          type="submit"
          className="bg-white text-black hover:bg-white/90 px-4 py-2 rounded"
        >
          Join Waitlist
        </button>
      </form>
    </div>
  );
};

export default JoinWaitlist;