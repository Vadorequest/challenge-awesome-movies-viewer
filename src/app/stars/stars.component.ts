import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit, OnChanges {
  @Input() score: number;
  stars: Array<String>;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.stars = [];
    const full = Math.floor(this.score);
    for (let i = 0; i < full; i++) {
      this.stars.push('star');
    }
    const rest = this.score - full;
    if (rest >= 0.25) {
      this.stars.push('star_half');
    } else {
      this.stars.push('star_border');
    }
    for (let i = 1; i < (5 - full); i++) {
      console.log('end')
      this.stars.push('star_border');
    }
    console.log(full);
    console.log(rest);
    console.log(this.stars);
  }

}
