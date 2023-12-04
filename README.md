# INFO-2302-individual-Assignment
RM1 campaign 
 Describe the JavaScript interaction that you have created for the 1-page website. 
1. Page Load Event: When the webpage has finished loading (DOMContentLoaded event), the JavaScript code inside the function will run.

2. Form Detection: It looks for the donation form on the page using its ID (donationForm). If found, it proceeds; otherwise, it logs an error.

3. Form Submission Event: It adds an event listener to the 'submit' event form. When the form is submitted, the provided function runs.

4. Preventing Default Behavior: It prevents the default form submission behaviour (preventing the page from refreshing).

5. Fetching Form Data: It retrieves values from various input fields in the form (e.g., name, staff number, amount).
   
6. Creating a Confirmation Message: It creates a personalized confirmation message using the collected data.
   
7. Displaying Confirmation: It displays a pop-up alert with the confirmation message, thanking the user and showing their entered details.

8. Logging to Console: It logs messages to the console for debugging purposes.
   
This code ensures that when the user submits the form, their input is collected, a thank-you message is displayed, and the details are logged.
List of references to create my 1-page website:
1.https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event
2.https://stackoverflow.com/questions/8664486/javascript-code-to-stop-form-submission
3.https://www.w3schools.com/jsref/met_win_confirm.asp
4.https://www.w3schools.com/jsref/met_console_log.asp
