import { Component, OnInit } from "@angular/core";
import { Comment } from "../comment";

@Component({
  selector: "app-testimony",
  templateUrl: "./testimony.component.html",
  styleUrls: ["./testimony.component.css"]
})
export class TestimonyComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  getLatestComments(): Comment[] {
    const latest: Comment[] = [
      {
        name: "Ramesh",
        comment: "The claims sept was poor in resolving issues"
      },
      {
        name: "Raju",
        comment: "The claims sept was Good in resolving issues"
      }
    ];
    return latest;
  }
}
