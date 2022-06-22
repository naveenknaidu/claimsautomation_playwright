import{test, expect, Page, Locator} from '@playwright/test';
import { add } from 'winston';
const logger = require('../logger/Logger');
import{Ladingpage} from '../page-objects/Landingpage';


export class Policydetailspage{

    //Change Plan Elements
    readonly page: Page;
    readonly policyCostsAndPayments: Locator;
    readonly changePlan: Locator;
    readonly changeCoverDate: Locator;
    readonly newPlan: Locator;
    readonly submitChangeCover: Locator;
    readonly confirmCheckBoxOne: Locator;
    readonly confirmCheckBoxTwo: Locator;
    readonly nextButton: Locator;
    readonly initialWaitingPeriodsCheckbox: Locator;
    readonly upgradeWaitingPeriodsCheckbox: Locator;
    readonly preExistingWaitingPeriods: Locator;
    readonly downGradingYourCover: Locator;
    readonly confirmChanges: Locator;
    readonly changePlanSuccess: Locator;

    //Add dependent elements
    readonly addAnotherPerson: Locator;
    readonly addPersonEffectiveDate: Locator;
    readonly titleOfAddAnotehrPerson: Locator;
    readonly addAnotherPersonFirstName: Locator;
    readonly addAnotherPersonLastName: Locator;
    readonly addAnotherPersonDOB: Locator;
    readonly addPersonSubmitButton: Locator;
    readonly addPersonPreviousHealthInsuranceRadioButtonNo: Locator;
    readonly addPersonConfirmCheckBox: Locator;
    readonly addPersonNextButton: Locator;
    readonly addPersonInitaiWaitingPeriodsCheckBox: Locator;
    readonly addPersonUpgradeWaitingPeriodsCheckBox: Locator;
    readonly addPersonPreExistingWaitingPeriodsCheckBox: Locator;
    readonly addPersonDownGradingYourCoverCheckBox: Locator;
    readonly addPersonConfirmChanges: Locator;
    readonly addPersonSuccess: Locator;






