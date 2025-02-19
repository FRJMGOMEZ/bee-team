import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../../core/models/user.model';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  @Input() user:User;
  constructor() { }

  ngOnInit() {
  }

}
