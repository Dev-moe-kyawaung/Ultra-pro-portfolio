class UltraProSocialLink {
  final String label;
  final String url;

  const UltraProSocialLink({
    required this.label,
    required this.url,
  });

  UltraProSocialLink copyWith({
    String? label,
    String? url,
  }) {
    return UltraProSocialLink(
      label: label ?? this.label,
      url: url ?? this.url,
    );
  }
}