    constructor(page:Page){
        //Change Plan Elements
        this.page = page; 
        this.policyCostsAndPayments = page.locator('//*[@id="policy-details-info-page"]/div/div[1]/div[2]/div/div/div[1]/a/span');
        this.changePlan = page.locator('//*[@id="policy-details-info-page"]/div/div[1]/div[2]/div/div/div[2]/a/span');
        this.changeCoverDate = page.locator('#EffectiveDate');
        this.newPlan = page.locator('//*[@id="NewPlanId"]');
        this.submitChangeCover = page.locator('#submitChangeCover');     
        this.confirmCheckBoxOne = page.locator('//*[@id="amend-policy-container"]/div/div[2]/form/div[4]/label');
        this.confirmCheckBoxTwo = page.locator('//*[@id="amend-policy-container"]/div/div[2]/form/div[5]/label');
        this.nextButton = page.locator('#confirmChangeCover');
        this.initialWaitingPeriodsCheckbox = page.locator('//*[@id="coverChangeDisclaimers"]/div[1]/div/label[1]');
        this.upgradeWaitingPeriodsCheckbox = page.locator('//*[@id="coverChangeDisclaimers"]/div[1]/div/label[2]');
        this.preExistingWaitingPeriods = page.locator('//*[@id="coverChangeDisclaimers"]/div[2]/div[1]/label');
        this.downGradingYourCover = page.locator('//*[@id="coverChangeDisclaimers"]/div[2]/div[2]/div/label');
        this.confirmChanges = page.locator('#purchaseEndorsement');
        this.changePlanSuccess = page.locator('#amendCoverSuccessMessage > div > div:nth-child(5)');

        //Add dependent elements
        this.addAnotherPerson = page.locator('//*[@id="policy-details-info-page"]/div/div[1]/div[2]/div/div/div[3]/a/span');
        this.addPersonEffectiveDate = page.locator('#EffectiveDate');
        this.titleOfAddAnotehrPerson = page.locator('#amend-policy-container > div > div.col.col-sm-12.col-md-8.order-md-1 > div.d-block.oil-card-with-shadow > form > div.dependants > div > div > div:nth-child(4) > select');
        this.addAnotherPersonFirstName = page.locator('#amend-policy-container > div > div.col.col-sm-12.col-md-8.order-md-1 > div.d-block.oil-card-with-shadow > form > div.dependants > div > div > div:nth-child(5) > div > input');
        this.addAnotherPersonLastName = page.locator('#amend-policy-container > div > div.col.col-sm-12.col-md-8.order-md-1 > div.d-block.oil-card-with-shadow > form > div.dependants > div > div > div:nth-child(6) > div > input');
        this.addAnotherPersonDOB = page.locator('#amend-policy-container > div > div.col.col-sm-12.col-md-8.order-md-1 > div.d-block.oil-card-with-shadow > form > div.dependants > div > div > div:nth-child(13) > div > div > input');
        this.addPersonSubmitButton = page.locator('#submitAddDependants');
        this.addPersonPreviousHealthInsuranceRadioButtonNo = page.locator('#amend-policy-container > div > div.col.col-sm-12.col-md-8.order-md-1 > div.d-block.oil-card-with-shadow > form > div.dependants > div > div > div.previousHealthInsurance.not-newborn-dependant > div.form-group.form-group-wide.full-width.previous-health-insurance-selection > div > label:nth-child(2)');
        this.addPersonConfirmCheckBox = page.locator('//*[@id="amend-policy-container"]/div/div[2]/form/div[5]/label');
        this.addPersonNextButton = page.locator('//*[@id="confirmChangeCover"]');
        this.addPersonInitaiWaitingPeriodsCheckBox = page.locator('//*[@id="coverChangeDisclaimers"]/div[1]/div/label[1]');
        this.addPersonUpgradeWaitingPeriodsCheckBox = page.locator('//*[@id="coverChangeDisclaimers"]/div[1]/div/label[2]');
        this.addPersonPreExistingWaitingPeriodsCheckBox = page.locator('//*[@id="coverChangeDisclaimers"]/div[2]/div[1]/label');
        this.addPersonDownGradingYourCoverCheckBox = page.locator('//*[@id="coverChangeDisclaimers"]/div[2]/div[2]/div/label');
        this.addPersonConfirmChanges = page.locator('//*[@id="purchaseEndorsement"]');
        this.addPersonSuccess = page.locator('#amendCoverSuccessMessage > div > div:nth-child(4) > span > b');


    }


    //Change Plan Methods
    async viewPolicyCostsAndPayments(){
        let landingPage = new Ladingpage(this.page);
        landingPage.clickingHeaderPolicyDetailsButton();
        await this.page.waitForSelector('//*[@id="policy-details-info-page"]/div/div[1]/div[2]/div/div/div[1]/a/span');
        if((await this.page.$('//*[@id="policy-details-info-page"]/div/div[1]/div[2]/div/div/div[1]/a/span')) != null){
            logger.automationLogger.info('The view ploicy costs & payments button is present');
        }
        else{
            logger.automationLogger.info('The view policy costs & payments button is not present');
        }
    }

    async clickOnChangePlanButton(){
        if((await this.page.$('//*[@id="policy-details-info-page"]/div/div[1]/div[2]/div/div/div[2]/a/span')) != null){
            await this.changePlan.click();
            logger.automationLogger.info('I have clicked on the change plan button on policy details page');
        }
        else{
            logger.automationLogger.info('I did not click on the change plan button as I could not find the button');
        }
    }

    async enterChangeOfCoverDate(changePlanDate: string){
        await this.page.waitForSelector('#EffectiveDate');
        if((await this.page.$('#EffectiveDate')) != null ){
            await this.changeCoverDate.click({clickCount: 3});
            await this.page.keyboard.press('Backspace');
            await this.changeCoverDate.type(changePlanDate);
            await this.changeCoverDate.click();
            logger.automationLogger.info('I have entered the change plan date correctly');
        }
        else{
            logger.automationLogger.info('I did not enter the change plan date correctly');
        }
    }

    async selectNewPlan(selectingNewPlan: string){
        if((await this.page.$('//*[@id="NewPlanId"]')) != null){
            await this.newPlan.selectOption({label: selectingNewPlan});
            logger.automationLogger.info(' I have entered correct new plan to change');
        }
        else{
            logger.automationLogger.info('I cannot enter the new plan as cant find the element');
        }
    }

