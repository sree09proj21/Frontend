import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
 
  server_address:string='/api' ;

  constructor(public http:HttpClient) { }
  newPost()
  {
  
   
return this.http.get(`${this.server_address}/addpost`);
   
      }
 getPost(id:any)
      {
        
        return this.http.get(`${this.server_address}/posts/`+id)
      }

      getPosts()
      {
        
        return this.http.get(`${this.server_address}/posts`)
      }
      getPostblog()
      {
        
        return this.http.get(`${this.server_address}/blogpost`)
      }
      getPostblogs(item:any)
      {
       return this.http.post(`${this.server_address}/blogspost`,{"new":item})
      }
      getposts(id:any)
      {
        
        return this.http.get(`${this.server_address}/post/`+id)
      }
      approvepost(item:any)
      {
        return this.http.post(`${this.server_address}/approvepost`,item)
        .subscribe (data => {console.log(data)})
      }

      editPost(item:any)
      {
        return this.http.post(`${this.server_address}/editpost`,item)
        .subscribe (data => {console.log(data)})
      }
createpost(item:any){
  return this.http.post(`${this.server_address}/createpost`,{"newpost":item})
  .subscribe (data => {console.log(data)})
 }

}
