import 'package:flutter/material.dart';

class UltraProSocialLink {
  final String label;
  final VoidCallback onTap;

  const UltraProSocialLink({
    required this.label,
    required this.onTap,
  });
}

class UltraProSocialLinks extends StatelessWidget {
  final List<UltraProSocialLink> links;

  const UltraProSocialLinks({
    super.key,
    required this.links,
  });

  @override
  Widget build(BuildContext context) {
    return Wrap(
      spacing: 8,
      runSpacing: 8,
      children: links
          .map(
            (link) => ActionChip(
              label: Text(link.label),
              onPressed: link.onTap,
            ),
          )
          .toList(),
    );
  }
}
