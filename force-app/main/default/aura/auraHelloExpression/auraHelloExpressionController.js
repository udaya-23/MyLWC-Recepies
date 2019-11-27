({
    handleChange : function(component, event, helper) {
        var firstName = component.get('v.firstName');
        var lastName = component.get('v.lastName');
        var fullName = '';
        if(firstName != undefined || lastName != undefined){
            fullName = firstName;
            if (firstName != undefined && lastName != undefined){
                fullName = firstName +' '+lastName;
            }else if(lastName != undefined){
                fullName = lastName;
            }
        }
         component.set('v.fullName', fullName.toUpperCase() );

    }
})
