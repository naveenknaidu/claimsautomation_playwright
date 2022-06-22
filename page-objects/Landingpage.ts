import {expect, Locator, Page} from '@playwright/test';
const logger = require('../logger/Logger');

export class Ladingpage{

    //Defining selectors
    readonly page: Page;
    readonly headerHomeButton: Locator;
    readonly headerPolicyDetailsButton: Locator;
    readonly headerDocumentsButton: Locator;
    readonly headerClaimsButton: Locator;
    readonly headerPersonalDetailsButton: Locator;
    readonly headerMyClinicButton: Locator;
    readonly headerAmICoveredButton: Locator;
    readonly manageMyPolicy: Locator;
    readonly viewPolicyDetails: Locator;
    readonly viewMyClinic: Locator;
    readonly viewAllDocuments: Locator;
    readonly buyNow: Locator;
    readonly digitalDoctor: Locator;
    readonly emergencyAssistanceAbroad: Locator;
    readonly myLife: Locator;
    readonly healthyMinds: Locator;
    readonly backUp: Locator;
    readonly minorInjuryClinic: Locator;
    readonly linkAnotherPolicy: Locator;
    readonly makeAClaim: Locator;
    readonly checkMyCover: Locator;
    readonly editPersonalDetails: Locator;
    readonly logoutButton: Locator;


    constructor(page: Page){
        this.page = page;
        this.headerHomeButton = page.locator('//*[@id="navigation"]/div[2]/nav/ul/li[1]/a'); 
        this.headerPolicyDetailsButton = page.locator('//*[@id="navigation"]/div[2]/nav/ul/li[2]/a'); 
        this.headerDocumentsButton = page.locator('//*[@id="navigation"]/div[2]/nav/ul/li[3]/a'); 
        this.headerClaimsButton = page.locator('//*[@id="navigation"]/div[2]/nav/ul/li[4]/a'); 
        this.headerPersonalDetailsButton = page.locator('//*[@id="navigation"]/div[2]/nav/ul/li[5]/a'); 
        this.headerMyClinicButton = page.locator('//*[@id="navigation"]/div[2]/nav/ul/li[6]/a'); 
        this.headerAmICoveredButton = page.locator('//*[@id="navigation"]/div[2]/nav/ul/li[7]/a'); 
        this.manageMyPolicy = page.locator('.settings');
        this.viewPolicyDetails = page.locator('.m03_my-policies--policy');
        this.viewMyClinic = page.locator('.flex-child');
        this.viewAllDocuments = page.locator('body > div.body > div.dashboard-wrapper.home-page.row > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div > div > a');
        this.buyNow = page.locator('body > div.body > div.dashboard-wrapper.home-page.row > div:nth-child(3) > div > div > div > div > div > div > div > div > div');
        this.digitalDoctor = page.locator('body > div.body > div.dashboard-wrapper.home-page.row > div:nth-child(4) > div > div > div > div > div:nth-child(2) > div > h4 > a');
        this.emergencyAssistanceAbroad = page.locator('body > div.body > div.dashboard-wrapper.home-page.row > div:nth-child(4) > div > div > div > div > div:nth-child(3) > div > h4 > a');
        this.myLife = page.locator('body > div.body > div.dashboard-wrapper.home-page.row > div:nth-child(4) > div > div > div > div > div:nth-child(4) > div > h4 > a');
        this.healthyMinds = page.locator('body > div.body > div.dashboard-wrapper.home-page.row > div:nth-child(4) > div > div > div > div > div:nth-child(5) > div > h4 > a');
        this.backUp = page.locator('body > div.body > div.dashboard-wrapper.home-page.row > div:nth-child(4) > div > div > div > div > div:nth-child(6) > div > h4 > a');
        this.minorInjuryClinic = page.locator('body > div.body > div.dashboard-wrapper.home-page.row > div:nth-child(4) > div > div > div > div > div:nth-child(7) > div > h4 > a');
        this.linkAnotherPolicy = page.locator('body > div.body > div.dashboard-wrapper.home-page.row > div:nth-child(5) > div > div > div > div > a > span');
        this.makeAClaim = page.locator('body > div.body > div.dashboard-wrapper.home-page.row > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div > div > a.home-uploadReceipt > span');
        this.checkMyCover = page.locator('body > div.body > div.dashboard-wrapper.home-page.row > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div > div > p.p-0 > a > span');
        this.editPersonalDetails = page.locator('body > div.body > div.dashboard-wrapper.home-page.row > div:nth-child(1) > div:nth-child(2) > div:nth-child(5) > div > div > a');
        this.logoutButton = page.locator('//*[@id="navigation"]/div[2]/nav/ul/li[8]/a');

    }

