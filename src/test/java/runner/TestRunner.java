package runner;

import com.etergo.framework.AppiumServer;
import com.etergo.framework.ConfigData;
import com.etergo.framework.Driver;
import com.etergo.framework.Utilities;
import com.etergo.pom.HomePage;
import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;
import org.apache.commons.io.FileUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.AfterSuite;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.BeforeSuite;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@CucumberOptions(features = {"src/test/features/"}
        , glue = {"stepdefinitions"}
        , plugin = {"pretty", "html:target/cucumber"}
        , tags = {"@regression"}
)
class TestRunner extends AbstractTestNGCucumberTests {

    private static final Logger LOG = LoggerFactory.getLogger(TestRunner.class);

    @BeforeSuite
    public static void beforeSuite() {
        killAllRunningNode();
        AppiumServer.buildAppiumService();
        AppiumServer.startAppiumServer();
        try {
            Path screenshotFolder = Paths.get(ConfigData.getPathToScreenshots());
            if (Files.exists(screenshotFolder)) {
                FileUtils.deleteDirectory(new File(ConfigData.getPathToScreenshots()));
            }
            LOG.info("Waiting for 5 seconds after starting server...");
            Thread.sleep(5000);
        } catch (Exception e) {
            LOG.error(e.getMessage());
        }
    }

    @BeforeMethod
    public static void beforeMethod() {
        Driver.initializeDriver();
        new HomePage();
        Utilities.setScreenOrientation("portrait");
    }

    @AfterMethod
    public static void afterMethod() {
        Driver.getDriver().closeApp();
    }


    @AfterSuite
    public static void afterSuite() {
        Driver.getDriver().removeApp(ConfigData.getDeviceBundleId());
        AppiumServer.stopAppiumServer();
    }


    public static void killAllRunningNode() {
        String[] command = {"/usr/bin/killall", "-KILL", "node"};
        try {
            Runtime.getRuntime().exec(command);
        } catch (IOException e) {
            LOG.error(e.getMessage());
        }
        LOG.info("Node is killed");
    }

}
