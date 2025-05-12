import { Component, OnInit } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    RouterModule,
    NgIf
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit{
  ngOnInit(): void {
    console.log('Sidebar Component Initialized');
    
  }

  isScreenSmall = window.innerWidth < 768;

  constructor() {
    window.addEventListener('resize', () => {
      this.isScreenSmall = window.innerWidth < 768;
    });
  }

}
