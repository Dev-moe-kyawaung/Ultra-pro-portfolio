import 'package:flutter/material.dart';

class UltraProSkeletonText extends StatelessWidget {
  final double widthFactor;
  final double height;

  const UltraProSkeletonText({
    super.key,
    this.widthFactor = 1.0,
    this.height = 16,
  });

  @override
  Widget build(BuildContext context) {
    return FractionallySizedBox(
      widthFactor: widthFactor,
      alignment: Alignment.centerLeft,
      child: Container(
        height: height,
        decoration: BoxDecoration(
          color: Theme.of(context).colorScheme.surfaceContainerHighest.withOpacity(0.7),
          borderRadius: BorderRadius.circular(8),
        ),
      ),
    );
  }
}

class UltraProSkeletonCard extends StatelessWidget {
  const UltraProSkeletonCard({super.key});

  @override
  Widget build(BuildContext context) {
    final surface = Theme.of(context).colorScheme.surfaceContainerHighest.withOpacity(0.7);

    return Card(
      child: Padding(
        padding: const EdgeInsets.all(20),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Container(height: 20, width: 180, decoration: BoxDecoration(color: surface, borderRadius: BorderRadius.circular(8))),
            const SizedBox(height: 12),
            Container(height: 16, width: double.infinity, decoration: BoxDecoration(color: surface, borderRadius: BorderRadius.circular(8))),
            const SizedBox(height: 8),
            Container(height: 16, width: 260, decoration: BoxDecoration(color: surface, borderRadius: BorderRadius.circular(8))),
            const SizedBox(height: 12),
            Row(
              children: [
                Container(height: 32, width: 84, decoration: BoxDecoration(color: surface, borderRadius: BorderRadius.circular(9999))),
                const SizedBox(width: 8),
                Container(height: 32, width: 64, decoration: BoxDecoration(color: surface, borderRadius: BorderRadius.circular(9999))),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
