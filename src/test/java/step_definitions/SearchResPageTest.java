package step_definitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.Alert;
import org.openqa.selenium.NoAlertPresentException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;
import pages.HomePage;
import pages.SearchResPage;
import step_impl.SearchResPageImpl;
import utils.*;

import java.util.List;

public class SearchResPageTest extends SearchResPageImpl {

    String previousZipCode;
    String previousRestaurantName;

    @Then("I verify all fields available following data:")
    public void i_verify_all_fields_available_following_data(List<String> dataTable) {
        SearchResPage searchResPage = new SearchResPage();
        switch (dataTable.get(0).toLowerCase()) {
            case "search by":
                for (int i = 0; i < dataTable.size(); i++) {
                    Assert.assertEquals(dataTable.get(i), searchResPage.searchFieldsName.get(i).getText());
                    CucumberUtils.logInfo("Expected field: " + dataTable.get(i) + " | Actual field: " + searchResPage.searchFieldsName.get(i).getText(), false);
                }
                break;
            case "current location":
                Select select = new Select(searchResPage.selectArea);
                List<WebElement> selectList = select.getOptions();
                for (int i = 0; i < dataTable.size(); i++) {
                    Assert.assertEquals(dataTable.get(i), selectList.get(i).getText());
                    CucumberUtils.logInfo("Expected option: " + dataTable.get(i) + " | Actual option: " + selectList.get(i).getText(), false);
                }
                Assert.assertEquals(dataTable.get(0), select.getFirstSelectedOption().getText());
                CucumberUtils.logInfo("Expected first option: " + dataTable.get(0) + " | Actual first option: " + select.getFirstSelectedOption().getText(), false);
                break;
            case "1":
                Select select2 = new Select(searchResPage.selectRating);
                List<WebElement> selectList2 = select2.getOptions();
                for (int i = 0; i < dataTable.size(); i++) {
                    Assert.assertEquals(dataTable.get(i), selectList2.get(i + 1).getText());
                    CucumberUtils.logInfo("Expected option: " + dataTable.get(i) + " | Actual option: " + selectList2.get(i + 1).getText(), false);
                }
                break;
            case "american":
                Select select3 = new Select(searchResPage.selectFoodType);
                List<WebElement> selectList3 = select3.getOptions();
                for (int i = 0; i < dataTable.size(); i++) {
                    Assert.assertEquals(dataTable.get(i), selectList3.get(i + 1).getText());
                    CucumberUtils.logInfo("Expected food option: " + dataTable.get(i) + " | Actual food option: " + selectList3.get(i + 1).getText(), false);
                }
                break;
            case "name of the place":
                SeleniumUtils.waitForPageToLoad();
                SeleniumUtils.moveIntoView(searchResPage.getFirstResName);
                for (int i = 0; i < dataTable.size(); i++) {
                    Assert.assertTrue(searchResPage.listFields().get(i).isDisplayed());
                    CucumberUtils.logInfo("Expected option: " + dataTable.get(i) + " | Actual option: " + searchResPage.listFields().get(i).getText(), false);
                }
                break;
            case "reviews":
                SeleniumUtils.waitForPageToLoad();
                SeleniumUtils.moveIntoView(searchResPage.getFirstResName);
                for (int i = 0; i < dataTable.size(); i++) {
                    if(i == 4) { break;}
                    Assert.assertTrue(searchResPage.linkListRDS.get(i).isDisplayed());
                    CucumberUtils.logInfo("Expected option: " + dataTable.get(i) + " | Actual option: " + searchResPage.linkListRDS.get(i).getText(), false);
                }
                break;
            case "date":
                SeleniumUtils.waitForPageToLoad();
                SeleniumUtils.moveIntoView(searchResPage.getFirstResName);
                for (int i = 0; i < dataTable.size(); i++) {
                    Assert.assertTrue(searchResPage.reviewElements().get(i).isDisplayed());
                    CucumberUtils.logInfo("Expected fields: " + dataTable.get(i) + " | Actual field info: " + searchResPage.reviewElements().get(i).getText(), false);
                }
                break;
            case "minutes":
                SeleniumUtils.moveIntoView(searchResPage.getFirstResName);
                SeleniumUtils.sleep(2000);
                Assert.assertTrue(searchResPage.minutes.isDisplayed());
                CucumberUtils.logInfo("Expected field: " + dataTable.get(0) + " | Actual field: " + searchResPage.minutes.getText(), false);
                Assert.assertTrue(searchResPage.miles.isDisplayed());
                CucumberUtils.logInfo("Expected field: " + dataTable.get(1) + " | Actual field: " + searchResPage.miles.getText(), false);
                break;
            case "to":
                SeleniumUtils.waitForPageToLoad();
                SeleniumUtils.moveIntoView(searchResPage.getFirstResName);
                for (int i = 0; i < dataTable.size(); i++) {
                    Assert.assertTrue( searchResPage.shareList().get(i).isDisplayed());
                    CucumberUtils.logInfo("Expected field: " + dataTable.get(i) + " | Actual field info: " + searchResPage.shareList().get(i).getText(), false);
                }
                break;
            default:
                System.out.println("Invalid data");
        }
        CucumberUtils.logInfo("Test completed. Screenshot: ", true);
    }


