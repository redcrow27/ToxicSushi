package step_definitions;

import io.cucumber.java.en.Given;
import step_impl.HomePageImpl;

/*
In this class all step definitions for those steps in feature file are stored. Good practice to keep your steps
as short as possible. If you think your Test method will look bigger, try to create a method in implementation class
and call it in your step definition method.
 */
public class HomePageTest extends HomePageImpl {
    @Given("This is sample scenario step")
    public void this_is_sample_scenario_step() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }
}
