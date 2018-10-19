import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  ChangeDetectorRef
} from "@angular/core";
import { PolicyDetails } from "../policy-details";
import { PolicyAPIService } from "../policy-api.service";
import { TestimonyComponent } from "../testimony/testimony.component";
import { Comment } from "../comment";

@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.css"]
})
export class ContentComponent implements OnInit, AfterViewInit {
  popularPolicy: PolicyDetails;
  popularList: PolicyDetails[];
  info: string;
  comments: Comment[];
  bgColor = "lightgrey";
  srchString = "";

  @ViewChild(TestimonyComponent)
  testimony: TestimonyComponent;

  constructor(
    private service: PolicyAPIService,
    private detector: ChangeDetectorRef
  ) {
    this.popularPolicy = {
      policyName: "Jeevan Bhima",
      description: "Bonus plus 5000 on maturity"
    };
  }

  ngOnInit() {
    this.service
      .getPopularPolicies()
      .subscribe(resp => (this.popularList = resp));
  }

  showInfo(idx: number) {
    this.info = "Contact our Agent Ram 9965842482";
    console.log(++idx);
  }

  ngAfterViewInit(): void {
    this.comments = this.testimony.getLatestComments();
    this.detector.detectChanges();
    //throw new Error("Method not implemented.");
  }
}
