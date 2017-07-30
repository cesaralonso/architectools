import { Component, OnInit } from '@angular/core';

import { GastosService } from './gastos.service';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'gastos',
  templateUrl: './gastos.html',
  styleUrls: ['./gastos.scss']
})
export class Gastos implements OnInit {

  nickName: string = "@Ideasys";
  Usuario: string = "Super";
  clave: number = 2058;

  public myItems: any [];


  source: LocalDataSource = new LocalDataSource();

  constructor(protected service: GastosService) {

    
  }

  onDeleteConfirm(event): void {
    if (window.confirm('¿Estas seguro de querer eliminar este registro?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }


  ngOnInit() {
      this.getAllItems();
  }
  
  private getAllItems(): void {
      this.service
          .PostCredentials(this.nickName, this.Usuario, this.clave)
          .subscribe(
              (data:any[]) => this.myItems = data,
              error => console.log(error),
              () => console.log('Get all Items complete'));
  }


}
