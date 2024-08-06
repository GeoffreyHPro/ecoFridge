import 'package:ecofridge_front/share/listview_horizontal/listview_element.dart';
import 'package:flutter/material.dart';

class HorizontalListView extends StatelessWidget {
  const HorizontalListView({super.key});

  @override
  Widget build(BuildContext context) {

    return ListView.separated(
        scrollDirection: Axis.horizontal,
        itemCount: 10,
        itemBuilder: (BuildContext context, int index) {
          return ElementListView(
            index: index,
          );
        },
        separatorBuilder: (BuildContext context, int index) => const SizedBox(
              width: 20,
            ));
  }
}