    async submitCover(){
        if((await this.page.$('#submitChangeCover')) != null){
            await this.submitChangeCover.click();
            logger.automationLogger.info('Clicked on the change plan submit button');
        }
        else{
            logger.automationLogger.info('Cannot click on the change plan submit button');
        }
    }

    async checkingCheckingBox(){
        await this.page.waitForSelector('#confirmChangeCover');
        if((await this.page.$('//*[@id="amend-policy-container"]/div/div[2]/form/div[4]/label')) != null){
            await this.confirmCheckBoxOne.click();
            logger.automationLogger.info('I have checked the confirm checkbox one');
        }
        else if((await this.page.$('//*[@id="amend-policy-container"]/div/div[2]/form/div[5]/label')) != null){
            await this.confirmCheckBoxTwo.click();
            logger.automationLogger.info('I have checked the confirm checkbox two');
        }
        else{
            logger.automationLogger.info('I have not checked any of the check box as element was not found');
        }
    }

    async clickingOnNextButton(){
        if((await this.page.$('#confirmChangeCover')) != null){
            await this.nextButton.click();
            logger.automationLogger.info('Clicked on the next button');
        }
        else{
            logger.automationLogger.info('Cannot find the next button');
        }
    }

    async clickingOnInitailWaitingPeriodsCheckbox(){
        await this.page.waitForSelector('//*[@id="coverChangeDisclaimers"]/div[1]/div/label[1]');
        if((await this.page.$('//*[@id="coverChangeDisclaimers"]/div[1]/div/label[1]')) != null){
            await this.initialWaitingPeriodsCheckbox.click();
            logger.automationLogger.info('I have checked the inital waiting periods checkbox');
        }
        else{
            logger.automationLogger.info('I did not check the initial waiting periods checkbox');
        }
    }

    async clickingOnUpgradeWaitingPeriodsCheckbox(){
        if((await this.page.$('//*[@id="coverChangeDisclaimers"]/div[1]/div/label[2]')) != null){
            await this.upgradeWaitingPeriodsCheckbox.click();
            logger.automationLogger.info('I have checked the upgrade waiting periods checkbox');
        }
        else{
            logger.automationLogger.info('I did not check the upgrade waitinbg periods checkbox');
        }
    }

    async clickingOnPreExistingWaitingPeriodsCheckbox(){
        if((await this.page.$('//*[@id="coverChangeDisclaimers"]/div[2]/div[1]/label')) != null){
            await this.preExistingWaitingPeriods.click();
            logger.automationLogger.info('I have checked the checkbox of the pre existing waiting periods');
        }
        else{
            logger.automationLogger.info('I did not check the checkbox of the pre existing waiting periods');
        }
    }

    async clickingOnDowngradingYourCoverCheckbox(){
        if((await this.page.$('//*[@id="coverChangeDisclaimers"]/div[2]/div[2]/div/label')) != null){
            await this.downGradingYourCover.click();
            logger.automationLogger.info('I have checked the downgrading your cover checkbox');
        }
        else{
            logger.automationLogger.info('I did not check the downgrading your cover checkbox');
        }
    }

    async clickingOnConfirmChangesButton(){
        if((await this.page.$('#purchaseEndorsement')) != null){
            await this.confirmChanges.click();
            logger.automationLogger.info(' I have clicked the confirm changes button');
        }
        else{
            logger.automationLogger.info('I did not click the confirm changes button');
        }
    }

    async planChangedSuccessfully(){
        await this.page.waitForSelector('#amendCoverSuccessMessage > div > div:nth-child(5)'); 
        if((await this.page.$('#amendCoverSuccessMessage > div > div:nth-child(5)')) != null){
            await expect(this.changePlanSuccess).toHaveText('Policy successfully updated.');
            logger.automationLogger.info('I have found the change plan success message' );
        }
        else{
            logger.automationLogger.info('I did not find the change plan success message');
        }
    }


