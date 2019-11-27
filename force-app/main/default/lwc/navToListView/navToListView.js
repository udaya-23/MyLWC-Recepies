import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';

export default class navToListView extends NavigationMixin (LightningElement) {
    handleClick(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Contact',
                actionName: 'list'
            },
            state: {
                filterName: 'Recent'
            }
        });
    }
}