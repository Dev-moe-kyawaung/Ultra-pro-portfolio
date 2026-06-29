package com.ultrapro.data

import com.ultrapro.model.UltraProExperienceItem
import com.ultrapro.model.UltraProProjectItem
import com.ultrapro.model.UltraProSocialLink
import com.ultrapro.model.UltraProTestimonialItem

object PortfolioData {
    val navLabels = listOf("Home", "Experience", "Projects", "Contact")

    val heroTitle = "Android Senior Developer"
    val heroSubtitle = "I build premium Flutter, Kotlin, and web experiences with strong architecture, polished UI, and production-ready delivery."

    val experiences = listOf(
        UltraProExperienceItem(
            role = "Senior Android Developer",
            company = "Independent / Product Engineering",
            period = "2023 — Present",
            description = "Led premium mobile and web portfolio builds, implemented Material 3 systems, and shipped localization-ready UI architecture."
        ),
        UltraProExperienceItem(
            role = "Flutter Developer",
            company = "Cross-Platform Product Work",
            period = "2021 — 2023",
            description = "Built Flutter mobile and web apps with reusable design systems, theme synchronization, and CI/CD pipelines."
        ),
        UltraProExperienceItem(
            role = "Android Developer",
            company = "Native App Delivery",
            period = "2019 — 2021",
            description = "Delivered Kotlin and Jetpack Compose apps with MVVM, clean architecture, and performance-focused state management."
        )
    )

    val projects = listOf(
        UltraProProjectItem(
            title = "Ultra Pro Portfolio",
            description = "Unified Android, Flutter, and Web portfolio with shared design tokens and premium visual language.",
            tags = listOf("Compose", "Flutter", "React", "Tailwind")
        ),
        UltraProProjectItem(
            title = "Localization System",
            description = "Multilingual app flow supporting Burmese and English with clean separation of content and UI.",
            tags = listOf("i18n", "Android", "Flutter")
        ),
        UltraProProjectItem(
            title = "CI/CD Starter",
            description = "Automated build and deploy pipeline for modern portfolio delivery with consistent output.",
            tags = listOf("GitHub Actions", "Firebase", "Netlify")
        )
    )

    val testimonials = listOf(
        UltraProTestimonialItem(
            quote = "Extremely detail-oriented and production-focused. The final result looked premium and performed well.",
            author = "Product Lead",
            role = "Cross-Platform Client"
        ),
        UltraProTestimonialItem(
            quote = "Strong architecture, clean UI delivery, and great consistency across platforms.",
            author = "Engineering Manager",
            role = "Mobile Team"
        )
    )

    val socialLinks = listOf(
        UltraProSocialLink(label = "GitHub", url = "https://github.com/yourname"),
        UltraProSocialLink(label = "LinkedIn", url = "https://linkedin.com/in/yourname"),
        UltraProSocialLink(label = "Website", url = "https://yourdomain.com")
    )
}
