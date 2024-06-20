paypal
  .Buttons({
    style: {
      color: "blue",
      shape: "pill",
      label: "pay",
      height: 40,
    },
    createOrder: function (data, actions) {
      const amount = document.getElementById("amount").value;
      if (!amount || amount <= 0) {
        alert("Please enter a valid amount");
        return;
      }
      return actions.order
        .create({
          purchase_units: [
            {
              amount: {
                value: amount,
              },
            },
          ],
        })
        .then((orderID) => {
          console.log("Order ID:", orderID);
          return orderID;
        })
        .catch((err) => {
          console.error("createOrder Error:", err);
          alert("Failed to create order. Please try again.");
        });
    },
    onApprove: function (data, actions) {
      console.log("onApprove - Order ID:", data.orderID);
      return actions.order
        .capture()
        .then(function (details) {
          console.log("Transaction details:", details);
          alert("Transaction completed by " + details.payer.name.given_name);
        })
        .catch((err) => {
          console.error("onApprove Error:", err);
          alert("Failed to capture order. Please try again.");
        });
    },
    onError: function (err) {
      console.error("Buttons Error:", err);
      alert("An error occurred with the PayPal buttons. Please try again.");
    },
  })
  .render("#paypal-button-container");
