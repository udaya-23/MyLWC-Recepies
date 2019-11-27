({
    navigateToHome : function(component, event, helper) {
       var nav = component.find('navService');
       nav.navigate({
           'type': 'standard__namedPage',
           'attributes': {
               pageName: 'home'
           }
       });

    },

    navigateToHelloTab : function(component, event, helper) {
        var nav = component.find('navService');
        nav.navigate({
            'type': 'standard__navItemPage',
            'attributes': {
                apiName: 'Aura_Hello'
            }
        });
 
     },
})
