import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-change-number100',
  templateUrl: './change-number100.component.html',
  styleUrls: ['./change-number100.component.css'],
})
export class ChangeNumber100Component {
  @Output() changeNumber: EventEmitter<any> = new EventEmitter();
  handleClick() {
    this.changeNumber.emit();
  }
}
