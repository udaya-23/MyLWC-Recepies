import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';

export default class navToFilesHome extends NavigationMixin(LightningElement) {
    handleClick(){
        this[NavigationMixin.Navigate]( {
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'ContentDocument',
                actionName: 'home'
            }
        });
    }
}