import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-crud-list',
  templateUrl: './crud-list.component.html',
  styleUrls: ['./crud-list.component.css']
})
export class CrudListComponent implements OnInit {
  student: any;

  constructor(private _crud:CrudService,private router:Router) { }

  ngOnInit(){
   console.log("hii ngonit");
    this.getStudentData()
  }


  getStudentData(){
    this._crud.getStudent().subscribe((res)=>this.student=res)
  }
  deletestudent(sid:any){
    this._crud.delete(sid).subscribe((res)=>this.getStudentData())
  }
  Editstudent(sid:any){
    // this._crud.gestudentById(sid).subscribe((res)=>console.log(res));
    this.router.navigate(['/crud-form',sid]);
    // this.router.navigate(['/product-crud', id])

    
  }
}
