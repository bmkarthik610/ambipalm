// IMPORTANT: this is a plugin which requires jQuery for initialisation and data manipulation

import { Component, OnInit, OnChanges, AfterViewInit, SimpleChanges } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators, FormGroup} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { FormBuilder } from '@angular/forms';

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
  selector: 'app-vehicle-information',
  templateUrl: './vehicle-information.component.html',
  styleUrls: ['./vehicle-information.component.css']
})
export class VehicleInformationComponent implements OnInit, OnChanges, AfterViewInit {
  cities = [
    {value: 'paris-0', viewValue: 'Paris'},
    {value: 'miami-1', viewValue: 'Miami'},
    {value: 'bucharest-2', viewValue: 'Bucharest'},
    {value: 'new-york-3', viewValue: 'New York'},
    {value: 'london-4', viewValue: 'London'},
    {value: 'barcelona-5', viewValue: 'Barcelona'},
    {value: 'moscow-6', viewValue: 'Moscow'},
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
    companyInformation:FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  // isFieldValid(form: FormGroup, field: string) {
  //   return !form.get(field).valid && form.get(field).touched;
  // }

  // displayFieldCss(form: FormGroup, field: string) {
  //   return {
  //     'has-error': this.isFieldValid(form, field),
  //     'has-feedback': this.isFieldValid(form, field)
  //   };
  // }
    ngOnInit() {
      const elemMainPanel = <HTMLElement>document.querySelector('.main-panel');
      this.companyInformation = this.formBuilder.group({
        companyName: [null, [Validators.required]],
        date: [null, [Validators.required]],
        vehicleNumber: [null, [Validators.required]],
        ownerName:[null,[Validators.required]],
        email:[null,[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
        registrationNumber:[null,Validators.required],
        gender:['',null]
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
    ngAfterViewInit() {

        $( window ).resize( () => { $('.card-wizard').each(function(){
          setTimeout(() => {
            const $wizard = $(this);
            const index = $wizard.bootstrapWizard('currentIndex');
            let $total = $wizard.find('.nav li').length;
            let  $li_width = 100/$total;

            let total_steps = $wizard.find('.nav li').length;
            let move_distance = $wizard.width() / total_steps;
            let index_temp = index;
            let vertical_level = 0;

            let mobile_device = $(document).width() < 600 && $total > 3;
            if(mobile_device){
                move_distance = $wizard.width() / 2;
                index_temp = index % 2;
                $li_width = 50;
            }

            $wizard.find('.nav li').css('width',$li_width + '%');

            let step_width = move_distance;
            move_distance = move_distance * index_temp;

            let $current = index + 1;

            if($current == 1 || (mobile_device == true && (index % 2 == 0) )){
                move_distance -= 8;
            } else if($current == total_steps || (mobile_device == true && (index % 2 == 1))){
                move_distance += 8;
            }

            if(mobile_device){
                let x: any = index / 2;
                vertical_level = parseInt(x);
                vertical_level = vertical_level * 38;
            }

            $wizard.find('.moving-tab').css('width', step_width);
            $('.moving-tab').css({
                'transform':'translate3d(' + move_distance + 'px, ' + vertical_level +  'px, 0)',
                'transition': 'all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1)'
            });

            $('.moving-tab').css({
                'transition': 'transform 0s'
            });
          },500)

        });
    });

  }
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
