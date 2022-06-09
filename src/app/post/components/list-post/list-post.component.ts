import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.scss']
})
export class ListPostComponent implements OnInit {

  title!: string;
  date!: Date;
  idContent!: number;
  description!: string;
  contentType!: string;
  idUser!: number;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http
      .get<any>( "http://localhost:3000/posts").toPromise()
      .then(response => {
        console.log(response)
      })
      .catch( err => {
        console.log(err)
      })
  }

}
