import 'package:flutter/material.dart';

class UltraProHero extends StatelessWidget {
  final String title;
  final String subtitle;
  final Widget primaryAction;
  final Widget secondaryAction;

  const UltraProHero({
    super.key,
    required this.title,
    required this.subtitle,
    required this.primaryAction,
    required this.secondaryAction,
  });

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);

    return Padding(
      padding: const EdgeInsets.all(24),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(title, style: theme.textTheme.displayLarge),
          const SizedBox(height: 16),
          Text(subtitle, style: theme.textTheme.bodyLarge),
          const SizedBox(height: 16),
          Wrap(
            spacing: 12,
            runSpacing: 12,
            children: [primaryAction, secondaryAction],
          ),
        ],
      ),
    );
  }
}
