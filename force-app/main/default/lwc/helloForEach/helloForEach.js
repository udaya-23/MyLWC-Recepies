import { LightningElement } from 'lwc';

export default class HelloForEach extends LightningElement {
    contacts = [
        {Id: 1,
        Name: 'Ram',
        Title: 'CEO'},
        {Id: 2,
        Name: 'Raheem',
        Title: 'CFO'},
        {Id: 3,
        Name: 'Rabert',
        Title: 'Manager'}
    ];
}