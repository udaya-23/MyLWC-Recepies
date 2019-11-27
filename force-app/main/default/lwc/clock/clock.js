import { LightningElement, track, api } from 'lwc';

export default class Clock extends LightningElement {
    @track time = new Date();
    
    @api
    showCurrentTime(){
        this.time = new Date();
    }
}