public with sharing class AccountController {
    @AuraEnabled (cacheable = true)
    public static List<Account> getAccountRecords(){
        return [SELECT Id, Name 
                FROM Account
                LIMIT 10];
    }

    @AuraEnabled (cacheable = true
    public static Account getSingleAccount(){
        return [SELECT Id, Type, Name, Phone
                FROM Account
                LIMIT 1];
    }
}
