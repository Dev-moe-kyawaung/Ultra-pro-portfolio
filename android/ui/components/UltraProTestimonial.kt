package com.ultrapro.ui.components

import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Card
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp

data class UltraProTestimonialItem(
    val quote: String,
    val author: String,
    val role: String
)

@Composable
fun UltraProTestimonial(
    item: UltraProTestimonialItem,
    modifier: Modifier = Modifier
) {
    Card(modifier = modifier) {
        Column(modifier = Modifier.padding(20.dp)) {
            Text(text = "“${item.quote}”", style = MaterialTheme.typography.bodyLarge)
            Text(
                text = item.author,
                style = MaterialTheme.typography.titleMedium,
                modifier = Modifier.padding(top = 12.dp)
            )
            Text(text = item.role, style = MaterialTheme.typography.bodyMedium)
        }
    }
}
