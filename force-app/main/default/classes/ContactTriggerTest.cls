@ isTest
private class ContactTriggerTest {
	@TestSetup
	static void makeData() {
		Account acc = new Account();
		acc.Name = 'MyTestAccount';
		acc.Industry = 'Banking';
		insert acc;

		List<Contact> conList = new List<Contact>();
		for(Integer i = 1; i < 4; i ++) {
			Contact con = new Contact();
			con.AccountId = acc.Id;
			con.LastName = 'Contact Lastname' + i;
			conList.add(con);
		}
		insert conList;

	}

	@isTest
	static void contactTriggerTest_Insert() {

		Integer expValue = [SELECT NumberOfEmployees FROM Account WHERE Name = 'MyTestAccount'] [0].NumberOfEmployees;
		System.assertEquals(expValue, 3);
	}

	@isTest
	static void contactTriggerTest_Delete() {
		Contact conDelete = [SELECT Name FROM Contact WHERE LastName = 'Contact Lastname1'];
		delete conDelete;

		Integer expValue = [SELECT NumberOfEmployees FROM Account WHERE Name = 'MyTestAccount'] [0].NumberOfEmployees;
		System.assertEquals(expValue, 2);

	}

	@isTest
	static void contactTriggerTest_Undelete() {
		Contact conDelete = [SELECT Name FROM Contact WHERE LastName = 'Contact Lastname1'];
		delete conDelete;

		Contact conUndelete = [SELECT Name FROM Contact WHERE LastName = 'Contact Lastname1' ALL ROWS];
		undelete conUndelete;

		Integer expValue = [SELECT NumberOfEmployees FROM Account WHERE Name = 'MyTestAccount'] [0].NumberOfEmployees;
		System.assertEquals(expValue, 3);
	}
}