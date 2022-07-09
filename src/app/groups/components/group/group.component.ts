import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {
  img = 'https://images2.alphacoders.com/516/thumb-1920-516664.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
