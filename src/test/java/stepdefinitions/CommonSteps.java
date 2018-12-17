package stepdefinitions;

import com.etergo.framework.ConfigData;
import com.etergo.framework.Driver;
import com.etergo.framework.Utilities;
import com.etergo.pom.HomePage;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.appium.java_client.MobileElement;
import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import java.io.File;
import java.io.IOException;

import static org.testng.AssertJUnit.assertFalse;
import static org.testng.AssertJUnit.assertTrue;


public class CommonSteps {

    @After
    public void onTestFailure(Scenario result) {
        if (result.isFailed()) {
            File srcFile = ((TakesScreenshot) Driver.getDriver()).getScreenshotAs(OutputType.FILE);
            try {
                FileUtils.forceMkdir(new File(ConfigData.getPathToScreenshots()));
                String imageName = result.getName();
                FileUtils.copyFile(srcFile, new File(ConfigData.getPathToScreenshots() + "/" + "Failed_Scenario:" + imageName + ".png"));

            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    @Given("user opens the app")
    public void openApp() {}

    @Then("user is on the (.*) page")
    public void validatePage(String pageName) {
        assertTrue("Home Page is not displayed",HomePage.isPageDisplayed());
    }

    @Given("(.*) is displayed")
    public void validateElementDisplayed(String element) {
        MobileElement mobileElement = HomePage.getElement(element);
        assertTrue("Element "+element+" is not present", Utilities.isElementDisplayed(mobileElement));
    }

    @Then("zoom value is set to {int}")
    public void validateZoomValue(int value) {
        int zoomValue = Integer.parseInt(HomePage.getZoomValue().replace("%",""));
        assertTrue("Zoom value doesn't match. Expected: "+value+" Actual: "+zoomValue,zoomValue==value);
    }

    @Then("(.*) is (enabled|disabled)")
    public void validateElementEnabled(String element, String elementState) {
        MobileElement mobileElement = HomePage.getElement(element);
        if(elementState.equals("enabled")){
            assertTrue("Element "+element+" is not enabled", Utilities.isElementEnabled(mobileElement));
        }else if(elementState.equals("disabled")){
            assertFalse("Element "+element+" is enabled", Utilities.isElementEnabled(mobileElement));
        }
    }

    @Given("user zooms (.*) to max value")
    public void zoomToMaxValue(String inOut) {
        if(inOut.equals("in")){
            MobileElement element = HomePage.getElement("zoom in button");
            while (Utilities.isElementEnabled(element)){
                Utilities.click(element);
            }
        }else if(inOut.equals("out")){
            MobileElement element = HomePage.getElement("zoom out button");
            while (Utilities.isElementEnabled(element)){
                Utilities.click(element);
            }
        }
    }

    @Given("user changes the orientation of the screen to (.*)")
    public void changeScreenOrientation(String orientation) {
        Utilities.setScreenOrientation(orientation);
    }

    @When("user clicks on (.*)")
    public void userClicksOnZoomInButton(String element) {
        Utilities.click(HomePage.getElement(element));
    }
}