    //Add dependent methods
    async clickingOnAddAnotherPersonButton(){
        let landingpage = new Ladingpage(this.page);
        landingpage.clickingHeaderPolicyDetailsButton();
        await this.page.waitForSelector('//*[@id="policy-details-info-page"]/div/div[1]/div[2]/div/div/div[3]/a/span');
        if((await this.page.$('//*[@id="policy-details-info-page"]/div/div[1]/div[2]/div/div/div[3]/a/span')) != null){
            await this.addAnotherPerson.click();
            logger.automationLogger.info('I have clicked on add another person button');
        }
        else{
            logger.automationLogger.info('I did not click on the add another person button');
        }
    }

    async enteraddAnotherEffectiveDate(addAnotherPersonDate: string){
        await this.page.waitForSelector('#EffectiveDate');
        if((await this.page.$('#EffectiveDate')) != null ){
            await this.addPersonEffectiveDate.click({clickCount: 3});
            await this.page.keyboard.press('Backspace');
            await this.addPersonEffectiveDate.type(addAnotherPersonDate);
            await this.addPersonEffectiveDate.click();
            logger.automationLogger.info('I have entered the add person effective date correctly');
        }
        else{
            logger.automationLogger.info('I did not enter the add person effective date correctly');
        }
    }

    async selectTitleOfAddPerson(addPersonTitle: string){
        if((await this.page.$('#amend-policy-container > div > div.col.col-sm-12.col-md-8.order-md-1 > div.d-block.oil-card-with-shadow > form > div.dependants > div > div > div:nth-child(4) > select')) != null){  
            await this.titleOfAddAnotehrPerson.selectOption({value: addPersonTitle});
            logger.automationLogger.info('I have selected the title of the add person');
        }else{
            logger.automationLogger.info('I did not select the title of the add person');
        }
    }

    async enterFirstName(firstName:string){
        if((await this.page.$('#amend-policy-container > div > div.col.col-sm-12.col-md-8.order-md-1 > div.d-block.oil-card-with-shadow > form > div.dependants > div > div > div:nth-child(5) > div > input')) != null){
            await this.addAnotherPersonFirstName.type(firstName);
            logger.automationLogger.info('I have entered first name correctly on add dependent page');
        }
        else{
            logger.automationLogger.info('I did not enter the first name on add dependent page');
        }
    }

    async enterLastName(lastName: string){
        if((await this.page.$('#amend-policy-container > div > div.col.col-sm-12.col-md-8.order-md-1 > div.d-block.oil-card-with-shadow > form > div.dependants > div > div > div:nth-child(6) > div > input'))!= null){
            await this.addAnotherPersonLastName.type(lastName);
            logger.automationLogger.info('I have entered last name correctly on add depedent page');
        }
        else{
            logger.automationLogger.info('I did not enter last name on the add dependent page');
        }
    }

    async enterDateOfBirth(dateOfBirth:string){
        if((await this.page.$('#amend-policy-container > div > div.col.col-sm-12.col-md-8.order-md-1 > div.d-block.oil-card-with-shadow > form > div.dependants > div > div > div:nth-child(13) > div > div > input')) != null){
            await this.addAnotherPersonDOB.type(dateOfBirth);
            logger.automationLogger.info('I have entered date of birth of add person correctly');
        }else{
            logger.automationLogger.info('I did not enter the date of birth of add person');
        }
        
    }

    async clickOnAddPersonSubmitButton(){
        if((await this.page.$('#submitAddDependants')) != null){
            await this.addPersonSubmitButton.click();
            logger.automationLogger.info('I have add person submit button');
        }
        else{
            logger.automationLogger.info('I did not click on the add person submit button');
        }
    }

    async clickOnAddPersonPreviousHealthInsuranceRadioButtonNO(){
        await this.page.waitForSelector('#amend-policy-container > div > div.col.col-sm-12.col-md-8.order-md-1 > div.d-block.oil-card-with-shadow > form > div.dependants > div > div > div.previousHealthInsurance.not-newborn-dependant > div.form-group.form-group-wide.full-width.previous-health-insurance-selection > div > label:nth-child(2)');
        if((await this.page.$('#amend-policy-container > div > div.col.col-sm-12.col-md-8.order-md-1 > div.d-block.oil-card-with-shadow > form > div.dependants > div > div > div.previousHealthInsurance.not-newborn-dependant > div.form-group.form-group-wide.full-width.previous-health-insurance-selection > div > label:nth-child(2)')) != null){
            await this.addPersonPreviousHealthInsuranceRadioButtonNo.click();
            this.clickOnAddPersonSubmitButton();
            logger.automationLogger.info('I have clicked on the previous insurance no radio button of add another person' );
        }
        else{
            logger.automationLogger.info('I did not click on the previous insurance no radio button of add another person');
        }
    }

