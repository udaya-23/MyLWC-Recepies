import { LightningElement, track } from 'lwc';

const QUERY_URL = 'https://www.googleapis.com/books/v1/volumes?langRestrict=en&q=';

export default class MiscRestAPICalls extends LightningElement {
    @track searchString = 'Harry Potter';
    @track books;
    @track error;

    searchValueChange(event){
        this.searchString = event.target.value;
    }

    handleClick(){
        fetch(QUERY_URL + this.searchString)
            .then(response => {
                if(!response.ok){
                    this.error = response;
                }
                return response.json();
            })
            .then(jsonResponse => {
                this.books = jsonResponse;
                this.error = undefined;
            })
            .catch(error =>{
                this.error = error;
                this.books = undefined;
            });
    }
}