({
    handlePrevious : function(component, event, helper) {
        var pageNumber = component.get('v.pageNumber');
        if(pageNumber > 0){
            pageNumber -= 1;
        }
        component.set('v.pageNumber', pageNumber);
    },

    handleNext : function(component, event, helper) {
        var pageNumber = component.get('v.pageNumber');
        component.set('v.pageNumber', pageNumber + 1);
    }
})
