package com.etergo.framework;

import io.appium.java_client.MobileElement;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.ScreenOrientation;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class Utilities {
    private static final Logger LOG = LoggerFactory.getLogger(Driver.class);
    private static final int DEFAULT_WAIT_TIME = 10;

    public static boolean isAndroid() {
        if (ConfigData.getDeviceOS().equals("Android")) {
            return true;
        }
        return false;
    }

    public static void waitTillElementVisible(int seconds, MobileElement element) {
        WebDriverWait webDriverWait = new WebDriverWait(Driver.getDriver(), seconds);
        webDriverWait.until(ExpectedConditions.visibilityOf(element));
    }

    public static boolean isElementDisplayed(MobileElement element) {
        try {
            waitTillElementVisible(DEFAULT_WAIT_TIME, element);
            return element.isDisplayed();

        } catch (NoSuchElementException e) {
            return false;
        } catch (WebDriverException e) {
            return false;
        }
    }

    public static boolean isElementEnabled(MobileElement element) {
        try {
            waitTillElementVisible(DEFAULT_WAIT_TIME, element);
            return element.isEnabled();
        } catch (NoSuchElementException e) {
            return false;
        } catch (WebDriverException e) {
            return false;
        }
    }

    public static void setScreenOrientation(String orientation) {
        if (orientation.equals("landscape")) {
            Driver.getDriver().rotate(ScreenOrientation.LANDSCAPE);
        } else {
            Driver.getDriver().rotate(ScreenOrientation.PORTRAIT);
        }
    }

    public static void click(MobileElement element) {
        try {
            waitTillElementVisible(DEFAULT_WAIT_TIME, element);
            element.click();
        } catch (NoSuchElementException e) {
        } catch (WebDriverException e) {
        }
    }

}
