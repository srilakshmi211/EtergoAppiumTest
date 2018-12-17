package com.etergo.framework;

import io.appium.java_client.MobileDriver;
import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.ios.IOSDriver;
import io.appium.java_client.remote.MobileCapabilityType;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.net.MalformedURLException;
import java.net.URL;

public class Driver {
    private static MobileDriver<MobileElement> driver;
    private static final Logger LOG = LoggerFactory.getLogger(Driver.class);

    private static DesiredCapabilities setDesiredCapabilities() {
        DesiredCapabilities capabilities = new DesiredCapabilities();
        capabilities.setCapability(MobileCapabilityType.PLATFORM_NAME, ConfigData.getDeviceOS());
        capabilities.setCapability(MobileCapabilityType.DEVICE_NAME, ConfigData.getDeviceName());
        capabilities.setCapability(MobileCapabilityType.APP, ConfigData.getPathToApp());
//        capabilities.setCapability("noReset", false);
        if (Utilities.isAndroid()) {
            /** This is required in case of Android debug build **/
            capabilities.setCapability("appWaitActivity", "*");
            capabilities.setCapability("automationName", "uiautomator2");
        } else {
            //capabilities.setCapability("automationName", "XCUITest");
            /** Add below capability for iOS while running on real device **/
            //capabilities.setCapability("udid", "0d86e45c7e5664e14b421eb7f3c29f93c4d5628c");
            /** Add below capability for iOS if you need xcode logs **/
            //capabilities.setCapability("showXcodeLog", "true");
        }
        return capabilities;
    }

    public static MobileDriver<MobileElement> initializeDriver() {
        String serverURL = ConfigData.getAppiumServerUrl(ConfigData.getAppiumPort());
        LOG.info("serverURL::: " + serverURL);
        try {
            if (Utilities.isAndroid())
                driver = new AndroidDriver<>(new URL(serverURL), setDesiredCapabilities());
            else
                driver = new IOSDriver<>(new URL(serverURL), setDesiredCapabilities());
        } catch (MalformedURLException e) {
            LOG.error("Malformed URL exception : " + e.getMessage());
        }
        return driver;
    }

    public static MobileDriver<MobileElement> getDriver() {
        return driver;
    }
}

