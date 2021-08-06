import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-upostvw',
  templateUrl: './upostvw.component.html',
  styleUrls: ['./upostvw.component.css']
})
export class UpostvwComponent implements OnInit {
post:any
  constructor(private route:ActivatedRoute,private postservice:PostService,private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const postIdFromRoute = routeParams.get('_id');   
   
    this.postservice.getposts(postIdFromRoute)
    .subscribe(data =>{
      console.log(data)
      this.post = data;
      
    });
  }
  userpost = this.fb.group(
    {
      title:['',[Validators.required]],
      image:['',[Validators.required]],
    story:['', [Validators.required]],     
    tag:['',[Validators.required]]
      
    }
  )
  editpost()
  {
    console.log(this.post.Tag)
    this.post.Status="pending"
    this.post.CreatedTime=new Date().toISOString();
    this.postservice.editPost(this.post)   
    alert("Updated");
    this.router.navigate(['userpostvw']);
  }

}
