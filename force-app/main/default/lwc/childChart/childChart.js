import { LightningElement, api } from 'lwc';

export default class ChildChart extends LightningElement {
    @api percentage;

    get myValue(){
        return this.percentage;
    }
    
}