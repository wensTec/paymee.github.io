const paymentForm = document.getElementById('paymentForm');
paymentForm.addEventListener("submit", payWithPaystack, false);

function payWithPaystack(e) {
    e.preventDefault();
    var handler = PaystackPop.setup({
        key: 'pk_test_26931bbf594b5d140084fa91497e9b5b1780233a', // Replace with your public key
        email: document.getElementById('email-address').value,
        amount: document.getElementById('amount').value * 100, // the amount value is multiplied by 100 to convert to the lowest currency unit
        currency: 'GHs', // Use GHS for Ghana Cedis or USD for US Dollars
        ref: '' + Math.floor((Math.random() * 1000000000) + 1), // Replace with a reference you generated
        callback: function(response) {
            //this happens after the payment is completed successfully
            var reference = response.reference;
            alert('Payment complete! Reference: ' + reference);
            // Make an AJAX call to your server with the reference to verify the transaction
        },
        onClose: function() {
            alert('Transaction was not completed, window closed.');
        },
    });
    handler.openIframe();
}