import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent implements OnInit {
users:any
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getUser()
    .subscribe((data)=>{
      this.users=JSON.parse(JSON.stringify(data))
    }
    );
  }

}
