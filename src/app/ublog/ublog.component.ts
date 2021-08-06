import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-ublog',
  templateUrl: './ublog.component.html',
  styleUrls: ['./ublog.component.css']
})
export class UblogComponent implements OnInit {
posts:any
NoOfLikes:number=0; 
  constructor(private postservice:PostService) { }

  ngOnInit(): void {
    this.postservice.getPostblog()
    .subscribe(data =>{
      console.log(data)
      this.posts = data;
      
    });
  }
  likebutton(){
    this.NoOfLikes++;
  }
}
