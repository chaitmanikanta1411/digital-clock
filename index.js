let is24Hour = true; 

function digitalClock() {
  const time = new Date();
  let hours = time.getHours();
  let minutes = time.getMinutes().toString().padStart(2, '0');
  let seconds = time.getSeconds().toString().padStart(2, '0');
  let ampm = "";

  if (!is24Hour) {
    ampm = hours >= 12 ? " PM" : " AM";
    hours = hours % 12;
    if (hours === 0) hours = 12;
  }

  hours = hours.toString().padStart(2, '0');
  document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}${ampm}`;
}


document.getElementById('toggleFormatBtn').addEventListener('click', function() {
  is24Hour = !is24Hour;
  this.textContent = is24Hour ? "Switch to 12-Hour Format" : "Switch to 24-Hour Format";
  digitalClock(); 
});

setInterval(digitalClock, 1000);
digitalClock();
