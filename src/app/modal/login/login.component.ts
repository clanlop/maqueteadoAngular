import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
form:FormGroup;
  constructor(
    private formBuilder: FormBuilder
  ) { 
    this.form = this.formBuilder.group({
      password: [ '',[Validators.required,Validators.minLength(8),Validators.maxLength(10) ]],
      email:[ '',[Validators.required,Validators.email ]]
    })
}

  ngOnInit(): void {}
  
  get Password(){
    return this.form.get('password');
  }
  get PasswordValid(){
  return this.Password?.touched && !this.Password?.valid;
  }

  get Email(){
    return this.form.get('email');
  }
  get EmailValid(){
    return this.Email?.touched && !this.Email?.valid;
  }
  
  onEnviar(event:Event){
  event.preventDefault;
    if (this.form.valid)
  {
      alert("Todo salio bien ¡Inicie Sesion para poder Editar!")
  } 
    else
  {this.form.markAllAsTouched();
  }
  }
}


