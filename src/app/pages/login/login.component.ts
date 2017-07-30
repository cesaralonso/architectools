import { LoginResponseInterface } from './login-response.interface';
import { LoginInterface } from './login.interface';
import { LoginService } from './login.service';
import { Component } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { Router } from '@angular/router';
import { LocalStorageService } from 'angular-2-local-storage';


@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class Login {

  items: any;

  form: FormGroup;
  usuario: AbstractControl;
  clave: AbstractControl;
  nickname: AbstractControl;
  submitted: boolean = false;

  constructor(fb: FormBuilder,
              protected service: LoginService, 
              private toastrService: ToastrService,
              private router: Router,
              private localStorageService: LocalStorageService) {
    this.form = fb.group({
      'usuario': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      'clave': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      'nickname': '@Ideasys'
    });

    this.usuario = this.form.controls['usuario'];
    this.clave = this.form.controls['clave'];
  }

  onSubmit(values: LoginInterface): void {
    this.submitted = true;
    if (this.form.valid) {
      this.service
        .Login(values)
        .subscribe(
            (data: LoginResponseInterface) => this.showModal(data, values));
    }
  }

  private showModal(data: LoginResponseInterface, values: LoginInterface) {
    if (data.idRespuesta === 0) {
      this.toastrService.success(data.mensajeRespuesta);

      this.localStorageService.clearAll();
      this.localStorageService.remove(
        'architectools.valorRespuesta', 
        'architectools.clave', 
        'architectools.usuario', 
        'architectools.nickname', 
        'architectools.idusuario');
      this.localStorageService.set('valorRespuesta', data.valorRespuesta);
      this.localStorageService.set('clave', values.clave);
      this.localStorageService.set('usuario', values.usuario);
      this.localStorageService.set('nickname', values.nickname);
      this.localStorageService.set('idusuario', data.valorRespuesta.split('|')[1]);
      
      this.router.navigate(['pages/dashboard']);
    }

    if (data.idRespuesta === -1) {
      this.toastrService.error(data.mensajeRespuesta);
      this.localStorageService.remove('valorRespuesta', 'clave', 'usuario', 'nickname');
    }
  }

}
