import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-show-branch-details",
  templateUrl: "./show-branch-details.component.html",
  styleUrls: ["./show-branch-details.component.css"]
})
export class ShowBranchDetailsComponent implements OnInit {
  branchList: string[];
  constructor() {}

  ngOnInit() {}
}
