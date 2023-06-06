import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CrudService {
  public url="http://localhost:3000/student";

  constructor(private http:HttpClient) { }

  getStudent(){
    return this.http.get(this.url)
  }

  post(data:any){
    return this.http.post(this.url,data)
  }

  delete(sid:any){
    return this.http.delete(this.url+ "/"+sid )
  }

  gestudentById(sid:any){
    return this.http.get(this.url+"/"+sid)
  }
}
