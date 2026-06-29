package com.ultrapro.ui.components

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Button
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp

@Composable
fun UltraProContactForm(
    name: String,
    email: String,
    message: String,
    onNameChange: (String) -> Unit,
    onEmailChange: (String) -> Unit,
    onMessageChange: (String) -> Unit,
    onSubmit: () -> Unit,
    modifier: Modifier = Modifier
) {
    Column(
        modifier = modifier.fillMaxWidth().padding(20.dp),
        verticalArrangement = Arrangement.spacedBy(12.dp)
    ) {
        OutlinedTextField(
            value = name,
            onValueChange = onNameChange,
            label = { Text("Name") },
            modifier = Modifier.fillMaxWidth()
        )
        OutlinedTextField(
            value = email,
            onValueChange = onEmailChange,
            label = { Text("Email") },
            modifier = Modifier.fillMaxWidth()
        )
        OutlinedTextField(
            value = message,
            onValueChange = onMessageChange,
            label = { Text("Message") },
            modifier = Modifier.fillMaxWidth(),
            minLines = 4
        )
        Button(onClick = onSubmit) {
            Text("Send Message")
        }
    }
}
