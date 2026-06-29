# Ultra Pro Portfolio — State Management Specification

## Purpose
This document defines the performance-optimized state strategy for the Ultra Pro portfolio system across Jetpack Compose, Flutter, and React/Tailwind.

## Core Goals
1. Keep rendering fast.
2. Keep state ownership explicit.
3. Prevent unnecessary recomposition or rerendering.
4. Separate ephemeral UI state from global app state.
5. Support theme, locale, routing, and content synchronization.

## State Classification
All state must fall into one of these categories:

### 1. Ephemeral UI State
Short-lived, local state used for immediate interactions.

Examples:
- Hover state.
- Expanded accordion sections.
- Tab selection.
- Temporary form input.
- Animation toggles.

### 2. Screen State
State owned by one page or route.

Examples:
- Selected project.
- Filtered skill category.
- Active section.
- Loaded content for a specific page.

### 3. Global App State
State shared across the application.

Examples:
- Theme mode.
- Locale/language.
- User preferences.
- Authentication, if applicable.
- Global navigation state.

### 4. Persisted State
State restored across sessions.

Examples:
- Dark mode preference.
- Language preference.
- Last viewed section.
- Saved accessibility preference.

## Cross-Platform Rules
- Keep local state local.
- Hoist shared state only when necessary.
- Use immutable models for business data.
- Avoid passing state through deep trees when a provider or scoped store is better.
- Derive values instead of duplicating them.
- Store only source data, not redundant computed copies.

## Jetpack Compose Strategy
Jetpack Compose should use state hoisting and scoped state reads to minimize recomposition.

### Recommended Layers
- `remember` for local transient state.
- `rememberSaveable` for state that should survive configuration changes.
- Hoisted state for reusable screen logic.
- ViewModel for screen-level business logic when the state outlives composables.

### Compose Guidelines
- Read state as low in the composable tree as possible.
- Break large composables into smaller pieces.
- Use lazy containers for long lists.
- Avoid expensive work during recomposition.
- Prefer stable parameter types and immutable UI models.
- Keep animations isolated from the rest of the tree.

### Compose State Domains
- UI-local: hover, expansion, temporary input.
- Screen: project filters, active sections, modal visibility.
- App: theme, locale, session-level data.
- Data: fetched projects, blog posts, resume metadata.

### Compose Performance Rules
- Use keys in lazy lists.
- Avoid unnecessary derived recalculation.
- Do not observe broad state at the root if a child can read it directly.
- Prefer fine-grained state holders over large mutable objects.

## Flutter Strategy
Flutter should use Riverpod as the primary state coordination layer.

### Recommended Layers
- `StateProvider` for simple toggles.
- `Notifier` for mutable business state.
- `AsyncNotifier` for remote or async content.
- `Provider` for derived values such as token resolution and theme mapping.

### Flutter Guidelines
- Keep widget rebuilds small by watching narrow providers.
- Split large widgets into leaf widgets.
- Prefer immutable model classes.
- Use provider families for route-specific data.
- Keep animation state local to the widget unless it must be shared.
- Avoid rebuilding the whole app shell when only a section changes.

### Flutter State Domains
- UI-local: expansion, hover, page transition detail.
- Screen: selected project, visible section, content filters.
- App: theme mode, locale, content cache.
- Data: fetched content, external API results, CMS data.

### Flutter Performance Rules
- Use `const` widgets wherever possible.
- Avoid large provider listeners on the full tree.
- Convert expensive derived values into memoized providers.
- Use slivers and lazy lists for long pages.
- Keep rebuild boundaries narrow and intentional.

## React Strategy
React should use a split model: local component state for UI micro-interactions and Redux Toolkit for global application state.

### Recommended Layers
- `useState` / `useReducer` for local UI state.
- Redux Toolkit store for global app state.
- RTK Query for server/cache-backed data.
- URL state for shareable filters, section anchors, and navigation context.

