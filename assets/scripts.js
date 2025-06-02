// Generate copyright year in format: (c) 2024-25 Hackframe Research

window.addEventListener('DOMContentLoaded', () => {
  const video = document.querySelector('.bg-video');
  if (video) {
    video.playbackRate = 0.6; // Slow down to 50% speed
  }
});

(function () {
  const startYear = 2024;
  const currentYear = new Date().getFullYear();
  const shortCurrentYear = currentYear.toString().slice(-2);
  const copyrightElem = document.getElementById('copyright');

  if (currentYear === startYear) {
    copyrightElem.textContent = `© ${startYear} Hackframe Research`;
  } else if (currentYear > startYear) {
    copyrightElem.textContent = `© ${startYear}-${shortCurrentYear} Hackframe Research`;
  } else {
    // fallback if currentYear < startYear for some reason
    copyrightElem.textContent = `© ${startYear} Hackframe Research`;
  }
})();
