import 'package:ecofridge_front/views/scancode.dart';
import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  testWidgets('Verify floating button in scancode view', (WidgetTester tester) async {
    // Build our app and trigger a frame.
    await tester.pumpWidget(const ScanCode());
    
    var button = find.byType(FloatingActionButton);
    expect(button, findsOne);
    
  });
}