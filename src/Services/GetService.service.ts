import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Affectation } from 'src/Models/Affectation';
import { Corres } from 'src/Models/Corres';
import { ville } from 'src/Models/Ville';

@Injectable({
    providedIn: 'root'
  })

export class GetService
{
    constructor(private http:HttpClient) { }
    url:string="https://localhost:44302/api";
    Villes: ville[] =[];
    Horaires:Affectation[]=[];
    Corresp:Corres[]=[];
    form:FormGroup =new FormGroup({
      DateDep:new FormControl('',Validators.required),
      VilleDep:new FormControl('',Validators.required),
      VilleArr:  new FormControl('',Validators.required),
    });

  getVilles(){
    return this.http.get(this.url+"/gares").subscribe(
      res=>{
        this.Villes=res as ville[];
      }
    )
  }
  getHoraires(date_:any,VilleDep:any,VilleArr:any){
    return this.http.get(this.url+"/Trains/Horaire/"+VilleDep+"/"+VilleArr+
    "/"+date_)
  }
}