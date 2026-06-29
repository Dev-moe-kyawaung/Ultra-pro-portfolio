import 'package:flutter/material.dart';

class UltraProSectionHeader extends StatelessWidget {
  final String title;
  final String? subtitle;

  const UltraProSectionHeader({
    super.key,
    required this.title,
    this.subtitle,
  });

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);

    return Padding(
      padding: const EdgeInsets.only(bottom: 16),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(title, style: theme.textTheme.headlineLarge),
          if (subtitle != null && subtitle!.trim().isNotEmpty) ...[
            const SizedBox(height: 6),
            Text(subtitle!, style: theme.textTheme.bodyLarge),
          ],
        ],
      ),
    );
  }
}
