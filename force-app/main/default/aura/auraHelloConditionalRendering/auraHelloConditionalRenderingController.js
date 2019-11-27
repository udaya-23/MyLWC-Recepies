({
    handleChange : function(component, event, helper) {
        var eventValue = event.getParam('checked');
        component.set('v.isChecked', eventValue);
    }
})