### React Guidelines
- Keep hover, open/closed, and temporary form state local.
- Normalize content entities in the global store.
- Use memoized selectors to avoid rerenders.
- Use RTK Query for loading and caching content.
- Avoid storing derived values that can be computed from existing state.
- Keep global state slices small and focused.

### React State Domains
- UI-local: modal open, hover, accordion state.
- Screen: active tab, selected project, section navigation.
- App: theme, locale, analytics flags, cached content.
- Data: CMS content, social links, project metadata, resume data.

### React Performance Rules
- Split components by concern.
- Memoize expensive selectors.
- Avoid prop drilling when a slice or provider is appropriate.
- Keep global state updates narrow.
- Use lazy loading for heavier sections.

## Theme State
Theme is a global preference but should be applied through the platform’s native theming system.

### Theme Modes
- `light`
- `dark`
- `system`
- `dynamic` where supported

### Rules
- Theme preference should persist.
- The active theme should be read once at the app shell and propagated through native theme objects.
- Web theme should use CSS variables and selector-based dark mode.
- Android and Flutter should map the active theme to Material 3 color schemes.
- Dynamic color should be supported where the platform allows it.

## Locale State
Locale is a global preference and should be isolated from presentation state.

### Rules
- Locale changes must update labels, dates, and content direction if needed.
- Locale state should not be mixed with theme state.
- The current locale should be available to all text-rendering layers.
- Translation keys should be stable and versioned.

## Content State
Content should be modeled as normalized data.

### Recommended Shape
- `projects`
- `skills`
- `experience`
- `testimonials`
- `contact`
- `socialLinks`
- `settings`

### Rules
- Keep raw content separate from UI state.
- Cache fetched content when it is reused.
- Track loading and error states independently.
- Do not derive large content payloads repeatedly in render paths.

## Loading and Error State
Each async feature should expose:
- `idle`
- `loading`
- `success`
- `error`

### Rules
- Show skeletons or placeholders during loading.
- Keep retry state local to the relevant feature.
- Preserve previously loaded content where possible.
- Do not block the entire app shell for a single section failure.

## Accessibility State
Accessibility preferences should be first-class persisted state.

### Preferences
- Reduced motion.
- High contrast mode.
- Font scaling preference.
- Text size override if supported.
- Color-blind safe mode if supported.

### Rules
- Accessibility settings should update the token layer, not just component styles.
- Motion preferences should disable non-essential animation.
- Contrast preferences should choose accessible token variants.

## State Ownership Matrix

| Concern | Compose | Flutter | React |
|---|---|---|---|
| Hover | Local state | Local widget state | Local state |
| Expanded panel | Local or hoisted | Local or provider | Local state |
| Theme | App-level state + persisted preference | Riverpod + persistence | Redux Toolkit + persistence |
| Locale | App-level state | Riverpod + persistence | Redux Toolkit or context |
| Content cache | ViewModel or repository | AsyncNotifier/provider | RTK Query |
| Project selection | Screen state | Screen provider | Redux slice or URL state |
| Navigation | NavController | Router | Router / URL state |

## Implementation Pattern
### Compose
- UI state in composables.
- Screen state in ViewModels.
- Shared preference state in app-level storage.

### Flutter
- UI state in widgets.
- App and screen state in Riverpod.
- Async content in `AsyncNotifier`.

### React
- UI state in components.
- Shared app state in Redux Toolkit.
- Cache-backed data in RTK Query.

## Anti-Patterns
Avoid:
- Storing theme values inside individual components.
- Duplicating the same derived value in multiple stores.
- Putting long-lived global state in local widget/component state.
- Using a global store for transient hover state.
- Triggering full-tree rerenders for small local interactions.

## Success Criteria
The state model is correct when:
1. Theme updates do not cause unnecessary full-page work.
2. Local interactions remain snappy.
3. Screen state is isolated from global state.
4. Async content is cached and recoverable.
5. Compose, Flutter, and React all express the same user flow with different native mechanisms.
