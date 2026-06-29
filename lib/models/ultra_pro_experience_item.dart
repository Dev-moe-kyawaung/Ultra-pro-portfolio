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

  UltraProExperienceItem copyWith({
    String? role,
    String? company,
    String? period,
    String? description,
  }) {
    return UltraProExperienceItem(
      role: role ?? this.role,
      company: company ?? this.company,
      period: period ?? this.period,
      description: description ?? this.description,
    );
  }
}
