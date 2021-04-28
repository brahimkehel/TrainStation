import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Affectation } from 'src/Models/Affectation';
import { GetService } from 'src/Services/GetService.service';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {

  constructor(public service:GetService ,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('villeDep')==null && localStorage.getItem('villeArr')==null)
    this.service.getVilles();
  }
  
  public GetHoraires_()
  {
    localStorage.setItem('villeDep',this.service.form.get("VilleDep").value);
    localStorage.setItem('villeArr',this.service.form.get("VilleArr").value);
    localStorage.setItem('dateDep',document.getElementById("date_").innerHTML);
    this.router.navigate(['/Horaires']);
  }

}
