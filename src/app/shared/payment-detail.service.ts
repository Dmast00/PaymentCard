import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  constructor(private http:HttpClient) { }

  //inicialisamos el modelo para poder hacer uso de
  //el en el proyecto.
  formData:PaymentDetail = new PaymentDetail();
  list: PaymentDetail[];

  readonly baseUrl ='https://localhost:44349/api/PaymenDetails'
  
  postPaymentDetail(){
   return this.http.post(this.baseUrl,this.formData);
  }

  refreshList(){
    this.http.get(this.baseUrl)
    .toPromise()
    .then(res => this.list = res as PaymentDetail[]);
  }
}
