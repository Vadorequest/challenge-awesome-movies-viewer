import { Component, OnInit } from '@angular/core';
import { MdToolbar } from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: String = 'Awesome Movies Viewer (alpha)';

  constructor() { }

  ngOnInit() {
    console.log('HeaderComponent init');
  }

}
