import { LightningElement, wire } from 'lwc';
import getSingleContact from '@salesforce/apex/ContactController.getSingleContact';
import {NavigationMixin} from 'lightning/navigation';

export default class navToRecord extends NavigationMixin(LightningElement) {
    @wire(getSingleContact) contact;

    navigateToContact(){
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                objectApiName: 'Contact',
                recordId: this.contact.data.Id,
                actionName: 'view'
            }
        });
    }

    navigateToEditContact(){
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                objectApiName: 'Contact',
                recordId: this.contact.data.Id,
                actionName: 'edit'
            }
        });
    }
}