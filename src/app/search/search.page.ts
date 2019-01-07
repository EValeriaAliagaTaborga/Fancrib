import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { fandoms } from '../classes/fandoms';
import { FandomService } from '../services/fandom.service';
import {myfandoms} from '../classes/myfandoms';


@Component({
  selector: 'app-search',
  template: `
      <ion-header>
          <ion-toolbar>
              <ion-title>Search</ion-title>
          </ion-toolbar>
      </ion-header>

      <ion-content padding>
          <ion-toolbar>
              <ion-searchbar
                      (ionInput)="getItems($event)">
              </ion-searchbar>
          </ion-toolbar>

          <ion-list>
              <ion-item *ngFor="let fandom1 of myfandomslist" >
                  <h2>{{fandom1}}</h2><button (click)="setMessage()"><a href="/fandom">Ver</a></button>
              </ion-item>
          </ion-list>
      </ion-content>
  `,
  styleUrls: ['./search.page.scss'],
})

export class SearchPage implements OnInit {
    fandomname: string;
    searchQuery: string = '';
    myfandomslist;

  constructor(public data: FandomService) {
    this.initializeFandoms();
  }

  initializeFandoms() {
      const newArray = [];
      myfandoms.forEach(function(obj) {
          newArray.push(obj.name);
      });
      this.myfandomslist = newArray;
      console.log(newArray);
  }

  ngOnInit() {
      this.data.currentMessage.subscribe(message => this.fandomname = message);
  }

 setMessage() {
      this.data.changeMessage('Saint Seiya');
      console.log('click');
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


}
