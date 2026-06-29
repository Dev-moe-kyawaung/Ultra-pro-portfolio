package com.ultrapro.ui.components

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Row
import androidx.compose.material3.AssistChip
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier

data class UltraProSocialLink(
    val label: String,
    val onClick: () -> Unit
)

@Composable
fun UltraProSocialLinks(
    links: List<UltraProSocialLink>,
    modifier: Modifier = Modifier
) {
    Row(horizontalArrangement = Arrangement.spacedBy(8.dp), modifier = modifier) {
        links.forEach { link ->
            AssistChip(
                onClick = link.onClick,
                label = { Text(link.label) }
            )
        }
    }
}
