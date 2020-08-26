package step_definitions;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import pages.HomePage;
import pages.SearchResPage;
import step_impl.HomePageImpl;
import utils.ConfigReader;
import utils.CucumberUtils;
import utils.Driver;
import utils.SeleniumUtils;

import java.util.List;

/*
In this class all step definitions for those steps in feature file are stored. Good practice to keep your steps
as short as possible. If you think your Test method will look bigger, try to create a method in implementation class
and call it in your step definition method.
 */
public class HomePageTest extends HomePageImpl {


    @Given("I open Home page")
    public void iOpenHomePage() {
        String url = ConfigReader.readProperty("url", Driver.propertyPath);
        Driver.getDriver().get(url);
    }

    @Given("I login the page")
    public void i_login_the_page() {
        HomePage homePage = new HomePage();
        String username = ConfigReader.readProperty("username", Driver.propertyPath);
        String password = ConfigReader.readProperty("password", Driver.propertyPath);
        homePage.logIn(username, password);
    }

    @Then("I verify title is {string}")
    public void i_verify_title_is(String title) {
        Assert.assertEquals(title, Driver.getDriver().getTitle());
        CucumberUtils.logInfo("Actual title is: " + Driver.getDriver().getTitle(), true);
    }

    @Given("I login with invalid  credentials")
    public void i_login_with_invalid_credentials() {
        HomePage homePage = new HomePage();
        String username = "hello@gmail.com";
        String password = "12345678";
        SeleniumUtils.sleep(1000);
        homePage.logIn(username, password);
    }


    @Then("I verify {string} as {string}")
    public void i_verify_as(String messageType, String message) {
        HomePage homePage = new HomePage();
        switch (messageType.toLowerCase()) {
            case "error message": message = homePage.errorMsg.getText() ;
                break;
            case "hi message" : message = homePage.displayName.getText();
                break;
            default:
                System.out.println("Invalid message");
        }
        SeleniumUtils.waitForPageToLoad();
        CucumberUtils.logInfo(" Message type: " + messageType + " Result: " + message, true);
    }


    @And("I click {string} button")
    public void iClickButton(String button) {
        HomePage homePage = new HomePage();
        SearchResPage searchResPage = new SearchResPage();
        switch (button.toLowerCase()) {
            case "close": SeleniumUtils.click(homePage.closeBtn);
                break;
            case "sign out":
                SeleniumUtils.click(homePage.squareBox);
                SeleniumUtils.click(homePage.signOutBtn);
                break;
            case "i'm hungry": SeleniumUtils.click(homePage.imHungryBtn);
                break;
            case "show me more": SeleniumUtils.click(homePage.showMeMoreBtn);
                break;
            case "search restaurants": SeleniumUtils.click(homePage.headerLinks.get(1));
                break;
            case "search":
                SeleniumUtils.waitForClickability(searchResPage.searchBtn);
                SeleniumUtils.click(searchResPage.searchBtn);
                break;
            case "reviews":
                SeleniumUtils.waitForClickability(searchResPage.reviewsBtn);
                SeleniumUtils.click(searchResPage.reviewsBtn);
                break;
            case "directions":
                SeleniumUtils.waitForClickability(searchResPage.directionBtn);
                SeleniumUtils.click(searchResPage.directionBtn);
                break;
            case "share":
                SeleniumUtils.waitForClickability(searchResPage.shareBtn);
                SeleniumUtils.click(searchResPage.shareBtn);
                break;
            default:
                System.out.println("Invalid button");
        }
        CucumberUtils.logInfo(" Click: " + button + " button" , false);
    }

    @Then("I verify message does not exist as {string}")
    public void iVerifyMessageDoesNotExistAs(String message) {
        HomePage homePage = new HomePage();
        Assert.assertFalse(homePage.displayName.isDisplayed());
        CucumberUtils.logInfo(message + " message is displayed: " + homePage.displayName.isDisplayed(), true);
    }

    @Then("I verify navigation buttons displayed following data:")
    public void i_verify_navigation_buttons_displayed_following_data(List<String> dataTable) {
        HomePage homePage = new HomePage();
        for(int i = 0; i < dataTable.size(); i++) {
            Assert.assertEquals(dataTable.get(i), homePage.headerLinks.get(i).getText());
            CucumberUtils.logInfo("Expected navigation button: " + dataTable.get(i) + " | Actual navigation button: " + homePage.headerLinks.get(i).getText(), false);
        }
        CucumberUtils.logInfo("Test completed. Screenshot: ", true);
    }

    @Then("I verify {string} is Displayed")
    public void iVerifyIsDisplayed(String message) {
        HomePage homePage = new HomePage();
        switch (message.toLowerCase()) {
            case "search restaurants": Assert.assertTrue(homePage.searchHeader.isDisplayed());
                break;
            case "we're happy to hear from you": Assert.assertTrue(homePage.commentHeader.isDisplayed());
                break;
            default:
                System.out.println("Invalid message");
        }
        CucumberUtils.logInfo(message + " is displayed. Test completed. Screenshot: ", true);
    }

    @Then("I verify {string} is not Displayed")
    public void iVerifyIsNotDisplayed(String message) {
        HomePage homePage = new HomePage();
        switch (message.toLowerCase()) {
            case "hi, erdi": Assert.assertFalse(homePage.displayName.isDisplayed());
                break;
            default:
                System.out.println("Invalid message");
        }
        CucumberUtils.logInfo(message + " is NOT displayed. Test completed. Screenshot: ", true);
    }

    @Then("I verify Search restaurants page open")
    public void iVerifySearchRestaurantsPageOpen() {
        Assert.assertEquals(ConfigReader.readProperty("searchRestaurantUrl", Driver.propertyPath), Driver.getDriver().getCurrentUrl());
        CucumberUtils.logInfo("Expected Url: " + ConfigReader.readProperty("searchRestaurantUrl", Driver.propertyPath) + " | Actual Url: " + Driver.getDriver().getCurrentUrl(), true);
    }
}
