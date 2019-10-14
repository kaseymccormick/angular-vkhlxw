import { Component, OnInit, Input } from "@angular/core";
import { FormBuilder, FormGroup, Validators,FormsModule, NgForm,} from "@angular/forms";

@Component({
  selector: "app-driver-single",
  templateUrl: "./driver-single.component.html",
  styleUrls: ["./driver-single.component.css"]
})
export class DriverSingleComponent implements OnInit {
  
  @Input() driver;
  @Input() index: number;
  driverForm: FormGroup;
  driverFormData

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.setDriverFormValues(this.driver);
  }
  setDriverFormValues(driver) {
    this.driverForm = this.fb.group({
      dl_state: [
        { value: driver.dl_state ? driver.dl_state : null, disabled: true }
      ],
      dl_number: [
        { value: driver.dl_number ? driver.dl_number : null, disabled: true }
      ],
      first_name: [
        {
          value: driver.first_name ? driver.first_name : null,
          disabled: false
        },
        Validators.required
      ],
      last_name: [
        { value: driver.last_name ? driver.last_name : null, disabled: false }
      ]
    });
  }
  driverSave(){
    this.driverFormData = this.driverForm.value;
  }
  getFormdata(){
    return this.driverForm.value
  }
}
