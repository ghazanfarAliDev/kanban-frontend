import { Component, inject } from '@angular/core';
import { AddTaskComponent } from '../add-task/add-task.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-kanban-panel',
  templateUrl: './kanban-panel.component.html',
  styleUrl: './kanban-panel.component.scss'
})
export class KanbanPanelComponent {

  private dialog = inject(MatDialog);

  todoTasks = [
    { title: 'Design settings and search pages', subtasksCompleted: 2, totalSubtasks: 3 },
    { title: 'Build UI for onboarding flow', subtasksCompleted: 3, totalSubtasks: 3 },
    { title: 'Build UI for search', subtasksCompleted: 0, totalSubtasks: 1 }
  ];
  
  doingTasks = [
    { title: 'Add account management endpoints', subtasksCompleted: 2, totalSubtasks: 3 },
    { title: 'Design onboarding flow', subtasksCompleted: 1, totalSubtasks: 3 },
    { title: 'Add search endpoints', subtasksCompleted: 1, totalSubtasks: 2 }
  ];
  
  doneTasks = [
    { title: 'Conduct 5 wireframe tests', subtasksCompleted: 1, totalSubtasks: 1 },
    { title: 'Create wireframe prototype', subtasksCompleted: 1, totalSubtasks: 1 },
    { title: 'Review results of usability tests and iterate', subtasksCompleted: 3, totalSubtasks: 3 }
  ];


  openAddTaskDialog(): void {
    this.dialog.open(AddTaskComponent, {
      width: '400px',
    });
  }
  

}
