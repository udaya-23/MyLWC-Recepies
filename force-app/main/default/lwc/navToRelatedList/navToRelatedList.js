import { LightningElement, wire } from 'lwc';
import getSingleAccount from '@salesforce/apex/AccountController.getSingleAccount';
import {NavigationMixin} from 'lightning/navigation';

export default class navToRelatedList extends NavigationMixin(LightningElement) {
    @wire(getSingleAccount) account;

    handleClick(){
        this[NavigationMixin.Navigate]({
            type: 'standard__recordRelationshipPage',
            attributes: {
                objectApiName: 'Account',
                recordId: this.account.data.Id,
                relationshipApiName: 'Contacts',
                actionName: 'view'
            }
        });
    }
}