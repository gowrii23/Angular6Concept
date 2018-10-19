import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { User } from "../user";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.css"],
  encapsulation: ViewEncapsulation.Emulated
})
export class RegistrationComponent implements OnInit {
  newUser: User;

  constructor() {}

  ngOnInit() {}
  submit(frmData) {
    this.newUser = frmData;
    console.log(this.newUser);
  }
}
