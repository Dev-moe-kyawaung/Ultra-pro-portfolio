import 'package:flutter/material.dart';

class UltraProTheme {
  static const Color primary = Color(0xFF6D5EF7);
  static const Color secondary = Color(0xFF19D3DA);
  static const Color accent = Color(0xFFFF4FD8);

  static const Color canvasLight = Color(0xFFFFFFFF);
  static const Color surfaceLight = Color(0xFFF8FAFC);
  static const Color surfaceRaisedLight = Color(0xFFF1F5F9);
  static const Color textPrimaryLight = Color(0xFF020617);
  static const Color textSecondaryLight = Color(0xFF334155);
  static const Color borderLight = Color(0xFFE2E8F0);

  static const Color canvasDark = Color(0xFF020617);
  static const Color surfaceDark = Color(0xFF0F172A);
  static const Color surfaceRaisedDark = Color(0xFF111827);
  static const Color textPrimaryDark = Color(0xFFF8FAFC);
  static const Color textSecondaryDark = Color(0xFFCBD5E1);
  static const Color borderDark = Color(0xFF334155);

  static ThemeData light() {
    final scheme = ColorScheme.fromSeed(
      seedColor: primary,
      brightness: Brightness.light,
    ).copyWith(
      primary: primary,
      secondary: secondary,
      tertiary: accent,
      surface: surfaceLight,
      onSurface: textPrimaryLight,
      background: canvasLight,
      onBackground: textPrimaryLight,
      outline: borderLight,
      error: const Color(0xFFEF4444),
    );

    return ThemeData(
      useMaterial3: true,
      colorScheme: scheme,
      scaffoldBackgroundColor: canvasLight,
      textTheme: const TextTheme(
        displayLarge: TextStyle(fontSize: 56, height: 64 / 56, fontWeight: FontWeight.w700),
        headlineLarge: TextStyle(fontSize: 40, height: 48 / 40, fontWeight: FontWeight.w700),
        titleLarge: TextStyle(fontSize: 28, height: 36 / 28, fontWeight: FontWeight.w600),
        bodyLarge: TextStyle(fontSize: 16, height: 24 / 16, fontWeight: FontWeight.w400),
        labelLarge: TextStyle(fontSize: 14, height: 20 / 14, fontWeight: FontWeight.w600),
      ),
      cardTheme: const CardTheme(
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.all(Radius.circular(20)),
        ),
      ),
    );
  }

  static ThemeData dark() {
    final scheme = ColorScheme.fromSeed(
      seedColor: primary,
      brightness: Brightness.dark,
    ).copyWith(
      primary: primary,
      secondary: secondary,
      tertiary: accent,
      surface: surfaceDark,
      onSurface: textPrimaryDark,
      background: canvasDark,
      onBackground: textPrimaryDark,
      outline: borderDark,
      error: const Color(0xFFEF4444),
    );

    return ThemeData(
      useMaterial3: true,
      colorScheme: scheme,
      scaffoldBackgroundColor: canvasDark,
      textTheme: const TextTheme(
        displayLarge: TextStyle(fontSize: 56, height: 64 / 56, fontWeight: FontWeight.w700),
        headlineLarge: TextStyle(fontSize: 40, height: 48 / 40, fontWeight: FontWeight.w700),
        titleLarge: TextStyle(fontSize: 28, height: 36 / 28, fontWeight: FontWeight.w600),
        bodyLarge: TextStyle(fontSize: 16, height: 24 / 16, fontWeight: FontWeight.w400),
        labelLarge: TextStyle(fontSize: 14, height: 20 / 14, fontWeight: FontWeight.w600),
      ),
      cardTheme: const CardTheme(
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.all(Radius.circular(20)),
        ),
      ),
    );
  }

  static ThemeData system(Brightness brightness) {
    return brightness == Brightness.dark ? dark() : light();
  }
}
