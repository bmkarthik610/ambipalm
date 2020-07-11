// IMPORTANT: this is a plugin which requires jQuery for initialisation and data manipulation

import { Component, OnInit, OnChanges, AfterViewInit, SimpleChanges } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators, FormGroup} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { FormBuilder } from '@angular/forms';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

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
    selector: 'app-wizard-cmp',
    templateUrl: 'wizard.component.html',
    styleUrls: ['wizard.component.css']
})

export class WizardComponent implements OnInit, OnChanges, AfterViewInit {
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
    {value: 1, viewValue: 1},
    {value: 2, viewValue: 2},
    {value: 3, viewValue: 3},
    {value: 4, viewValue: 4},
    {value: 5, viewValue: 5},
    {value: 6, viewValue: 6},
    {value: 7, viewValue: 7},
    {value: 8, viewValue: 8},
    {value: 9, viewValue: 9},
    {value: 10, viewValue: 10}
  , {value: 11, viewValue: 11}
  , {value: 12, viewValue: 12}
  , {value: 13, viewValue: 13}
  , {value: 14, viewValue: 14}
  , {value: 15, viewValue: 15}
  , {value: 16, viewValue: 16}
  , {value: 17, viewValue: 17}
  , {value: 18, viewValue: 18}
  , {value: 19, viewValue: 19}
  , {value: 20, viewValue: 20}
  , {value: 21, viewValue: 21}
  , {value: 22, viewValue: 22}
  , {value: 23, viewValue: 23}
  , {value: 24, viewValue: 24}
  , {value: 25, viewValue: 25}
  , {value: 26, viewValue: 26}
  , {value: 27, viewValue: 27}
  , {value: 28, viewValue: 28}
  , {value: 29, viewValue: 29}
  , {value: 30, viewValue: 30}
  , {value: 31, viewValue: 31}
  , {value: 32, viewValue: 32}
  , {value: 33, viewValue: 33}
  , {value: 34, viewValue: 34}
  , {value: 35, viewValue: 35}
  , {value: 36, viewValue: 36}
  , {value: 37, viewValue: 37}
  , {value: 38, viewValue: 38}
  , {value: 39, viewValue: 39}
  , {value: 40, viewValue: 40}
  , {value: 41, viewValue: 41}
  , {value: 42, viewValue: 42}
  , {value: 43, viewValue: 43}
  , {value: 44, viewValue: 44}
  , {value: 45, viewValue: 45}
  , {value: 46, viewValue: 46}
  , {value: 47, viewValue: 47}
  , {value: 48, viewValue: 48}
  , {value: 49, viewValue: 49}
  , {value: 50, viewValue: 50}
  , {value: 51, viewValue: 51}
  , {value: 52, viewValue: 52}
  , {value: 53, viewValue: 53}
  , {value: 54, viewValue: 54}
  , {value: 55, viewValue: 55}
  , {value: 56, viewValue: 56}
  , {value: 57, viewValue: 57}
  , {value: 58, viewValue: 58}
  , {value: 59, viewValue: 59}
  , {value: 60, viewValue: 60}
  , {value: 61, viewValue: 61}
  , {value: 62, viewValue: 62}
  , {value: 63, viewValue: 63}
  , {value: 64, viewValue: 64}
  , {value: 65, viewValue: 65}
  , {value: 66, viewValue: 66}
  , {value: 67, viewValue: 67}
  , {value: 68, viewValue: 68}
  , {value: 69, viewValue: 69}
  , {value: 70, viewValue: 70}
  , {value: 71, viewValue: 71}
  , {value: 72, viewValue: 72}
  , {value: 73, viewValue: 73}
  , {value: 74, viewValue: 74}
  , {value: 75, viewValue: 75}
  , {value: 76, viewValue: 76}
  , {value: 77, viewValue: 77}
  , {value: 78, viewValue: 78}
  , {value: 79, viewValue: 79}
  , {value: 80, viewValue: 80}
  , {value: 81, viewValue: 81}
  , {value: 82, viewValue: 82}
  , {value: 83, viewValue: 83}
  , {value: 84, viewValue: 84}
  , {value: 85, viewValue: 85}
  , {value: 86, viewValue: 86}
  , {value: 87, viewValue: 87}
  , {value: 88, viewValue: 88}
  , {value: 89, viewValue: 89}
  , {value: 90, viewValue: 90}
  , {value: 91, viewValue: 91}
  , {value: 92, viewValue: 92}
  , {value: 93, viewValue: 93}
  , {value: 94, viewValue: 94}
  , {value: 95, viewValue: 95}
  , {value: 96, viewValue: 96}
  , {value: 97, viewValue: 97}
  , {value: 98, viewValue: 98}
  , {value: 99, viewValue: 99}
  , {value: 100, viewValue: 100}
  
  ];
  public defaultFeaturesConfig: SwiperConfigInterface = {
    a11y: true,
    direction: 'horizontal',
    slidesPerView: 4,
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    navigation: {
      nextEl: '#default-next',
      prevEl: '#default-prev',
    },
    pagination: false,
    spaceBetween: 0,
    watchOverflow: true,
    autoHeight: true
  };

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
        $('.card-wizard').bootstrapWizard({
            'tabClass': 'nav nav-pills',
            'nextSelector': '.btn-next',
            'previousSelector': '.btn-previous',

            onNext: function(tab, navigation, index) {
                // var $valid = $('.card-wizard form').valid();
                // if(!$valid) {
                //     $validator.focusInvalid();
                //     return false;
                // }
            },

            onInit: function(tab: any, navigation: any, index: any){

              // check number of tabs and fill the entire row
              let $total = navigation.find('li').length;
              let $wizard = navigation.closest('.card-wizard');

              let $first_li = navigation.find('li:first-child a').html();
              let $moving_div = $('<div class="moving-tab">' + $first_li + '</div>');
              $('.card-wizard .wizard-navigation').append($moving_div);

              $total = $wizard.find('.nav li').length;
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
              $('.moving-tab').css('transition','transform 0s');
           },

            onTabClick : function(tab: any, navigation: any, index: any){

                const $valid = $('.card-wizard form').valid();

                if (!$valid) {
                    return false;
                } else {
                    return true;
                }
            },

            onTabShow: function(tab: any, navigation: any, index: any) {
                let $total = navigation.find('li').length;
                let $current = index + 1;
                elemMainPanel.scrollTop = 0;
                const $wizard = navigation.closest('.card-wizard');

                // If it's the last tab then hide the last button and show the finish instead
                if ($current >= $total) {
                    $($wizard).find('.btn-next').hide();
                    $($wizard).find('.btn-finish').show();
                } else {
                    $($wizard).find('.btn-next').show();
                    $($wizard).find('.btn-finish').hide();
                }

                const button_text = navigation.find('li:nth-child(' + $current + ') a').html();

                setTimeout(function(){
                    $('.moving-tab').text(button_text);
                }, 150);

                const checkbox = $('.footer-checkbox');

                if ( index !== 0 ) {
                    $(checkbox).css({
                        'opacity':'0',
                        'visibility':'hidden',
                        'position':'absolute'
                    });
                } else {
                    $(checkbox).css({
                        'opacity':'1',
                        'visibility':'visible'
                    });
                }
                $total = $wizard.find('.nav li').length;
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

                $current = index + 1;

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
