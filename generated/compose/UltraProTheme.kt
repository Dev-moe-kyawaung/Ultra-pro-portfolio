package com.ultrapro.theme

import android.os.Build
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalContext
import androidx.core.content.ContextCompat

private val UltraProPrimary = Color(0xFF6D5EF7)
private val UltraProSecondary = Color(0xFF19D3DA)
private val UltraProAccent = Color(0xFFFF4FD8)

private val UltraProLightColors = lightColorScheme(
    primary = UltraProPrimary,
    onPrimary = Color.White,
    secondary = UltraProSecondary,
    onSecondary = Color.Black,
    tertiary = UltraProAccent,
    onTertiary = Color.White,
    background = Color(0xFFFFFFFF),
    onBackground = Color(0xFF020617),
    surface = Color(0xFFF8FAFC),
    onSurface = Color(0xFF020617),
    surfaceVariant = Color(0xFFF1F5F9),
    onSurfaceVariant = Color(0xFF334155),
    outline = Color(0xFFE2E8F0),
    error = Color(0xFFEF4444),
    onError = Color.White
)

private val UltraProDarkColors = darkColorScheme(
    primary = UltraProPrimary,
    onPrimary = Color.White,
    secondary = UltraProSecondary,
    onSecondary = Color.Black,
    tertiary = UltraProAccent,
    onTertiary = Color.White,
    background = Color(0xFF020617),
    onBackground = Color(0xFFF8FAFC),
    surface = Color(0xFF0F172A),
    onSurface = Color(0xFFF8FAFC),
    surfaceVariant = Color(0xFF111827),
    onSurfaceVariant = Color(0xFFCBD5E1),
    outline = Color(0xFF334155),
    error = Color(0xFFEF4444),
    onError = Color.White
)

@Composable
fun ultraProColorScheme(darkTheme: Boolean, dynamicColor: Boolean): ColorScheme {
    val context = LocalContext.current
    return when {
        dynamicColor && Build.VERSION.SDK_INT >= Build.VERSION_CODES.S -> {
            if (darkTheme) dynamicDarkColorScheme(context) else dynamicLightColorScheme(context)
        }
        darkTheme -> UltraProDarkColors
        else -> UltraProLightColors
    }
}

private val UltraProTypography = Typography(
    displayLarge = MaterialTheme.typography.displayLarge.copy(
        color = Color.Unspecified
    ),
    headlineLarge = MaterialTheme.typography.headlineLarge.copy(
        color = Color.Unspecified
    ),
    titleLarge = MaterialTheme.typography.titleLarge.copy(
        color = Color.Unspecified
    ),
    bodyLarge = MaterialTheme.typography.bodyLarge.copy(
        color = Color.Unspecified
    ),
    labelLarge = MaterialTheme.typography.labelLarge.copy(
        color = Color.Unspecified
    )
)

private val UltraProShapes = Shapes(
    extraSmall = RoundedCornerShape(8),
    small = RoundedCornerShape(12),
    medium = RoundedCornerShape(20),
    large = RoundedCornerShape(28),
    extraLarge = RoundedCornerShape(9999)
)

@Composable
fun UltraProTheme(
    darkTheme: Boolean = isSystemInDarkTheme(),
    dynamicColor: Boolean = true,
    content: @Composable () -> Unit
) {
    val colorScheme = ultraProColorScheme(darkTheme, dynamicColor)

    MaterialTheme(
        colorScheme = colorScheme,
        typography = UltraProTypography,
        shapes = UltraProShapes,
        content = content
    )
}
