import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-table-header',
  templateUrl: './table-header.component.html',
  styleUrls: ['./table-header.component.css']
})
export class TableHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() tableHeader : any;

}
