import 'package:findmypair/app/utils/app_colors.dart';
import 'package:flutter/material.dart';

class BarNavigationWidget extends StatefulWidget {
  @override
  _BarNavigationWidgetState createState() => _BarNavigationWidgetState();
}

class _BarNavigationWidgetState extends State<BarNavigationWidget> {
  @override
  Widget build(BuildContext context) {
    return Container(
      height: 70,
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.only(
            topLeft: Radius.circular(60), topRight: Radius.circular(60)),
      ),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceAround,
        children: <Widget>[
          Icon(Icons.person, size: 50, color: AppColors.letterLists),
          Icon(Icons.folder, size: 50, color: AppColors.letterLists),
          Icon(Icons.add_circle, size: 50, color: AppColors.letterLists),
          Icon(Icons.notifications, size: 50, color: AppColors.letterLists),
          Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              Icon(Icons.home, size: 50, color: AppColors.letterLists),
              Container(
                height: 8,
                width: 40,
                decoration: BoxDecoration(
                    color: AppColors.letterLists,
                    borderRadius: BorderRadius.all(Radius.circular(20))),
              )
            ],
          )
        ],
      ),
    );
  }
}
