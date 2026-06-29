package com.ultrapro.ui.components

import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp

@Composable
fun UltraProFooter(
    copyrightText: String,
    linksText: String,
    modifier: Modifier = Modifier
) {
    Column(
        modifier = modifier.fillMaxWidth().padding(24.dp)
    ) {
        Text(text = copyrightText, style = MaterialTheme.typography.bodyMedium)
        Text(text = linksText, style = MaterialTheme.typography.bodySmall)
    }
}
