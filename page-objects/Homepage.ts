const logger = require('../logger/Logger');
import {expect, Locator, Page} from '@playwright/test';


export class Homepage{

    //Defining selectors

    readonly page: Page;
    readonly loginButton: Locator;

    constructor(page:Page){
        this.page = page;
        this.loginButton = page.locator('//*[@id="menuElem"]/li[7]/a');
    }

    async clickOnLoginButton(){
        if((await this.page.$('//*[@id="menuElem"]/li[7]/a')) !==null){
            logger.automationLogger.info('I have clicked on the login button on homepage.');
            await this.loginButton.click();
        }
        else{
            logger.automationLogger.info('I did not find login button on home page');
        }      
               
        
    }
}

