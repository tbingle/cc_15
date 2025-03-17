const riskDashboard = document.getElementById("riskDashboard");
//Print to console 
console.log("Risk Dashboard Loaded");

//Task 2
//Function to add a new risk item 
function addRiskItem(riskName, riskLevel, department) {
    //Create a new div element
    const riskCard = document.createElement("div");
    riskCard.classList.add("riskCard");
    if (riskLevel === "Low") {
        riskCard.style.backgroundColor = "green";  // Green for Low risk
    } else if (riskLevel === "Medium") {
        riskCard.style.backgroundColor = "yellow";  // Yellow for Medium risk
    } else if (riskLevel === "High") {
        riskCard.style.backgroundColor = "red";  // Red for High risk
    }
    //Create the content 
    riskCard.innerHTML = `
        <h3>${riskName}</h3>
        <p><strong>Risk Level:</strong> ${riskLevel}</p>
        <p><strong>Department:</strong> ${department}</p>
        <button class="resolveButton">Resolve</button>
    `;
    //New risk card to the dashboard
    riskDashboard.appendChild(riskCard);

const resolveButton = riskCard.querySelector(".resolveButton");
    resolveButton.addEventListener("click", function() {
        riskCard.remove();
    });
}
//Event listener for the form submission
document.getElementById("riskForm").addEventListener("submit", function(event) {
    event.preventDefault(); //Prevent page refresh 
    //Get the values from the form
    const riskName = document.getElementById("riskName").value;
    const riskLevel = document.getElementById("riskLevel").value;
    const department = document.getElementById("department").value;
    //Call the function to add the risk item
    addRiskItem(riskName, riskLevel, department);
    //Reset the form fields
    event.target.reset();
});

