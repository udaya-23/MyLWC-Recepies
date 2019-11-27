import { LightningElement, track } from 'lwc';
import { loadScript } from 'lightning/platformResourceLoader';
import MOMENT_JS from '@salesforce/resourceUrl/moment';

export default class LibsMoment extends LightningElement {
    @track setDateTime = new Date().toISOString();
    @track dayOfYear;
    @track dayOfWeek;
    @track caliculated;
    @track error;

    renderedCallback(){
 
        if(this.momentjsInitialized){
           return; 
        }
        this.momentjsInitialized = true;

        /*eslint no-console: ["error", { allow: ["warn", "error"] }] */
        console.error("Log a warn level message. - inside callback");

        loadScript(this, MOMENT_JS)
            .then( () => {
                this.setMomentValues(this.setDateTime);
            })
            .catch(error => {
                this.error = error;
            });


    }

    handleChange(event){
        this.setMomentValues(event.target.value);
    }

    setMomentValues(dateTime){
        const mom = window.moment.utc(dateTime);
        this.dayOfYear = mom.dayOfYear();
        this.dayOfWeek = mom.weeks();
        this.caliculated = mom
                           .subtract(3, 'days')
                           .add(10, 'hours')
                           .subtract(33, 'minutes')
                           .calendar();
    }
}