package step_definitions;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import pages.HomePage;
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

    private static String propertyPath = "src/test/resources/conf/configuration.properties";

    @Given("I open Home page")
    public void iOpenHomePage() {
        String url = ConfigReader.readProperty("url", propertyPath);
        Driver.getDriver().get(url);
    }

    @Given("I login the page")
    public void i_login_the_page() {
        HomePage homePage = new HomePage();
        String username = ConfigReader.readProperty("username", propertyPath);
        String password = ConfigReader.readProperty("password", propertyPath);
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

    @Then("I clear the fields")
    public void i_clear_the_fields() {
       HomePage homePage = new HomePage();
       homePage.clearLogInFields();
    }

    @And("I click {string} button")
    public void iClickButton(String button) {
        HomePage homePage = new HomePage();
        switch (button.toLowerCase()) {
            case "close": SeleniumUtils.click(homePage.closeBtn);
                break;
            case "sign out":
                SeleniumUtils.click(homePage.squareBox);
                SeleniumUtils.click(homePage.signOutBtn);
                break;
            default:
                System.out.println("Invalid button");
        }
        CucumberUtils.logInfo(" Click: " + button + " button" , false);
    }


}
