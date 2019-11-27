import { LightningElement, wire, track} from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList';

export default class EventWithData extends LightningElement {
    @wire(getContactList) contacts;
    @track selectedContact;

    handleSelect(event){
        this.selectedContact = this.contacts.data.find(
            contact => contact.Id === event.detail
            );
    }
}