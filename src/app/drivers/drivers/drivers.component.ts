import { Component, OnInit, ViewChild } from "@angular/core";
import { DriverSingleComponent } from "../driver-single/driver-single.component";

interface IDriver {
  first_name: string;
  last_name: string;
  dl_state: string;
  dl_number: number;
}
@Component({
  selector: "app-drivers",
  templateUrl: "./drivers.component.html",
  styleUrls: ["./drivers.component.css"]
})
export class DriversComponent implements OnInit {
  @ViewChild(DriverSingleComponent, { static: false}) driverChild: DriverSingleComponent
  drivers: any;
  addDlNumber: string = null;
  addDlState: string;
  constructor() {}

  ngOnInit() {
    this.setupFakeDrivers();
  }

  setupFakeDrivers() {
    this.drivers = [
      {
        first_name: "Sam",
        last_name: "Wise",
        dl_state: "WY",
        dl_number: "8183920"
      },
      {
        first_name: "Terry",
        last_name: "Winchester",
        dl_state: "NY",
        dl_number: "912832"
      }
    ];
  }
  addDriver() {
    console.log("adddl number", this.addDlNumber, this.addDlState);
    const driver = {
      dl_number: this.addDlNumber,
      dl_state: this.addDlState,
      first_name: null,
      last_name: null
    } as any; //DTONewIDriver
    this.drivers.push(driver);
    const driverIndex = this.drivers.indexOf(driver);
  }

  saveAllDrivers() {
  const driver = this.driverChild.getFormdata()
  console.log('driver returned', driver)
  }
}