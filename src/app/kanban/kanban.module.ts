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

const routes: Routes = [
  {
    path: '',
    component: KanbanPanelComponent
  }
];

@NgModule({
  declarations: [
    KanbanPanelComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatSlideToggleModule,
    MatToolbarModule,
    RouterModule.forChild(routes),
  ]
})
export class KanbanModule { }
