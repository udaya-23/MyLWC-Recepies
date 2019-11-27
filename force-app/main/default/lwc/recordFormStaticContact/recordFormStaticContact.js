import { LightningElement, api } from 'lwc';
import ACCOUNTID_FIELD from '@salesforce/schema/Contact.AccountId';
import NAME_FILED from '@salesforce/schema/Contact.Name';
import TITLE_FIELD from '@salesforce/schema/Contact.Title';
import PHONE_FIELD from '@salesforce/schema/Contact.Phone';
import EMMAIL_FILED from '@salesforce/schema/Contact.Email';

export default class RecordFormStaticContact extends LightningElement {
    @api recordId;
    @api objectApiName;

    fields = [ACCOUNTID_FIELD, NAME_FILED, TITLE_FIELD, PHONE_FIELD, EMMAIL_FILED];
}