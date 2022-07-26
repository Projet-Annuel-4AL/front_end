import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MercureService {
  public readonly url = 'http://localhost/.well-known/mercure';
  public jwt =
    'eyJhbGciOiJIUzI1NiJ9.eyJtZXJjdXJlIjp7InB1Ymxpc2giOlsiKiJdfX0.vhMwOaN5K68BTIhWokMLOeOJO4EPfT64brd8euJOA4M';

  constructor(private readonly http: HttpClient) {}


  public getMercureUrlPostsTopic(){
    const url = new URL(this.url);
    url.searchParams.append('topic', 'http://localhost:4200/posts');
    return url;
  }

  public getMercureUrlCollabTopic(groupId: number){
    const url = new URL(this.url);
    url.searchParams.append('topic', 'http://localhost:4200/groups/collab/' + groupId);
    return url;
  }

  public sendCollabUpdate(content: string, groupId: number) {
    const data =new URLSearchParams({
      topic: 'http://localhost:4200/groups/collab/' + groupId,
      data: JSON.stringify({ group_id: groupId, content: content }),
    }).toString();

    const headersRequest = {
      'Content-Type': 'application/ld+json',
      Authorization: `Bearer ${this.jwt}`,
    };

    this.http
      .post(this.url, data, { headers: headersRequest })
      .subscribe();
  }
}
