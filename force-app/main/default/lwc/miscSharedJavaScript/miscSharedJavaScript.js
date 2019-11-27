import { LightningElement, track } from 'lwc';
import {getTermOptions, caliculateMonthlyPayment} from 'c/mortgage';

export default class miscSharedJavaScript extends LightningElement {
    
    @track principle = 200000;
    @track term = 30;
    @track rate = 4;
    @track monthlyMortgage = 0;

    termOptions = getTermOptions();

    handlePrincipleChange(event){
        this.principle = event.target.value;
    }

    handleTermChange(event){
        this.term = parseInt(event.target.value, 10);
    }

    hadleRateChange(event){
        this.rate = event.target.value;
    }

    handleClick(){
        this.monthlyMortgage = caliculateMonthlyPayment(this.principle, this.term, this.rate);
    }
}