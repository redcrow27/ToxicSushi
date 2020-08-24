package step_definitions;

import io.cucumber.java.en.Then;
import org.junit.Assert;
import pages.SearchResPage;
import step_impl.SearchResPageImpl;
import utils.CucumberUtils;

import java.util.List;

public class SearchResPageTest extends SearchResPageImpl {

    @Then("I verify all fields available followind data:")
    public void i_verify_all_fields_available_followind_data(List<String> dataTable) {
        SearchResPage searchResPage = new SearchResPage();
        for(int i = 0; i < dataTable.size(); i++) {
            Assert.assertEquals(dataTable.get(i), searchResPage.searchFieldsName.get(i).getText());
            CucumberUtils.logInfo("Expected field: " + dataTable.get(i) + " | Actual field: " + searchResPage.searchFieldsName.get(i).getText(), false);
        }
        CucumberUtils.logInfo("Test completed. Screenshot: ", true);
    }
}
