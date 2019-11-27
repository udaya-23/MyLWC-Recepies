({
    handleClick : function(component, event, helper) {
      alert('Child component - 1');
       event.preventDefault(); 
       var contactVal = component.get('v.contact');
       alert(contactVal.Name);
       var action = component.getEvent('fireContact');
        action.setParams({
           'contact': contactVal
       });
       alert('Child component - 2:' + contactVal.Id);
       action.fire();
    }
})
