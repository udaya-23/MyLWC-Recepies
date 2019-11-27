import { LightningElement, track } from 'lwc';
import getContactSearchResults from '@salesforce/apex/ContactController.getContactSearchResults';

export default class ApexImperativeMethodWithParameters extends LightningElement {
    @track searchString = '';
    @track contacts;
    @track error;
    
    handleKeyChange(event){
        this.searchString = event.target.value;
    }

    handleSearch(){
        getContactSearchResults({ searchString: this.searchString })
            .then(result => {
                this.contacts = result;
                this.error = undefined;
            })
            .catch(error => {
                this.error = error;
                this.contacts = undefined;
            });
    }
}