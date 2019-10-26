import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-matriz',
  templateUrl: './matriz.component.html',
  styleUrls: ['./matriz.component.css']
})
export class MatrizComponent implements OnInit {

  @Input() matriz: number[][];
  @Input() header: string;

  constructor() { }

  ngOnInit() {
    
  }
}