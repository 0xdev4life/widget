import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {BehaviorService} from '../../../tools/behavior.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(
    private behavior: BehaviorService
  ) { }

  behaviorText = '';

  @Input() externalString: string;
  @Input() role: string;
  @Output() onAdd: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild('cardInput', {static : false}) parentRef: ElementRef;

  ngOnInit(): void {

    if (this.role === 'parent') {
      this.behavior.childMessage.subscribe(message => {
        this.behaviorText = message ? `Behavior: ${message}` : '';
      });
    } else {
      this.behavior.parentMessage.subscribe(message => {
        this.behaviorText = message ? `Behavior: ${message}` : '';
      });
    }
  }

  sendMessage(): void {
    if (this.parentRef.nativeElement.value.trim()) {
      this.onAdd.emit(this.parentRef.nativeElement.value);
      this.behavior.sendMessage(this.parentRef.nativeElement.value, this.role);
    }
  }

}
