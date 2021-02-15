import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.scss']
})
export class PersonCardComponent implements OnInit {
  @Input() name: string;
  @Input() info: string;
  @Input() url: string;

  constructor() { }

  ngOnInit() {
  }

}
