package com.ultrapro.ui.pages

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Surface
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import com.ultrapro.ui.components.*

@Composable
fun UltraProHome(
    navItems: List<UltraProNavItem>,
    heroTitle: String,
    heroSubtitle: String,
    projects: List<UltraProProjectItem>,
    experiences: List<UltraProExperienceItem>,
    testimonials: List<UltraProTestimonialItem>,
    socialLinks: List<UltraProSocialLink>,
    onContactSubmit: () -> Unit,
    contactName: String,
    contactEmail: String,
    contactMessage: String,
    onContactNameChange: (String) -> Unit,
    onContactEmailChange: (String) -> Unit,
    onContactMessageChange: (String) -> Unit,
) {
    Scaffold(
        topBar = { UltraProNavigationBar(items = navItems) },
        bottomBar = { UltraProFooter(copyrightText = "© 2026 Ultra Pro", linksText = "Built with Compose, Flutter, and React/Tailwind") }
    ) { padding ->
        Surface(
            modifier = Modifier.fillMaxSize()
        ) {
            Column(
                modifier = Modifier
                    .verticalScroll(rememberScrollState())
                    .padding(padding),
                verticalArrangement = Arrangement.spacedBy(32.dp)
            ) {
                UltraProHero(
                    title = heroTitle,
                    subtitle = heroSubtitle,
                    primaryAction = { UltraProButton(text = "Contact Me", onClick = onContactSubmit) },
                    secondaryAction = { UltraProButton(text = "Download CV", variant = UltraProButtonVariant.Secondary, onClick = {}) }
                )

                UltraProSectionHeader(title = "Experience", subtitle = "Selected roles and impact.")
                UltraProExperienceTimeline(items = experiences)

                UltraProSectionHeader(title = "Projects", subtitle = "Featured work across mobile and web.")
                UltraProProjectGrid(projects = projects)

                UltraProSectionHeader(title = "Testimonials", subtitle = "What collaborators say.")
                testimonials.forEach { UltraProTestimonial(item = it) }

                UltraProSectionHeader(title = "Contact", subtitle = "Start a conversation.")
                UltraProContactForm(
                    name = contactName,
                    email = contactEmail,
                    message = contactMessage,
                    onNameChange = onContactNameChange,
                    onEmailChange = onContactEmailChange,
                    onMessageChange = onContactMessageChange,
                    onSubmit = onContactSubmit
                )

                UltraProSectionHeader(title = "Social", subtitle = "Find me online.")
                UltraProSocialLinks(links = socialLinks)

                Spacer(modifier = Modifier.height(24.dp))
            }
        }
    }
}
