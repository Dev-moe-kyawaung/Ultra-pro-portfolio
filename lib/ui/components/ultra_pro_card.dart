import 'package:flutter/material.dart';

class UltraProCard extends StatelessWidget {
  final String title;
  final String body;
  final VoidCallback? onTap;

  const UltraProCard({
    super.key,
    required this.title,
    required this.body,
    this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    final child = Padding(
      padding: const EdgeInsets.all(20),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(title, style: Theme.of(context).textTheme.titleLarge),
          const SizedBox(height: 8),
          Text(body, style: Theme.of(context).textTheme.bodyLarge),
        ],
      ),
    );

    if (onTap == null) {
      return Card(child: child);
    }

    return Card(
      child: InkWell(
        onTap: onTap,
        child: child,
      ),
    );
  }
}
