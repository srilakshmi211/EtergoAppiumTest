package com.etergo.pom;

import com.etergo.framework.Driver;
import com.etergo.framework.Utilities;
import io.appium.java_client.MobileElement;
import io.appium.java_client.pagefactory.AndroidFindBy;
import io.appium.java_client.pagefactory.AppiumFieldDecorator;
import org.openqa.selenium.support.PageFactory;

public class HomePage {

    private static final String PACKAGE_NAME = "com.etergo.techassessment";

    public HomePage() {
        PageFactory.initElements(new AppiumFieldDecorator(Driver.getDriver()), this);
    }

    @AndroidFindBy(id=PACKAGE_NAME+":id/btnZoomIn")
    private static MobileElement ZOOM_IN_BUTTON;

    @AndroidFindBy(id=PACKAGE_NAME+":id/btnZoomOut")
    private static MobileElement ZOOM_OUT_BUTTON;

    @AndroidFindBy(id=PACKAGE_NAME+":id/textViewZoomValue")
    private static MobileElement ZOOM_VALUE_TEXT;

    @AndroidFindBy(id=PACKAGE_NAME+":id/textViewHeader")
    private static MobileElement HEADER_TEXT;

    public static boolean isPageDisplayed(){
        if(Utilities.isElementDisplayed(HEADER_TEXT)){
            return true;
        }
        return false;
    }

    public static MobileElement getElement(String element){

        MobileElement mobileElement = null;
        switch (element){
            case "header":
                mobileElement = HEADER_TEXT;
                break;
            case "zoom in button":
                mobileElement = ZOOM_IN_BUTTON;
                break;
            case "zoom out button":
                mobileElement = ZOOM_OUT_BUTTON;
                break;
            case "zoom percentage":
                mobileElement = ZOOM_VALUE_TEXT;
                break;
        }
        return mobileElement;
    }

    public static String getZoomValue(){
        return ZOOM_VALUE_TEXT.getText();
    }

}
