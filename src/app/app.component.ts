import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from './user/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userForm;
constructor(private fb:FormBuilder){
this.userForm= this.fb.group({
  name:[null, Validators.required],
  password:[null, [Validators.required, Validators.min(6)]]
});
}

  onSubmit(){
    console.log(this.userForm);
  }
}
