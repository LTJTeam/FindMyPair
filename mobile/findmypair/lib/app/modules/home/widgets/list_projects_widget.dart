import 'package:flutter/material.dart';

class ListProjectsWidget extends StatefulWidget {
  @override
  _ListProjectsWidgetState createState() => _ListProjectsWidgetState();
}

class _ListProjectsWidgetState extends State<ListProjectsWidget> {
  @override
  Widget build(BuildContext context) {
    return Container(
      margin: EdgeInsets.only(top: 10),
      width: MediaQuery.of(context).size.width,
      height: 100,
      child: ListView.builder(
        itemCount: 10,
        scrollDirection: Axis.horizontal,
        itemBuilder: Project,
      ),
    );
  }

  Widget Project(context, index) {
    return Container(
      padding: EdgeInsets.all(20),
      margin: EdgeInsets.only(right: 10),
      decoration: BoxDecoration(
          color: Colors.red,
          borderRadius: BorderRadius.all(Radius.circular(20))),
      child: Text("Name project",
          style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold)),
    );
  }
}
