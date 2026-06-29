import 'package:flutter/material.dart';
import '../components/ultra_pro_button.dart';
import '../components/ultra_pro_card.dart';
import '../components/ultra_pro_chip.dart';
import '../components/ultra_pro_contact_form.dart';
import '../components/ultra_pro_empty_state.dart';
import '../components/ultra_pro_experience_timeline.dart';
import '../components/ultra_pro_hero.dart';
import '../components/ultra_pro_navigation.dart';
import '../components/ultra_pro_project_grid.dart';
import '../components/ultra_pro_section_header.dart';
import '../components/ultra_pro_social_links.dart';
import '../components/ultra_pro_testimonial.dart';
import '../components/ultra_pro_footer.dart';

class UltraProHome extends StatelessWidget {
  final List<UltraProNavItem> navItems;
  final int currentIndex;
  final String heroTitle;
  final String heroSubtitle;
  final List<UltraProProjectItem> projects;
  final List<UltraProExperienceItem> experiences;
  final List<UltraProTestimonialItem> testimonials;
  final List<UltraProSocialLink> socialLinks;
  final void Function(String name, String email, String message) onContactSubmit;

  const UltraProHome({
    super.key,
    required this.navItems,
    required this.currentIndex,
    required this.heroTitle,
    required this.heroSubtitle,
    required this.projects,
    required this.experiences,
    required this.testimonials,
    required this.socialLinks,
    required this.onContactSubmit,
  });

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Ultra Pro')),
      bottomNavigationBar: UltraProNavigationBar(
        currentIndex: currentIndex,
        items: navItems,
      ),
      body: SingleChildScrollView(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            UltraProHero(
              title: heroTitle,
              subtitle: heroSubtitle,
              primaryAction: FilledButton(
                onPressed: () {},
                child: const Text('Contact Me'),
              ),
              secondaryAction: UltraProButton(
                text: 'Download CV',
                variant: UltraProButtonVariant.secondary,
                onPressed: () {},
              ),
            ),
            const SizedBox(height: 24),

            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 24),
              child: UltraProSectionHeader(
                title: 'Experience',
                subtitle: 'Selected roles and impact.',
              ),
            ),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 24),
              child: UltraProExperienceTimeline(items: experiences),
            ),
            const SizedBox(height: 24),

            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 24),
              child: UltraProSectionHeader(
                title: 'Projects',
                subtitle: 'Featured work across mobile and web.',
              ),
            ),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 24),
              child: UltraProProjectGrid(projects: projects),
            ),
            const SizedBox(height: 24),

            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 24),
              child: UltraProSectionHeader(
                title: 'Testimonials',
                subtitle: 'What collaborators say.',
              ),
            ),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 24),
              child: Column(
                children: testimonials
                    .map((t) => Padding(
                          padding: const EdgeInsets.only(bottom: 16),
                          child: UltraProTestimonial(item: t),
                        ))
                    .toList(),
              ),
            ),
            const SizedBox(height: 24),

            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 24),
              child: UltraProSectionHeader(
                title: 'Contact',
                subtitle: 'Start a conversation.',
              ),
            ),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 24),
              child: UltraProContactForm(onSubmit: onContactSubmit),
            ),
            const SizedBox(height: 24),

            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 24),
              child: UltraProSectionHeader(
                title: 'Social',
                subtitle: 'Find me online.',
              ),
            ),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 24),
              child: UltraProSocialLinks(links: socialLinks),
            ),
            const SizedBox(height: 24),

            const Padding(
              padding: EdgeInsets.symmetric(horizontal: 24),
              child: UltraProFooter(
                copyrightText: '© 2026 Ultra Pro',
                linksText: 'Built with Flutter and Material 3',
              ),
            ),
            const SizedBox(height: 24),
          ],
        ),
      ),
    );
  }
}
