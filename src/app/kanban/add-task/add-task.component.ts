import { Component, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})
export class AddTaskComponent {
  private dialogRef = inject(MatDialogRef<AddTaskComponent>);

  taskTitle: string = '';
  taskStatus: 'todo' | 'doing' | 'done' | null = null;

  close(): void {
    this.dialogRef.close();
  }
}
