import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FandomService {
  private messageSource = new BehaviorSubject<string>('Dragon Ball');
  currentMessage = this.messageSource.asObservable();

  changeMessage(message: string) {
    this.messageSource.next(message);
    console.log('Estoy cambiando');
    console.log(message);
  }

}
