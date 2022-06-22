const logger = require('../logger/Logger');
import {expect, Locator, Page} from '@playwright/test';

export class Testbase{

    // Defining selectors

    readonly page: Page;
    readonly titleOfThePage: string;
    

    constructor(page: Page){
        this.page = page;
        this.titleOfThePage = 'Home - Irish Life Health'
    }

    //function for passing the test url
    async visit(){
        await this.page.goto('https://uat1.irishlifehealth.ie', {waitUntil: 'load'});
        
        logger.automationLogger.info('I am entering the url in the chrome address bar');
                   
        
    }
    //function for verifying the page title
    async pageTitle(){
       logger.automationLogger.info('In this function am verifying the page title');
       let titlePage: String;
       titlePage = await this.page.title();
        
        if(this.titleOfThePage===titlePage){
            logger.automationLogger.info('I have verified page title and the page title is correct');
                       
        }
        else
        {
            logger.automationLogger.info('I have verified page title and the page title is not correct');
            
        }
        
    }
}