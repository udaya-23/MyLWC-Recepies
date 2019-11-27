({
    doInit : function(component, event, helper) {
        var myList = [
            {Name: 'Amy Taylor',
            Title: 'VP of Engineering'
            },
            {Name: 'Michael Jones',
             Title: 'VP of Sales'
            },
            {Name: 'Jennifer Wu',
            Title: 'CEO'}
         ];
    component.set('v.listContacts', myList);    
    }
})
