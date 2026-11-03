const searchBtn = document.getElementById("search-btn");
const queryInput = document.getElementById("query");
const result = document.getElementById("result");

searchBtn.addEventListener("click", async () => {
  const query = queryInput.value.trim();
  const url = `superheroes.php?query=${encodeURIComponent(query)}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Server responded with ${response.status}`);
    }

    result.innerHTML = await response.text();
  } catch (error) {
    result.innerHTML = '<p class="not-found">Something went wrong. Please try again.</p>';
    console.error("Request failed:", error);
  }
});