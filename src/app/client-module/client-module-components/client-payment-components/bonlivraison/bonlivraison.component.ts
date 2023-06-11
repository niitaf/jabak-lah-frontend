import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bonlivraison',
  templateUrl: './bonlivraison.component.html',
  styleUrls: ['./bonlivraison.component.css']
})
export class BonlivraisonComponent implements OnInit {

  constructor() { }

  @Input() produit:any
  @Input() prix:any
  @Input() qte:any
  ngOnInit(): void {
  }

}
