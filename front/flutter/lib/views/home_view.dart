import 'package:ecofridge_front/share/listview_horizontal/listview_horizontal.dart';
import 'package:ecofridge_front/share/title_with_horizontalview.dart';
import 'package:flutter/material.dart';

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key});

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        decoration: const BoxDecoration(
          image: DecorationImage(
            image: AssetImage("assets/background1.png"),
            fit: BoxFit.cover,
          ),
        ),
        child: Padding(
          padding: EdgeInsets.all(15),
          child: Column(
            children: [
              SizedBox(height: MediaQuery.sizeOf(context).height * 0.05),
              TitleAndHorizontalListView(
                  listView: HorizontalListView(), title: "Aliments dépassés"),
              SizedBox(height: MediaQuery.sizeOf(context).height * 0.03),
              TitleAndHorizontalListView(
                  listView: HorizontalListView(),
                  title: "Aliments bientot dépassés"),
              SizedBox(height: MediaQuery.sizeOf(context).height * 0.03),
              TitleAndHorizontalListView(
                  listView: HorizontalListView(),
                  title: "Aliments bientot dépassés"),
            ],
          ),
        ),
      ),
    );
  }
}
