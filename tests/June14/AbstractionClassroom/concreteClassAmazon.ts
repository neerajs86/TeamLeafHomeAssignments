import { canaraBank } from "./abstractClassCanaraBank";

class Amazon extends canaraBank {
       //Implement interface 'paymentsI' methods
       cashOnDelivery() : void {
                console.log("Cash On Delivery mode is available for payment in Amazon portal via Canara bank.");
            }
        upiPayments() : void {
                console.log("UPI mode is available for payment in Amazon portal via Canara bank.");
            }
        cardPayments() : void {
                console.log("Card mode is available for payment in Amazon portal via Canara bank.");
            }
        internetBanking() : void {
                console.log("Internet Banking mode is available for payment in Amazon portal via Canara bank.");
            }
    
        //Implements abstract class 'CanaraBank'
        recordPaymentDetails() : void {
        console.log("Capture payment details of Canara Bank");
    }
}

let amazonObj = new Amazon();
//Print methods of interface 'payments'
amazonObj.cashOnDelivery();
amazonObj.upiPayments();
amazonObj.cardPayments();
amazonObj.internetBanking();
//Print methods of abstract class 'canaraBank'
amazonObj.recordPaymentDetails();