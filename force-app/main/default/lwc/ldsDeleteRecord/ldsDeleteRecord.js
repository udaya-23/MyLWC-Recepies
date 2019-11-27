import { LightningElement, wire } from 'lwc';
import getAccountRecords from '@salesforce/apex/AccountController.getAccountRecords';
import { deleteRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { refreshApex } from '@salesforce/apex';

export default class LdsDeleteRecord extends LightningElement {

    @wire (getAccountRecords) accounts;

    handleDelete(event){
        const recordId = event.target.dataset.recordid;
        deleteRecord(recordId)
            .then( () => {
                this.dispatchEvent(new ShowToastEvent({
                    title: 'success',
                    message: 'Record deleted successfully',
                    variant: 'success'
                }));
                refreshApex(this.accounts);
            })
            .catch(() => {
                this.dispatchEvent(new ShowToastEvent({
                    title: 'Error',
                    message: 'Error received while deleting the Account: ' + event.target.dataset.recordid ,
                    variant: 'error'
                }));
            });
    }

}