import {
  Component,
  OnInit,
  OnChanges,
  AfterViewInit,
  SimpleChanges,
} from "@angular/core";
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormGroup,
} from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";
import { FormBuilder } from "@angular/forms";
import { IDropdownSettings } from "ng-multiselect-dropdown";

declare const $: any;
interface FileReaderEventTarget extends EventTarget {
  result: string;
}

interface FileReaderEvent extends Event {
  target: EventTarget;
  getMessage(): string;
}
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: "app-vehicle-information",
  templateUrl: "./vehicle-information.component.html",
  styleUrls: ["./vehicle-information.component.css"],
})
export class VehicleInformationComponent implements OnInit, OnChanges {
  
  VehicleDetails = [{'vehicleNumber':"apc534",'src':'',type:"BLS"},
{'vehicleNumber':"apc535",'src':'',type:"ALS"},
{'vehicleNumber':"apc536",'src':'',type:"ALS"},
{'vehicleNumber':"apc537",'src':'',type:"BLS"}]
  cities = [
    { value: "paris-0", viewValue: "Paris" },
    { value: "miami-1", viewValue: "Miami" },
    { value: "bucharest-2", viewValue: "Bucharest" },
    { value: "new-york-3", viewValue: "New York" },
    { value: "london-4", viewValue: "London" },
    { value: "barcelona-5", viewValue: "Barcelona" },
    { value: "moscow-6", viewValue: "Moscow" },
  ];
  ageList = [
    { value: "01", viewValue: "01" },
    { value: "02", viewValue: "02" },
    { value: "10", viewValue: "10" },
    { value: "20", viewValue: "20" },
    { value: "30", viewValue: "30" },
    { value: "40", viewValue: "40" },
    { value: "50", viewValue: "50" },
  ];
  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email,
  ]);
  defaultFeaturesList = [];
  selectedItems = [];
  dropdownSettings: IDropdownSettings = {};

  matcher = new MyErrorStateMatcher();

  pitab: boolean = true;
  idproof: boolean;
  vehicleInformation: FormGroup;
  requiredField: boolean;
  optionalFeaturesList: { item_id: string; item_text: string; }[];
  addVehicleEnable: boolean;
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
    

    // Code for the Validator
    // const $validator = $('.card-wizard form').validate({
    //     rules: {
    //         firstname: {
    //             required: true,
    //             minlength: 3
    //         },
    //         lastname: {
    //             required: true,
    //             minlength: 3
    //         },
    //         email: {
    //             required: true,
    //             minlength: 3,
    //         }
    //     },

    //     highlight: function(element) {
    //       $(element).closest('.form-group').removeClass('has-success').addClass('has-danger');
    //     },
    //     success: function(element) {
    //       $(element).closest('.form-group').removeClass('has-danger').addClass('has-success');
    //     },
    //     errorPlacement : function(error, element) {
    //       $(element).append(error);
    //     }
    // });

    // Prepare the preview for profile picture
  //   $("#wizard-picture").change(function () {
  //     const input = $(this);

  //     if (input[0].files && input[0].files[0]) {
  //       const reader = new FileReader();

  //       reader.onload = function (e: any) {
  //         $("#wizardPicturePreview")
  //           .attr("src", e.target.result)
  //           .fadeIn("slow");
  //       };
  //       reader.readAsDataURL(input[0].files[0]);
  //     }
  //   });

  //   $('[data-toggle="wizard-radio"]').click(function () {
  //     const wizard = $(this).closest(".card-wizard");
  //     wizard.find('[data-toggle="wizard-radio"]').removeClass("active");
  //     $(this).addClass("active");
  //     $(wizard).find('[type="radio"]').removeAttr("checked");
  //     $(this).find('[type="radio"]').attr("checked", "true");
  //   });

  //   $('[data-toggle="wizard-checkbox"]').click(function () {
  //     if ($(this).hasClass("active")) {
  //       $(this).removeClass("active");
  //       $(this).find('[type="checkbox"]').removeAttr("checked");
  //     } else {
  //       $(this).addClass("active");
  //       $(this).find('[type="checkbox"]').attr("checked", "true");
  //     }
  //   });

  //   $(".set-full-height").css("height", "auto");
  }

  ngOnChanges(changes: SimpleChanges) {
    const input = $(this);

    if (input[0].files && input[0].files[0]) {
      const reader: any = new FileReader();

      reader.onload = function (e: any) {
        $("#wizardPicturePreview").attr("src", e.target.result).fadeIn("slow");
      };
      reader.readAsDataURL(input[0].files[0]);
    }
  }
  ngAfterViewInit ()
  {
    
  }
  selectInnerTab(data) {
    if (data == "pitab") {
      this.pitab = true;
      this.idproof = false;
    } else if (data == "idproof") {
      this.idproof = true;
      this.pitab = false;
    }
  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }


  addVehicle()
  {
    this.addVehicleEnable  = true;
  }
}
