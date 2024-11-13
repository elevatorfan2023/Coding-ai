document.addEventListener("DOMContentLoaded", () => {
  const storyForm = document.getElementById("story-form");
  const newsArticlesSection = document.getElementById("news-articles");

  // Event listener for story submission
  storyForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // Get form input values
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    // Create a new article element
    const article = document.createElement("article");
    article.classList.add("news-item");
    article.innerHTML = `
      <h3>${title}</h3>
      <p>${content}</p>
    `;

    // Add the new article to the news articles section
    newsArticlesSection.appendChild(article);

    // Clear the form
    storyForm.reset();
  });
});
