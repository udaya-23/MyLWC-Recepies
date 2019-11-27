import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';

export default class navToNewRecord extends NavigationMixin(LightningElement) {

    navigateToNewContact(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Contact',
                actionName: 'new'
            }
        });
    }
}