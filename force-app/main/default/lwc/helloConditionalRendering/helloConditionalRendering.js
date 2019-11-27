import { LightningElement, track } from 'lwc';

export default class HelloConditionalRendering extends LightningElement {
    @track checkboxValue = false;

    handleChange(event){
        this.checkboxValue = event.target.checked;
    }
}