package com.ultrapro.model

data class UltraProProjectItem(
    val title: String,
    val description: String,
    val tags: List<String> = emptyList()
)
