import { LightningElement, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class miscNotifications extends LightningElement {
    @track title = 'Sample Title';
    @track message = 'Sample Message';
    @track options = [
        {label: 'info', value: 'info'},
        {label: 'warning', value: 'warning'},
        {label: 'success', value: 'success'},
        {label: 'error', value: 'error'}
    ];
    @track value = 'info';

    titleChange(event){
        this.title = event.target.value;
    }

    messageChange(event){
        this.message = event.target.value;
    }

    variantChange(event){
        this.value = event.target.value;
    }

    showNotification(){
        this.dispatchEvent(new ShowToastEvent({
            title: this.title,
            message: this.title,
            variant: this.value
        }));
    }
}