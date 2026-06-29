class UltraProTestimonialItem {
  final String quote;
  final String author;
  final String role;

  const UltraProTestimonialItem({
    required this.quote,
    required this.author,
    required this.role,
  });

  UltraProTestimonialItem copyWith({
    String? quote,
    String? author,
    String? role,
  }) {
    return UltraProTestimonialItem(
      quote: quote ?? this.quote,
      author: author ?? this.author,
      role: role ?? this.role,
    );
  }
}
