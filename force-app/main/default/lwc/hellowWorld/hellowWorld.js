import { LightningElement, track } from 'lwc';

export default class HellowWorld extends LightningElement {
    @track greetings = 'World';

    handleChange(event){
        this.greetings = event.target.value;
    }
}