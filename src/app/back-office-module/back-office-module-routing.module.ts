import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAgentComponent } from './back-office-components/add-agent/add-agent.component';
import { ForgetPasswordComponent } from '../commonCompos/forget-password/forget-password.component';
import { ProfileComponent } from './back-office-components/profile/profile.component';
import { VerifyCodeComponent } from '../commonCompos/verify-code/verify-code.component';

const routes: Routes = [
  { path: 'VerifyCode', component: VerifyCodeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'forgetPassword', component: ForgetPasswordComponent },
  { path: 'addAgent', component: AddAgentComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BackOfficeModuleRoutingModule {}
