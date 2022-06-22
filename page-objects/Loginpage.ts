import {expect, Locator, Page} from '@playwright/test';
const logger = require('../logger/Logger');

export class Loginpage{

    //Defining Selectors
    readonly page: Page;
    readonly email: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;
    readonly logOutButton: Locator;

    constructor(page: Page){
        this.page = page;
        this.email = page.locator('#Email');
        this.password = page.locator('#Password');
        this.loginButton = page.locator('button');
        this.logOutButton = page.locator('//*[@id="navigation"]/div[2]/nav/ul/li[8]/a');
    }

    async loginDetails(userName: string, password: string){
        logger.automationLogger.info('waiting for email element to be visible');
        await this.page.waitForSelector('#Email');
        if ((await this.page.$('#Email')) !== null){
            logger.automationLogger.info('entering the user name as email');
            await this.email.type(userName);
        }
        else{
            logger.automationLogger.info('I did not find element called Email with id=Email on login page');
        }
        if((await this.page.$('#Password')) !==null){
            logger.automationLogger.info('entering the password');
            await this.password.type(password);
        }
        else{
            logger.automationLogger.info('I did not find element called Password with id=Password on login page');
        }
        if((await this.page.$('button')) !==null){
            logger.automationLogger.info('clicking on the login button');
            await this.loginButton.click();
        }
        else{
            logger.automationLogger.info('I did not find element called login button where css= button on login pgae');
        }
        
        

    }

    async clickingOnLogoutButtopn(){
        await this.page.waitForSelector('//*[@id="navigation"]/div[2]/nav/ul/li[8]/a');
        if((await this.page.$('//*[@id="navigation"]/div[2]/nav/ul/li[8]/a'))!= null){
            this.logOutButton.waitFor();
            this.logOutButton.click();
            await this.page.waitForSelector('#Email');
            await expect(this.email).toBeVisible();
            logger.automationLogger.info('I have clicked on the logout button');
        }
        else{
            logger.automationLogger.info('I did not click on the logout button, element not present.');
        }
    }

}