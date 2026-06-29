import React, { useState } from 'react';
import { UltraProButton } from './UltraProButton';

type Props = {
  onSubmit: (data: { name: string; email: string; message: string }) => void;
};

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

export function UltraProContactForm({ onSubmit }: Props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: FormErrors = {};
    if (!name.trim()) next.name = 'Name is required';
    if (!email.includes('@')) next.email = 'Enter a valid email';
    if (message.trim().length < 10) next.message = 'Message is too short';
    if (Object.keys(next).length > 0) {
      setErrors(next);
      return;
    }
    setErrors({});
    onSubmit({ name, email, message });
  };

  const inputBase =
    'w-full rounded-md border border-[var(--color-border-default)] bg-[var(--color-bg-canvas)] px-4 py-3 text-sm text-[var(--color-text-primary)] ' +
    'focus:outline-none focus:ring-2 focus:ring-[var(--color-border-focus)] focus:ring-offset-2 focus:ring-offset-[var(--color-bg-canvas)]';

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div>
        <input
          className={inputBase}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          aria-label="Name"
          aria-describedby={errors.name ? 'error-name' : undefined}
        />
        {errors.name && (
          <p id="error-name" className="mt-1 text-sm text-[var(--color-state-error)]">
            {errors.name}
          </p>
        )}
      </div>
      <div>
        <input
          className={inputBase}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          aria-label="Email"
          type="email"
          aria-describedby={errors.email ? 'error-email' : undefined}
        />
        {errors.email && (
          <p id="error-email" className="mt-1 text-sm text-[var(--color-state-error)]">
            {errors.email}
          </p>
        )}
      </div>
      <div>
        <textarea
          className={`${inputBase} min-h-32`}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message"
          aria-label="Message"
          aria-describedby={errors.message ? 'error-message' : undefined}
        />
        {errors.message && (
          <p id="error-message" className="mt-1 text-sm text-[var(--color-state-error)]">
            {errors.message}
          </p>
        )}
      </div>
      <UltraProButton type="submit">Send Message</UltraProButton>
    </form>
  );
}
