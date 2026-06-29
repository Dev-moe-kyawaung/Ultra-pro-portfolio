import 'package:flutter/material.dart';

class UltraProProjectItem {
  final String title;
  final String description;
  final List<String> tags;

  const UltraProProjectItem({
    required this.title,
    required this.description,
    required this.tags,
  });
}

class UltraProProjectGrid extends StatelessWidget {
  final List<UltraProProjectItem> projects;

  const UltraProProjectGrid({
    super.key,
    required this.projects,
  });

  @override
  Widget build(BuildContext context) {
    return GridView.builder(
      shrinkWrap: true,
      physics: const NeverScrollableScrollPhysics(),
      gridDelegate: const SliverGridDelegateWithMaxCrossAxisExtent(
        maxCrossAxisExtent: 360,
        mainAxisSpacing: 16,
        crossAxisSpacing: 16,
        childAspectRatio: 1.2,
      ),
      itemCount: projects.length,
      itemBuilder: (context, index) {
        final project = projects[index];
        return Card(
          child: Padding(
            padding: const EdgeInsets.all(20),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(project.title, style: Theme.of(context).textTheme.titleLarge),
                const SizedBox(height: 8),
                Text(project.description, style: Theme.of(context).textTheme.bodyLarge),
                const Spacer(),
                if (project.tags.isNotEmpty)
                  Text(
                    project.tags.join(' • '),
                    style: Theme.of(context).textTheme.bodyMedium,
                    maxLines: 2,
                    overflow: TextOverflow.ellipsis,
                  ),
              ],
            ),
          ),
        );
      },
    );
  }
}
