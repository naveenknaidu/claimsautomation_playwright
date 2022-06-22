import {test, expect, Locator, Page} from '@playwright/test';
import {Ladingpage} from '../page-objects/Landingpage';
const logger = require('../logger/Logger');
import fs from 'fs';

export class Claimspage{


    //defining selectors
    readonly page: Page;
    readonly makeAClaimButton: Locator;
    readonly selectImageOrPDF: Locator;
    readonly uploadedFile: Locator;
    readonly numberOfClaims: Locator;
    readonly dateOfTreatment: Locator;
    readonly memberName: Locator;
    readonly otherBenefits: Locator;
    readonly otherTreatments: Locator;
    readonly treatmentInIreland: Locator;
    readonly practitionerName: Locator;
    readonly waitForPractitioner: Locator;
    readonly treatmentAmount: Locator;
    readonly saveAndContinue: Locator;
    readonly submitCheckBox: Locator;
    readonly submitClaimButton: Locator;
    readonly claimNumber: Locator;




    constructor(page: Page){
        this.page = page;
        this.makeAClaimButton = page.locator('//*[@id="Submit receipts"]'); 
        this.selectImageOrPDF = page.locator('#fileUploadButtonLabel');
        this.uploadedFile = page.locator('#imgContainer');
        this.numberOfClaims = page.locator('//*[@id="howManyVisits"]/div/select');
        this.dateOfTreatment = page.locator('//*[@id="treatmentDate"]');
        this.memberName = page.locator('//*[@id="treatment"]/div/div[2]/div[2]/select');
        this.otherBenefits = page.locator('#selectABenefit > div > div:nth-child(4) > div:nth-child(3) > p:nth-child(1) > a');
        this.otherTreatments = page.locator('//*[@id="treatment"]/div/div[4]/div[1]/select');
        this.treatmentInIreland = page.locator('//*[@id="overseasTreatment"]/div/label[1]');
        this.practitionerName = page.locator('//*[@id="practitioners"]/div/input');
        this.waitForPractitioner = page.locator('//*[@id="practitioners"]/div/div/div[2]/div[1]');
        this.treatmentAmount = page.locator('#treatmentAmount');
        this.saveAndContinue = page.locator('//*[@id="focus-treatment"]/a');
        this.submitCheckBox = page.locator('.checkbox-label');
        this.submitClaimButton = page.locator('//*[@id="claim-review-buttons-container"]/div[1]/a');
        this.claimNumber = page.locator('#claim-sub-confirm-container > p:nth-child(4)');

    }

    async clickOnMakeAClaimButton(){
        let landingPage = new Ladingpage(this.page);
        landingPage.clickingHeaderClaimsButton();
        await this.page.waitForSelector('//*[@id="Submit receipts"]');
        if((await this.page.$('//*[@id="Submit receipts"]')) != null){
            await this.makeAClaimButton.click();
            logger.automationLogger.info('I have clicked on the make a claim button')
        }
        else{
            logger.automationLogger.info('I did not click on the make a claim button as I did not find the button')
        }
    }

    async uploadImageOrPDF(filePath: string){
        await this.page.waitForSelector('#fileUploadButtonLabel');
        if((await this.page.$('#fileUploadButtonLabel')) != null){
           await this.page.setInputFiles('#fileUploadButtonLabel', filePath);
           await this.page.waitForSelector('#imgContainer');
           expect('#imgContainer').toBeTruthy();
           logger.automationLogger.info('I have uploaded the file succesfully');
        }
        else{
            logger.automationLogger.info('I did not upload the file as I could not find the lement');
        }
    }

    async selectingNumberOfClaims(numberOfClaims: string){
        await this.page.waitForSelector('//*[@id="howManyVisits"]/div/select');
        if((await this.page.$('//*[@id="howManyVisits"]/div/select')) != null){
            await this.numberOfClaims.selectOption({value: numberOfClaims});
            logger.automationLogger.info('I have selected number of claims');
        }
        else{
            logger.automationLogger.info('I could not select number of claims as element is not found');
        }
    }

    async enteringDateOfTreatment(dateOfTreatment: string){
        await this.page.waitForSelector('//*[@id="treatmentDate"]');
        if((await this.page.$('//*[@id="treatmentDate"]')) != null){
            await this.dateOfTreatment.type(dateOfTreatment);
            logger.automationLogger.info('I have entered the treatment date correctly');
        }
        else{
            logger.automationLogger.info('I did not eneter the treatment date as I cannot find the element');
        }
    }
    
