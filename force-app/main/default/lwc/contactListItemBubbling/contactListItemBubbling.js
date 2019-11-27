import { LightningElement, api } from 'lwc';

export default class ContactListItemBubbling extends LightningElement {
    @api contact;

    handleClick(event){
        event.preventDefault();
        this.dispatchEvent(new CustomEvent('select', {bubbles: true}));
    }
}