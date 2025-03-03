import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModuleModule } from './shared-module/shared-module.module'; 
import { PropertyListComponent } from './property/property-list/property-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SharedModuleModule,PropertyListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'My-First_app';
} 

