import 'package:ecofridge_front/views/home_view.dart';
import 'package:ecofridge_front/views/scancode.dart';
import 'package:flutter/material.dart';

class NavigationBarView extends StatefulWidget {
  const NavigationBarView({super.key});

  @override
  _NavigationBarState createState() => _NavigationBarState();
}

class _NavigationBarState extends State<NavigationBarView> {
  int _selectedIndex = 0;
  static const TextStyle optionStyle =
      TextStyle(fontSize: 30, fontWeight: FontWeight.bold);
  final List<Widget> _widgetOptions = <Widget>[
    const MyHomePage(),
    const ScanCode(),
    const Text(
      'Index 3: Settings',
      style: optionStyle,
    ),
  ];

  void _onItemTapped(int index) {
    setState(() {
      _selectedIndex = index;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: _widgetOptions.elementAt(_selectedIndex),
      ),
      bottomNavigationBar: BottomNavigationBar(
        items: const <BottomNavigationBarItem>[
          BottomNavigationBarItem(
            icon: Icon(Icons.home),
            label: 'Mon frigo',
            backgroundColor: Colors.white70,
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.inventory),
            label: 'Ajout aliment',
            backgroundColor: Colors.white70,
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.account_circle_rounded),
            label: 'Profil',
            backgroundColor: Colors.white70,
          ),
        ],
        currentIndex: _selectedIndex,
        selectedItemColor: Colors.green,
        onTap: _onItemTapped,
      ),
    );
  }
}
