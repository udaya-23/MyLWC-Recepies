public with sharing class ApexTypesController {
    @AuraEnabled(cacheable = true)
    public static String checkApexTypes(CustomWrapper wrapper){
        String response = 
            'You entered "' + 
            wrapper.someString +'" as String, and "'+
            Wrapper.someInteger +'" as Integer, and "'+
            Wrapper.someList.size() +'" items.' ;
        return response;
    }
}
