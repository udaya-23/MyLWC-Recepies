import { LightningElement, track } from 'lwc';
import getContactSearchResults from '@salesforce/apex/ContactController.getContactSearchResults'
const DELAY = 350;
export default class CompositionContactSearch extends LightningElement {
    
    @track contacts;
    @track error;

    //@wire (getContactSearchResults, {searchString: '$searchString'}) contacts;

    handleKeyChange(event) {
        // Debouncing this method: Do not actually invoke the Apex call as long as this function is
        // being called within a delay of DELAY. This is to avoid a very large number of Apex method calls.
        window.clearTimeout(this.delayTimeout);
        const searchString = event.target.value;
        // eslint-disable-next-line @lwc/lwc/no-async-operation
        this.delayTimeout = setTimeout(() => {
            getContactSearchResults({ searchString })
                .then(result => {
                    this.contacts = result;
                    this.error = undefined;
                })
                .catch(error => {
                    this.error = error;
                    this.contacts = undefined;
                });
        }, DELAY);
    }
}