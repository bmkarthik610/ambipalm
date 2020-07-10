import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { TagInputModule } from 'ngx-chips';
import { SelectModule } from 'ng2-select';
import { MaterialModule } from '../app.module';
import { FormsRoutes } from './forms.routing';

import { ExtendedFormsComponent } from './extendedforms/extendedforms.component';
import { RegularFormsComponent } from './regularforms/regularforms.component';
import { ValidationFormsComponent } from './validationforms/validationforms.component';
import { WizardComponent } from './wizard/wizard.component';
import { FieldErrorDisplayComponent } from './validationforms/field-error-display/field-error-display.component';
import { CompanyInformationComponent } from '../company-information/company-information.component';
import { PersonalInformationComponent } from '../personal-information/personal-information.component';
import { VehicleInformationComponent } from '../vehicle-information/vehicle-information.component';
import { TermsConditionsComponent } from '../terms-conditions/terms-conditions.component';
import { SwiperModule, SwiperConfigInterface,
  SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { DriverInformationComponent } from '../driver-information/driver-information.component';
import { AmbulanceTypeComponent } from '../ambulance-type/ambulance-type.component';
import { TestComponent } from './test/test.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { AutocompleteComponent } from './google-places/google-places.component';

 

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  observer: true,
  direction: 'horizontal',
  threshold: 50,
  spaceBetween: 5,
  slidesPerView: 1,
  centeredSlides: true
};

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(FormsRoutes),
    FormsModule,
    ReactiveFormsModule,
    NouisliderModule,
    TagInputModule,
    MaterialModule,
    SwiperModule,
    NgMultiSelectDropDownModule.forRoot(),
  ],
  declarations: [
      ExtendedFormsComponent,
      RegularFormsComponent,
      ValidationFormsComponent,
      WizardComponent,
      FieldErrorDisplayComponent,
      CompanyInformationComponent,
      PersonalInformationComponent,
      VehicleInformationComponent,
      TermsConditionsComponent,
      DriverInformationComponent,
      AmbulanceTypeComponent,
      AutocompleteComponent,
      TestComponent
       
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ]
})

export class Forms {}
