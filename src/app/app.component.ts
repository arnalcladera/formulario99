import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formulario99';
  formulario: FormGroup;

  constructor(frmBuilder: FormBuilder){
    this.formulario = this.frmBuilder.group();
  }
}
