import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-postcatg',
  templateUrl: './postcatg.component.html',
  styleUrls: ['./postcatg.component.css']
})
export class PostcatgComponent implements OnInit {
posts:any
  constructor(private postservice:PostService,public route:ActivatedRoute) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const posttagFromRoute = routeParams.get('Tag');    
    this.postservice.getPostblogs(posttagFromRoute)
    .subscribe(data =>{
      console.log(data)
      this.posts = data;
      
    });
  }

}
