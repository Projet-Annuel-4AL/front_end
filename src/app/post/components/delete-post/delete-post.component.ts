import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {PostService} from "../../service/post.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-delete-post',
  templateUrl: './delete-post.component.html',
  styleUrls: ['./delete-post.component.scss']
})
export class DeletePostComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeletePostComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {idPost: number}, private _postService: PostService, private router: Router) { }

  ngOnInit(): void {

  }

  onCancel(): void {
    this.dialogRef.close();
  }

  deletePost(){
    this._postService.deletePostById(this.data.idPost).subscribe()
    this.router.navigateByUrl('').then(() => {
      window.location.reload()
    });
  }
}
