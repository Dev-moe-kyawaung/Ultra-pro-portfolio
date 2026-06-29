# Ultra Pro Portfolio — Component Mapping Schema

## Purpose
This document defines the semantic component contract for the Ultra Pro portfolio system.
It ensures Jetpack Compose, Flutter, and React/Tailwind render the same product intent with native implementation details.

## Design Principles
1. One semantic component, multiple platform adapters.
2. Tokens define appearance, not raw style values.
3. Variants and states are declared once and mapped per framework.
4. Accessibility rules are mandatory for every component.
5. Performance rules prevent unnecessary rerendering and recomposition.

## Canonical Component Fields
Each shared component must define:

- `componentId`: Unique stable identifier.
- `intent`: Business or UX purpose.
- `description`: Human-readable definition.
- `variants`: Visual and behavioral variants.
- `states`: Enabled, disabled, loading, focused, hovered, pressed, selected, error.
- `tokenRefs`: References to semantic tokens.
- `a11yRules`: Accessibility expectations.
- `motionRules`: Animation and transition expectations.
- `composeImpl`: Jetpack Compose mapping.
- `flutterImpl`: Flutter mapping.
- `reactImpl`: React/Tailwind mapping.

## Component Registry Schema
```ts
type ComponentMapping = {
  componentId: string;
  intent: string;
  description: string;
  variants: string[];
  states: string[];
  tokenRefs: {
    background?: string;
    foreground?: string;
    border?: string;
    accent?: string;
    radius?: string;
    spacing?: string;
    typography?: string;
    elevation?: string;
  };
  a11yRules: {
    minTouchTarget: string;
    contrastMinimum: string;
    focusVisible: boolean;
    reducedMotionSupport: boolean;
    semanticLabelsRequired: boolean;
  };
  motionRules: {
    durationMs: number;
    easing: string;
    allowScale?: boolean;
    allowFade?: boolean;
    allowSlide?: boolean;
  };
  composeImpl: {
    component: string;
    notes: string;
  };
  flutterImpl: {
    component: string;
    notes: string;
  };
  reactImpl: {
    element: string;
    notes: string;
  };
};
