import { Component, Input, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-pickup-call-card',
  templateUrl: './pickup-call-card.component.html',
  styleUrls: ['./pickup-call-card.component.scss'],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class PickupCallCardComponent implements OnInit {
//@Input() Data entering
//@Output() Data output
  @Input() hasHeader: boolean
  @Input() hasFooter: boolean;

  @Input() status: string;
  @Input() updateAt: string;
  @Input() createdAt: string;
  @Input() notes: string;
  @Input() value: string;

  constructor() { }

  ngOnInit() {}

}
