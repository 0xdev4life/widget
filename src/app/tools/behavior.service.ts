import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BehaviorService {

  private childSource = new BehaviorSubject('');
  childMessage = this.childSource.asObservable();

  private parentSource = new BehaviorSubject('');
  parentMessage = this.parentSource.asObservable();

  constructor() { }

  sendMessage(message: string, role: string): void {
    if (role === 'parent') {
      this.parentSource.next(message);
    } else {
      this.childSource.next(message);
    }
  }
}
