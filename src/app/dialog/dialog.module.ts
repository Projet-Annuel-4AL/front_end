import { NgModule } from '@angular/core';
import { DialogTemplateComponent } from './components/dialog-template/dialog-template.component';
import {SharedModule} from "../shared/shared.module";
import {MatDialog,MatDialogModule,MatDialogRef } from "@angular/material/dialog";



@NgModule({
  declarations: [
  ],
  imports: [
    SharedModule
  ]
})
export class DialogModule { }
