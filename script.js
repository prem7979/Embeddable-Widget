// import "styles.css";

document.addEventListener("DOMContentLoaded", function () {
  const urlForm = document.getElementById("urlForm");
  const urlInput = document.getElementById("urlInput");
  const resultContainer = document.getElementById("resultContainer");

  urlForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const url = urlInput.value;

    var base64Cred = btoa("prem.tolani79@gmail.com:3d9980739821832d");

    // Make a POST request to the DataForSEO API with 'max_crawl_pages' parameter
    fetch("https://sandbox.dataforseo.com/v3/on_page/task_post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + base64Cred,
      },
      body: JSON.stringify([
        {
          // Include the 'max_crawl_pages' parameter with a valid value
          target: url,
          enable_browser_render: true,
          load_resources: true,
          load_javascript: true,
          max_crawl_pages: 10, // Adjust this value as needed
        },
      ]),
    })
      .then((response) => response.json())
      .then((data) => {
        // Display the API response in the result container
        resultContainer.innerHTML = JSON.stringify(data, null, 2);
      })
      .catch((error) => {
        console.error("Error:", error);
        resultContainer.innerHTML = "An error occurred.";
      });
  });
});
