import { Router } from '@angular/router';
import { LocalStorageService } from 'angular-2-local-storage';
import { ToastrService } from 'ngx-toastr';
import { ChangePasswordService } from './change-password.service';
import { Http } from '@angular/http';
import { Configuration } from './../../app.constants';
import { Component } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { EqualPasswordsValidator } from '../../theme/validators';
import { ChangePasswordInterface } from './change-password.interface';


@Component({
  selector: 'change-password',
  templateUrl: './change-password.html',
  styleUrls: ['./change-password.scss']
})
export class ChangePassword {

  form: FormGroup;
  nickname: AbstractControl;
  usuarioauth: AbstractControl;
  claveauth: AbstractControl;
  idusuario: AbstractControl;
  contrasena: AbstractControl;
  anteriorcontrasena: AbstractControl;
  password: AbstractControl;
  repetircontrasena: AbstractControl;
  submitted: boolean = false;
  contrasenas: FormGroup;


  constructor(fb: FormBuilder,
    private http: Http, 
    private configuration: Configuration, 
    private service: ChangePasswordService,
    private toastrService: ToastrService,
    private router: Router,
    private localStorageService: LocalStorageService ) {


    console.log("LocalStorage",this.localStorageService);

    /** From LocalStorage **/
    const _claveauth = this.localStorageService.get('architectools.claveauth');
    const _usuarioauth = this.localStorageService.get('architectools.usuarioauth');
    const _nickname = this.localStorageService.get('architectools.nickname');
    const _idusuario = this.localStorageService.get('architectools.idusuario');

    
    this.form = fb.group({
      'nickname': _nickname,
      'usuarioauth': _usuarioauth,
      'claveauth': _claveauth,
      'idusuario': _idusuario,
      'anteriorcontrasena': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'contrasenas': fb.group({
        'contrasena': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
        'repetircontrasena': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
      }, { validator: EqualPasswordsValidator.validate('contrasena', 'repetircontrasena') })
    });

    this.anteriorcontrasena = this.form.controls['anteriorcontrasena'];
    this.contrasenas = <FormGroup> this.form.controls['contrasenas'];
    this.contrasena = this.contrasenas.controls['contrasena'];
    this.repetircontrasena = this.contrasenas.controls['repetircontrasena'];
  }

  onSubmit(values: Object): void {
    this.submitted = true;
    if (this.form.valid) {
      console.log(values);

      this.service
        .ChangePassword(values)
        .subscribe(
            (data: any) => this.showToast(data, values));
    }
  }

  private showToast(data: any, values: any) {
    if (data.idRespuesta === 0) {
      this.toastrService.success(data.mensajeRespuesta);
      this.router.navigate(['pages/login']);
    } else {
      this.toastrService.error(data.mensajeRespuesta);
    }
  }


}
