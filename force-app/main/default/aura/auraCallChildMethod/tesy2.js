({
    handleClick : function(component, event, helper) {
        var childComponet = component.find('childMethod');
        childComponet.getDateTime();
    }
})
