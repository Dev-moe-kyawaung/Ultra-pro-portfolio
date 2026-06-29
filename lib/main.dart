import 'package:flutter/material.dart';
import 'generated/flutter/ultra_pro_theme.dart';
import 'ui/pages/ultra_pro_home.dart';
import 'ui/components/ultra_pro_navigation.dart';
import 'ui/components/ultra_pro_experience_timeline.dart';
import 'ui/components/ultra_pro_project_grid.dart';
import 'ui/components/ultra_pro_testimonial.dart';
import 'ui/components/ultra_pro_social_links.dart';

void main() {
  runApp(const UltraProApp());
}

class UltraProApp extends StatelessWidget {
  const UltraProApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Ultra Pro',
      theme: UltraProTheme.light(),
      darkTheme: UltraProTheme.dark(),
      themeMode: ThemeMode.system,
      home: UltraProHome(
        navItems: const [
          UltraProNavItem(label: 'Home', icon: Icon(Icons.home_outlined), onTap: () {}),
          UltraProNavItem(label: 'Projects', icon: Icon(Icons.grid_view_outlined), onTap: () {}),
          UltraProNavItem(label: 'Contact', icon: Icon(Icons.mail_outline), onTap: () {}),
        ],
        currentIndex: 0,
        heroTitle: 'Android Senior Developer',
        heroSubtitle: 'I build premium Flutter, Kotlin, and web experiences.',
        projects: const [],
        experiences: const [],
        testimonials: const [],
        socialLinks: const [],
        onContactSubmit: (name, email, message) {},
      ),
    );
  }
}
