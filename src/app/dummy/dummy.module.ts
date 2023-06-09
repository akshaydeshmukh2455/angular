import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DummycomponentComponent } from './dummycomponent/dummycomponent.component';
import { StudentListComponent } from './student-list/student-list.component';



@NgModule({
  declarations: [
    DummycomponentComponent,
    StudentListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DummyModule { }
