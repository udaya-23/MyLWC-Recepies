import { LightningElement } from 'lwc';

export default class ApiFunction extends LightningElement {
    handleClick(){
        this.template.querySelector('c-clock').showCurrentTime();
    }
}