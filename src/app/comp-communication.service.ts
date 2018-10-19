import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CompCommunicationService {
  message: BehaviorSubject<string> = new BehaviorSubject("");
  currentMessage = this.message.asObservable();
  constructor() {}
  change(msg: string) {
    this.message.next(msg);
  }
}
