import 'package:ecofridge_front/views/signin_view.dart';
import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  testWidgets('Verify floating button in scancode view',
      (WidgetTester tester) async {
    await tester.pumpWidget(MaterialApp(home: SignInView()));

    final buttonFinder = find.byType(ElevatedButton);
    expect(buttonFinder, findsOneWidget);

    final button = tester.widget<ElevatedButton>(buttonFinder);
    final buttonText = button.child as Text;
    expect(buttonText.data, "Login");

  });
}
