import { Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { PricingComponent } from './pricing/pricing.component';
import { LockComponent } from './lock/lock.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { PersonalInformationComponent } from '../personal-information/personal-information.component';
import { CompanyInformationComponent } from '../company-information/company-information.component';
import { VehicleInformationComponent } from '../vehicle-information/vehicle-information.component';
import { TermsConditionsComponent } from '../terms-conditions/terms-conditions.component';







export const PagesRoutes: Routes = [

    {
        path: '',
        children: [ {
            path: 'login',
            component: LoginComponent
        }, {
            path: 'lock',
            component: LockComponent
        }, {
            path: 'register',
            component: RegisterComponent
        }, {
            path: 'pricing',
            component: PricingComponent
        },
        {
            path: 'signup',
            component: SignupComponent
        },
        {
            path: 'personalinformation',
            component: PersonalInformationComponent
        },
        {
            path: 'companyinformation',
            component: CompanyInformationComponent
        },
        {
            path: 'vehicleinformation',
            component: VehicleInformationComponent
        },
        {
            path: 'terms&conditions',
            component: TermsConditionsComponent
        }]
    }
];
