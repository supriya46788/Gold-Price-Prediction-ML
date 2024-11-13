document.getElementById('goldForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const weight = document.getElementById('weight').value;
    const carat = document.getElementById('carat').value;
    let pricePerGram;

    // Gold prices as of 18th October 2024
    if (carat === '22') {
        pricePerGram = 5200; // Price of 22 carat gold per gram
    } else if (carat === '24') {
        pricePerGram = 5600; // Price of 24 carat gold per gram
    }

    const totalPrice = weight * pricePerGram;
    document.getElementById('result').textContent = `Total Price: ₹${totalPrice.toFixed(2)}`;
});


// document.getElementById('goldForm').addEventListener('submit', async function(event) {
//     event.preventDefault();

//     const weight = document.getElementById('weight').value;
//     const carat = document.getElementById('carat').value;

//     // API endpoint for machine learning prediction
//     const apiUrl = "https://your-backend-api.com/predict-gold-price"; // Replace with actual API

//     // Make a request to the API with the carat and weight
//     try {
//         const response = await fetch(apiUrl, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 weight: weight,
//                 carat: carat
//             })
//         });

//         const data = await response.json();

//         if (response.ok) {
//             // Display the predicted price
//             document.getElementById('result').textContent = `Predicted Price: ₹${data.predictedPrice}`;
//         } else {
//             // Handle errors
//             document.getElementById('result').textContent = 'Error predicting price. Try again later.';
//         }
//     } catch (error) {
//         console.error('Error:', error);
//         document.getElementById('result').textContent = 'Error predicting price. Try again later.';
//     }
// });
