export class Policy {
  constructor(
    public id: number,
    public policyNumber: number,
    public policyHolerName: string,
    public status: string,
    public maturityDate: Date,
    public policyAmount: number,
    public premium: number,
    public paymentMode: string
  ) {
    this.id = id;
    this.policyNumber = policyNumber;
    this.policyHolerName = policyHolerName;
    this.status = status;
    this.maturityDate = maturityDate;
    this.policyAmount = policyAmount;
    this.premium = premium;
    this.paymentMode = paymentMode;
  }
}
