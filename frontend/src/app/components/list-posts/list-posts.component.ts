import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css'],
  "standalone": false

})
export class ListPostsComponent implements OnInit {

  posts?: Post[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.initData();
  }

  initData() {
    this.http.get<Post[]>('http://localhost:5162/api/Posts')
      .subscribe((data) => {
        this.posts = data;
        console.log(this.posts);
      });
  }
}
