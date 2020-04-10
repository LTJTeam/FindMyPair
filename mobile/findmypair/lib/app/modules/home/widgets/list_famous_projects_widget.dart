import 'package:findmypair/app/modules/home/widgets/list_projects_widget.dart';
import 'package:findmypair/app/utils/app_colors.dart';
import 'package:flutter/material.dart';

class ListFamousProjectWidget extends StatefulWidget {
  @override
  _ListFamousProjectWidgetState createState() =>
      _ListFamousProjectWidgetState();
}

class _ListFamousProjectWidgetState extends State<ListFamousProjectWidget> {
  @override
  Widget build(BuildContext context) {
    return Container(
      margin: EdgeInsets.only(left: 20, top: 40),
      width: MediaQuery.of(context).size.width,
      child: Column(
        children: <Widget>[
          Row(
            children: <Widget>[
              Icon(Icons.star, color: Colors.white, size: 20),
              Text(" Famous Project",
                  style: TextStyle(
                      color: Colors.white,
                      fontSize: 20,
                      fontWeight: FontWeight.bold))
            ],
          ),
          ListProjectsWidget()
        ],
      ),
    );
  }
}
