import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CMIservice } from 'src/app/client-module/client-services/CMI/CMIServices';


@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

  qte1!:number
  qte2!:number
  qte3!:number
  qte4!:number
  qte5!:number
  qte1Entered: boolean = false;
  qte2Entered: boolean = false;
  qte3Entered: boolean = false;
  qte4Entered: boolean = false;
  qte5Entered: boolean = false;


  isCompleted: boolean = false;
  data:Array<any>=[]
  @Output() public event =new EventEmitter<any>();
  toggleIsCompleted() {
    this.isCompleted = !this.isCompleted;
  }
  constructor(private cmiService:CMIservice) { }
  Facture:any;

  send(event:any){
    this.data.push(event.value)
    this.data.push("ok")
    this.data.push(this.qte1)
    this.data.push(this.qte2)
    this.data.push(this.qte3)
    this.data.push(this.qte4)
    this.data.push(this.qte5)
    this.event.emit(this.data);
    this.selectedOption = event.value;

  }
  ngOnInit(): void {
    this.cmiService.getAllFacture().subscribe(
      (res:any)=>{
        this.Facture=res
        console.log(res)
      },
      (err:any)=>{
        console.log(err.error)
      }
     )
    }
    selectedOption: string = '';


  }
