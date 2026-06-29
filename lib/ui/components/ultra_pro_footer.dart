import 'package:flutter/material.dart';

class UltraProFooter extends StatelessWidget {
  final String copyrightText;
  final String linksText;

  const UltraProFooter({
    super.key,
    required this.copyrightText,
    required this.linksText,
  });

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);

    return Padding(
      padding: const EdgeInsets.all(24),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(copyrightText, style: theme.textTheme.bodyMedium),
          const SizedBox(height: 4),
          Text(linksText, style: theme.textTheme.bodySmall),
        ],
      ),
    );
  }
}
