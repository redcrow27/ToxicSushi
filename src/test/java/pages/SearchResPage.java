package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;
import utils.Driver;
import utils.SeleniumUtils;

import java.util.ArrayList;
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

    @FindBy(xpath = "//a[text()='Search']")
    public WebElement searchBtn;

    @FindBy(xpath = "//div[@class='result']")
    public List<WebElement> resList;

    @FindBy(xpath = "(//a[@class='result result_name'])[1]")
    public WebElement getFirstResName;

    @FindBy(xpath = "(//span[@class='rating_value'])[1]")
    public WebElement getFirstRating;

    @FindBy(xpath = "//span[@class='rating_value']")
    public List<WebElement> ratingList;

    @FindBy(xpath = "//a[contains(@class, 'btn btn btn-full')]")
    public List<WebElement> linkListRDS;

    public List<WebElement> listFields() {
        List<WebElement> list = new ArrayList<>();
        list.add(0, getFirstResName);
        list.add(1, getFirstRating);
        for(int i = 2; i < 8; i++) {
            if(i == 8) {
                break;
            }
            list.add(i, resList.get(i -2));
        }
        return list;
    }

    public void enterZipCode(String zipCode) {
        Select select = new Select(selectArea);
        select.selectByVisibleText("Zip Code");
        zipCodeField.clear();
        SeleniumUtils.sendKeys(zipCodeField, zipCode);
        SeleniumUtils.click(searchBtn);
    }






}
