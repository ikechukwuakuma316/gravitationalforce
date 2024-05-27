function calculateGForce() {
    const mass1 = parseFloat(document.getElementById("mass1").value);
    const mass2 = parseFloat(document.getElementById("mass2").value);
    const rsquared = parseFloat(document.getElementById("rsquared").value);

    if (isNaN(mass1) || isNaN(mass2) || isNaN(rsquared) || rsquared === 0) {
        document.getElementById("answer").innerText = 'Enter correct input values';
    } else {
        const force = gravitationalForce(mass1, mass2, rsquared);
        document.getElementById("answer").innerText = `${force.toFixed(4)} N`;
    }
}

function gravitationalForce(mass1, mass2, rsquared){
    const G = 6.67430e-11; 
    return G * (mass1 * mass2) / rsquared * rsquared;
}
  
    

