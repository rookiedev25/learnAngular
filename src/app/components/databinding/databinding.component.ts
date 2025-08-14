import { Component, NgModule, signal } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  imports: [FormsModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.scss'
})
export class DatabindingComponent {
  courseName: string = 'Angular 19'
  inputType = 'checkbox'
  rollNumber: number = 123
  isLoggedIn: boolean = false
  currentDate: Date = new Date();
  myClassName: string = 'bg-primary'

  showAlertBox(msg: string) {
    alert(msg)
  }

  updateCourseName(course: string) {
    this.courseName = course
  }

  dropdownSelection = "JS"
  isChecked: boolean = false

  learningModule = signal('Welcome to ReactJS')
  updateLearningModule(moduleName: string) {
    this.learningModule.set(moduleName)
  }
}
