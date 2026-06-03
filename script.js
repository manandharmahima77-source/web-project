// Greeting
const greeting = document.getElementById("greeting");

if (greeting) {
    const hour = new Date().getHours();

    if (hour < 12) greeting.textContent = "Good Morning!";
    else if (hour < 18) greeting.textContent = "Good Afternoon!";
    else greeting.textContent = "Good Evening!";

    greeting.textContent += " I'm Mahima!";
}

// Dark Mode
const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {

    if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light-mode");
        themeBtn.innerHTML = "🌙 Dark Mode";
    } else {
        themeBtn.innerHTML = "☀️ Light Mode";
    }

    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");

        const isLight = document.body.classList.contains("light-mode");

        themeBtn.innerHTML = isLight ? "🌙 Dark Mode" : "☀️ Light Mode";

        localStorage.setItem("theme", isLight ? "light" : "dark");
    });
}


// ✅ HOBBIES (YOUR 3 IMAGES)
const hobbies = [
    {
        img: "crocheting.jpg",
        title: "Crocheting",
        text: "I enjoy making handmade crochet items."
    },
    {
        img: "singing.jpg",
        title: "Singing",
        text: "I love singing and performing."
    },
    {
        img: "dancing.jpg",
        title: "Dancing",
        text: "Dancing keeps me active and happy."
    }
];

let index = 0;

function updateSlider() {
    document.getElementById("hobbyImage").src = hobbies[index].img;
    document.getElementById("hobbyTitle").textContent = hobbies[index].title;
    document.getElementById("hobbyText").textContent = hobbies[index].text;
}

function nextImage() {
    index = (index + 1) % hobbies.length;
    updateSlider();
}

function prevImage() {
    index = (index - 1 + hobbies.length) % hobbies.length;
    updateSlider();
}