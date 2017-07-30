import {Injectable} from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';
//import { MyTypedItem } from '../models/MyTypedItem';
import { Configuration } from '../../app.constants';





@Injectable()
export class GastosService {

    private actionUrl: string;
    private headers: Headers;

    constructor(private _http: Http, private _configuration: Configuration) {
        this.actionUrl = `${_configuration.ServerWithApiUrl}ValidarLoginUsuario`;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json; charset=utf-8');

    }


    public PostCredentials = (_nickname: string, _usuario: string, _clave: number): Observable<any> => {
        let body = 
        { 
            nickName: _nickname,
            Usuario: _usuario,
            clave: _clave
        }
        let toAdd = JSON.stringify(body);

        return this._http.post(this.actionUrl, toAdd, { headers: this.headers })
            .map((response: Response) => <any>response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }


}
