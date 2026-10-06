// =========================================
// WE HAPPY FEW — LAUNCH COUNTDOWN
// =========================================

// November 4, 2027 at 1:00 PM Central Time.
// On this date, Central Time is CST (UTC-6).
const launchDate = new Date("2027-11-04T19:00:00Z");

const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const messageElement = document.getElementById("countdown-message");


function updateCountdown() {

    const now = new Date();
    const difference = launchDate.getTime() - now.getTime();

    // Launch has arrived.
    if (difference <= 0) {

        daysElement.textContent = "000";
        hoursElement.textContent = "00";
        minutesElement.textContent = "00";
        secondsElement.textContent = "00";

        messageElement.textContent =
            "WoW Forever has launched.";

        return;
    }

    const totalSeconds = Math.floor(difference / 1000);

    const days = Math.floor(totalSeconds / 86400);

    const hours = Math.floor(
        (totalSeconds % 86400) / 3600
    );

    const minutes = Math.floor(
        (totalSeconds % 3600) / 60
    );

    const seconds = totalSeconds % 60;


    daysElement.textContent =
        String(days).padStart(3, "0");

    hoursElement.textContent =
        String(hours).padStart(2, "0");

    minutesElement.textContent =
        String(minutes).padStart(2, "0");

    secondsElement.textContent =
        String(seconds).padStart(2, "0");
}


// Update immediately so the page never
// initially displays stale placeholder values.
updateCountdown();

// Then update once every second.
setInterval(updateCountdown, 1000);