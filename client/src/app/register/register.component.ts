import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  model:any={}
  @Output() cancelRegistration = new EventEmitter();
  constructor(private accountService:AccountService,private toster:ToastrService){

  }
  register(){
    console.log(this.model);
    this.accountService.register(this.model).subscribe({
      next:response=>{
        console.log(response);
        this.cancel();
      },
      error:error=>{
        console.log(error);
        this.toster.error(error.error)
      }
    })
  }
  cancel(){
    console.log('canickker is called')
    this.cancelRegistration.emit(false);
  }

}
