import React, { useState } from 'react';

export function UltraProContactForm({
  onSubmit
}: {
  onSubmit: (data: { name: string; email: string; message: string }) => void;
}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const base =
    'w-full rounded-md border border-[var(--color-border-default)] bg-[var(--color-bg-canvas)] px-4 py-3 text-sm text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-border-focus)] focus:ring-offset-2 focus:ring-offset-[var(--color-bg-canvas)]';

  return (
    <form
      className="space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({ name, email, message });
      }}
    >
      <input className={base} value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input className={base} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email" />
      <textarea
        className={`${base} min-h-32`}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Message"
      />
      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-md bg-[var(--color-accent-primary)] px-5 py-3 text-sm font-semibold text-[var(--color-text-inverse)] focus:outline-none focus:ring-2 focus:ring-[var(--color-border-focus)] focus:ring-offset-2 focus:ring-offset-[var(--color-bg-canvas)]"
      >
        Send Message
      </button>
    </form>
  );
}
