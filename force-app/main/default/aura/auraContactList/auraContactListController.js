({
    doInit : function(component, event, helper) {
        var action = component.get('c.getContactList');
        action.setCallback(this, function(response){
            var state = response.getState();
            if(state =='SUCCESS'){
                component.set('v.contacts', response.getReturnValue());
            }
            
            var showToast = $A.get('e.force:showToast');
            if(state == 'SUCCESS'){
                showToast.setParams({
                    title: 'Success',
                    message: 'Contacts loaded successfully',
                    variant: 'success'
                });
            }else {
                showToast.setParams({
                    title: 'Error',
                    message: 'Error while loading contact records',
                    variant: 'error'
                });
            }
            showToast.fire();
        });

        $A.enqueueAction(action);
    }
})
