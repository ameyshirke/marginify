import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'customerMargincallsFilter'
})
export class SearchPipeMargincall implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val) => {
      let rVal = (val.processStep.toLocaleLowerCase().includes(args.toLocaleLowerCase())) || 
      (val.agreementCode.toLocaleLowerCase().includes(args.toLocaleLowerCase())) ||
      (val.callType.toLocaleLowerCase().includes(args.toLocaleLowerCase())) ||
      (val.marginCallScope.toLocaleLowerCase().includes(args.toLocaleLowerCase())) ||
      (val.valuationDate.toLocaleLowerCase().includes(args.toLocaleLowerCase())) ||
      (val.proposedTransferAmount.toLocaleLowerCase().includes(args.toLocaleLowerCase())) ||
      (val.valuationCurrency.toLocaleLowerCase().includes(args.toLocaleLowerCase()));
      return rVal;
    })
  }
}