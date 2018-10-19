import {
  Injectable,
  ComponentFactoryResolver,
  ViewContainerRef
} from "@angular/core";
import { ViewContainerData } from "@angular/core/src/view";
import { ShowBranchDetailsComponent } from "./show-branch-details/show-branch-details.component";

@Injectable({
  providedIn: "root"
})
export class ComponentAdderService {
  //step 2 -> create view variable
  viewRef: ViewContainerRef;

  //step 1 - ComponentFactoryResolver
  constructor(private resolver: ComponentFactoryResolver) {}

  //Setter method for viewing
  setViewRef(viewRef) {
    this.viewRef = viewRef;
  }

  //add component mtd to which ever class we need

  addComponent(compToAdd: any) {
    let branches = ["Kanchi", "vellore", "trichy", "pondy"];

    const factory = this.resolver.resolveComponentFactory(compToAdd);
    const compRef = factory.create(this.viewRef.parentInjector);

    const userLocation = localStorage.getItem("location");
    if (userLocation === "chennai") {
      branches = ["chrompet", "keelkattakai", "madipakkam", "omr"];
    }

    (<ShowBranchDetailsComponent>compRef.instance).branchList = branches;
    //insert into host view
    this.viewRef.insert(compRef.hostView);

    setTimeout(() => {
      this.viewRef.detach();
    }, 15000);
  }
}
