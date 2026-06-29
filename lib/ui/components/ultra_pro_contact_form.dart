import 'package:flutter/material.dart';

class UltraProContactForm extends StatefulWidget {
  final void Function(String name, String email, String message) onSubmit;

  const UltraProContactForm({
    super.key,
    required this.onSubmit,
  });

  @override
  State<UltraProContactForm> createState() => _UltraProContactFormState();
}

class _UltraProContactFormState extends State<UltraProContactForm> {
  final _formKey = GlobalKey<FormState>();
  final _name = TextEditingController();
  final _email = TextEditingController();
  final _message = TextEditingController();

  @override
  void dispose() {
    _name.dispose();
    _email.dispose();
    _message.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Form(
      key: _formKey,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          TextFormField(
            controller: _name,
            decoration: const InputDecoration(labelText: 'Name'),
            validator: (value) => (value == null || value.trim().isEmpty) ? 'Name is required' : null,
          ),
          const SizedBox(height: 12),
          TextFormField(
            controller: _email,
            decoration: const InputDecoration(labelText: 'Email'),
            validator: (value) => (value == null || !value.contains('@')) ? 'Enter a valid email' : null,
          ),
          const SizedBox(height: 12),
          TextFormField(
            controller: _message,
            decoration: const InputDecoration(labelText: 'Message'),
            maxLines: 4,
            validator: (value) => (value == null || value.trim().length < 10) ? 'Message is too short' : null,
          ),
          const SizedBox(height: 16),
          FilledButton(
            onPressed: () {
              if (_formKey.currentState!.validate()) {
                widget.onSubmit(_name.text, _email.text, _message.text);
              }
            },
            child: const Text('Send Message'),
          ),
        ],
      ),
    );
  }
}
