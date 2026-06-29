import 'package:flutter/material.dart';

class UltraProExperienceItem {
  final String role;
  final String company;
  final String period;
  final String description;

  const UltraProExperienceItem({
    required this.role,
    required this.company,
    required this.period,
    required this.description,
  });
}

class UltraProExperienceTimeline extends StatelessWidget {
  final List<UltraProExperienceItem> items;

  const UltraProExperienceTimeline({
    super.key,
    required this.items,
  });

  @override
  Widget build(BuildContext context) {
    return ListView.separated(
      shrinkWrap: true,
      physics: const NeverScrollableScrollPhysics(),
      itemCount: items.length,
      separatorBuilder: (_, __) => const SizedBox(height: 16),
      itemBuilder: (context, index) {
        final item = items[index];
        return Card(
          child: Padding(
            padding: const EdgeInsets.all(20),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(item.role, style: Theme.of(context).textTheme.titleLarge),
                const SizedBox(height: 4),
                Text(
                  '${item.company} • ${item.period}',
                  style: Theme.of(context).textTheme.bodyMedium,
                ),
                const SizedBox(height: 8),
                Text(item.description, style: Theme.of(context).textTheme.bodyLarge),
              ],
            ),
          ),
        );
      },
    );
  }
}
