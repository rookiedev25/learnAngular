import { NgClass, NgStyle } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-directives',
  imports: [NgClass, NgStyle],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.scss'
})
export class DirectivesComponent {
  //creating a new signal property
  controlDivWithClassName = signal<string>('');
  myBorder :boolean = false
  styleApply = signal<string>('')

  //function to use the buttons and reflect updates on screen
  setBackgroundClass(className: string) {
    this.controlDivWithClassName.set(className)
  }

  addBorder(myStyle: string) {
    this.myBorder = ! this.myBorder
    this.styleApply.set(myStyle);
  }


}