    async selectingTheMemberName(membersName: string){
        await this.page.waitForSelector('//*[@id="treatment"]/div/div[2]/div[2]/select'); //*[@id="treatment"]/div/div[2]/div[2]/select
        if((await this.page.$('//*[@id="treatment"]/div/div[2]/div[2]/select')) != null){
            await this.memberName.selectOption({label: membersName});
            logger.automationLogger.info('I have entered members name correctly');
        }
        else{
            logger.automationLogger.info('I cannot find the members name from select drop down');
        }
    }

    async clickOnOtherBenefits(){
        await this.page.waitForSelector('#selectABenefit > div > div:nth-child(4) > div:nth-child(3) > p:nth-child(1) > a'); 
        if((await this.page.$('#selectABenefit > div > div:nth-child(4) > div:nth-child(3) > p:nth-child(1) > a')) != null){
            await this.otherBenefits.waitFor();
            await this.otherBenefits.click();
            logger.automationLogger.info('I have clicked the other benefits button');
        }
        else{
            logger.automationLogger.info('I did not find the other benefits button to click on it.');
        }
    }

    async selectingOtherTreatments(benefits: string){
        await this.page.waitForSelector('//*[@id="treatment"]/div/div[4]/div[1]/select');
        if((await this.page.$('//*[@id="treatment"]/div/div[4]/div[1]/select')) != null){
            await this.otherTreatments.selectOption({label: benefits});
            logger.automationLogger.info('I have selected the benefit correctly');
        }
        else{
            logger.automationLogger.info('I did not select the benefit as I could not find the benefit');
        }
    }

    async treatmentWithInIreland(){
        if((await this.page.$('//*[@id="overseasTreatment"]/div/label[1]')) != null){
            await this.treatmentInIreland.click();
            logger.automationLogger.info('I have clicked Yes radio button for treatment within Ireland');
        }
        else{
            logger.automationLogger.info('I cannot find the Yes radio button to click');
        }
    }

    async enteringPractitionersName(practitionersName: string){
        await this.page.waitForSelector('//*[@id="practitioners"]/div/input');
        if((await this.page.$('//*[@id="practitioners"]/div/input')) != null){
            await this.practitionerName.type(practitionersName);
            await this.page.waitForSelector('//*[@id="practitioners"]/div/div/div[2]/div[1]');
            await this.page.keyboard.press('ArrowDown');
            await this.page.keyboard.press('Enter');
            logger.automationLogger.info('I have entered practitioners name correctly')
        }else{
            logger.automationLogger.info('I cannot the practitioners name to select');
        }
    }

    async enteringTheTreatmentAmount(amount: string){
        if((await this.page.$('#treatmentAmount')) != null){
            await this.treatmentAmount.type(amount);
            logger.automationLogger.info('I have enetered the amount correctly');

        }
        else{
            logger.automationLogger.info('I did not enter the treatment amount as I could not find the element');
        }
    }

    async clickingOnSaveAndContinue(){
        if((await this.page.$('//*[@id="focus-treatment"]/a')) != null){
            await this.saveAndContinue.click();
            logger.automationLogger.info('I have clicked save and continue button after claim claims amount');
        }
        else{
            logger.automationLogger.info('I cannot find the save and continue button to click after entering claims amount');
        }
    }

    async readyToSubmitCheckBox(){
        await this.page.waitForSelector('.checkbox-label')
        if((await this.page.$('.checkbox-label')) != null){
            await this.submitCheckBox.dblclick();
            logger.automationLogger.info('I have checked the checkbox of ready to submit');
        }
        else{
            logger.automationLogger.info('I did not the check the checkbox of ready to submit');
        }
    }

    async clickOnSubmitClaimButton(){
        if((await this.page.$('//*[@id="claim-review-buttons-container"]/div[1]/a')) != null){
            await this.submitClaimButton.click();
            logger.automationLogger.info('I have clicked on the submit claim button');
        }
        else{
            logger.automationLogger.info('I cannot find the submit claim button to click');
        }
    }


    async writingClaimNumberToCSV(){
        
        await this.page.waitForSelector('#claim-sub-confirm-container > p:nth-child(4)');
        if((await this.page.$('#claim-sub-confirm-container > p:nth-child(4)')) != null){
           const outPutData = await this.claimNumber.innerText();
           //fs.writeFileSync('C:/Users/B884/Desktop/claimsautomation_playwright/tests/output.csv', outPutData);
           fs.appendFileSync('C:/Users/B884/Desktop/claimsautomation_playwright/tests/output.csv', outPutData );
           logger.automationLogger.info('I have extracted the claim number successfully')

        }
        else{
            logger.automationLogger.info('I cannot find the claim number may be claim was not submitted successfully');
        }
    }

 








}


