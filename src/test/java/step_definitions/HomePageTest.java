package step_definitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import pages.HomePage;
import step_impl.HomePageImpl;
import utils.ConfigReader;
import utils.CucumberUtils;
import utils.Driver;

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


}
