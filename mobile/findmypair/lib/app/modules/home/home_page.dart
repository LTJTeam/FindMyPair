import 'package:findmypair/app/modules/home/widgets/bar_navigation_widget.dart';
import 'package:findmypair/app/modules/home/widgets/header_widget.dart';
import 'package:findmypair/app/modules/home/widgets/list_famous_projects_widget.dart';
import 'package:findmypair/app/modules/home/widgets/list_projects_widget.dart';
import 'package:findmypair/app/modules/home/widgets/list_recent_projects_widget.dart';
import 'package:findmypair/app/utils/app_colors.dart';
import 'package:flutter/material.dart';

class HomePage extends StatefulWidget {
  final String title;
  const HomePage({Key key, this.title = "Home"}) : super(key: key);

  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.background,
      bottomNavigationBar: BarNavigationWidget(),
      body: SingleChildScrollView(
        child: Container(
          width: MediaQuery.of(context).size.width,
          child: Column(
            children: <Widget>[
              //HeaderWidget()
              ListFamousProjectWidget(),
              ListRecentProjectsWidget()
            ],
          ),
        ),
      ),
    );
  }
}
