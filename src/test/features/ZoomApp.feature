Feature: Zoom App test

  Background: Open the app
    Given user opens the app
    Then user is on the home page

  @smoke @regression
  Scenario: App UI check
    Given header is displayed
    When zoom in button is displayed
    Then zoom percentage is displayed
    And zoom out button is displayed

 @regression
  Scenario: Check default zoom screen
    Given user opens the app
    Then zoom value is set to 100

  @regression
  Scenario: Check max zoom in
    Given user zooms in to max value
    Then zoom value is set to 200
    And zoom in button is disabled
    But zoom out button is enabled

  @regression
  Scenario: Check max zoom out
    Given user zooms out to max value
    Then zoom value is set to 25
    And zoom out button is disabled
    But zoom in button is enabled

  @regression
  Scenario: Check zoom value changes by value 25
    Given zoom value is set to 100
    When user clicks on zoom in button
    Then zoom value is set to 125
    When user clicks on zoom out button
    Then zoom value is set to 100

  @regression
  Scenario: Check zoom functionality in landscape mode
    Given user changes the orientation of the screen to landscape
    Then header is displayed
    Then zoom in button is displayed
    Then zoom percentage is displayed
    And zoom out button is displayed

