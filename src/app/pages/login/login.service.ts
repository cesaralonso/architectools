import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Configuration } from '../../app.constants';
import { LoginInterface } from './login.interface';
import { LoginResponseInterface } from './login-response.interface';

@Injectable()
export class LoginService {

    private actionUrl: string;
    private headers: Headers;

    constructor(private _http: Http, private _configuration: Configuration) {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json; charset=UTF-8');
    }


    Login = (values: LoginInterface): Observable<LoginResponseInterface> => {
        this.actionUrl = `${this._configuration.ServerWithApiUrl}ValidarLoginUsuario`;
        const toAdd = JSON.stringify(values);
        return this._http.post(this.actionUrl, toAdd, { headers: this.headers })
            .map((response: Response) => <LoginResponseInterface>response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }


}
