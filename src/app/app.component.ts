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
    this.formulario = frmBuilder.group( {
      nombre: ['nombre por defecto', Validators.required],
      apellido: ['apellido por defecto', Validators.required],
      email: ['tumail@dominio', [Validators.required, Validators.pattern('[^ @]*@[^ @]*')]],
    } );
  }
  onSubmit(parametro) {
    console.log(parametro);
  }
}
