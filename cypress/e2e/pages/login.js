class logIn{

    clickSingIn = () =>{

        cy.fixture('ebombo.json').then((selectors) =>{
            cy.xpath(selectors.login_button).click();
        })
    }
}

export default new logIn();