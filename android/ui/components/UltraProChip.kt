 package com.ultrapro.ui.components

import androidx.compose.material3.AssistChip
import androidx.compose.material3.FilterChip
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier

enum class UltraProChipVariant { Assist, Filter }

@Composable
fun UltraProChip(
    label: String,
    variant: UltraProChipVariant = UltraProChipVariant.Assist,
    selected: Boolean = false,
    onClick: () -> Unit,
    modifier: Modifier = Modifier
) {
    when (variant) {
        UltraProChipVariant.Assist -> {
            AssistChip(
                onClick = onClick,
                label = { Text(label) },
                modifier = modifier
            )
        }

        UltraProChipVariant.Filter -> {
            FilterChip(
                selected = selected,
                onClick = onClick,
                label = { Text(label) },
                modifier = modifier
            )
        }
    }
}
