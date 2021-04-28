import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { GetService } from 'src/Services/GetService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'trainPrj';

  constructor(public service:GetService ,private http:HttpClient) { }

  ngOnInit(): void {
    this.service.getVilles();
  }
}
