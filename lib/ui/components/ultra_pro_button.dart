import 'package:flutter/material.dart';

enum UltraProButtonVariant { primary, secondary, ghost }

class UltraProButton extends StatelessWidget {
  final String text;
  final UltraProButtonVariant variant;
  final VoidCallback? onPressed;
  final bool enabled;

  const UltraProButton({
    super.key,
    required this.text,
    required this.onPressed,
    this.variant = UltraProButtonVariant.primary,
    this.enabled = true,
  });

  @override
  Widget build(BuildContext context) {
    final action = enabled ? onPressed : null;

    switch (variant) {
      case UltraProButtonVariant.primary:
        return FilledButton(
          onPressed: action,
          child: Text(text),
        );
      case UltraProButtonVariant.secondary:
        return OutlinedButton(
          onPressed: action,
          child: Text(text),
        );
      case UltraProButtonVariant.ghost:
        return TextButton(
          onPressed: action,
          child: Text(text),
        );
    }
  }
}
