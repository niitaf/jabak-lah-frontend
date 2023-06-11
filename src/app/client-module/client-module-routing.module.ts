import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientDashboardComponent } from './client-module-components/client-dashboard/client-dashboard.component';
import { PaymentAddComponent } from './client-module-components/client-payment-components/payment-add/payment-add.component';
import { ProduitsComponent } from './client-module-components/client-payment-components/produits/produits.component';
import { ContainerComponent } from './client-module-components/client-payment-components/container/container.component';

// import { DoPaiementComponent } from './client-module-components/do-paiement/do-paiement.component';

const routes: Routes = [
  { path: 'dashboard', component: ClientDashboardComponent },
  { path: 'addPayment', component: PaymentAddComponent },
  { path: 'container', component: ContainerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientModuleRoutingModule {}
