import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  color: string;

  availableColors = [
    { name: 'User : John Doe', color: '' },
    { name: 'Email : john.doe@email.com', color: '' },
    { name: 'Meals ordered : 150', color: '' },
    { name: 'Stat 2 : 0', color: '' },
    { name: 'Stat 3 : 0', color: '' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
