({
    handlePrevious : function(component, event, helper) {
       var action = component.getEvent("comPrevious");
       action.fire();
       console.log('Previous event fired in child');

    },

    handleNext : function(component, event, helper) {
        var action = component.getEvent("comNext");
        action.fire();
        console.log('Next event fired in child');
    },
})
