({
    handleChange : function(component, event, helper) {
        var searchStr = component.get('v.searchString');
        var action = component.get('c.getContactSearchResults');
        action.setParams({
            'searchString': searchStr
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            if(state == 'SUCCESS'){
                var appEvent = $A.get("e.c:appContactsEvent");
                appEvent.setParams({
                    'contacts': response.getReturnValue()
                });
                appEvent.fire();
            }
        });
        $A.enqueueAction(action);
    }
})
