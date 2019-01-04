import {Component, Input, OnInit} from '@angular/core';
import { fandoms } from '../classes/fandoms';
import { myfandoms } from '../classes/myfandoms';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})

export class SearchPage implements OnInit {
  searchQuery: string = '';
  selectedFandom = myfandoms;
  myfandomslist = [];

  constructor() {
    this.initializeFandoms();
  }

  initializeFandoms() {
    this.myfandomslist = [
        'Dragon Ball',
        'Saint Seiya',
        'Yuri!!! on Ice',
        'Harry Potter',
        'Star Wars',
        'Star vs The forces of Evil',
        'Steven Universe'
    ];
  }

  ngOnInit() {
  }

    getItems(ev: any) {
        // Reset items back to all of the items
        this.initializeFandoms();

        // set val to the value of the searchbar
        const val = ev.target.value;

        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.myfandomslist = this.myfandomslist.filter((fandom1) => {
                return (fandom1.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    }

    @Input()
    set fandomname (fandom: any) {
      this.selectedFandom = fandom;
    }

    get fandomname(): any { return this.selectedFandom; }

}
