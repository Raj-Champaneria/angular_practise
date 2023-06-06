import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { CrudService } from '../crud.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-crud-form',
  templateUrl: './crud-form.component.html',
  styleUrls: ['./crud-form.component.css']
})
export class CrudFormComponent implements OnInit {
  id: any;
  editstudent: any;

  constructor(private _crud: CrudService, private router: Router, private routes: ActivatedRoute) { }
  public studentform!: FormGroup
  changebutton = "Submit";
  togglebutton: boolean = true;
  ngOnInit(): void {
    this.studentform = new FormGroup({
      name: new FormControl(null, Validators.required),
      percentage: new FormControl(null, Validators.required),
      optional_subject: new FormControl(null, Validators.required)
    })
    this.id = this.routes.snapshot.paramMap.get('id');

    if (this.id != " ") {
      this._crud.gestudentById(this.id).subscribe(res => {
        this.editstudent = res;
        this.studentform.setValue({
          name: this.editstudent.name,
          percentage: this.editstudent.percentage,
          optional_subject: this.editstudent.optional_subject
        }
        )
      })

      this.changebutton="update";
      this.togglebutton=false
    }
  }



  public filterArr = [
    { id: 1, name: 'computer' },
    { id: 2, name: 'P.T' },
  ];

  poststudent() {
    this._crud.post(this.studentform.value).subscribe((res) => this._crud.getStudent());
    this.router.navigate(['crud-list'])
  }

}
