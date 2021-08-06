import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-ablog',
  templateUrl: './ablog.component.html',
  styleUrls: ['./ablog.component.css']
})
export class AblogComponent implements OnInit {
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
