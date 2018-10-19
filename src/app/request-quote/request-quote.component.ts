import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-request-quote",
  templateUrl: "./request-quote.component.html",
  styleUrls: ["./request-quote.component.css"]
})
export class RequestQuoteComponent implements OnInit {
  policyName = "JeevanAnand";
  result: string;
  constructor() {}

  ngOnInit() {}

  onChange(val) {
    this.result = val;
  }
}
