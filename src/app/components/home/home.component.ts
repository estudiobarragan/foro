import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {	
	public identity;	
	public page_title: string;
  constructor(
  	private _userService: UserService
  ) { 
  	this.page_title = 'Bienvenido al foro de programacion'
  	this.identity = this._userService.getIdentity();
  }

  ngOnInit() {
  }

}
