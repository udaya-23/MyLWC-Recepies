import { LightningElement, wire } from 'lwc';
import Id from '@salesforce/user/Id';
import getUserDetails from '@salesforce/apex/UserController.getUserDetails';

export default class miscGetUserId extends LightningElement {
    userId = Id;
    @wire(getUserDetails, {userId: '$userId'}) userDetails;
}