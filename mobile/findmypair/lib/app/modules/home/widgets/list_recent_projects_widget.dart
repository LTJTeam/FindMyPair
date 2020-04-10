import 'package:findmypair/app/modules/home/widgets/list_projects_widget.dart';
import 'package:findmypair/app/utils/app_colors.dart';
import 'package:flutter/material.dart';

class ListRecentProjectsWidget extends StatefulWidget {
  @override
  _ListRecentProjectsWidgetState createState() =>
      _ListRecentProjectsWidgetState();
}

class _ListRecentProjectsWidgetState extends State<ListRecentProjectsWidget> {
  @override
  Widget build(BuildContext context) {
    return Container(
      margin: EdgeInsets.only(left: 20, top: 28, right: 20),
      width: MediaQuery.of(context).size.width,
      child: Column(
        children: <Widget>[
          Row(
            children: <Widget>[
              Icon(Icons.watch_later, color: AppColors.letterLists, size: 30),
              Text("Recent Projects",
                  style: TextStyle(
                      color: AppColors.letterLists,
                      fontSize: 30,
                      fontWeight: FontWeight.bold))
            ],
          ),
          ListProjects()
        ],
      ),
    );
  }

  Widget ListProjects() {
    return Wrap(
      spacing: 10,
      children: <Widget>[
        Project(),
        Project(),
        Project(),
        Project(),
        Project(),
      ],
    );
  }

  Widget Project() {
    return Container(
      height: 120,
      width: 180,
      padding: EdgeInsets.all(20),
      margin: EdgeInsets.only(top: 20),
      decoration: BoxDecoration(
          color: Colors.red,
          borderRadius: BorderRadius.all(Radius.circular(20))),
      child: Text("Name project",
          style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold)),
    );
  }
}
