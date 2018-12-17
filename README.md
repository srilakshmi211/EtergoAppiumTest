# EtergoAppiumTest
This repository contains tests for Etergo Zoom app

Automation framework is a gradle project which uses Appium, Cucumber, TestNG and Java. The IDE used for developing is IntelliJ IDEA.

*PREREQUISITES: Appium and Android SDK needs to be installed on the system where test automation needs to be executed*

## To execute tests:

1. Clone the project 
2. Import the project in IntelliJ IDEA as a gradle project.
3. To run the tests, use the command: `gradle clean test`

At the end, screenshots are taken for failed scenario and stored in /screenshots folder for future reference and test report is generated in /target/cucumber/index.html file.

*NOTE: Automation framework was developed on Mac.*
