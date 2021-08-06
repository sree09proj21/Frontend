import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin-post',
  templateUrl: './admin-post.component.html',
  styleUrls: ['./admin-post.component.css']
})
export class AdminPostComponent implements OnInit {
posts:any
  constructor(private postService:PostService) { }

  ngOnInit(): void {
    this.postService.getPosts()
    .subscribe((data)=>{
      this.posts=JSON.parse(JSON.stringify(data))
    }
    );
  }

}
