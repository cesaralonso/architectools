import {Injectable} from '@angular/core';

@Injectable()
export class ObrasService {

  obrasData = [
    {
      nombre: 'Casa Habitación',
      descripcion: 'Obra de casa habitación en Zapopan',
      tipo: 'Cimentación',
      contacto_nombre: 'César Magaña',
      contacto_direccion: 'Colon #123',
      contacto_correo: 'cesr@xyz.com',
      contacto_telefono: '331765433',
      fecha: '02/12/2017'
    },
    {
      nombre: 'Obra Hidráulica',
      descripcion: 'Obra de casa habitación en Zapopan',
      tipo: 'Cimentación',
      contacto_nombre: 'César Magaña',
      contacto_direccion: 'Colon #123',
      contacto_correo: 'cesr@xyz.com',
      contacto_telefono: '331765433',
      fecha: '02/12/2017'
    },
    {
      nombre: 'Puente',
      descripcion: 'Obra de casa habitación en Zapopan',
      tipo: 'Cimentación',
      contacto_nombre: 'César Magaña',
      contacto_direccion: 'Colon #123',
      contacto_correo: 'cesr@xyz.com',
      contacto_telefono: '331765433',
      fecha: '02/12/2017'
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
