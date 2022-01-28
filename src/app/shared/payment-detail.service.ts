import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  constructor() { }

  //inicialisamos el modelo para poder hacer uso de
  //el en el proyecto.
  formData:PaymentDetail = new PaymentDetail();
}
