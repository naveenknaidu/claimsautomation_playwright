import {test, expect} from '@playwright/test';
import {Testbase} from '../utilities/Testbase';
import{ Homepage } from '../page-objects/Homepage';
import { Loginpage } from '../page-objects/Loginpage';
import { Ladingpage } from '../page-objects/Landingpage';
import {Claimspage} from '../page-objects/Claimspage';
import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';
import { Policydetailspage } from '../page-objects/Policydetailspage';





test.describe('On Chromium Only', () =>{

  let testBase: Testbase;
  let homePage: Homepage;
  let loginPage: Loginpage;
  let landingPage: Ladingpage;
  let claimsPage: Claimspage;
  let policyDetailsPage: Policydetailspage;

  const inputDataRecords = parse(fs.readFileSync(path.join(__dirname, 'input.csv')),{
    columns: true,
    skip_empty_lines: true    

  });

  
  

  //Before Hook
  test('Test 1',async ({ page }) => {
    testBase = new Testbase(page);
    homePage = new Homepage(page);
    loginPage = new Loginpage(page);
    landingPage = new Ladingpage(page);
    claimsPage = new Claimspage(page);
    policyDetailsPage = new Policydetailspage(page);
    await testBase.visit();
    await testBase.pageTitle();
    await homePage.clickOnLoginButton();
    for (const dataInput of inputDataRecords){
      console.log(dataInput.userName, dataInput.Password);
      await loginPage.loginDetails(dataInput.userName, dataInput.Password);
      await landingPage.headerHomeButtonPresent();
      await landingPage.headerPolicyDetailsButtonPresent();
      await landingPage.headerDocumentsButtonPresent();
      await landingPage.headerClaimsButtonPresent();
      await landingPage.headerPersonalDetailsButtonPresent();
      await landingPage.headerMyClinicButtonPresent();
      await landingPage.headerAmICoveredButtonPresent();
      await landingPage.manageMyPolicyButtonPresent();
      await landingPage.viewPolicyDetailsButtonPresent();
      await landingPage.viewMyClinicButtonPresent();
      await landingPage.viewAllDocumentsButtonPresent();
      await landingPage.buyNowButtonPresent();
      await landingPage.digitalDoctorButtonPresent();
      await landingPage.emergencyAssistanceAbroadButtonPresent();
      await landingPage.myLifeButtonPresent();
      await landingPage.healthyMindsButtonPresent();
      await landingPage.backUpButtonPresent();
      await landingPage.minorInjuryClinicButtonPresent();
      await landingPage.linkAnotherPolicyButtonPresent();
      await landingPage.makeAClaimButtonPresent();
      await landingPage.checkMyCoverButtonPresent();
      await landingPage.editPersonalDetailsButtonPresent();
      await policyDetailsPage.viewPolicyCostsAndPayments();
      await policyDetailsPage.clickOnChangePlanButton();
      await policyDetailsPage.enterChangeOfCoverDate(dataInput.ChangePlanDate);
      await policyDetailsPage.selectNewPlan(dataInput.NewPlan);
      await policyDetailsPage.submitCover();
      await policyDetailsPage.checkingCheckingBox();
      await policyDetailsPage.clickingOnNextButton();
      await policyDetailsPage.clickingOnInitailWaitingPeriodsCheckbox();
      await policyDetailsPage.clickingOnUpgradeWaitingPeriodsCheckbox();
      await policyDetailsPage.clickingOnPreExistingWaitingPeriodsCheckbox();
      await policyDetailsPage.clickingOnDowngradingYourCoverCheckbox();
      await policyDetailsPage.clickingOnConfirmChangesButton();
      await policyDetailsPage.planChangedSuccessfully();
      await claimsPage.clickOnMakeAClaimButton();
      await claimsPage.uploadImageOrPDF(dataInput.FilePath);
      await claimsPage.selectingNumberOfClaims(dataInput.NumberofClaims);
      await claimsPage.enteringDateOfTreatment(dataInput.DateofTreatment);
      await claimsPage.selectingTheMemberName(dataInput.MemberName);
      await claimsPage.clickOnOtherBenefits();
      await claimsPage.clickOnOtherBenefits();
      await claimsPage.selectingOtherTreatments(dataInput.OtherTreatments);
      await claimsPage.treatmentWithInIreland();
      await claimsPage.enteringPractitionersName(dataInput.PractitionerName);
      await claimsPage.enteringTheTreatmentAmount(dataInput.TreatmentAmount);
      await claimsPage.clickingOnSaveAndContinue();
      await claimsPage.clickingOnSaveAndContinue();
      await claimsPage.readyToSubmitCheckBox();
      await claimsPage.clickOnSubmitClaimButton();
      await claimsPage.writingClaimNumberToCSV();
      await policyDetailsPage.clickingOnAddAnotherPersonButton();
      await policyDetailsPage.enteraddAnotherEffectiveDate(dataInput.AddPersonDate);
      await policyDetailsPage.selectTitleOfAddPerson(dataInput.Title);
      await policyDetailsPage.enterFirstName(dataInput.FirstName);
      await policyDetailsPage.enterLastName(dataInput.LastName);
      await policyDetailsPage.enterDateOfBirth(dataInput.DOB);
      await policyDetailsPage.clickOnAddPersonSubmitButton();
      await policyDetailsPage.clickOnAddPersonPreviousHealthInsuranceRadioButtonNO();
      await policyDetailsPage.clickAddAnotherPersonConfirmCheckBox();
      await policyDetailsPage.clickAddAnotherPersonNextButton();
      await policyDetailsPage.clickAddAnotherPersonInitialWaitingPeriodsCheckBox();
      await policyDetailsPage.clickAddAnotherPersonUpgradeWaitingPeriodsCheckBox();
      await policyDetailsPage.clickAddAnotherPersonPreExistingWaitingPeriodsCheckBox();
      await policyDetailsPage.clickAddAnotherPersonDowngradingCoverCheckBox();
      await policyDetailsPage.clickAddAnotherPersonConfirmChangesButton();
      await policyDetailsPage.addPersonSuccessfully();
      await loginPage.clickingOnLogoutButtopn();
    }

    

    
         
    
  });

  
  
 
 

  
    // test('test2',async ({ page }) => {
      
    // });
    

});