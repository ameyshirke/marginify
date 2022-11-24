import { Component, OnInit } from "@angular/core";
import { Agreement } from "src/app/model/agreement.dto";
import { NotificationService } from '../../layouts/admin-layout/notification.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Margincall } from "src/app/model/margincall.dto";

@Component({
  selector: "app-tables",
  templateUrl: "tables.component.html",
  styleUrls: ["tables.component.scss"]
})
export class TablesComponent implements OnInit {

  name = 'Angular 6';
  agreement="";
  aa:boolean=false;
  closeResult: string;

  constructor(private notifyService : NotificationService, private modalService: NgbModal) {}

  showToasterSuccess(){
    this.notifyService.showSuccess("Collateral Transferred From Deutsche Bank To JP Morgan", "Transfer Done Successfully !!")
  }

  change(margincall){
    this.showToasterSuccess();
    margincall.marginCallScope = "Executed";
    margincall.proposedTransferAmount = "0";
  }

  margincalls : Margincall[] = [];

  ngOnInit() {
    this.loadTableData();
  }

  setIndex(ii){
    this.aa=ii;
    console.log
  }

  loadTableData() {
    var mg1: Margincall = new Margincall();
    mg1.processStep = "Handle Partial Request"
    mg1.agreementCode = "BNPP FR CLRD OTC";
    mg1.callType = "Variation Margin";
    mg1.marginCallScope = "To Be Executed";
    mg1.valuationDate = "12/05/2017";
    mg1.proposedTransferAmount = "-10,040,000";
    mg1.valuationCurrency = "EUR";
    this.margincalls.push(mg1);

    var mg2: Margincall = new Margincall();
    mg2.processStep = "Expected Call"
    mg2.agreementCode = "BNPP FR CLRD OTC";
    mg2.callType = "Initial Margin";
    mg2.marginCallScope = "To Be Executed";
    mg2.valuationDate = "12/05/2017";
    mg2.proposedTransferAmount = "-3,000,000";
    mg2.valuationCurrency = "EUR";
    this.margincalls.push(mg2);

    var mg3: Margincall = new Margincall();
    mg3.processStep = "Agreed"
    mg3.agreementCode = "CR SUISSE LN OTC";
    mg3.callType = "Variation Margin";
    mg3.marginCallScope = "To Be Executed";
    mg3.valuationDate = "12/05/2017";
    mg3.proposedTransferAmount = "1,890,000";
    mg3.valuationCurrency = "USD";
    this.margincalls.push(mg3);

    var mg4: Margincall = new Margincall();
    mg4.processStep = "Disputed"
    mg4.agreementCode = "GOLDMAN US MSFTA";
    mg4.callType = "Variation Margin";
    mg4.marginCallScope = "To Be Executed";
    mg4.valuationDate = "12/05/2017";
    mg4.proposedTransferAmount = "-20,000";
    mg4.valuationCurrency = "USD";
    this.margincalls.push(mg4);

    var mg5: Margincall = new Margincall();
    mg5.processStep = "Authorized"
    mg5.agreementCode = "GGOLDMAN US MSFTA";
    mg5.callType = "Variation Margin";
    mg5.marginCallScope = "To Be Executed";
    mg5.valuationDate = "12/05/2017";
    mg5.proposedTransferAmount = "-380,000";
    mg5.valuationCurrency = "USD";
    this.margincalls.push(mg5);

    var mg6: Margincall = new Margincall();
    mg6.processStep = "Notified"
    mg6.agreementCode = "NOMURA LN OTC";
    mg6.callType = "Variation Margin";
    mg6.marginCallScope = "To Be Executed";
    mg6.valuationDate = "12/05/2017";
    mg6.proposedTransferAmount = "-25,028";
    mg6.valuationCurrency = "EUR";
    this.margincalls.push(mg6);
  }

  open(content) {
    this.modalService.open(content, {windowClass: 'modal-search'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
