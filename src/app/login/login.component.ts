import { Component, OnInit } from "@angular/core";
import { CompCommunicationService } from "../comp-communication.service";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  formConfig = [
    {
      type: "text",
      name: "userName",
      constraint: Validators.required,
      label: "User Names"
    },
    {
      type: "password",
      name: "password",
      constraint: Validators.required,
      label: "Password"
    }
  ];

  constructor(
    private service: CompCommunicationService,
    private builder: FormBuilder
  ) {}

  ngOnInit() {
    this.loginForm = this.builder.group({});
    this.formConfig.forEach(eachControl => {
      this.loginForm.addControl(
        eachControl.name,
        new FormControl("", [eachControl.constraint])
      );
    });
  }

  validate() {
    let result = false;
    const uname = this.loginForm.controls.userName.value;
    const pwd = this.loginForm.controls.password.value;

    console.log("inside validate");

    if (uname === "admin" && pwd === "admin") {
      console.log(uname + " Logged in");
      console.log(this.loginForm.value);
      this.service.change("logged");
      localStorage.setItem("location", "chennai");
      localStorage.setItem("status", "logged");
      result = true;
    }
    return result;
  }
}
