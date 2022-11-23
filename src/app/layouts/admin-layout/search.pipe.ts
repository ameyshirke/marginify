import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'customerAgreementsFilter'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val) => {
      let rVal = (val.agreementCode.toLocaleLowerCase().includes(args.toLocaleLowerCase())) || 
      (val.agreementName.toLocaleLowerCase().includes(args.toLocaleLowerCase())) ||
      (val.principalCode.toLocaleLowerCase().includes(args.toLocaleLowerCase())) ||
      (val.agreementScope.toLocaleLowerCase().includes(args.toLocaleLowerCase())) ||
      (val.agreementType.toLocaleLowerCase().includes(args.toLocaleLowerCase())) ||
      (val.agreementMutuality.toLocaleLowerCase().includes(args.toLocaleLowerCase())) ||
      (val.counterpartyCode.toLocaleLowerCase().includes(args.toLocaleLowerCase()));
      return rVal;
    })
  }
}