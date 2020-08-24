package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;
import utils.Driver;
import utils.SeleniumUtils;

import java.util.List;

public class SearchResPage {

    public SearchResPage(){
        PageFactory.initElements(Driver.getDriver(), this);
    }

    @FindBy(xpath = "//label[contains(@class, 'col')]")
    public List<WebElement> searchFieldsName;

    @FindBy(id = "searcharea")
    public WebElement selectArea;

    @FindBy(id = "rating")
    public WebElement selectRating;

    @FindBy(id = "type")
    public WebElement selectFoodType;

    @FindBy(id = "zipcode")
    public WebElement zipCodeField;

    @FindBy(xpath = "(//div[@class='result'])[1]")
    public WebElement firstAddressLine;

    @FindBy(id = "search-btn")
    public WebElement searchBtn;

    public void enterZipCode(String zipCode) {
        Select select = new Select(selectArea);
        select.selectByVisibleText("Zip Code");
        zipCodeField.clear();
        SeleniumUtils.sendKeys(zipCodeField, zipCode);
        SeleniumUtils.click(searchBtn);
    }






}
