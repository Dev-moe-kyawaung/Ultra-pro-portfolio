import 'package:flutter/material.dart';

enum UltraProChipVariant { assist, filter }

class UltraProChip extends StatelessWidget {
  final String label;
  final UltraProChipVariant variant;
  final bool selected;
  final VoidCallback onPressed;

  const UltraProChip({
    super.key,
    required this.label,
    required this.onPressed,
    this.variant = UltraProChipVariant.assist,
    this.selected = false,
  });

  @override
  Widget build(BuildContext context) {
    switch (variant) {
      case UltraProChipVariant.assist:
        return ActionChip(
          label: Text(label),
          onPressed: onPressed,
        );
      case UltraProChipVariant.filter:
        return FilterChip(
          label: Text(label),
          selected: selected,
          onSelected: (_) => onPressed(),
        );
    }
  }
}
