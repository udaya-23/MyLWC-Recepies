import { LightningElement } from 'lwc';
import TRAILHEAD_LOGO from '@salesforce/resourceUrl/trailheadlogo';
import trailheadcharectors from '@salesforce/resourceUrl/trailheadcharectors'
// Example :- import TRAILHEAD_LOGO from '@salesforce/resourceUrl/trailhead_logo';'

export default class miscStaticResources extends LightningElement {
    trailheadlogo = TRAILHEAD_LOGO;
    einsteanlogo = trailheadcharectors +'/images/einstein.png';
}