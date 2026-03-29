This is Cypress Demo
Overview:
1. Installed Cypress and Executed simple Login case
2. Understand default Timeout of the commands in cases of finding unavailable elements
3. How to interacte with basic element items: 
 - checkboxes
 - dropdown list
4. Simple structure POM (Page Object Model) in Cypress:
 - pages:
    - AmazonHomePage.js (return elements to execute search: textbox, seach button)
    - AmazonSearchResultPage.js (return search list )
 - tests
    - AmazonSearchTest.js (execute test by calling these elements from 2 pages )
5. Get Element Data by using cy.wrap()
6. Practice using WITHIN and EACH to get an element in a array
7. Get Data from API and Verify it (simple GET request)
8. Practice with Before and BeforeEach, make the code becomes clean and easy to maintain
9. Use API to login and Verify the HomePage is displayed successful