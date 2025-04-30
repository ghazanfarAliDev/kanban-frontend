import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KanbanPanelComponent } from './kanban-panel/kanban-panel.component';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';


const routes: Routes = [
  {
    path: '',
    component: KanbanPanelComponent
  }
]

@NgModule({
  declarations: [
    KanbanPanelComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule.forChild(routes),
  ]
})
export class KanbanModule { }
