import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AblogComponent } from './ablog/ablog.component';
import { AdminPostComponent } from './admin-post/admin-post.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { AdminComponent } from './admin/admin.component';
import { BlogComponent } from './blog/blog.component';
import { CreatepostComponent } from './createpost/createpost.component';
import { HomeComponent } from './home/home.component';
import { Home1Component } from './home1/home1.component';
import { LoginComponent } from './login/login.component';
import { PostcatgComponent } from './postcatg/postcatg.component';
import { PostoneComponent } from './postone/postone.component';
import { RegisterComponent } from './register/register.component';
import { PostComponent } from './sections/post/post.component';
import { UsersComponent } from './sections/users/users.component';
import { UblogComponent } from './ublog/ublog.component';
import { UpostvwComponent } from './upostvw/upostvw.component';
import { UserPostCrComponent } from './user-post-cr/user-post-cr.component';
import { UserPostVwComponent } from './user-post-vw/user-post-vw.component';
import { UserComponent } from './user/user.component';



const routes: Routes = [

  { path: 'home', component:HomeComponent},
  { path: 'users', component:UsersComponent },
  {path:'blog',component:BlogComponent},
  { path: 'post', component: PostComponent },
  {path:'user',component:UserComponent},
  {path:'admin',component:AdminComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'userpostcr',component:UserPostCrComponent},
  {path:'createpost',component:CreatepostComponent},
  {path:'userpostvw',component:UserPostVwComponent},
  {path:'postt/:Tag',component:PostcatgComponent},
  {path:'adminuser',component:AdminUserComponent},
  {path:'adminpost',component:AdminPostComponent},
  {path:"post/:_pid",component:PostoneComponent},
  {path:"ablog",component:AblogComponent},
  {path:"upost/:_id",component:UpostvwComponent},
  {path:"ublog",component:UblogComponent},  
  {path:"",component:Home1Component}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
