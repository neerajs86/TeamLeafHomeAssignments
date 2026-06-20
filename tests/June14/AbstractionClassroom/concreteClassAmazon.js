import { canaraBank } from "./abstractClassCanaraBank";
class Amazon extends canaraBank {
    //Implement interface 'paymentsI' methods
    cashOnDelivery() {
        console.log("Cash On Delivery mode is available for payment in Amazon portal via Canara bank.");
    }
    upiPayments() {
        console.log("UPI mode is available for payment in Amazon portal via Canara bank.");
    }
    cardPayments() {
        console.log("Card mode is available for payment in Amazon portal via Canara bank.");
    }
    internetBanking() {
        console.log("Internet Banking mode is available for payment in Amazon portal via Canara bank.");
    }
    //Implements abstract class 'CanaraBank'
    recordPaymentDetails() {
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
