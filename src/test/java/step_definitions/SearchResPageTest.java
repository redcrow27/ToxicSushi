package step_definitions;

import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;
import pages.SearchResPage;
import step_impl.SearchResPageImpl;
import utils.CucumberUtils;
import utils.SeleniumUtils;

import java.util.List;

public class SearchResPageTest extends SearchResPageImpl {


    @Then("I verify all fields available following data:")
    public void i_verify_all_fields_available_following_data(List<String> dataTable) {
        SearchResPage searchResPage = new SearchResPage();
        switch (String.valueOf(dataTable.size())) {
            case "6":
                for (int i = 0; i < dataTable.size(); i++) {
                    Assert.assertEquals(dataTable.get(i), searchResPage.searchFieldsName.get(i).getText());
                    CucumberUtils.logInfo("Expected field: " + dataTable.get(i) + " | Actual field: " + searchResPage.searchFieldsName.get(i).getText(), false);
                }
                break;
            case "2":
                Select select = new Select(searchResPage.selectArea);
                List<WebElement> selectList = select.getOptions();
                for (int i = 0; i < dataTable.size(); i++) {
                    Assert.assertEquals(dataTable.get(i), selectList.get(i).getText());
                    CucumberUtils.logInfo("Expected option: " + dataTable.get(i) + " | Actual option: " + selectList.get(i).getText(), false);
                }
                Assert.assertEquals(dataTable.get(0), select.getFirstSelectedOption().getText());
                CucumberUtils.logInfo("Expected first option: " + dataTable.get(0) + " | Actual first option: " + select.getFirstSelectedOption().getText(), false);
                break;
            case "5":
                Select select2 = new Select(searchResPage.selectRating);
                List<WebElement> selectList2 = select2.getOptions();
                for (int i = 0; i < dataTable.size(); i++) {
                    Assert.assertEquals(dataTable.get(i), selectList2.get(i + 1).getText());
                    CucumberUtils.logInfo("Expected option: " + dataTable.get(i) + " | Actual option: " + selectList2.get(i + 1).getText(), false);
                }
                break;
            case "12":
                Select select3 = new Select(searchResPage.selectFoodType);
                List<WebElement> selectList3 = select3.getOptions();
                for (int i = 0; i < dataTable.size(); i++) {
                    Assert.assertEquals(dataTable.get(i), selectList3.get(i + 1).getText());
                    CucumberUtils.logInfo("Expected food option: " + dataTable.get(i) + " | Actual food option: " + selectList3.get(i + 1).getText(), false);
                }
                break;
            default:
                System.out.println("Invalid data");
        }
        CucumberUtils.logInfo("Test completed. Screenshot: ", true);
    }


}
