class main{


    createDynamic = () => {

        cy.fixture('ebombo.json').then((selectors) =>{
            cy.xpath(selectors.create).click();
            cy.xpath(selectors.dynamics).click();
            cy.xpath(selectors.game).click();
        })

    }

    nameDynamic = (name) => {
        
        cy.fixture('ebombo.json').then((selectors) =>{
            cy.xpath(selectors.dynamic_name).type(name);
        })

    }

    addWords = (num,word,val) => {

        

        cy.fixture('ebombo.json').then((selectors) =>{

            let xpath = `//input[@name="phrase-${num}"]` 
            let value = `//div[${(parseInt(num)+1)}]/select`

            cy.xpath(xpath).type(word);
            cy.xpath(value).select(val);
            cy.xpath(selectors.add).click();
        })
    }

    save = () => {

        cy.fixture('ebombo.json').then((selectors) =>{
            cy.xpath(selectors.save).click();
        })

    }

    checkDynamic = (name) => {

        cy.fixture('ebombo.json').then((selectors) =>{
            cy.xpath(selectors.dynamic_container).contains(name);
        })

    }


}

export default new main();