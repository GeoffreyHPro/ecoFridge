import 'package:flutter/material.dart';

class ElementListView extends StatelessWidget {
  final int index;

  const ElementListView({Key? key, required this.index}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return Container(
      height: MediaQuery.sizeOf(context).height * 0.20,
      width: MediaQuery.sizeOf(context).width * 0.33,
      decoration: BoxDecoration(
          color: Colors.transparent,
          borderRadius: BorderRadius.all(Radius.circular(25)),
          boxShadow: [
            BoxShadow(
              color: Colors.white.withOpacity(0.5),
              blurRadius: 7,
              spreadRadius: 3,
            )
          ]),
      child: Column(
        children: [
          SizedBox(
              height: 100,
              width: MediaQuery.sizeOf(context).width,
              child: Image(
                image: AssetImage("assets/yaourt.jpg"),
                fit: BoxFit.cover,
              )),
          const Text("yaourt"),
          Padding(
            padding: const EdgeInsets.all(2.0),
            child: Row(
              children: [Expanded(child: Text("6")), Text("12/02/2026")],
            ),
          ),
        ],
      ),
    );
  }
}