    async headerHomeButtonPresent(){
        await this.page.waitForSelector('//*[@id="navigation"]/div[2]/nav/ul/li[1]/a');
        if((await this.page.$('//*[@id="navigation"]/div[2]/nav/ul/li[1]/a')) != null){
            logger.automationLogger.info('Home button is present on the landing page ')
        }
        else{
            logger.automationLogger.info('Home button is not present landing page');
        }
    }

    async clickingHeaderButton(){
        await this.page.waitForSelector('//*[@id="navigation"]/div[2]/nav/ul/li[1]/a');
        if((await this.page.$('//*[@id="navigation"]/div[2]/nav/ul/li[1]/a')) != null){
            await this.headerHomeButton.click();
            logger.automationLogger.info('Home button is been clicked')
        }
        else{
            logger.automationLogger.info('Cannot find the home button to click');
        }

    }

    async headerPolicyDetailsButtonPresent(){
        if((await this.page.$('//*[@id="navigation"]/div[2]/nav/ul/li[2]/a')) != null){
            logger.automationLogger.info('Policy details button is present on the landing page');
        }
        else{
            logger.automationLogger.info('Policy details button is not present on the landing page');
        }
    }


    async clickingHeaderPolicyDetailsButton(){
        if((await this.page.$('//*[@id="navigation"]/div[2]/nav/ul/li[2]/a')) != null){
            await this.headerPolicyDetailsButton.click();
            logger.automationLogger.info('Policy details button is been clicked');
        }
        else{
            logger.automationLogger.info('Cannot find the policy details button to click');
        }
    }

    async headerDocumentsButtonPresent(){
        if((await this.page.$('//*[@id="navigation"]/div[2]/nav/ul/li[3]/a')) != null){
            logger.automationLogger.info('Documents button is present on the landing page');
        }
        else{
            logger.automationLogger.info('Documents button is not present on the landing page');
        }
    }

    async clickingHeaderDocumnetsButton(){
        if((await this.page.$('//*[@id="navigation"]/div[2]/nav/ul/li[3]/a')) != null){
            await this.headerDocumentsButton.click();
            logger.automationLogger.info('Documents button is been clicked');
        }
        else{
            logger.automationLogger.info('Cannot find the documents button to click');
        }
    }

    async headerClaimsButtonPresent(){
        if((await this.page.$('//*[@id="navigation"]/div[2]/nav/ul/li[4]/a')) != null){
            logger.automationLogger.info('Claims button is present on the landing page');
        }
        else{
            logger.automationLogger.info('Claims button is not present on the landing page');
        }
    }

    async clickingHeaderClaimsButton(){
        if((await this.page.$('//*[@id="navigation"]/div[2]/nav/ul/li[4]/a')) != null){ 
            await this.headerClaimsButton.click();
            logger.automationLogger.info('Claims button is been clicked');
        }
        else{
            logger.automationLogger.info('Cannot find the claims button to click');
        }
    }

    async headerPersonalDetailsButtonPresent(){
        if((await this.page.$('//*[@id="navigation"]/div[2]/nav/ul/li[5]/a')) != null){
            logger.automationLogger.info('Personal details button is present on the landing page');
        }
        else{
            logger.automationLogger.info('Personal details button is not present on the landing page');
        }
    }

    async clickingHeaderPersonalDetailsButton(){
        if((await this.page.$('//*[@id="navigation"]/div[2]/nav/ul/li[5]/a')) != null){
            await this.headerPersonalDetailsButton.click();
            logger.automationLogger.info('personal details button is been clicked');
        }
        else{
            logger.automationLogger.info('Cannot find the personal details button to click');
        }
    }

    async headerMyClinicButtonPresent(){
        if((await this.page.$('//*[@id="navigation"]/div[2]/nav/ul/li[6]/a')) != null){
            logger.automationLogger.info('Myclinic button is present on the landing page');
        }
        else{
            logger.automationLogger.info('Myclinic button is not present on the landing page');
        }
    }

