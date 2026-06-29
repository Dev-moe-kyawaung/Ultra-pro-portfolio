package com.ultrapro

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import com.ultrapro.ui.pages.UltraProHome
import com.ultrapro.ui.components.*

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            UltraProTheme {
                UltraProHome(
                    navItems = listOf(
                        UltraProNavItem(label = "Home", selected = true, onClick = {}),
                        UltraProNavItem(label = "Projects", selected = false, onClick = {}),
                        UltraProNavItem(label = "Contact", selected = false, onClick = {})
                    ),
                    heroTitle = "Android Senior Developer",
                    heroSubtitle = "I build premium Flutter, Kotlin, and web experiences.",
                    projects = emptyList(),
                    experiences = emptyList(),
                    testimonials = emptyList(),
                    socialLinks = emptyList(),
                    onContactSubmit = {},
                    contactName = "",
                    contactEmail = "",
                    contactMessage = "",
                    onContactNameChange = {},
                    onContactEmailChange = {},
                    onContactMessageChange = {}
                )
            }
        }
    }
}
