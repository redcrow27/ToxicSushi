package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utils.Driver;

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




}
