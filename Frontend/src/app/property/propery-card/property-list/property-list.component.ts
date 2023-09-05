import { Component } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent {

  Property:Array<any> = [{
    id: 1,
    name: "Dejan's house",
    type:"House",
    price : 1000
   },
   {
    id: 2,
    name: "Dejan's house",
    type:"House",
    price : 1000
   },
   {
    id: 3,
    name: "Dejan's house",
    type:"House",
    price : 1000
   },
   {
    id: 4,
    name: "Dejan's house",
    type:"House",
    price : 1000
   },
   {
    id: 5,
    name: "Dejan's house",
    type:"House",
    price : 1000
   },
   {
    id: 6,
    name: "Dejan's house",
    type:"House",
    price : 1000
   }]

  }
