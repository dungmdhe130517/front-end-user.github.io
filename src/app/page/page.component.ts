import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  booltest = true;
  constructor() { }

  ngOnInit(): void {
  }
  test(){
    console.log('aaaa');
    this.booltest = !this.booltest;
  }

}
