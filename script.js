document.addEventListener('DOMContentLoaded', function() {
    var donationForm = document.getElementById('donationForm');

    if (donationForm) {
        console.log('Form found!');
        
        donationForm.addEventListener('submit', function(event) {
            event.preventDefault(); 

            var name = document.getElementById('name').value;
            var staffNo = document.getElementById('staffNo').value;
            var department = document.getElementById('department').value;
            var contactNo = document.getElementById('contactNo').value;
            var email = document.getElementById('email').value;
            var amount = document.getElementById('amount').value;
            var startDate = document.getElementById('startDate').value;
            var endDate = document.getElementById('endDate').value;

            var confirmationMessage = `Thank you, ${name}!\nYou have successfully saved your contribution details:\n\nAmount Deducted: RM ${amount}\nDate Range: ${startDate} to ${endDate}`;
            alert(confirmationMessage);

            console.log('Confirmation message displayed.');

    });
    } else {
        console.error('Form not found!');
    }
});
