import { Component, OnInit } from "@angular/core";
import { CompCommunicationService } from "../comp-communication.service";

@Component({
  selector: "app-logout",
  templateUrl: "./logout.component.html",
  styleUrls: ["./logout.component.css"]
})
export class LogoutComponent implements OnInit {
  constructor(private service: CompCommunicationService) {}

  ngOnInit() {}
  validate() {
    console.log("logged Out");
    this.service.change("loggedOut");
    return true;
  }
}
