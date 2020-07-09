import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../app.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { FlexLayoutModule } from '@angular/flex-layout';

import { PagesRoutes } from './pages.routing';

import { RegisterComponent } from './register/register.component';
import { PricingComponent } from './pricing/pricing.component';
import { LockComponent } from './lock/lock.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { PersonalInformationComponent } from '../personal-information/personal-information.component';
import { CompanyInformationComponent } from '../company-information/company-information.component';
import { TermsConditionsComponent } from '../terms-conditions/terms-conditions.component';
import { VehicleInformationComponent } from '../vehicle-information/vehicle-information.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PagesRoutes),
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    PricingComponent,
    LockComponent,
    SignupComponent,
    PersonalInformationComponent,
    
    TermsConditionsComponent
  ],

})

export class PagesModule {}
