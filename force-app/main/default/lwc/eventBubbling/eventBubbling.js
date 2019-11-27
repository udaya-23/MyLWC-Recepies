import { LightningElement, track, wire } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList';

export default class EventBubbling extends LightningElement {
    @track selectedContact;
    @wire (getContactList) contacts;

    handleSelect(event){
        this.selectedContact = event.target.contact;
    }
}