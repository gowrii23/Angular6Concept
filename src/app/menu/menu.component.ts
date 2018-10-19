import { Component, Input, OnInit } from "@angular/core";
import { PageLink } from "../page-link";
import { CompCommunicationService } from "../comp-communication.service";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"]
})
export class MenuComponent implements OnInit {
  @Input()
  linkText: PageLink[];
  showLogout = false;
  showLogin = true;
  msg: string;

  constructor(private service: CompCommunicationService) {}

  ngOnInit() {
    this.service.currentMessage.subscribe(resp => {
      this.msg = resp;
      if (this.msg === "logged") {
        this.showLogin = false;
        this.showLogout = true;
      }
      if (this.msg === "loggedOut") {
        this.showLogin = true;
        this.showLogout = false;
      }
    });
  }
}
