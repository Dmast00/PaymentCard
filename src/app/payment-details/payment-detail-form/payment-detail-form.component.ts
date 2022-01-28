import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';

@Component({
  selector: 'app-payment-detail-form',
  templateUrl: './payment-detail-form.component.html',
  styles: [
  ]
})
export class PaymentDetailFormComponent implements OnInit {

  //Inyectamos el servicio al constructor para poder
  //hacer uso del modelo en el form.
  constructor(public service:PaymentDetailService) { }

  ngOnInit(): void {
  }

}
