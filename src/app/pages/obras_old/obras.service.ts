import {Injectable} from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';
//import { MyTypedItem } from '../models/MyTypedItem';
import { Configuration } from '../../app.constants';





@Injectable()
export class ObrasService {

    private actionUrl: string;
    private headers: Headers;

    constructor(private _http: Http, private _configuration: Configuration) {
        this.actionUrl = `${_configuration.ServerWithApiUrl}ValidarLoginUsuario`;
        this.headers = new Headers();
        //this.headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8');
        this.headers.append('Content-Type', 'application/json; charset=utf-8');
        //this.headers.append('Accept', 'application/json');

    }

    public PostCredentials = (_nickname: string, _usuario: string, _clave: number): Observable<any> => {
        
        let body = 
        { 
            nickName: _nickname,
            Usuario: _usuario,
            clave: _clave
        }

        //let toAdd = `nickName=${_nickname}&Usuario=${_usuario}&clave=${_clave}`;
        let toAdd = JSON.stringify(body);

        return this._http.post(this.actionUrl, toAdd, { headers: this.headers })
            .map((response: Response) => <any>response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

    /*
    public GetAll = (): Observable<MyTypedItem[]> => {
        return this._http.get(this.actionUrl)
            .map((response: Response) => <MyTypedItem[]>response.json())
            .catch(this.handleError);
    }

    public GetSingle = (id: number): Observable<MyTypedItem> => {
        return this._http.get(this.actionUrl + id)
            .map((response: Response) => <MyTypedItem>response.json())
            .catch(this.handleError);
    }

    public Add = (itemName: string): Observable<MyTypedItem> => {
        let toAdd = JSON.stringify({ ItemName: itemName });

        return this._http.post(this.actionUrl, toAdd, { headers: this.headers })
            .map((response: Response) => <MyTypedItem>response.json())
            .catch(this.handleError);
    }

    public Update = (id: number, itemToUpdate: MyTypedItem): Observable<MyTypedItem> => {
        return this._http.put(this.actionUrl + id, JSON.stringify(itemToUpdate), { headers: this.headers })
            .map((response: Response) => <MyTypedItem>response.json())
            .catch(this.handleError);
    }

    public Delete = (id: number): Observable<Response> => {
        return this._http.delete(this.actionUrl + id)
            .catch(this.handleError);
    }
    */
}
