import 'package:flutter/material.dart';

class UltraProNavItem {
  final String label;
  final Widget icon;
  final VoidCallback onTap;

  const UltraProNavItem({
    required this.label,
    required this.icon,
    required this.onTap,
  });
}

class UltraProNavigationBar extends StatelessWidget {
  final int currentIndex;
  final List<UltraProNavItem> items;

  const UltraProNavigationBar({
    super.key,
    required this.currentIndex,
    required this.items,
  });

  @override
  Widget build(BuildContext context) {
    return NavigationBar(
      selectedIndex: currentIndex,
      destinations: [
        for (final item in items)
          NavigationDestination(icon: item.icon, label: item.label),
      ],
      onDestinationSelected: (index) => items[index].onTap(),
    );
  }
}
