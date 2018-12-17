$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/features/ZoomApp.feature");
formatter.feature({
  "name": "Zoom App test",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "Open the app",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user opens the app",
  "keyword": "Given "
});
formatter.match({
  "location": "CommonSteps.openApp()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps.validatePage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "App UI check",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "header is displayed",
  "keyword": "Given "
});
formatter.match({
  "location": "CommonSteps.validateElementDisplayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "zoom in button is displayed",
  "keyword": "When "
});
formatter.match({
  "location": "CommonSteps.validateElementDisplayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "zoom percentage is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps.validateElementDisplayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "zoom out button is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.validateElementDisplayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Open the app",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user opens the app",
  "keyword": "Given "
});
formatter.match({
  "location": "CommonSteps.openApp()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps.validatePage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Check default zoom screen",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "user opens the app",
  "keyword": "Given "
});
formatter.match({
  "location": "CommonSteps.openApp()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "zoom value is set to 100",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps.validateZoomValue(int)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Open the app",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user opens the app",
  "keyword": "Given "
});
formatter.match({
  "location": "CommonSteps.openApp()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps.validatePage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Check max zoom in",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "user zooms in to max value",
  "keyword": "Given "
});
formatter.match({
  "location": "CommonSteps.zoomToMaxValue(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "zoom value is set to 200",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps.validateZoomValue(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "zoom in button is disabled",
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.validateElementEnabled(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "zoom out button is enabled",
  "keyword": "But "
});
formatter.match({
  "location": "CommonSteps.validateElementEnabled(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Open the app",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user opens the app",
  "keyword": "Given "
});
formatter.match({
  "location": "CommonSteps.openApp()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps.validatePage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Check max zoom out",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "user zooms out to max value",
  "keyword": "Given "
});
formatter.match({
  "location": "CommonSteps.zoomToMaxValue(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "zoom value is set to 25",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps.validateZoomValue(int)"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: An unknown server-side error occurred while processing the command. Original error: Could not proxy command to remote server. Original error: Error: read ECONNRESET\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027bsmac0708.bestcorp.net\u0027, ip: \u0027fe80:0:0:0:18bb:975a:ec3c:85b4%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.6\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities {app: /Users/sri.shankar/Document..., appPackage: com.etergo.techassessment, appWaitActivity: *, automationName: uiautomator2, databaseEnabled: false, desired: {app: /Users/sri.shankar/Document..., appWaitActivity: *, automationName: uiautomator2, deviceName: Emulator, platformName: android}, deviceApiLevel: 27, deviceManufacturer: Google, deviceModel: Android SDK built for x86, deviceName: emulator-5554, deviceScreenDensity: 420, deviceScreenSize: 1080x1920, deviceUDID: emulator-5554, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, pixelRatio: 3.375, platform: LINUX, platformName: Android, platformVersion: 8.1.0, statBarHeight: 81, takesScreenshot: true, viewportRect: {height: 1677, left: 0, top: 81, width: 1080}, warnings: {}, webStorageEnabled: false}\nSession ID: cb90e8b6-c98e-4e1f-94de-2edf80b67423\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:231)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:46)\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\n\tat io.appium.java_client.HasSessionDetails.getSessionDetails(HasSessionDetails.java:39)\n\tat io.appium.java_client.HasSessionDetails.getSessionDetail(HasSessionDetails.java:56)\n\tat io.appium.java_client.HasSessionDetails.isBrowser(HasSessionDetails.java:86)\n\tat io.appium.java_client.AppiumDriver.isBrowser(AppiumDriver.java:271)\n\tat io.appium.java_client.pagefactory.utils.WebDriverUnpackUtility.lambda$0(WebDriverUnpackUtility.java:87)\n\tat java.util.Optional.map(Optional.java:215)\n\tat io.appium.java_client.pagefactory.utils.WebDriverUnpackUtility.getCurrentContentType(WebDriverUnpackUtility.java:83)\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.getBy(AppiumElementLocator.java:90)\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.findElement(AppiumElementLocator.java:117)\n\tat io.appium.java_client.pagefactory.interceptors.InterceptorOfASingleElement.intercept(InterceptorOfASingleElement.java:60)\n\tat io.appium.java_client.android.AndroidElement$$EnhancerByCGLIB$$b598166c.getText(\u003cgenerated\u003e)\n\tat com.etergo.pom.HomePage.getZoomValue(HomePage.java:58)\n\tat stepdefinitions.CommonSteps.validateZoomValue(CommonSteps.java:57)\n\tat ✽.zoom value is set to 25(src/test/features/ZoomApp.feature:29)\n",
  "status": "failed"
});
formatter.step({
  "name": "zoom out button is disabled",
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.validateElementEnabled(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "zoom in button is enabled",
  "keyword": "But "
});
formatter.match({
  "location": "CommonSteps.validateElementEnabled(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.WebDriverException: An unknown server-side error occurred while processing the command. Original error: Could not proxy command to remote server. Original error: Error: read ECONNRESET\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027bsmac0708.bestcorp.net\u0027, ip: \u0027fe80:0:0:0:18bb:975a:ec3c:85b4%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.6\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities {app: /Users/sri.shankar/Document..., appPackage: com.etergo.techassessment, appWaitActivity: *, automationName: uiautomator2, databaseEnabled: false, desired: {app: /Users/sri.shankar/Document..., appWaitActivity: *, automationName: uiautomator2, deviceName: Emulator, platformName: android}, deviceApiLevel: 27, deviceManufacturer: Google, deviceModel: Android SDK built for x86, deviceName: emulator-5554, deviceScreenDensity: 420, deviceScreenSize: 1080x1920, deviceUDID: emulator-5554, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, pixelRatio: 3.375, platform: LINUX, platformName: Android, platformVersion: 8.1.0, statBarHeight: 81, takesScreenshot: true, viewportRect: {height: 1677, left: 0, top: 81, width: 1080}, warnings: {}, webStorageEnabled: false}\nSession ID: cb90e8b6-c98e-4e1f-94de-2edf80b67423\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:231)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:46)\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:289)\n\tat stepdefinitions.CommonSteps.onTestFailure(CommonSteps.java:29)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\n\tat cucumber.runner.TestCase.run(TestCase.java:48)\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\n\tat cucumber.api.testng.TestNGCucumberRunner.runScenario(TestNGCucumberRunner.java:68)\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.runScenario(AbstractTestNGCucumberTests.java:22)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\n\tat org.testng.TestRunner.run(TestRunner.java:505)\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\n\tat org.testng.TestNG.run(TestNG.java:1017)\n\tat org.gradle.api.internal.tasks.testing.testng.TestNGTestClassProcessor.runTests(TestNGTestClassProcessor.java:129)\n\tat org.gradle.api.internal.tasks.testing.testng.TestNGTestClassProcessor.stop(TestNGTestClassProcessor.java:88)\n\tat org.gradle.api.internal.tasks.testing.SuiteTestClassProcessor.stop(SuiteTestClassProcessor.java:61)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:35)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:24)\n\tat org.gradle.internal.dispatch.ContextClassLoaderDispatch.dispatch(ContextClassLoaderDispatch.java:32)\n\tat org.gradle.internal.dispatch.ProxyDispatchAdapter$DispatchingInvocationHandler.invoke(ProxyDispatchAdapter.java:93)\n\tat com.sun.proxy.$Proxy1.stop(Unknown Source)\n\tat org.gradle.api.internal.tasks.testing.worker.TestWorker.stop(TestWorker.java:119)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:35)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:24)\n\tat org.gradle.internal.remote.internal.hub.MessageHubBackedObjectConnection$DispatchWrapper.dispatch(MessageHubBackedObjectConnection.java:146)\n\tat org.gradle.internal.remote.internal.hub.MessageHubBackedObjectConnection$DispatchWrapper.dispatch(MessageHubBackedObjectConnection.java:128)\n\tat org.gradle.internal.remote.internal.hub.MessageHub$Handler.run(MessageHub.java:404)\n\tat org.gradle.internal.concurrent.ExecutorPolicy$CatchAndRecordFailures.onExecute(ExecutorPolicy.java:63)\n\tat org.gradle.internal.concurrent.ManagedExecutorImpl$1.run(ManagedExecutorImpl.java:46)\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)\n\tat org.gradle.internal.concurrent.ThreadFactoryImpl$ManagedThreadRunnable.run(ThreadFactoryImpl.java:55)\n\tat java.lang.Thread.run(Thread.java:748)\n",
  "status": "failed"
});
formatter.background({
  "name": "Open the app",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user opens the app",
  "keyword": "Given "
});
formatter.match({
  "location": "CommonSteps.openApp()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps.validatePage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Check zoom value changes by value 25",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "zoom value is set to 100",
  "keyword": "Given "
});
formatter.match({
  "location": "CommonSteps.validateZoomValue(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on zoom in button",
  "keyword": "When "
});
formatter.match({
  "location": "CommonSteps.userClicksOnZoomInButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "zoom value is set to 125",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps.validateZoomValue(int)"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: An unknown server-side error occurred while processing the command. Original error: Could not proxy command to remote server. Original error: Error: read ECONNRESET\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027bsmac0708.bestcorp.net\u0027, ip: \u0027fe80:0:0:0:18bb:975a:ec3c:85b4%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.6\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities {app: /Users/sri.shankar/Document..., appPackage: com.etergo.techassessment, appWaitActivity: *, automationName: uiautomator2, databaseEnabled: false, desired: {app: /Users/sri.shankar/Document..., appWaitActivity: *, automationName: uiautomator2, deviceName: Emulator, platformName: android}, deviceApiLevel: 27, deviceManufacturer: Google, deviceModel: Android SDK built for x86, deviceName: emulator-5554, deviceScreenDensity: 420, deviceScreenSize: 1080x1920, deviceUDID: emulator-5554, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, pixelRatio: 3.375, platform: LINUX, platformName: Android, platformVersion: 8.1.0, statBarHeight: 81, takesScreenshot: true, viewportRect: {height: 1677, left: 0, top: 81, width: 1080}, warnings: {}, webStorageEnabled: false}\nSession ID: 062db7b8-24c1-40d8-bd5f-38e4f49250ad\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:231)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:46)\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\n\tat io.appium.java_client.HasSessionDetails.getSessionDetails(HasSessionDetails.java:39)\n\tat io.appium.java_client.HasSessionDetails.getSessionDetail(HasSessionDetails.java:56)\n\tat io.appium.java_client.HasSessionDetails.isBrowser(HasSessionDetails.java:86)\n\tat io.appium.java_client.AppiumDriver.isBrowser(AppiumDriver.java:271)\n\tat io.appium.java_client.pagefactory.utils.WebDriverUnpackUtility.lambda$0(WebDriverUnpackUtility.java:87)\n\tat java.util.Optional.map(Optional.java:215)\n\tat io.appium.java_client.pagefactory.utils.WebDriverUnpackUtility.getCurrentContentType(WebDriverUnpackUtility.java:83)\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.getBy(AppiumElementLocator.java:90)\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.findElement(AppiumElementLocator.java:117)\n\tat io.appium.java_client.pagefactory.interceptors.InterceptorOfASingleElement.intercept(InterceptorOfASingleElement.java:60)\n\tat io.appium.java_client.android.AndroidElement$$EnhancerByCGLIB$$b598166c.getText(\u003cgenerated\u003e)\n\tat com.etergo.pom.HomePage.getZoomValue(HomePage.java:58)\n\tat stepdefinitions.CommonSteps.validateZoomValue(CommonSteps.java:57)\n\tat ✽.zoom value is set to 125(src/test/features/ZoomApp.feature:37)\n",
  "status": "failed"
});
formatter.step({
  "name": "user clicks on zoom out button",
  "keyword": "When "
});
formatter.match({
  "location": "CommonSteps.userClicksOnZoomInButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "zoom value is set to 100",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps.validateZoomValue(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.WebDriverException: An unknown server-side error occurred while processing the command. Original error: Could not proxy command to remote server. Original error: Error: read ECONNRESET\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027bsmac0708.bestcorp.net\u0027, ip: \u0027fe80:0:0:0:18bb:975a:ec3c:85b4%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.6\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities {app: /Users/sri.shankar/Document..., appPackage: com.etergo.techassessment, appWaitActivity: *, automationName: uiautomator2, databaseEnabled: false, desired: {app: /Users/sri.shankar/Document..., appWaitActivity: *, automationName: uiautomator2, deviceName: Emulator, platformName: android}, deviceApiLevel: 27, deviceManufacturer: Google, deviceModel: Android SDK built for x86, deviceName: emulator-5554, deviceScreenDensity: 420, deviceScreenSize: 1080x1920, deviceUDID: emulator-5554, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, pixelRatio: 3.375, platform: LINUX, platformName: Android, platformVersion: 8.1.0, statBarHeight: 81, takesScreenshot: true, viewportRect: {height: 1677, left: 0, top: 81, width: 1080}, warnings: {}, webStorageEnabled: false}\nSession ID: 062db7b8-24c1-40d8-bd5f-38e4f49250ad\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:231)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:46)\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:289)\n\tat stepdefinitions.CommonSteps.onTestFailure(CommonSteps.java:29)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\n\tat cucumber.runner.TestCase.run(TestCase.java:48)\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\n\tat cucumber.api.testng.TestNGCucumberRunner.runScenario(TestNGCucumberRunner.java:68)\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.runScenario(AbstractTestNGCucumberTests.java:22)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\n\tat org.testng.TestRunner.run(TestRunner.java:505)\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\n\tat org.testng.TestNG.run(TestNG.java:1017)\n\tat org.gradle.api.internal.tasks.testing.testng.TestNGTestClassProcessor.runTests(TestNGTestClassProcessor.java:129)\n\tat org.gradle.api.internal.tasks.testing.testng.TestNGTestClassProcessor.stop(TestNGTestClassProcessor.java:88)\n\tat org.gradle.api.internal.tasks.testing.SuiteTestClassProcessor.stop(SuiteTestClassProcessor.java:61)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:35)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:24)\n\tat org.gradle.internal.dispatch.ContextClassLoaderDispatch.dispatch(ContextClassLoaderDispatch.java:32)\n\tat org.gradle.internal.dispatch.ProxyDispatchAdapter$DispatchingInvocationHandler.invoke(ProxyDispatchAdapter.java:93)\n\tat com.sun.proxy.$Proxy1.stop(Unknown Source)\n\tat org.gradle.api.internal.tasks.testing.worker.TestWorker.stop(TestWorker.java:119)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:35)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:24)\n\tat org.gradle.internal.remote.internal.hub.MessageHubBackedObjectConnection$DispatchWrapper.dispatch(MessageHubBackedObjectConnection.java:146)\n\tat org.gradle.internal.remote.internal.hub.MessageHubBackedObjectConnection$DispatchWrapper.dispatch(MessageHubBackedObjectConnection.java:128)\n\tat org.gradle.internal.remote.internal.hub.MessageHub$Handler.run(MessageHub.java:404)\n\tat org.gradle.internal.concurrent.ExecutorPolicy$CatchAndRecordFailures.onExecute(ExecutorPolicy.java:63)\n\tat org.gradle.internal.concurrent.ManagedExecutorImpl$1.run(ManagedExecutorImpl.java:46)\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)\n\tat org.gradle.internal.concurrent.ThreadFactoryImpl$ManagedThreadRunnable.run(ThreadFactoryImpl.java:55)\n\tat java.lang.Thread.run(Thread.java:748)\n",
  "status": "failed"
});
formatter.background({
  "name": "Open the app",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user opens the app",
  "keyword": "Given "
});
formatter.match({
  "location": "CommonSteps.openApp()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps.validatePage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Check zoom functionality in landscape mode",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "user changes the orientation of the screen to landscape",
  "keyword": "Given "
});
formatter.match({
  "location": "CommonSteps.changeScreenOrientation(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "header is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps.validateElementDisplayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "zoom in button is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps.validateElementDisplayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "zoom percentage is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps.validateElementDisplayed(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: Element zoom percentage is not present\n\tat org.testng.AssertJUnit.fail(AssertJUnit.java:59)\n\tat org.testng.AssertJUnit.assertTrue(AssertJUnit.java:24)\n\tat stepdefinitions.CommonSteps.validateElementDisplayed(CommonSteps.java:52)\n\tat ✽.zoom percentage is displayed(src/test/features/ZoomApp.feature:46)\n",
  "status": "failed"
});
formatter.step({
  "name": "zoom out button is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.validateElementDisplayed(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.WebDriverException: An unknown server-side error occurred while processing the command. Original error: Could not proxy command to remote server. Original error: Error: read ECONNRESET\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027bsmac0708.bestcorp.net\u0027, ip: \u0027fe80:0:0:0:18bb:975a:ec3c:85b4%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.6\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities {app: /Users/sri.shankar/Document..., appPackage: com.etergo.techassessment, appWaitActivity: *, automationName: uiautomator2, databaseEnabled: false, desired: {app: /Users/sri.shankar/Document..., appWaitActivity: *, automationName: uiautomator2, deviceName: Emulator, platformName: android}, deviceApiLevel: 27, deviceManufacturer: Google, deviceModel: Android SDK built for x86, deviceName: emulator-5554, deviceScreenDensity: 420, deviceScreenSize: 1080x1920, deviceUDID: emulator-5554, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, pixelRatio: 3.375, platform: LINUX, platformName: Android, platformVersion: 8.1.0, statBarHeight: 81, takesScreenshot: true, viewportRect: {height: 1677, left: 0, top: 81, width: 1080}, warnings: {}, webStorageEnabled: false}\nSession ID: 9ca20c9e-d6af-4dd5-98db-e59358d40e6a\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:231)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:46)\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:289)\n\tat stepdefinitions.CommonSteps.onTestFailure(CommonSteps.java:29)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\n\tat cucumber.runner.TestCase.run(TestCase.java:48)\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\n\tat cucumber.api.testng.TestNGCucumberRunner.runScenario(TestNGCucumberRunner.java:68)\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.runScenario(AbstractTestNGCucumberTests.java:22)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\n\tat org.testng.TestRunner.run(TestRunner.java:505)\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\n\tat org.testng.TestNG.run(TestNG.java:1017)\n\tat org.gradle.api.internal.tasks.testing.testng.TestNGTestClassProcessor.runTests(TestNGTestClassProcessor.java:129)\n\tat org.gradle.api.internal.tasks.testing.testng.TestNGTestClassProcessor.stop(TestNGTestClassProcessor.java:88)\n\tat org.gradle.api.internal.tasks.testing.SuiteTestClassProcessor.stop(SuiteTestClassProcessor.java:61)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:35)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:24)\n\tat org.gradle.internal.dispatch.ContextClassLoaderDispatch.dispatch(ContextClassLoaderDispatch.java:32)\n\tat org.gradle.internal.dispatch.ProxyDispatchAdapter$DispatchingInvocationHandler.invoke(ProxyDispatchAdapter.java:93)\n\tat com.sun.proxy.$Proxy1.stop(Unknown Source)\n\tat org.gradle.api.internal.tasks.testing.worker.TestWorker.stop(TestWorker.java:119)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:35)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:24)\n\tat org.gradle.internal.remote.internal.hub.MessageHubBackedObjectConnection$DispatchWrapper.dispatch(MessageHubBackedObjectConnection.java:146)\n\tat org.gradle.internal.remote.internal.hub.MessageHubBackedObjectConnection$DispatchWrapper.dispatch(MessageHubBackedObjectConnection.java:128)\n\tat org.gradle.internal.remote.internal.hub.MessageHub$Handler.run(MessageHub.java:404)\n\tat org.gradle.internal.concurrent.ExecutorPolicy$CatchAndRecordFailures.onExecute(ExecutorPolicy.java:63)\n\tat org.gradle.internal.concurrent.ManagedExecutorImpl$1.run(ManagedExecutorImpl.java:46)\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)\n\tat org.gradle.internal.concurrent.ThreadFactoryImpl$ManagedThreadRunnable.run(ThreadFactoryImpl.java:55)\n\tat java.lang.Thread.run(Thread.java:748)\n",
  "status": "failed"
});
});