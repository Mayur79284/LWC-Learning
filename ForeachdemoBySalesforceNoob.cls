public class foreachDemoClass {
@AuraEnabled (cacheable=true)
public static List<Account> getAccountList(){
List<Account> accList = [SELECT ID, Name from Account];
return accList;
}

}
