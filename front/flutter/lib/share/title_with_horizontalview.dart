import 'package:ecofridge_front/share/listview_horizontal/listview_horizontal.dart';
import 'package:flutter/material.dart';

class TitleAndHorizontalListView extends StatelessWidget {
  final String title;
  final HorizontalListView listView;

  const TitleAndHorizontalListView(
      {super.key, required this.title, required this.listView});

  getIcon() {
    if (title == "Aliments dépassés") {
      return const Icon(
        Icons.warning,
        color: Colors.red,
      );
    } else if (title == "Aliments bientot dépassés") {
      return const Icon(
        Icons.warning,
        color: Colors.amber,
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Align(
            alignment: Alignment.centerLeft,
            child: Row(children: [
              Text(
                title,
                style:
                    const TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
              ),
              getIcon()
            ])),
        const SizedBox(
          height: 15,
        ),
        const SizedBox(height: 150, child: HorizontalListView())
      ],
    );
  }
}
