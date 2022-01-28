import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  constructor(private http:HttpClient) { }

  //inicialisamos el modelo para poder hacer uso de
  //el en el proyecto.
  readonly baseUrl ='https://localhost:44349/api/PaymenDetails'
  formData:PaymentDetail = new PaymentDetail();
  Paylist: PaymentDetail[];
  
  

  
  postPaymentDetail(){
   return this.http.post(this.baseUrl,this.formData);
  }

  refreshList(){
    this.http.get(this.baseUrl)
    .toPromise()
    .then(res =>{ 
      this.Paylist = res as PaymentDetail[]
      console.log(res);
    }
    );
    
    
    
    
  }
}
