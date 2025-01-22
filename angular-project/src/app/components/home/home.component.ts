import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Import RouterModule

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule], // Add RouterModule here
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // Note: corrected styleUrls
})
export class HomeComponent {}
