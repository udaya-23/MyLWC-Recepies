import { LightningElement, wire, track } from 'lwc';
import getContactSearchResults from '@salesforce/apex/ContactController.getContactSearchResults';

const DELAY = 300;

export default class ApexWireMethodWithParameters extends LightningElement {
    @track searchString = '';

    @wire(getContactSearchResults, { searchString: '$searchString' })
    contacts;

    handleKeyChange(event) {
        window.clearTimeout(this.delayTimeout);
        const searchString = event.target.value;
        //eslint-disable-next-line @lwc/lwc/no-async-operation
        this.delayTimeout = setTimeout(() => {
            this.searchString = searchString;
        }, DELAY);
    }
}