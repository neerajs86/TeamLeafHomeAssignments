import { paymentsI } from "./interfacePayments";

export abstract class canaraBank implements paymentsI {
    //Abstract method
   abstract recordPaymentDetails() : void;
    //Interface 'paymentsI' methods
    abstract cashOnDelivery(): void;
    abstract upiPayments(): void;
    abstract cardPayments(): void;
    abstract internetBanking(): void;
}   