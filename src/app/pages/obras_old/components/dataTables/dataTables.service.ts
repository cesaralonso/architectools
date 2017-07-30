import {Injectable} from '@angular/core';

@Injectable()
export class DataTablesService {


  obrasData = [
    {
      nombre: 'Casa Habitación',
      descripcion: 'Obra de casa habitación en Zapopan',
      tipo: 'Cimentación',
      contacto_nombre: 'César Magaña',
      contacto_direccion: 'MAriano Otero #2213',
      contacto_correo: 'qwer@ty.com',
      contacto_telefono: '331765433',
      fecha: '02/12/2015'
    },
    {
      nombre: 'Obra Hidráulica',
      descripcion: 'Obra de departamento en Zapopan',
      tipo: 'Cimentación',
      contacto_nombre: 'Mario Jose',
      contacto_direccion: 'Vasconcelos #233',
      contacto_correo: 'pablo@xyz.com',
      contacto_telefono: '21311515488',
      fecha: '02/11/2017'
    },
    {
      nombre: 'Puente',
      descripcion: 'Obra de casa habitación en Guadalajara',
      tipo: 'Terminados',
      contacto_nombre: 'Juana Asbaje',
      contacto_direccion: 'Matamoros #7765',
      contacto_correo: 'juana@xyz.com',
      contacto_telefono: '213425413512',
      fecha: '03/12/2017'
    }
  ];

  getData(): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.obrasData);
      }, 2000);
    });
  }
}
