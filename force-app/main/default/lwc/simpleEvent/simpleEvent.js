import { LightningElement, track } from 'lwc';

export default class SimpleEvent extends LightningElement {
    @track percentage = 50;

    hadleChange(event){
        this.percentage = event.target.value;
    }
}