import { LightningElement, wire } from 'lwc';
import checkApexTypes from '@salesforce/apex/ApexTypesController.checkApexTypes';

export default class ApexWireMethodWithComplexParms extends LightningElement {
    stringValue = 'Some String';
    numberValue = 50;
    listValue = [];

    objectParam = {
        someString: this.stringValue,
        someInteger: this.numberValue,
        someList: this.listValue
    }
    @wire(checkApexTypes, {wrapper: '$objectParam'}) apexMessage;

    handleStringChange(event){
        this.objectParam = {...this.objectParam, 
        someString: (this.stringValue = event.target.value)};
    }

    handleNumberChange(event){
        this.objectParam = {...this.objectParam, 
            someInteger: (this.numberValue = event.target.value)};
    }

    handleListChange(event){
        let listSize = event.target.value;

        for(let i=0; i<listSize; i++){
            this.listValue.push({
                someInnerString: this.stringValue,
                someInnerInteger: this.numberValue
            })
        }

        this.objectParam = {...this.objectParam, sumList: (this.listValue) }

    }

}