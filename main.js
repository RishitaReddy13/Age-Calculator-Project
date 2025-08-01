const DateTime = luxon.DateTime;

function calculateAge() {
  const birthInput = document.getElementById("birthdate").value;
  const result = document.getElementById("result");

  if (!birthInput) {
    result.textContent = "Please select your birth date.";
    return;
  }

  const birthDate = DateTime.fromISO(birthInput);
  const now = DateTime.now();

  const age = now.diff(birthDate, ['years', 'months']).toObject();
  const years = Math.floor(age.years);
  const months = Math.floor(age.months);

  result.innerHTML = `You are <strong>${years} years ${months} months</strong> old`;
}
