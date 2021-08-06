import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../post.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.css']
})
export class CreatepostComponent implements OnInit {
  
  item={
    PostTitle : '',
     CreatedTime : '',
     Description : '',
     Tag : '',
     Image : '',
     Author : '',
     AuthorID : '',
     Status : ''
   }

   users:any
  constructor(private router:Router,private postservice:PostService,private fb:FormBuilder,private user:UserService) { }

  ngOnInit(): void {
    var id = localStorage.getItem('user');
    this.user.getuser(id)
    .subscribe((data)=>{
      this.users=JSON.parse(JSON.stringify(data))
    }
    );
  }
  userpost = this.fb.group(
    {
      title:['',[Validators.required]],
      image:['',[Validators.required]],
    story:['', [Validators.required]],     
    tag:['',[Validators.required]]
      
    }
  )
  createpost()
  {
  console.log(this.item);

  var authorid = localStorage.getItem('user');
  authorid = authorid == null ? '' : authorid.toString();
  
  //var firstname = localStorage.getItem('firstname'); 
  var firstname = this.users.firstname
  firstname = firstname == null ? '' : firstname.toString();
  //var lastname = localStorage.getItem('lastname'); "
  var lastname =  this.users.lastname
  lastname = lastname == null ? '' : lastname.toString();

  this.item.CreatedTime=new Date().toISOString();
  this.item.Status='pending';
  this.item.AuthorID = authorid;
  this.item.Author=firstname+' ' + lastname;
    this.postservice.createpost(this.item);
    this.router.navigate(['userpostvw']);
  
  }
}
