import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { UsersComponent } from './sections/users/users.component';
import { PostComponent } from './sections/post/post.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './sections/home/home.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import { SidebarAdminComponent } from './sidebar-admin/sidebar-admin.component';
import { UserPostCrComponent } from './user-post-cr/user-post-cr.component';
import { UserPostVwComponent } from './user-post-vw/user-post-vw.component';
import { BlogComponent } from './blog/blog.component';
import { CreatepostComponent } from './createpost/createpost.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { AdminPostComponent } from './admin-post/admin-post.component';
import { PostoneComponent } from './postone/postone.component';
import { Home1Component } from './home1/home1.component';
import { AblogComponent } from './ablog/ablog.component';
import { UblogComponent } from './ublog/ublog.component';

import { PostcatgComponent } from './postcatg/postcatg.component';
import { UpostvwComponent } from './upostvw/upostvw.component';




@NgModule({
  declarations: [
    AppComponent,
    
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    SidebarComponent,
    FooterComponent,
    UsersComponent,
    PostComponent,
    NavbarComponent,
    HomeComponent,
    UserComponent,
    AdminComponent,
    NavbarAdminComponent,
    SidebarAdminComponent,
    UserPostCrComponent,
    UserPostVwComponent,
    BlogComponent,
    CreatepostComponent,
    AdminUserComponent,
    AdminPostComponent,
    PostoneComponent,
    Home1Component,
    AblogComponent,
    UblogComponent,
    PostcatgComponent,
    UpostvwComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
