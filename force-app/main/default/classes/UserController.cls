public with sharing class UserController {
	@AuraEnabled(cacheable = true)
    public static User getUserDetails(Id userId) {
		Id key = userId;
		return [SELECT Id, Name, Username, Phone
		     FROM User
		     WHERE Id = :key];
	}
}