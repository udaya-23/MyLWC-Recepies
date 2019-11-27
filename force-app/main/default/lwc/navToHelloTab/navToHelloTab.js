import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';

export default class navToHelloTab extends NavigationMixin(LightningElement) {
    handleClick(){
        this[NavigationMixin.Navigate]({
            type: 'standard__navItemPage',
            attributes: {
                apiName: 'Hello'
            }
        });
    }
}