import { LightningElement, track} from 'lwc';
import getAccounts from '@salesforce/apex/comboboxDemo.getAccounts';
export default class LwcCombobox extends LightningElement {

    @track value = '';
    @track accOption =[];
    get options() {
        /*return [{ label: 'New', value: 'new value' }, //these values are static just for example
        { label: 'Salesforce', value: 'SF value' },
        { label: 'JavaScript', value: 'JS value' },
        { label: 'Apex', value: 'apex value' },

        ];*/
       return this.accOption;
    }
    connectedCallback() {
        //below we are using imperative method to query apex database for getting account
        getAccounts()
        .then(result=>{
         let arr = [];
         for (var i=0; i<result.length; i++){
             arr.push({label: result[i].Name, value: result[i].Id})
         }
         this.accOption = arr;
        })
    }
    handleChange(event) {
this.value = event.detail.value; // we could use event.detail.value which was in tutorial also

    }

}
