import 'package:flutter/material.dart';

class SearchWidget extends StatefulWidget {
  @override
  _SearchWidgetState createState() => _SearchWidgetState();
}

class _SearchWidgetState extends State<SearchWidget> {
  @override
  Widget build(BuildContext context) {
    return Container(
      margin: EdgeInsets.only(left: 20, top: 70, right: 20),
      decoration: BoxDecoration(
          color: Color(0xff304149),
          borderRadius: BorderRadius.all(Radius.circular(20))),
      child: TextField(
        decoration: InputDecoration(
            suffixIcon: Icon(Icons.search), border: InputBorder.none),
      ),
    );
  }
}
