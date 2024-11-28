import 'package:ecofridge_front/views/signin_view.dart';
import 'package:flutter/material.dart';

void main() { 
  runApp( const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'My First App',
      home: SignInView(),
      color: Colors.white,
    );
  }
}