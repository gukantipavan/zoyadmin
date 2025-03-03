import { Injectable } from '@angular/core';
import { AlertDialogComponent } from './alert-dialog.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable()
export class AlertDialogService {

  constructor(private modalService: NgbModal) { }

  public alert(
    title: string,
    message: string,
    btnOkText: string = 'OK',
    btnCancelText: string = 'Cancel',
    dialogSize: 'sm'|'lg' = 'sm'): Promise<boolean> {
    const modalRef = this.modalService.open(AlertDialogComponent, { size: dialogSize });
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.message = message;
    modalRef.componentInstance.btnOkText = btnOkText;
    modalRef.componentInstance.btnCancelText = btnCancelText;
    return modalRef.result;
  }

}
