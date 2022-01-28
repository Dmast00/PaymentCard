import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';
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
  constructor(public service:PaymentDetailService,
    private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    this.service.postPaymentDetail().subscribe(
      res => {
        this.resetform(form);
        this.toastr.success('Submited Succesfully','Payment Detail Register')
      },
      err => {console.log(err);}
    );
  }

  resetform(form:NgForm){
    form.form.reset();
    this.service.formData = new PaymentDetail();
  }
}
