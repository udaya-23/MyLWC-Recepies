import { LightningElement, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import {CurrentPageReference} from 'lightning/navigation';
import {registerListener, unregisterAllListeners} from 'c/pubsub';
const fields = [
    'Contact.Name',
    'Contact.Title',
    'Contact.Phone',
    'Contact.Email'
];

export default class pubSubContactDetails extends LightningElement {
    recordId = '';

    connectedCallback(){
        registerListener('contactselected', this.handleContactDetails, this);
    }

    disconnectedCallback(){
        unregisterAllListeners(this);
    }

    handleContactDetails(contactId){
        this.recordId = contactId;
    }

    @wire(CurrentPageReference) pageRef;
    @wire(getRecord, {recordId: '$recordId', fields}) contact;

    get name(){
        return this.contact.data.fields.Name.value;
    }

    get title(){
        return this.contact.data.fields.Title.value;
    }

    get phone(){
        return this.contact.data.fields.Phone.value;
    }

    get email(){
        return this.contact.data.fields.Email.value;
    }

}