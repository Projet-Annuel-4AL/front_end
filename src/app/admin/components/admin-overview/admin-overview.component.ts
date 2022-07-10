import {Component, OnInit, ViewChild} from '@angular/core';
import {BaseChartDirective} from "ng2-charts";
import {Chart, ChartConfiguration, ChartData, ChartType} from "chart.js";
import {PostService} from "../../../post/service/post.service";
import {Post} from "../../../post/domain/post.entity";
import {UserService} from "../../../user/service/user.service";
import {User} from "../../../user/domain/user.entity";
import {GroupService} from "../../../groups/service/group.service";
import {Group} from "../../../groups/domain/group.entity";


@Component({
  selector: 'app-admin-overview',
  templateUrl: './admin-overview.component.html',
  styleUrls: ['./admin-overview.component.scss']
})
export class AdminOverviewComponent implements OnInit {
  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };
  java = 0;
  c = 0;
  python = 0;
  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: [ 'Python', 'C++' , 'Java' ],
    datasets: [ {
      data: [ this.python, this.c, this.java],label: 'Number of post'
    } ]};
  //public test = 'pie' as ChartType;
  //public pieChartType: ChartType = this.test;
  public pieChartLegend = true;
  public pieChartPlugins = [];



  editorOptions!: any;
  posts!: Post[];
  users!: User[];
  groups!: Group[];
  constructor(private _postService: PostService,
              private _userService: UserService,
              private _groupService: GroupService) { }


  ngOnInit(): void {
    this._postService.getPosts().subscribe(posts => {
        this.posts = posts;
        console.log(this.posts);
      }
    );
    this._userService.getAllUser().subscribe(users => {
      this.users = users;
      console.log(this.users);
    });
    this._groupService.getGroups().subscribe(groups => {
      this.groups = groups;
      console.log(this.groups);
    });
    /*this.posts.forEach(function(post){
      console.log("post.code.language")
    });
    this.pieChartData.datasets[0].data[2] = 10;*/
    //this.pieChartData.;
  }

}
