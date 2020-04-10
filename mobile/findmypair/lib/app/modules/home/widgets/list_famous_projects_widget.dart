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
      margin: EdgeInsets.only(left: 20, top: 250),
      width: MediaQuery.of(context).size.width,
      child: Column(
        children: <Widget>[
          Row(
            children: <Widget>[
              Icon(Icons.star, color: AppColors.letterLists, size: 30),
              Text("Famous Project",
                  style: TextStyle(
                      color: AppColors.letterLists,
                      fontSize: 30,
                      fontWeight: FontWeight.bold))
            ],
          ),
          ListProjectsWidget()
        ],
      ),
    );
  }
}
