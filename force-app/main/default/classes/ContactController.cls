public with sharing class ContactController {

    @AuraEnabled (cacheable = true)
    public static Contact getSingleContact(){
        return [SELECT Id, Name, Title, Email
                FROM Contact
                LIMIT 1];    
    }

    @AuraEnabled (cacheable = true)
    public static List<Contact> getContactList(){
        return [SELECT Id, Name, Title, Phone, Email
                FROM Contact
                LIMIT 5];
    }

    @AuraEnabled (cacheable = true)
    public static List<contact> getContactSearchResults(String searchString){
        String key = '%'+searchString+'%';
        return [SELECT Id, Name
                FROM Contact
                WHERE Name LIKE: key
                LIMIT 5];
    }
}
