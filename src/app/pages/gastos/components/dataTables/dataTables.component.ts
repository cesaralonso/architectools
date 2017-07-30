import { Component, OnInit } from '@angular/core';
import { DataTablesService } from './dataTables.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DefaultModal } from './default-modal/default-modal.component';

@Component({
  selector: 'data-tables',
  templateUrl: './dataTables.html',
  styleUrls: ['./dataTables.scss']
})
export class DataTables {

    data;
    filterQuery = "";
    rowsOnPage = 10;
    sortBy = "nombre";
    sortOrder = "asc";

    constructor(private service: DataTablesService, private modalService: NgbModal) {
      this.service.getData().then((data) => {
        this.data = data;
      });
    }

    toInt(num: string) {
        return +num;
    }

    sortByWordLength = (a: any) => {
        return a.tipo.length;
    }
  
    onDeleteConfirm(event): void {
      if (window.confirm('¿Estas seguro de querer eliminar este registro?')) {
        event.confirm.resolve();
      } else {
        event.confirm.reject();
      }
    }

    lgModalShow() {
      const activeModal = this.modalService.open(DefaultModal, {size: 'lg'});
      activeModal.componentInstance.modalHeader = 'Large Modal';
    }

}
