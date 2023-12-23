import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-propstest',
  templateUrl: './propstest.component.html',
  styleUrls: ['./propstest.component.css']
})
export class PropstestComponent {
  @Input() message= '';
  @Output() newMessage = new EventEmitter<string>();
  
  newMessageEvent(value: string): void {
    this.newMessage.emit(value);
  }
  

}
