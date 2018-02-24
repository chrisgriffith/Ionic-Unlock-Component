import { Component, ViewChild, Input, Output, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'unlocker',
  templateUrl: 'unlocker.html'
})
export class Unlocker {
  setIntID;
  @Output() unlocked: EventEmitter<boolean> = new EventEmitter();
  @ViewChild('unlock') input:any; 

  constructor(public element: ElementRef) {
    console.log('Hello UnlockerComponent Component');
  }

  ngAfterViewInit() {
    // console.log('ionViewDidLoad')
    // console.log(this.element.nativeElement)
  }

  checkUnlock() {
    // console.log('checkUnlock')
    console.log(this.element.nativeElement);
    let theRange = Number(this.input.nativeElement.value);
    console.log(theRange);

    if (theRange === 100) {
      console.log('unlock');
      this.unlockAction();
    } else {
      this.setIntID = setInterval(() => {
        // console.log(this.input.nativeElement.value)
        if (this.input.nativeElement.value > 0) {
          this.input.nativeElement.value = theRange--;
        } else {
          this.input.nativeElement.value = 0;
          clearInterval(this.setIntID);
        }
      }, 1);
    }
  }

  unlockAction(){
    console.log('unlockAction');
    //Emit Event
    this.unlocked.emit(true);
  }
}
