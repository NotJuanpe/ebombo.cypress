class credentials{

    writeCredentials = (email,password) => {

        
        cy.fixture('ebombo.json').then((selectors) =>{
            cy.xpath(selectors.email).type(email);
            cy.xpath(selectors.password).type(password);
            cy.xpath(selectors.login).click();
        })
    }
}

export default new credentials();