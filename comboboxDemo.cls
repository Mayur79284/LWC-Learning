public class comboboxDemo {
@AuraEnabled
public static List<Account> getAccounts(){
    List<Account> accList = [SELECT ID, Name from Account];
    return accList;
}
}
