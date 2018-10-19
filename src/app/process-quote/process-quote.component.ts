import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-process-quote",
  templateUrl: "./process-quote.component.html",
  styleUrls: ["./process-quote.component.css"]
})
export class ProcessQuoteComponent implements OnInit {
  @Input()
  requestedPolicy: string;
  @Output()
  quote: EventEmitter<string> = new EventEmitter();

  policyDetails: Map<string, string> = new Map();

  constructor() {
    this.policyDetails.set("JeevanAnand", "One time Premimum payment");
    this.policyDetails.set("JeevanAsha", "Coverage for Depedents");
    this.policyDetails.set("JeevanAkash", "Life coverage and bonus");
  }

  ngOnInit() {}

  sendQuote() {
    this.quote.emit(this.policyDetails.get(this.requestedPolicy));
  }
}
