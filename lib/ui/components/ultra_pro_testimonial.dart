import 'package:flutter/material.dart';

class UltraProTestimonialItem {
  final String quote;
  final String author;
  final String role;

  const UltraProTestimonialItem({
    required this.quote,
    required this.author,
    required this.role,
  });
}

class UltraProTestimonial extends StatelessWidget {
  final UltraProTestimonialItem item;

  const UltraProTestimonial({
    super.key,
    required this.item,
  });

  @override
  Widget build(BuildContext context) {
    return Card(
      child: Padding(
        padding: const EdgeInsets.all(20),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text('“${item.quote}”', style: Theme.of(context).textTheme.bodyLarge),
            const SizedBox(height: 12),
            Text(item.author, style: Theme.of(context).textTheme.titleMedium),
            const SizedBox(height: 4),
            Text(item.role, style: Theme.of(context).textTheme.bodyMedium),
          ],
        ),
      ),
    );
  }
}
