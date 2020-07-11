import {
  Component,
  OnInit,
  OnChanges,
  AfterViewInit,
  SimpleChanges,
  Output,
  EventEmitter,
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

@Component({
  selector: 'app-add-ambulance',
  templateUrl: './add-ambulance.component.html',
  styleUrls: ['./add-ambulance.component.css']
})
export class AddAmbulanceComponent implements OnInit {
  @Output() valueChange = new EventEmitter();
  
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



  pitab: boolean = true;
  idproof: boolean;
  vehicleInformation: FormGroup;
  requiredField: boolean;
  optionalFeaturesList: { item_id: string; item_text: string; }[];
  addVehicleEnable: boolean;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: "item_text",
      selectAllText: "Select All",
      unSelectAllText: "UnSelect All",
      itemsShowLimit: 3,
      allowSearchFilter: true,
      
    };
    this.defaultFeaturesList = [
      { item_id: 'AED', item_text: "AED" },
      { item_id: 'Blood', item_text: "Blood" },
    
    ];
    this.optionalFeaturesList = [
      { item_id: 'AED', item_text: "AED" },
      { item_id: 'Blood', item_text: "Blood" },
    
    ];
    this.selectedItems = [
      { item_id: 'AED', item_text: "AED" },
      
    ];

    this.vehicleInformation = this.formBuilder.group({
      vehicleNumber: [null, [Validators.required]],
      ownerName: [null, [Validators.required]],

      gender: ["", null],
      city: ["", null],
      sofeatures: [ [
        
      ]],
      sdfeatures: [ [
        
      ]],
    });
  }
  setStatus() {
    (this.selectedItems.length > 0) ? this.requiredField = true : this.requiredField = false;
  }
  setClass() {
    this.setStatus();
    if (this.selectedItems.length > 0) { return 'validField' }
    else { return 'invalidField' }
  }
  addVehicle()
  {
    if(this.vehicleInformation.valid == true)
    {
      this.addVehicleEnable = false;
      this.valueChange.emit(this.addVehicleEnable)
    }
  }

}