    async clickingHeaderMyClinicButton(){
        if((await this.page.$('//*[@id="navigation"]/div[2]/nav/ul/li[6]/a')) != null){
            await this.headerMyClinicButton.click();
            logger.automationLogger.info('Myclinic button is been clicked');
        }
        else{
            logger.automationLogger.info('Cannot find the Myclinic button to click');
        }
    }

    async headerAmICoveredButtonPresent(){
        if((await this.page.$('//*[@id="navigation"]/div[2]/nav/ul/li[7]/a')) != null){
            logger.automationLogger.info('Am I Covered button is present on the landing page');
        }
        else{
            logger.automationLogger.info('Am I Covered button is not present on the landing page');
        }
    }

    async clickingHeaderAmICoveredButton(){
        if((await this.page.$('//*[@id="navigation"]/div[2]/nav/ul/li[7]/a')) != null){
            await this.headerAmICoveredButton.click();
            logger.automationLogger.info('Am I Covered button is been clicked');
        }
        else{
            logger.automationLogger.info('Cannot find the Am I Covered button to click');
        }
    }

    async manageMyPolicyButtonPresent(){
        await this.page.waitForSelector('.settings');
        if((await this.page.$('.settings')) != null){
            logger.automationLogger.info('Manage my policy button is present on the landing page');
        }
        else{
            logger.automationLogger.info('Manage my policy button is not present on the landing page');
        }
    }

    async clickingManageMyPolicyButton(){
        if((await this.page.$('.settings')) != null){
            await this.manageMyPolicy.click();
            logger.automationLogger.info('Manage my policy button is been clicked');
        }
        else{
            logger.automationLogger.info('Cannot find the Manage my policy button to click');
        }
    }

    async viewPolicyDetailsButtonPresent(){
        if((await this.page.$('.m03_my-policies--policy')) != null){ 
            logger.automationLogger.info('View Policy details button is present on the landing page');
        }
        else{
            logger.automationLogger.info('View Policy details button is not present on the landing page');
        }
    }

    async clickingViewPolicyDetailsButton(){
        if((await this.page.$('.m03_my-policies--policy')) != null){
            await this.viewPolicyDetails.click();
            logger.automationLogger.info('View Policy details button is been clicked');
        }
        else{
            logger.automationLogger.info('Cannot find the View Policy details button to click');
        }
    }

    async viewMyClinicButtonPresent(){
        if((await this.page.$('.flex-child')) != null){
            logger.automationLogger.info('View my clinic button is present on the landing page');
        }
        else{
            logger.automationLogger.info('View my clinic button is not present on the landing page');
        }
    }

    async clickingViewMyClinicButton(){
        if((await this.page.$('.flex-child')) != null){
            await this.viewMyClinic.click();
            logger.automationLogger.info('View my clinic button is been clicked');
        }
        else{
            logger.automationLogger.info('Cannot find the View my clinic button to click');
        }
    }

    async viewAllDocumentsButtonPresent(){
        if((await this.page.$('body > div.body > div.dashboard-wrapper.home-page.row > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div > div > a')) != null){
            logger.automationLogger.info('View all documents button is present on the landing page');
        }
        else{
            logger.automationLogger.info('View all documents button is not present on the landing page');
        }
    }

    async clickingViewAllDocumentsButton(){
        if((await this.page.$('body > div.body > div.dashboard-wrapper.home-page.row > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div > div > a')) != null){
            await this.viewAllDocuments.click();
            logger.automationLogger.info('View all documents button is been clicked');
        }
        else{
            logger.automationLogger.info('Cannot find the View all documents button to click.');
        }
    }

    async buyNowButtonPresent(){
        if((await this.page.$('body > div.body > div.dashboard-wrapper.home-page.row > div:nth-child(3) > div > div > div > div > div > div > div > div > div')) != null){
            logger.automationLogger.info('Buy now button is present on the landing page');
        }
        else{
            logger.automationLogger.info('Buy now button is not present on the landing page.');
        }
    }

    async clickingBuyNowButton(){
        if((await this.page.$('body > div.body > div.dashboard-wrapper.home-page.row > div:nth-child(3) > div > div > div > div > div > div > div > div > div')) != null){
            await this.buyNow.click();
            logger.automationLogger.info('Buy now button is been clicked');
        }
        else{
            logger.automationLogger.info('Cannot find the buy now button to click');
        }
    }

