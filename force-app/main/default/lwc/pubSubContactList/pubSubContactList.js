import { LightningElement, wire } from 'lwc';
import getContactSearchResults from '@salesforce/apex/ContactController.getContactSearchResults';
import {CurrentPageReference} from 'lightning/navigation';
import {registerListener, unregisterAllListeners, fireEvent} from 'c/pubsub';

export default class pubSubContactList extends LightningElement {
    searchKey = '';
    @wire(CurrentPageReference) pageRef;
    @wire(getContactSearchResults, {searchString: '$searchKey'}) contacts;

    connectedCallback(){
        registerListener('searchkeychange', this.handleSearchKeyChange, this);
    }
    
    disconnectedCallback(){
        unregisterAllListeners(this);
    }

    handleSearchKeyChange(searchKey){
        this.searchKey = searchKey;
    }

    handleContactSelect(event){
        fireEvent(this.pageRef, 'contactselected', event.target.contact.Id);
    }
    
}