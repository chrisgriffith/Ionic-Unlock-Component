import { Component, ViewChild, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'unlocker',
  templateUrl: 'unlocker.html'
})
export class Unlocker {
  setIntID;
  @Output() unlocked: EventEmitter<boolean> = new EventEmitter();
  @ViewChild('unlock') input: any;

  constructor() {
    
  }

  checkUnlock(evt: Event) {
    let theRange = Number(this.input.nativeElement.value);
    if (evt.type == 'touchend') {
      if (theRange === 100) {
        this.unlockAction();
      } else {
        this.setIntID = setInterval(() => {
          if (this.input.nativeElement.value > 0) {
            this.input.nativeElement.value = theRange--;
          } else {
            this.input.nativeElement.value = 0;
            this.unlocked.emit(false);
            clearInterval(this.setIntID);
          }
        }, 1);
      }
    } else {
      this.setIntID = setInterval(() => {
        if (this.input.nativeElement.value > 0) {
          this.input.nativeElement.value = theRange--;
        } else {
          this.input.nativeElement.value = 0;
          this.unlocked.emit(false);
          clearInterval(this.setIntID);
        }
      }, 1);
    }
  }

  unlockAction() {
    this.unlocked.emit(true);
  }
}
