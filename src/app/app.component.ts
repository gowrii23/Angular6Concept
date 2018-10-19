import {
  Component,
  ViewChild,
  ViewContainerRef,
  ViewRef,
  OnInit
} from "@angular/core";
import { ComponentAdderService } from "./component-adder.service";
import { ShowBranchDetailsComponent } from "./show-branch-details/show-branch-details.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "insurance";

  currentDate = new Date();
  salary = 45000;

  //create a view
  @ViewChild("placeHolder", { read: ViewContainerRef })
  viewRef: ViewContainerRef;

  constructor(private service: ComponentAdderService) {}
  showBranch() {
    this.service.setViewRef(this.viewRef);
    this.service.addComponent(ShowBranchDetailsComponent);
  }
  ngOnInit(): void {
    this.service.setViewRef(this.viewRef);
    this.service.addComponent(ShowBranchDetailsComponent);
  }
}
