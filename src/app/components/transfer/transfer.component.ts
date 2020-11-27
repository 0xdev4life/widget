import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Subscription} from 'rxjs';
import {BehaviorService} from '../../tools/behavior.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

  constructor() { }

  childText = '';
  parentText = '';


  ngOnInit(): void {
  }

  emitChildPost($event: string): void {
    this.childText = $event;
  }
  emitParentPost($event: string): void {
    this.parentText = $event;
  }
}
