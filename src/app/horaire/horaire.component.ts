import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Affectation } from 'src/Models/Affectation';
import { Corres } from 'src/Models/Corres';
import { GetService } from 'src/Services/GetService.service';

@Component({
  selector: 'app-horaire',
  templateUrl: './horaire.component.html',
  styleUrls: ['./horaire.component.css']
})
export class HoraireComponent implements OnInit {

  public empty:boolean=true;
  public corres:boolean=false;
  math = Math;
  
  constructor(public service:GetService ,private http:HttpClient,private router:Router) { }

  public isEmpty_()
  {
    if(this.service.Horaires.length>0) 
    {
      this.empty=false;
    }
    else{
      this.empty=true;
    }
  }

  ngOnInit(): void {
    if(localStorage.getItem('villeDep')==null && localStorage.getItem('villeArr')==null)this.service.getVilles();
    
    if(localStorage.getItem('villeDep')!=null && localStorage.getItem('villeArr')!=null)
    {
      this.service.getHoraires(localStorage.getItem('dateDep'),localStorage.getItem('villeDep'),localStorage.getItem('villeArr')).subscribe(
        res=>{
              this.service.Horaires=res as Affectation[];
              this.isEmpty_();
              if(!this.empty && this.service.Horaires[0].idTrain==null)
              {
                this.corres=true;
                console.log(this.corres)
                this.service.Corresp=res as Corres[];
              }
              else{
                this.corres=false;
                  }
        });
    }
  }

  public GetHoraires_()
  {
    localStorage.setItem('villeDep',this.service.form.get("VilleDep").value);
    localStorage.setItem('villeArr',this.service.form.get("VilleArr").value);
    localStorage.setItem('dateDep',document.getElementById("date_").innerHTML);
    if(localStorage.getItem('villeDep')!=null && localStorage.getItem('villeArr')!=null)
    {
      this.service.getHoraires(localStorage.getItem('dateDep'),localStorage.getItem('villeDep'),localStorage.getItem('villeArr')).toPromise().then(
        res=>{
          this.service.Horaires=res as Affectation[];
          this.isEmpty_();
          if(!this.empty && this.service.Horaires[0].idTrain==null)
          {
            this.corres=true;
            console.log(this.corres)
            this.service.Corresp=res as Corres[];
          }
          else{
            this.corres=false;
              }
        });
      console.log(localStorage.getItem('villeDep'));     
    }
  }
}
