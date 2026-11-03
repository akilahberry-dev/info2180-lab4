const searchBtn = document.getElementById("search-btn");

searchBtn.addEventListener("click", async () => {
  try {
    const response = await fetch("superheroes.php");

    if (!response.ok) {
      throw new Error(`Server responded with ${response.status}`);
    }

    const data = await response.text();
    alert(data);
  } catch (error) {
    console.error("Request failed:", error);
  }
});