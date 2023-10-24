import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  model:any={}
  @Output() cancelRegistration = new EventEmitter();
  constructor(private accountService:AccountService){

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
      }
    })
  }
  cancel(){
    console.log('canickker is called')
    this.cancelRegistration.emit(false);
  }

}
