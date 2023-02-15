                //by Tag Name
                cy.get('input')
            
                //by ID
                cy.get('inpLoginEmail')
        
                //by Class name
                cy.get('.css-11aywtz')
    
                //by Attribute name
                cy.get('[placeholder]')
    
                //by Attribute name and value
                cy.get('[placeholder="Email Anda"]')
    
                //by Class Value
                cy.get('[class="css-11aywtz"]')
    
                //by Tag name and Attribute with value
                cy.get('input[placeholder="Email Anda"]')
            
                //by two different attributes
                cy.get('[placeholder="Email Anda"][type="text"]')
    
                //by cypress recommend
                cy.get('[data-cy="inpLoginEmail"]')
    
    
    
        