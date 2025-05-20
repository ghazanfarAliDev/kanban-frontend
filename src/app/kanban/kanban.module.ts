import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KanbanPanelComponent } from './kanban-panel/kanban-panel.component';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 

import { AddTaskComponent } from './add-task/add-task.component';

const routes: Routes = [
  {
    path: '',
    component: KanbanPanelComponent
  }
];

@NgModule({
  declarations: [
    KanbanPanelComponent,
    AddTaskComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    MatButtonModule,
    MatSidenavModule,
    ReactiveFormsModule,
    MatIconModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatDialogModule,
    MatFormFieldModule,
    RouterModule.forChild(routes),
  ]
})
export class KanbanModule { }
