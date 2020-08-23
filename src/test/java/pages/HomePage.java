package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utils.Driver;
import utils.SeleniumUtils;

import java.util.List;

/*
All WebElements, also known as page objects of Home Page are stored in this class. Page Factory is used to initialize
our objects so we can use them. Driver.getDriver() method is used to connect our WebElements with that driver.
 */
public class HomePage {
    public HomePage(){
        PageFactory.initElements(Driver.getDriver(), this);
    }

    @FindBy(className = "toggle-btn")
    public WebElement squareBox;

    @FindBy(xpath = "//a[text()='Sign in']")
    public WebElement signInBtn;

    @FindBy(id = "signin_email")
    public WebElement emailField;

    @FindBy(id = "signin_password")
    public WebElement passwordField;

    @FindBy(id = "signin_submit")
    public  WebElement submitBtn;

    @FindBy(id = "errMsg")
    public WebElement errorMsg;

    @FindBy(id = "displayName")
    public WebElement displayName;

    @FindBy(xpath = "(//span[@aria-hidden='true'])[2]")
    public WebElement closeBtn;

    @FindBy(xpath = "//a[text()='Sign out']")
    public WebElement signOutBtn;

    @FindBy(className = "header_links")
    public List<WebElement> headerLinks;

    @FindBy(xpath = "(//a[@class='btn btn-full'])[1]")
    public WebElement imHungryBtn;

    @FindBy(id = "home_search_box")
    public WebElement searchHeader;

    @FindBy(xpath = "//a[text()=' Show me more ']")
    public WebElement showMeMoreBtn;

    @FindBy(xpath = "//div[@id='comment-header']")
    public WebElement commentHeader;

    @FindBy(xpath = "//h2[text()='Search restaurants']")
    public WebElement searchResHeader;

    public void logIn(String username, String password) {
        SeleniumUtils.click(squareBox);
        SeleniumUtils.click(signInBtn);
        SeleniumUtils.sendKeys(emailField, username);
        SeleniumUtils.sendKeys(passwordField, password);
        SeleniumUtils.click(submitBtn);
    }







}