    @Given("I verify Zip Code field is disabled")
    public void iVerifyZipCodeFieldIsDisabled() {
        SearchResPage searchResPage = new SearchResPage();
        Assert.assertTrue(searchResPage.zipCodeField.isDisplayed());
        CucumberUtils.logInfo(" Zip Code field is Displayed: " + searchResPage.zipCodeField.isDisplayed(), false);
    }

    @Given("I choose {string} in {string} field")
    public void i_choose_in_field(String option, String fieldName) {
        SearchResPage searchResPage = new SearchResPage();
        switch (fieldName.toLowerCase()) {
            case "search by":
                Select select = new Select(searchResPage.selectArea);
                select.selectByVisibleText(option);
                break;
            default:
                System.out.println("Invalid field name");
        }
        CucumberUtils.logInfo(fieldName + " field selected. ", false);
    }


    @Then("I verify Zip Code field is Enabled")
    public void iVerifyZipCodeFieldIsEnabled() {
        SearchResPage searchResPage = new SearchResPage();
        SeleniumUtils.sendKeys(searchResPage.zipCodeField, ConfigReader.readProperty("currentZip", Driver.propertyPath));
        Assert.assertTrue(searchResPage.zipCodeField.isEnabled());
        CucumberUtils.logInfo("Test completed. Screenshot: ", true);
    }

    @Given("I enter {string} in Zip Code Field")
    public void i_enter_in_Zip_Code_Field(String zipCode) {
        SearchResPage searchResPage = new SearchResPage();
        searchResPage.enterZipCode(zipCode);
        CucumberUtils.logInfo("Zip Code entered: " + zipCode, false);
        previousZipCode = zipCode;
    }

    @When("I verify Zip Code is exist")
    public void i_verify_Zip_Code_is_exist() {
        SearchResPage searchResPage = new SearchResPage();
        SeleniumUtils.waitForVisibility(searchResPage.firstAddressLine);
        Assert.assertTrue(searchResPage.firstAddressLine.getText().contains(previousZipCode));
        SeleniumUtils.moveIntoView(searchResPage.firstAddressLine);
        CucumberUtils.logInfo(" Entered zip code: " + previousZipCode + " | Address line contains zip code: " +
                searchResPage.firstAddressLine.getText(), true);
    }


    @Then("I verify {string} message")
    public void i_verify_message(String message) {
        SeleniumUtils.sleep(3000);
        Alert alert = Driver.getDriver().switchTo().alert();
        Assert.assertEquals(message, alert.getText());
    }

    @Then("I verify address line contains my current location")
    public void iVerifyAddressLineContainsMyCurrentLocation() {
        SearchResPage searchResPage = new SearchResPage();
        String currentZipcode = ConfigReader.readProperty("currentZip", Driver.propertyPath);
        SeleniumUtils.moveIntoView(searchResPage.firstAddressLine);
        Assert.assertTrue(searchResPage.firstAddressLine.getText().contains(currentZipcode));
        CucumberUtils.logInfo(" My current zip code: " + currentZipcode + " | Address line contains zip code: " +
                searchResPage.firstAddressLine.getText(), true);
    }

    @Given("I choose {string} rating option")
    public void i_choose_rating_option(String rating) {
        SearchResPage searchResPage = new SearchResPage();
        Select select = new Select(searchResPage.selectRating);
        select.selectByVisibleText(rating);
        CucumberUtils.logInfo("Selected rating: " + rating , false);
    }

    @Then("I verify rating is {string}")
    public void i_verify_rating_is(String rating) {
        SearchResPage searchResPage = new SearchResPage();
        SeleniumUtils.moveIntoView(searchResPage.getFirstResName);
        Assert.assertTrue(searchResPage.getFirstRating.getText().contains(rating));
        CucumberUtils.logInfo("Actual rating: " + rating , false);
    }

    @Given("I choose {string} food option")
    public void i_choose_food_option(String food) {
        SearchResPage searchResPage = new SearchResPage();
        Select select = new Select(searchResPage.selectFoodType);
        select.selectByVisibleText(food);
        CucumberUtils.logInfo("Selected food: " + food , false);
    }

    @Then("I verify Cuisines section have {string}")
    public void i_verify_Cuisines_section_have(String food) {
        SearchResPage searchResPage = new SearchResPage();
        SeleniumUtils.moveIntoView(searchResPage.getFirstResName);
        Assert.assertTrue(searchResPage.cuisineField.getText().contains(food));
        CucumberUtils.logInfo("Actual food: " + food , false);
    }

    @Given("I enter restaurant name as {string}")
    public void i_enter_restaurant_name_as(String restaurant) {
       SearchResPage searchResPage = new SearchResPage();
       searchResPage.enterRestaurantName(restaurant);
       previousRestaurantName = restaurant;
    }

    @Then("I verify results list only the restaurants with the same name")
    public void i_verify_results_list_only_the_restaurants_with_the_same_name() {
        SearchResPage searchResPage = new SearchResPage();
        SeleniumUtils.moveIntoView(searchResPage.getFirstResName);
        Assert.assertEquals(searchResPage.getFirstResName.getText(), previousRestaurantName);
        CucumberUtils.logInfo(" Entered restaurant name: " + previousRestaurantName+ " | Actual restaurant name: " +
                searchResPage.getFirstResName.getText(), true);
    }

}
