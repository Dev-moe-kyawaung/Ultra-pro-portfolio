class UltraProProjectItem {
  final String title;
  final String description;
  final List<String> tags;

  const UltraProProjectItem({
    required this.title,
    required this.description,
    this.tags = const [],
  });

  UltraProProjectItem copyWith({
    String? title,
    String? description,
    List<String>? tags,
  }) {
    return UltraProProjectItem(
      title: title ?? this.title,
      description: description ?? this.description,
      tags: tags ?? this.tags,
    );
  }
}
