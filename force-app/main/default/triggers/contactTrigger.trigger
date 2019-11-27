trigger contactTrigger on Contact (after insert, after delete, after undelete) {

    /* When we add the Contacts for that Account then count will populate in the field on Account details page.
    When we delete the Contacts for that Account, then Count will update automatically. */
    Set<Id> accSet = new Set<Id>();
    List<Account> accListForUpdate = new List<Account>();

    if(Trigger.isAfter){
            if(Trigger.isInsert || Trigger.isUndelete){
                for(Contact con: Trigger.new){
                    if(con.AccountId != null){
                        accSet.add(con.AccountId);
                    }
                }
            }else{
                for(Contact con: Trigger.old){
                    if(con.AccountId != null){
                        accSet.add(con.AccountId);
                    }
                }
            }
     }

    List<Account> accList = [SELECT Id, (SELECT AccountId FROM contacts)
                             FROM Account
                             WHERE Id IN: accSet];

    for(Account acc: accList){
        Integer conCount = 0;
        for(Contact con: acc.Contacts){
            conCount += 1;
        }
        acc.NumberOfEmployees = conCount;
        accListForUpdate.add(acc);
    }

    if(accListForUpdate.size() > 0){
        update accListForUpdate;
    }

}