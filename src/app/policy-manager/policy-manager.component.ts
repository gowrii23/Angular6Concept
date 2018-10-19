import { Component, OnInit, ViewChild } from "@angular/core";
import { Policy } from "../policy";
import { PolicyAPIService } from "../policy-api.service";

@Component({
  selector: "app-policy-manager",
  templateUrl: "./policy-manager.component.html",
  styleUrls: ["./policy-manager.component.css"]
})
export class PolicyManagerComponent implements OnInit {
  p = 0;

  policyData = new Policy(0, 0, "", "", new Date(), 0, 0, "");
  status: string;
  policyList: Policy[];
  show = false;
  pos: number;

  @ViewChild("f")
  frm: any;
  btnText = "ADD";

  constructor(private service: PolicyAPIService) {}

  reset() {
    this.frm.reset();
  }

  ngOnInit() {
    this.service
      .getPolicies("life")
      .subscribe(resp => (this.policyList = resp));
    this.btnText = "ADD";
  }

  submit(frmData) {
    this.policyData = frmData;

    if (this.btnText === "ADD") {
      this.service.addPolicy(this.policyData, "life").subscribe(
        resp => {
          this.status = "One Policy Added";
          this.policyList.push(this.policyData);
        },
        error => {
          console.log(error);
        }
      );
    }
    if (this.btnText === "UPDATE") {
      this.service.updatePolicy(this.policyData, "life").subscribe(resp => {
        this.status = "One Policy updated";
        this.policyList[this.pos] = resp;
      });
    }
  }
  change() {
    this.show = true;
  }

  delete(policy) {
    const pos = this.policyList.indexOf(policy);
    this.service.removePolicy(policy, "life").subscribe(resp => {
      this.policyList.splice(pos, 1);
      this.status = "One Policy Deleted";
      //this.policyList.reduce(policy);
    });
  }

  edit(policy) {
    this.btnText = "UPDATE";
    this.show = true;
    this.policyData = policy;
    const pos = this.policyList.indexOf(policy);
  }
}
