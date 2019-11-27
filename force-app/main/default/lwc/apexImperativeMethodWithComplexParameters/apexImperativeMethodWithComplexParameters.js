import { LightningElement, track } from 'lwc';
import checkApexTypes from '@salesforce/apex/ApexTypesController.checkApexTypes';

export default class ApexImperativeMethodWithComplexParameters extends LightningElement {
    @track message;
    @track error;

    someString = 'Some String';
    someInteger = 10;
    someList = 4;

    handleStringChange(event){
        this.someString = event.target.value;
    }

    handleIntegerChange(event){
        this.someInteger = event.target.value;
    }

    handleListChange(event){
        this.someList = event.target.value;
    }

    callApexMethod(){
        let parameterObject = {
            someString: this.someString,
            someInteger: this.someInteger,
            someList: []
        };

        for(let i=0; i < this.someList; i++ ){
            parameterObject.someList.push({
                someInnerString: this.someString,
                someInnerInteger: this.someInteger
            })
        }
        checkApexTypes({ wrapper: parameterObject })
            .then(result => {
                this.message = result;
                this.error = undefined;
            })
            .catch(error => {
                this.error = error;
                this.message = undefined;
            });
    }
}