import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserAddModal } from './user-add-modal/user-add-modal.component';
import { UserEditModal } from './user-edit-modal/user-edit-modal.component';

@Component({
  selector: 'usuarios-table',
  templateUrl: './usuarios-table.html',
  styleUrls: ['./usuarios-table.scss']
})
export class UsuariosTable implements OnInit {

    data;
    filterQuery = "";
    rowsOnPage = 10;
    sortBy = "nombre";
    sortOrder = "asc";

    constructor(private service: UserService, private modalService: NgbModal) {
    }

    toInt(num: string) {
        return +num;
    }

    addUserModalShow() {
      const activeModal = this.modalService.open(UserAddModal, { size: 'lg' });
      activeModal.componentInstance.modalHeader = 'Agregar Usuario';
    }

    editUserModalShow(id: any) {
      const activeModal = this.modalService.open(UserEditModal, { size: 'lg' });
      activeModal.componentInstance.modalHeader = 'Editar Usuario';
      activeModal.componentInstance.id = id;
      // AQUÍ ES DONDE SE VA A CARGAR LOS DATOS DEL USUARIO Y AGREGARSE POR MEDIO DEL COMPONENT INSTANCE

    }
    
    onDeleteConfirm(event, item): void {
      if (window.confirm('¿Estas seguro de querer eliminar este registro?')) {
        console.log('item.id a borrar', item.id);
      } else {
        console.log('item.id cancelando', item.id);
      }
    }


    ngOnInit() {
        this.getAllUsers();
    }
    
    private getAllUsers(): void {

      this.service.getAllUsers().then((data) => {
        this.data = data;
      });


      /*
        this.service
            .getAllUsers()
            .subscribe(
                (data:any[]) => console.log(data),
                error => console.log(error),
                () => console.log('Get all Items complete'));*/
    }

    
}
