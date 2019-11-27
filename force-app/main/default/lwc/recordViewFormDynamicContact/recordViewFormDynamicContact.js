import { LightningElement, api } from 'lwc';

export default class RecordViewFormDynamicContact extends LightningElement {
    @api objectApiName;
    @api recordId;

    fields = ['AccountId', 'Name', 'Title', 'Phone', 'Email'];
}