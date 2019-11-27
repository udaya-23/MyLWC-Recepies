({
    handleEvent : function(component, event, helper) {
        var contactRec = event.getParam('contacts');
        component.set('v.contacts', contactRec);
    }
})
