import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { PolicyDetails } from "./policy-details";
import { Policy } from "./policy";

@Injectable({
  providedIn: "root"
})
export class PolicyAPIService {
  baseURL = "http://localhost:3000/";
  lifeURL = this.baseURL + "life";
  healthURL = this.baseURL + "health";
  headers = new HttpHeaders().set("content-type", "application/json");
  constructor(private http: HttpClient) {}

  getPopularPolicies(): Observable<PolicyDetails[]> {
    return this.http.get<PolicyDetails[]>(this.baseURL + "popular");
  }

  getPolicies(type: string): Observable<Policy[]> {
    if (type === "life") {
      return this.http.get<Policy[]>(this.lifeURL);
    }
    if (type === "health") {
      return this.http.get<Policy[]>(this.healthURL);
    }
  }

  removePolicy(policy: Policy, type: string): Observable<Policy> {
    const delURL = this.lifeURL + "/" + policy.id;

    //if we use Rest API req object itself.. we use request mtd
    // this.http.request();

    if (type === "life") {
      return this.http.delete<Policy>(delURL, {
        headers: this.headers
      });
    }
  }

  addPolicy(policy: Policy, type: string): Observable<Policy> {
    if (type === "life") {
      return this.http.post<Policy>(this.lifeURL, policy, {
        headers: this.headers
      });
    }
  }

  updatePolicy(policy: Policy, type: string): Observable<Policy> {
    const updateURL = this.lifeURL + "/" + policy.id;
    if (type === "life") {
      return this.http.put<Policy>(updateURL, policy, {
        headers: this.headers
      });
    }
  }
}
