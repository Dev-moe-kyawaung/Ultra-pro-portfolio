/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          primary: 'var(--color-brand-primary)',
          secondary: 'var(--color-brand-secondary)',
          accent: 'var(--color-brand-accent)'
        },
        bg: {
          canvas: 'var(--color-bg-canvas)',
          surface: 'var(--color-bg-surface)',
          surfaceRaised: 'var(--color-bg-surfaceRaised)'
        },
        text: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          inverse: 'var(--color-text-inverse)'
        },
        accent: {
          primary: 'var(--color-accent-primary)',
          secondary: 'var(--color-accent-secondary)'
        },
        border: {
          default: 'var(--color-border-default)',
          focus: 'var(--color-border-focus)'
        },
        state: {
          success: 'var(--color-state-success)',
          warning: 'var(--color-state-warning)',
          error: 'var(--color-state-error)'
        }
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        pill: 'var(--radius-pill)'
      },
      spacing: {
        0: 'var(--space-0)',
        1: 'var(--space-1)',
        2: 'var(--space-2)',
        3: 'var(--space-3)',
        4: 'var(--space-4)',
        5: 'var(--space-5)',
        6: 'var(--space-6)',
        8: 'var(--space-8)',
        10: 'var(--space-10)',
        12: 'var(--space-12)',
        16: 'var(--space-16)'
      },
      fontSize: {
        display: ['var(--type-display-size)', { lineHeight: 'var(--type-display-line-height)' }],
        headline: ['var(--type-headline-size)', { lineHeight: 'var(--type-headline-line-height)' }],
        title: ['var(--type-title-size)', { lineHeight: 'var(--type-title-line-height)' }],
        body: ['var(--type-body-size)', { lineHeight: 'var(--type-body-line-height)' }],
        label: ['var(--type-label-size)', { lineHeight: 'var(--type-label-line-height)' }]
      }
    }
  }
}
