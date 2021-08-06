import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { PostModel } from './posts.model';

@Component({
  selector: 'app-user-post-vw',
  templateUrl: './user-post-vw.component.html',
  styleUrls: ['./user-post-vw.component.css']
})
export class UserPostVwComponent implements OnInit {
  posts:any

  constructor(public postService:PostService) { }

  ngOnInit(): void {
    var authorid = localStorage.getItem('user');
    this.postService.getPost(authorid)
    .subscribe((data)=>{
      this.posts=JSON.parse(JSON.stringify(data))
    }
    );

    


  }

}