    async digitalDoctorButtonPresent(){
        if((await this.page.$('body > div.body > div.dashboard-wrapper.home-page.row > div:nth-child(4) > div > div > div > div > div:nth-child(2) > div > h4 > a')) != null){
            logger.automationLogger.info('Digital doctor button is present on the landing page');
        }
        else{
            logger.automationLogger.info('Digital doctor button is not present on the landing page');
        }
    }

    async clickingDigitalDoctorButton(){
        if((await this.page.$('body > div.body > div.dashboard-wrapper.home-page.row > div:nth-child(4) > div > div > div > div > div:nth-child(2) > div > h4 > a')) != null){
            await this.digitalDoctor.click();
            logger.automationLogger.info('Digital doctor button is been clicked');
        }
        else{
            logger.automationLogger.info('Cannot find the digital doctor button to click');
        }
    }

    async emergencyAssistanceAbroadButtonPresent(){
        if((await this.page.$('body > div.body > div.dashboard-wrapper.home-page.row > div:nth-child(4) > div > div > div > div > div:nth-child(3) > div > h4 > a')) != null){
            logger.automationLogger.info('Emergency assistance abroad button is present on the landing page');
        }
        else{
            logger.automationLogger.info('Emergency assistance abroad button is not present on the landing page');
        }
    }

    async clickingEmergencyAssistanceAbroadButton(){
        if((await this.page.$('body > div.body > div.dashboard-wrapper.home-page.row > div:nth-child(4) > div > div > div > div > div:nth-child(3) > div > h4 > a')) != null){
            await this.emergencyAssistanceAbroad.click();
            logger.automationLogger.info('Emergency assistance abroad button is been clicked');
        }
        else{
            logger.automationLogger.info('Cannot find the Emergency assistance abroad button to click');
        }
    }

    async myLifeButtonPresent(){
        if((await this.page.$('body > div.body > div.dashboard-wrapper.home-page.row > div:nth-child(4) > div > div > div > div > div:nth-child(4) > div > h4 > a')) != null){
            logger.automationLogger.info('My Life button is present on the landing page');
        }
        else{
            logger.automationLogger.info('My Life button is not present on the landing page');
        }
    }

    async clickingMyLifeButton(){
        if((await this.page.$('body > div.body > div.dashboard-wrapper.home-page.row > div:nth-child(4) > div > div > div > div > div:nth-child(4) > div > h4 > a')) != null){
            await this.myLife.click();
            logger.automationLogger.info('My Life button is been clicked');
        }
        else{
            logger.automationLogger.info('Cannot find the My Life button to click');
        }
    }


    async healthyMindsButtonPresent(){
        if((await this.page.$('body > div.body > div.dashboard-wrapper.home-page.row > div:nth-child(4) > div > div > div > div > div:nth-child(5) > div > h4 > a')) != null){
            logger.automationLogger.info('Healthy Minds button is present on the landing page');
        }
        else{
            logger.automationLogger.info('Healthy Minds button is not present on the landing page');
        }
    }

    async clickingHealthyMindsButton(){
        if((await this.page.$('body > div.body > div.dashboard-wrapper.home-page.row > div:nth-child(4) > div > div > div > div > div:nth-child(5) > div > h4 > a')) != null){
            await this.healthyMinds.click();
            logger.automationLogger.info('Healthy Minds button is been clicked');
        }
        else{
            logger.automationLogger.info('Cannot find the Healthy Minds button to click');
        }
    }

    async backUpButtonPresent(){
        if((await this.page.$('body > div.body > div.dashboard-wrapper.home-page.row > div:nth-child(4) > div > div > div > div > div:nth-child(6) > div > h4 > a')) != null){
            logger.automationLogger.info('Back up button is present on the landing page');
        }
        else{
            logger.automationLogger.info('Back up button is not present on the landing page');
        }
    }

    async clickingBackUpButton(){
        if((await this.page.$('body > div.body > div.dashboard-wrapper.home-page.row > div:nth-child(4) > div > div > div > div > div:nth-child(6) > div > h4 > a')) != null){
            await this.backUp.click();
            logger.automationLogger.info('Back up button is been clicked');
        }
        else{
            logger.automationLogger.info('Cannot find the Back up button to click');
        }
    }

