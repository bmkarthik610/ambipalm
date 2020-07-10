import {
  Component,
  ViewChild,
  EventEmitter,
  Output,
  OnInit,
  AfterViewInit,
  Input,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-google-autocomplete',
  templateUrl: './google-places.component.html',
})
export class AutocompleteComponent implements OnInit, AfterViewInit {
  @Input() addressType: string;
  @Input() placeHolder: string;
  @Input() addressText: string;

  @Output() setAddress: EventEmitter<any> = new EventEmitter();
  @ViewChild('address') address: ElementRef;
  autocompleteInput: string = '';

  pickupAutocompleteInput: string;
  destinationAutocompleteInput: string;
  queryWait: boolean;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.autocompleteInput = this.addressText;
    this.getPlaceAutocomplete();
  }

  private getPlaceAutocomplete() {
    const addressAutoComplete = new google.maps.places.Autocomplete(
      this.address.nativeElement,
      {
        componentRestrictions: { country: 'in' },
        types: [this.addressType], // 'establishment' / 'address' / 'geocode'
      }
    );

    google.maps.event.addListener(addressAutoComplete, 'place_changed', () => {
      const place = addressAutoComplete.getPlace();
      this.setAddress.emit(place);
    });
  }
}
