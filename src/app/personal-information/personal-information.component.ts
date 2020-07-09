
import { Component, OnInit, OnChanges, AfterViewInit, SimpleChanges, ViewChild, EventEmitter, Input, Output } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators, FormGroup} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { FormBuilder } from '@angular/forms';
// import { } from '@types/googlemaps';

declare const $: any;
interface FileReaderEventTarget extends EventTarget {
    result: string;
}

interface FileReaderEvent extends Event {
    target: EventTarget;
    getMessage(): string;
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit, OnChanges {

  @ViewChild('addresstext') addresstext: any;
  @Input() adressType: string;
  @Output() setAddress: EventEmitter<any> = new EventEmitter();
  bloodGroups =[
  {value: 'o+', viewValue: 'o+'},
  {value: ' A+', viewValue: ' A+'},
  {value: ' A-,', viewValue: ' A-'},
  {value: 'B-', viewValue: 'B-'},
  {value: 'O-+', viewValue: 'O-+'},
  {value: 'AB+,', viewValue: 'AB+'},
  {value: 'AB-,', viewValue: 'AB-'}

];

  ageList = [
    {value: '01', viewValue: '01'},
    {value: '02', viewValue: '02'},
    {value: '10', viewValue: '10'},
    {value: '20', viewValue: '20'},
    {value: '30', viewValue: '30'},
    {value: '40', viewValue: '40'},
    {value: '50', viewValue: '50'},
  
  ];
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

   type : FormGroup;
    pitab: boolean = true;
    idproof: boolean;

  constructor(private formBuilder: FormBuilder) {}

  isFieldValid(form: FormGroup, field: string) {
    return !form.get(field).valid && form.get(field).touched;
  }

  displayFieldCss(form: FormGroup, field: string) {
    return {
      'has-error': this.isFieldValid(form, field),
      'has-feedback': this.isFieldValid(form, field)
    };
  }
    ngOnInit() {
      const elemMainPanel = <HTMLElement>document.querySelector('.main-panel');


  
  
      this.type = this.formBuilder.group({
        firstName: [null, Validators.required],
        lastName: [null, Validators.required],
        bloodgroup: [null, Validators.required],
        email:[null,[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      gender:["Male",[]],
        phoneNumber: [null, [Validators.required]],
        perminentAddress:[null,[Validators.required]],
        presentAddress:[null,[Validators.required]],
        idProofNumber:[null,Validators.required],
       });
        // Code for the Validator
        const $validator = $('.card-wizard form').validate({
            rules: {
                firstname: {
                    required: true,
                    minlength: 3
                },
                lastname: {
                    required: true,
                    minlength: 3
                },
                email: {
                    required: true,
                    minlength: 3,
                }
            },

            highlight: function(element) {
              $(element).closest('.form-group').removeClass('has-success').addClass('has-danger');
            },
            success: function(element) {
              $(element).closest('.form-group').removeClass('has-danger').addClass('has-success');
            },
            errorPlacement : function(error, element) {
              $(element).append(error);
            }
        });

        // Wizard Initialization
      
      


        // Prepare the preview for profile picture
        $('#wizard-picture').change(function(){
            const input = $(this);

            if (input[0].files && input[0].files[0]) {
                const reader = new FileReader();

                reader.onload = function (e: any) {
                    $('#wizardPicturePreview').attr('src', e.target.result).fadeIn('slow');
                };
                reader.readAsDataURL(input[0].files[0]);
            }
        });

        $('[data-toggle="wizard-radio"]').click(function(){
            const wizard = $(this).closest('.card-wizard');
            wizard.find('[data-toggle="wizard-radio"]').removeClass('active');
            $(this).addClass('active');
            $(wizard).find('[type="radio"]').removeAttr('checked');
            $(this).find('[type="radio"]').attr('checked', 'true');
        });

        $('[data-toggle="wizard-checkbox"]').click(function(){
            if ( $(this).hasClass('active')) {
                $(this).removeClass('active');
                $(this).find('[type="checkbox"]').removeAttr('checked');
            } else {
                $(this).addClass('active');
                $(this).find('[type="checkbox"]').attr('checked', 'true');
            }
        });

        $('.set-full-height').css('height', 'auto');

    }

    ngOnChanges(changes: SimpleChanges) {
        const input = $(this);

        if (input[0].files && input[0].files[0]) {
            const reader: any = new FileReader();

            reader.onload = function (e: any) {
                $('#wizardPicturePreview').attr('src', e.target.result).fadeIn('slow');
            };
            reader.readAsDataURL(input[0].files[0]);
        }
    }
//     ngAfterViewInit() {
//       this.getPlaceAutocomplete();
//   }

//   private getPlaceAutocomplete() {
//       const autocomplete = new google.maps.places.Autocomplete(this.addresstext.nativeElement,
//           {
//               componentRestrictions: { country: 'US' },
//               types: [this.adressType]  // 'establishment' / 'address' / 'geocode'
//           });
//       google.maps.event.addListener(autocomplete, 'place_changed', () => {
//           const place = autocomplete.getPlace();
//           this.invokeEvent(place);
//       });
//   }
//   invokeEvent(place: Object) {
//     this.setAddress.emit(place);
// }
  selectInnerTab(data)
  {
      if(data == 'pitab')
      {
          this.pitab =true;
          this.idproof =false;
      }
      else if (data == 'idproof')
      {
this.idproof =true;
this.pitab =false;
      }
  }
}
