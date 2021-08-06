import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-postone',
  templateUrl: './postone.component.html',
  styleUrls: ['./postone.component.css']
})
export class PostoneComponent implements OnInit {
post:any
  constructor(private postservice:PostService,private route: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const postIdFromRoute = routeParams.get('_pid');   
   
    this.postservice.getposts(postIdFromRoute)
    .subscribe(data =>{
      console.log(data)
      this.post = data;
      
    });
  }
approvePost()
{
  console.log(this.post)
  this.postservice.approvepost(this.post)
  alert("Post Approved")   
  this.router.navigate(['adminpost'])

}

}
