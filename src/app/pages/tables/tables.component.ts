import { Component, OnInit } from "@angular/core";
import { Agreement } from "src/app/model/agreement.dto";

@Component({
  selector: "app-tables",
  templateUrl: "tables.component.html"
})
export class TablesComponent implements OnInit {

  name = 'Angular 6';
  agreement="";
  aa:boolean=false;
  
  constructor() {}

  agreements :  Agreement[] = [];

  ngOnInit() {
    this.loadTableData();
  }

  setIndex(ii){
    this.aa=ii;
    console.log
  }

  loadTableData() {
    var ag1: Agreement = new Agreement();
    ag1.agreementCode = "SOC GEN UK OTC";
    ag1.agreementName = "SOC GEN UK OTC";
    ag1.principalCode = "FM";
    ag1.agreementScope = "Executed";
    ag1.agreementType = "OTC";
    ag1.agreementMutuality = "Both";
    ag1.counterpartyCode = "SOCG";
    this.agreements.push(ag1);

    var ag2: Agreement = new Agreement();
    ag2.agreementCode = "NOMURA LN OTC";
    ag2.agreementName = "NOMURA LN OTC";
    ag2.principalCode = "FM";
    ag2.agreementScope = "Executed";
    ag2.agreementType = "OTC";
    ag2.agreementMutuality = "Both";
    ag2.counterpartyCode = "SOCG";
    this.agreements.push(ag2);

    var ag3: Agreement = new Agreement();
    ag3.agreementCode = "GOLDMAN US REPO";
    ag3.agreementName = "GOLDMAN US REPO";
    ag3.principalCode = "ALLY IM";
    ag3.agreementScope = "Executed";
    ag3.agreementType = "Repo";
    ag3.agreementMutuality = "Both";
    ag3.counterpartyCode = "SOCG";
    this.agreements.push(ag3);

    var ag4: Agreement = new Agreement();
    ag4.agreementCode = "GOLDMAN US MSFTA";
    ag4.agreementName = "GOLDMAN US MSFTA";
    ag4.principalCode = "FM";
    ag4.agreementScope = "Executed";
    ag4.agreementType = "MSFTA";
    ag4.agreementMutuality = "Both";
    ag4.counterpartyCode = "SOCG";
    this.agreements.push(ag4);

    var ag5: Agreement = new Agreement();
    ag5.agreementCode = "GOLDMAN US ETD";
    ag5.agreementName = "GOLDMAN US ETD";
    ag5.principalCode = "FM";
    ag5.agreementScope = "Executed";
    ag5.agreementType = "ETD";
    ag5.agreementMutuality = "Both";
    ag5.counterpartyCode = "SOCG";
    this.agreements.push(ag5);

    var ag6: Agreement = new Agreement();
    ag6.agreementCode = "BNPP FR CLRD OTC";
    ag6.agreementName = "BNPP FR CLRD OTC";
    ag6.principalCode = "GLB";
    ag6.agreementScope = "Executed";
    ag6.agreementType = "OTC";
    ag6.agreementMutuality = "Both";
    ag6.counterpartyCode = "SOCG";
    this.agreements.push(ag6);
  }
}
