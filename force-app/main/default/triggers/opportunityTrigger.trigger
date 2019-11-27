trigger opportunityTrigger on Opportunity(after insert, after update, after delete, after undelete) {

	Set<Id> accSet = new Set<Id>();
	Map<Id, Double> accAmount = new Map<Id, Double>();
	List<Account> lstAccForUpdate = new List<Account>();
    
	if(Trigger.isAfter) {
		if(Trigger.isDelete) {
			for(Opportunity opp :Trigger.old) {
				if(opp.AccountId != null) {
					accSet.add(opp.AccountId);
					System.debug('Trigger Delete Fired::::');
				}
			}
		} else {
			for(Opportunity opp :Trigger.new) {
				if(opp.AccountId != null) {
					accSet.add(opp.AccountId);
					System.debug('Trigger Insert, Update or Undelete fired::::');
				}
			}
		}
	}

	List<AggregateResult> aggResults = [SELECT AccountId, sum(Amount) amt
									    FROM Opportunity
									    WHERE AccountId IN :accSet 
									    AND StageName = 'Closed Won'
									    GROUP BY AccountId];

	for(AggregateResult ar :aggResults) {
		Id accId = (Id) ar.get('AccountId');
		Double annRev = (Double) ar.get('amt');
		accAmount.put(accId, annRev);

        System.debug('Aggregate Results::::' + annRev);

	}

	List<Account> accList = [SELECT Id, AnnualRevenue
					     FROM Account
					     WHERE Id IN :accAmount.keySet()];

    System.debug('Accounts to update with Amount:::' + accList.size());                   

	for(Account ac :accList) {
		ac.AnnualRevenue = accAmount.get(ac.Id);
        System.debug('Annual Revenue:::' + ac.AnnualRevenue);
		lstAccForUpdate.add(ac);
	}

	if(lstAccForUpdate.size() > 0) {
        System.debug('Accounts after updte');
		update lstAccForUpdate;
	}

}