    async minorInjuryClinicButtonPresent(){
        if((await this.page.$('body > div.body > div.dashboard-wrapper.home-page.row > div:nth-child(4) > div > div > div > div > div:nth-child(7) > div > h4 > a')) != null){
            logger.automationLogger.info('Minor injury clinic button is present on the landing page');
        }
        else{
            logger.automationLogger.info('Minor injury clinic button is not present on the landing page');
        }
    }

    async clickingMinorInjuryClinicButton(){
        if((await this.page.$('body > div.body > div.dashboard-wrapper.home-page.row > div:nth-child(4) > div > div > div > div > div:nth-child(7) > div > h4 > a')) != null){
            await this.minorInjuryClinic.click();
            logger.automationLogger.info('Minor injury clinic button is been clicked');
        }
        else{
            logger.automationLogger.info('Cannot find the Minor injury clinic button to click');
        }
    }

    async linkAnotherPolicyButtonPresent(){
        if((await this.page.$('body > div.body > div.dashboard-wrapper.home-page.row > div:nth-child(5) > div > div > div > div > a > span')) != null){
            logger.automationLogger.info('Link another policy button is present on the landing page');
        }
        else{
            logger.automationLogger.info('Link another policy button is not present on the landing page');
        }
    }

    async clickingLinkAnotherPolicyButton(){
        if((await this.page.$('body > div.body > div.dashboard-wrapper.home-page.row > div:nth-child(5) > div > div > div > div > a > span')) != null){
            await this.minorInjuryClinic.click();
            logger.automationLogger.info('Link another policy button is been clicked');
        }
        else{
            logger.automationLogger.info('Cannot find the Link another policy button to click');
        }
    }


    async makeAClaimButtonPresent(){
        if((await this.page.$('body > div.body > div.dashboard-wrapper.home-page.row > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div > div > a.home-uploadReceipt > span')) != null){
            logger.automationLogger.info('Make a claim button is present on the landing page');
        }
        else{
            logger.automationLogger.info('Make a claim button is not present on the landing page');
        }
    }

    async clickingMakeAClaimButton(){
        if((await this.page.$('body > div.body > div.dashboard-wrapper.home-page.row > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div > div > a.home-uploadReceipt > span')) != null){
            await this.makeAClaim.click();
            logger.automationLogger.info('Make a claim button is been clicked');
        }
        else{
            logger.automationLogger.info('Cannot find the Make a claim button to click');
        }
    }


    async checkMyCoverButtonPresent(){
        if((await this.page.$('body > div.body > div.dashboard-wrapper.home-page.row > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div > div > p.p-0 > a > span')) != null){
            logger.automationLogger.info('Check my cover button is present on the landing page');
        }
        else{
            logger.automationLogger.info('Check my cover button is not present on the landing page');
        }
    }

    async clickingCheckMyCoverButton(){
        if((await this.page.$('body > div.body > div.dashboard-wrapper.home-page.row > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div > div > p.p-0 > a > span')) != null){
            await this.checkMyCover.click();
            logger.automationLogger.info('Check my cover button is been clicked');
        }
        else{
            logger.automationLogger.info('Cannot find the Check my cover button to click');
        }
    }

    async editPersonalDetailsButtonPresent(){
        if((await this.page.$('body > div.body > div.dashboard-wrapper.home-page.row > div:nth-child(1) > div:nth-child(2) > div:nth-child(5) > div > div > a')) != null){
            logger.automationLogger.info('Edit personal details button is present on the landing page');
        }
        else{
            logger.automationLogger.info('Edit personal details button is not present on the landing page');
        }
    }

    async clickingEditPersonalDetailsButton(){
        if((await this.page.$('body > div.body > div.dashboard-wrapper.home-page.row > div:nth-child(1) > div:nth-child(2) > div:nth-child(5) > div > div > a')) != null){
            await this.editPersonalDetails.click();
            logger.automationLogger.info('Edit personal details button is been clicked');
        }
        else{
            logger.automationLogger.info('Cannot find the Edit personal details button to click');
        }
    }

    async clickingLogoutButton(){
        if((await this.page.$('//*[@id="navigation"]/div[2]/nav/ul/li[8]/a')) != null){
            await this.logoutButton.click();
            logger.automationLogger.info('I have clicked the logout button');
        }
        else{
            logger.automationLogger.info('I did not click on the logout button as I cannot find the button');
        }
    }


}