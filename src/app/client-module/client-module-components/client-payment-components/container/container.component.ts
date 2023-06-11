import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CMIservice } from 'src/app/client-module/client-services/CMI/CMIServices';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent  {


  isCompleted: boolean = false;
  nextSelect: boolean = false;
  next: boolean = false;

  verif: any;
  //creancier: any;
  //creance: any;
  selection: any;
  produit: any;
  prix: any;
  qte: any;
  tokennext: any = false;


  ImpayQrCode: any;
  constructor(private snackBar: MatSnackBar, private route: Router, private cmiService: CMIservice) {}

  receive($event: any) {
    this.isCompleted = true;
    this.verif = $event[1];
    console.log(this.verif);
    this.selection = $event[0];
    switch (this.selection){
      case "Selectionner1":
      this.qte=$event[2]
      break;
      case "Selectionner2":
      this.qte=$event[3]
      break;
      case "Selectionner3":
      this.qte=$event[4]
      break;
      case "Selectionner4":
      this.qte=$event[5]
      break;
      case "Selectionner5":
      this.qte=$event[6]
      break;
    }
    this.selectionFunction();

  }
  selectionFunction() {
    switch (this.selection) {
      case "Selectionner1":
        this.produit = 'sneakers hommes';
        this.prix = 200;
        break;
      case "Selectionner2":
        this.produit = 'sneakers femmes';
        this.prix = 150;
        break;
      case "Selectionner3":
        this.produit = 'sneakers ado';
        this.prix = 300;
        break;
      case "Selectionner4":
        this.produit = 'sneakers unisex';
        this.prix = 250;
        break;
      case "Selectionner5":
        this.produit = 'sneakers enfant';
        this.prix = 200;
        break;
      default:
        this.produit = 'none selected';
        this.prix = 0;
        break;

    }

  }
  checkSelectionAndProduit() {
    console.log(this.produit + '  et  ' + this.selection);
  }
  receiveImpayQrCode($event: any) {
    this.ImpayQrCode = $event;
    this.next = true;
  }
  receiveAppselect() {
    this.nextSelect = true;
  }
  cancel() {
    this.route.navigateByUrl('/client/dashboard');
  }

  receivetokenchekch($event: any) {
    this.tokennext = $event;
  }
  sendSMS() {
    return this.cmiService.sendSMS().subscribe(
      (data) => {
        console.log(data);
      },
      (err) => {
        console.log(err.error);
      }
    );
  }
confirmOrder(){
  this.snackBar.open('Your order with payement on delivery has been confirmed and will be delivered within the next 2 business days', 'Close', {
    verticalPosition: 'top',
  });
  this.route.navigateByUrl('/client/dashboard');
}

}
