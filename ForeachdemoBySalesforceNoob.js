import { LightningElement, wire, track } from 'lwc';
import getAccountList from '@salesforce/apex/foreachDemoClass.getAccountList'

export default class ForeachdemoBySalesforceNoob extends LightningElement {

@track data =[];
@wire(getAccountList)
accounts;
}
