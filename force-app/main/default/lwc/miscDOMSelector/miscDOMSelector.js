import { LightningElement, track } from 'lwc';

export default class miscDOMSelector extends LightningElement {
    @track selectedItems = '';
    handleChange(){
        var elements = Array.from(this.template.querySelectorAll('lightning-input'))
                            .filter(element => element.checked)
                            .map(element => element.label);

            this.selectedItems = elements.join(", ");
    }
}