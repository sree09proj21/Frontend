import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from '../post.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-post-cr',
  templateUrl: './user-post-cr.component.html',
  styleUrls: ['./user-post-cr.component.css']
})
export class UserPostCrComponent implements OnInit {
  
  constructor(public fb:FormBuilder,public post:PostService,public router:Router) { }

  ngOnInit(): void {
  }
  userpost = this.fb.group(
    {
      title:['',[Validators.required]],
      image:['',[Validators.required]],
    story:['', [Validators.required]],     
    tag:['',[Validators.required]]
      
    }
  )
  userPost()
  {
    console.log(this.userpost.value)
    //this.post.newPost(this.userpost.value)
    this.post.newPost()
alert("hi")
    //this.router.navigate(['userpostvw']);   
  }
  }

