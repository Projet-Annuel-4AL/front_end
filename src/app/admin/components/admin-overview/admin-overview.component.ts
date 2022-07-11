import {Component, OnInit} from '@angular/core';
import {PostService} from "../../../post/service/post.service";
import {Post} from "../../../post/domain/post.entity";
import {UserService} from "../../../user/service/user.service";
import {User} from "../../../user/domain/user.entity";
import {GroupService} from "../../../groups/service/group.service";
import {Group} from "../../../groups/domain/group.entity";
import {CodeService} from "../../../post/service/code.service";


@Component({
  selector: 'app-admin-overview',
  templateUrl: './admin-overview.component.html',
  styleUrls: ['./admin-overview.component.scss']
})
export class AdminOverviewComponent implements OnInit {

  posts!: Post[];
  users!: User[];
  groups!: Group[];

  constructor(private _postService: PostService,
              private _userService: UserService,
              private _groupService: GroupService,
              private _codeService: CodeService) { }


  // ADD CHART OPTIONS.
  pieChartOptions = {
    responsive: true
  }

  pieChartLabels =  ['Python', 'C++' , 'Java' ];

  pieChartData:any = [
    {
      data: this._codeService.getNumberOfPostByLanguage(),label: 'Nombre de post'
    }
  ];

  ngOnInit(): void {
    this._postService.getPosts().subscribe(posts => {
        this.posts = posts;
      }
    );
    this._userService.getAllUser().subscribe(users => {
      this.users = users;
    });
    this._groupService.getGroups().subscribe(groups => {
      this.groups = groups;
    });
  }

}
