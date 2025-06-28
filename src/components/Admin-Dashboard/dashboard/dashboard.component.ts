import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthServiceService } from '../../../Service/auth-service.service';

@Component({
  selector: 'app-dashboard',
    standalone: true, 
  imports: [RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

 constructor(private authService: AuthServiceService) {}


 logout() {
    this.authService.logout();
  }
}
