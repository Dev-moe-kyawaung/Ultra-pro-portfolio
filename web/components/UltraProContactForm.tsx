import React, { useState } from 'react';
import { UltraProButton } from './UltraProButton';

type Props = {
  onSubmit: (data: { name: string; email: string; message: string }) => void;
};

export function UltraProContactForm({ onSubmit }: Props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, email, message });
  };

  const inputBase =
    'w-full rounded-md border border-[var(--color-border-default)] bg-[var(--color-bg-canvas)] px-4 py-3 text-sm text-[var(--color-text-primary)] ' +
    'focus:outline-none focus:ring-2 focus:ring-[var(--color-border-focus)] focus:ring-offset-2 focus:ring-offset-[var(--color-bg-canvas)]';

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        className={inputBase}
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        aria-label="Name"
      />
      <input
        className={inputBase}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        aria-label="Email"
        type="email"
      />
      <textarea
        className={`${inputBase} min-h-32`}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Message"
        aria-label="Message"
      />
      <UltraProButton type="submit">Send Message</UltraProButton>
    </form>
  );
}
