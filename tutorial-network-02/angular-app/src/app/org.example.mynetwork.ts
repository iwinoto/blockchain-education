import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace org.example.mynetwork{
   export class Commodity extends Asset {
      tradingSymbol: string;
      description: string;
      mainExchange: string;
      quantity: number;
      owner: Trader;
   }
   export class Trader extends Participant {
      traderId: string;
      firstName: string;
      lastName: string;
   }
   export class Trade extends Transaction {
      Commodity: Commodity;
      newOwner: Trader;
   }
// }