    async clickAddAnotherPersonConfirmCheckBox(){
        await this.page.waitForSelector('//*[@id="amend-policy-container"]/div/div[2]/form/div[5]/label');
        if((await this.page.$('//*[@id="amend-policy-container"]/div/div[2]/form/div[5]/label')) != null){
            await this.addPersonConfirmCheckBox.click();
            logger.automationLogger.info('I have clicked on the add another person check box');
        }
        else{
            logger.automationLogger.info('I did not click on the add another person check box');
        }
    }
    

    async clickAddAnotherPersonNextButton(){
        if((await this.page.$('//*[@id="confirmChangeCover"]')) != null){
            await this.addPersonNextButton.click();
            logger.automationLogger.info('I have clicked on the add another person confirm next button');
        }
        else{
            logger.automationLogger.info('I did not click on the add another person confirm next button')
        }
    }


    async clickAddAnotherPersonInitialWaitingPeriodsCheckBox(){
        await this.page.waitForSelector('//*[@id="coverChangeDisclaimers"]/div[1]/div/label[1]');
        if((await this.page.$('//*[@id="coverChangeDisclaimers"]/div[1]/div/label[1]')) != null){
            await this.addPersonInitaiWaitingPeriodsCheckBox.click();
            logger.automationLogger.info('I have checked the add another person initial waiting periods checkbox');
        }
        else{
            logger.automationLogger.info('I did not check the add another person initial waiting periods checkbox');
        }
    }

    async clickAddAnotherPersonUpgradeWaitingPeriodsCheckBox(){
        if((await this.page.$('//*[@id="coverChangeDisclaimers"]/div[1]/div/label[2]')) != null){
            await this.addPersonUpgradeWaitingPeriodsCheckBox.click();
            logger.automationLogger.info('I have checked on the add another person upgrade waiting periods check box');
        }else{
            logger.automationLogger.info('I did not check on the add another person upgrade waiting periods check box');
        }
    }

    async clickAddAnotherPersonPreExistingWaitingPeriodsCheckBox(){
        if((await this.page.$('//*[@id="coverChangeDisclaimers"]/div[2]/div[1]/label')) != null){
            await this.addPersonPreExistingWaitingPeriodsCheckBox.click();
            logger.automationLogger.info('I have checked on the add another person pre existing waiting periods checkbox');
        }
        else{
            logger.automationLogger.info('I did not check on the add another person pre existing waiting periods checkbox');
        }
    }

    async clickAddAnotherPersonDowngradingCoverCheckBox(){
        if((await this.page.$('//*[@id="coverChangeDisclaimers"]/div[2]/div[2]/div/label')) != null){
            await this.addPersonDownGradingYourCoverCheckBox.click();
            logger.automationLogger.info('I have checked on the add another person downgrade your cover check box');
        }
        else{
            logger.automationLogger.info('I did not check on the add another person downgrade your cover check box');
        }
    }

    async clickAddAnotherPersonConfirmChangesButton(){
        await this.page.waitForSelector('//*[@id="purchaseEndorsement"]');
        if((await this.page.$('//*[@id="purchaseEndorsement"]')) != null){
            await this.addPersonConfirmChanges.click();
            logger.automationLogger.info('I have clicked on the add another person confirm changes button');
        }
        else{
            logger.automationLogger.info('I did not click on the add another person confirm changes button.');
        }
    }

    async addPersonSuccessfully(){
        await this.page.waitForSelector('#amendCoverSuccessMessage > div > div:nth-child(4) > span > b'); 
        if((await this.page.$('#amendCoverSuccessMessage > div > div:nth-child(4) > span > b')) != null){
            await expect(this.addPersonSuccess).toHaveText('Your dependant has been successfully added to your policy.');
            logger.automationLogger.info('I have found the add person success message' );
        }
        else{
            logger.automationLogger.info('I did not find the add person success message');
        }
    }


    

}