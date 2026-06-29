# Ultra-Pro-Portfolio 🚀

This repository contains a multi-platform portfolio built with a focus on shared design tokens and a premium visual language. It showcases experience and projects across Android (Jetpack Compose), Flutter, and Web (React/TypeScript/Tailwind CSS).

## ✨ Features

*   **Multi-Platform Consistency:** Utilizes shared design tokens for a unified look and feel across Android, Flutter, and Web.
*   **Modern UI Components:** Implements a suite of reusable UI components for a polished and professional presentation.
*   **Dynamic Theming:** Supports both light and dark themes, adapting to system preferences or user selection.
*   **Responsive Design:** Ensures optimal viewing experience across various devices and screen sizes.
*   **Clear Project Showcase:** Presents projects with descriptions and relevant tags.
*   **Professional Experience Display:** Details work experience with roles, companies, periods, and descriptions.
*   **Testimonials:** Includes client or collaborator feedback to build credibility.
*   **Contact Form:** Provides a functional contact form for easy communication.
*   **Social Links:** Integrates social media links for broader connectivity.

## 🛠️ Tech Stack

*   **Primary Language:** Dart
*   **Web Framework:** React, TypeScript, Tailwind CSS
*   **Mobile Frameworks:** Android (Jetpack Compose), Flutter
*   **Styling:** CSS (for web tokens)
*   **Configuration:** JavaScript (Tailwind config)

## 🚀 Installation & Setup

This project appears to be a demonstration of a portfolio and may not have traditional installation steps for end-users. However, for development purposes, you would typically:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Dev-moe-kyawaung/Ultra-pro-portfolio.git
    cd Ultra-pro-portfolio
    ```

2.  **Install Dependencies:**
    *   **For Web (React/TypeScript):**
        ```bash
        npm install
        # or
        yarn install
        ```
    *   **For Android (Kotlin/Compose):**
        Requires Android Studio and the Android SDK.

    *   **For Flutter:**
        Requires Flutter SDK.
        ```bash
        flutter pub get
        ```

3.  **Configuration:**
    *   Tailwind CSS is configured via `tailwind.config.js`.
    *   Design tokens are managed in `generated/web/tokens.css` and potentially `tokens/tokens.json`.

## 💡 Usage

This project serves as a personal portfolio showcasing development skills and projects.

### Web Usage:

1.  Navigate to the `web` directory.
2.  Run the development server:
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    (Assuming standard React/Vite setup, actual command might vary based on project configuration.)

### Android Usage:

1.  Open the `android` directory in Android Studio.
2.  Build and run the application on an emulator or physical device.

### Flutter Usage:

1.  Navigate to the Flutter module/directory.
2.  Run the application:
    ```bash
    flutter run
    ```

## 📂 Project Structure

The project is organized into distinct directories for different platforms and shared components:

*   **`android/`**: Contains the Android application code using Jetpack Compose.
    *   `ui/components/`: Reusable UI components for Android.
    *   `ui/pages/`: Page-level composables.
    *   `data/`: Data models and constants.
    *   `model/`: Data classes for portfolio items.
*   **`lib/`**: Likely contains Flutter-specific code (though no content was provided in the analysis for this chunk).
*   **`src/`**: Contains source files for the web application (e.g., `main.tsx`).
*   **`tokens/`**: Contains design tokens, likely in JSON format.
*   **`web/`**: Contains the React/TypeScript web application.
    *   `components/`: Reusable UI components for the web.
    *   `data/`: Data and constants for the web application.
    *   `models/`: TypeScript types/interfaces.
    *   `pages/`: Page-level components.
*   **`generated/`**: Contains generated files, including CSS for tokens and themes.
    *   `compose/`: Compose theme files.
    *   `web/`: Web-related generated assets.
*   **`tailwind.config.js`**: Tailwind CSS configuration file.
*   **`web/index.html`**: The main HTML entry point for the web application.
*   **`README.md`**: This file.

## 🧩 Components

The project utilizes a consistent set of UI components across platforms, branded as `UltraPro`:

*   `UltraProButton`
*   `UltraProCard`
*   `UltraProChip`
*   `UltraProContactForm`
*   `UltraProEmptyState`
*   `UltraProExperienceTimeline`
*   `UltraProFooter`
*   `UltraProHero`
*   `UltraProNavigation` (NavigationBar, NavigationRail)
*   `UltraProProjectGrid`
*   `UltraProSectionHeader`
*   `UltraProSkeleton` (Text, Card)
*   `UltraProSocialLinks`
*   `UltraProTestimonial`

## 🎨 Design Tokens

Design tokens are defined to ensure visual consistency. Key tokens include:

*   **Colors:** Primary, secondary, accent, background, surface, text, border, state colors.
*   **Radius:** Various border-radius values.
*   **Spacing:** Consistent spacing units.
*   **Typography:** Defined font sizes, line heights, and weights for different text styles.

These are managed in:
*   `generated/web/tokens.css`
*   `tokens/tokens.json` (content not provided in analysis)

## 📜 License

No license information was found in the repository analysis.

## 🔗 Important Links

*   **Repository:** [https://github.com/Dev-moe-kyawaung/Ultra-pro-portfolio](https://github.com/Dev-moe-kyawaung/Ultra-pro-portfolio)

## 🙏 Footer

© 2026 Ultra Pro | Built with Compose, Flutter, and React/Tailwind.

Fork this repository, give it a star ⭐, and report any issues you find!


---
**<p align="center">Generated by [ReadmeCodeGen](https://www.readmecodegen.com/)</p>**