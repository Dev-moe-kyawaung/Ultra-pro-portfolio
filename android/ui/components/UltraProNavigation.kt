package com.ultrapro.ui.components

import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier

data class UltraProNavItem(
    val label: String,
    val selected: Boolean,
    val onClick: () -> Unit,
    val icon: @Composable (() -> Unit)? = null
)

@Composable
fun UltraProNavigationBar(
    items: List<UltraProNavItem>,
    modifier: Modifier = Modifier
) {
    NavigationBar(modifier = modifier) {
        items.forEach { item ->
            NavigationBarItem(
                selected = item.selected,
                onClick = item.onClick,
                icon = { item.icon?.invoke() },
                label = { Text(item.label) }
            )
        }
    }
}

@Composable
fun UltraProNavigationRail(
    items: List<UltraProNavItem>,
    modifier: Modifier = Modifier
) {
    NavigationRail(modifier = modifier) {
        items.forEach { item ->
            NavigationRailItem(
                selected = item.selected,
                onClick = item.onClick,
                icon = { item.icon?.invoke() },
                label = { Text(item.label) }
            )
        }
    }
}
