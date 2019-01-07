import {Component, Input, OnInit, Output} from '@angular/core';
import { SearchPage} from '../search/search.page';
import {fandoms} from '../classes/fandoms';
import {myfandoms} from '../classes/myfandoms';
import {FandomService} from '../services/fandom.service';

@Component({
  selector: 'app-fandom',
  template: `
      <ion-header>
          <ion-toolbar>
              <ion-title>fandom</ion-title>
          </ion-toolbar>
      </ion-header>

      <ion-content padding>
          <h2>{{fandomname | uppercase}} Details</h2>
          <div><span>creator: </span>{{fandomname}}</div>
      </ion-content>
  `,
  styleUrls: ['./fandom.page.scss'],
})
export class FandomPage implements OnInit {
  fandomname: string;

  constructor (public data: FandomService) {  }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.fandomname = message);

    if ((this.fandomname) == 'Dragon Ball') {
        //this.fandomname = myfandoms[0];
        console.log('entra0');
    } else if ((this.fandomname) == 'Saint Seiya') {
        //this.fandomname = myfandoms[1];
        console.log('entra1');
    } else if ((this.fandomname) == 'Yuri!!! on Ice') {
      //this.fandomname = myfandoms[2];
        console.log('entra2');
    } else {
        console.log('entra :v');
    }
  }
}


