const themeButton = document.querySelector(".theme-button");

themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  themeButton.classList.toggle("dark-button");

  saveThemeToLocalStorage();
});

// WE SAVE LAST THEME TO LOCAL STORAGE
const saveThemeToLocalStorage = () => {
  if (document.body.classList.contains("dark-theme")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
};

// UPDATE THEME WHEN OUR SITE LOADED
const updateTheme = () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
    themeButton.classList.add("dark-button");
  } else {
    document.body.classList.remove("dark-theme");
    themeButton.classList.remove("dark-button");
  }
};

window.addEventListener("DOMContentLoaded", updateTheme);
