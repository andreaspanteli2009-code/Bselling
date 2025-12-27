function addReview() {
  let name = document.getElementById("name").value;
  let stars = document.getElementById("stars").value;
  let comment = document.getElementById("comment").value;

  if (!name || !comment) {
    alert("Please fill everything out");
    return;
  }

  let reviewBox = document.createElement("div");
  reviewBox.className = "review";
  reviewBox.innerHTML = `
    <strong>${name}</strong><br>
    ⭐ ${stars}/5<br>
    ${comment}
  `;

  document.getElementById("reviews").prepend(reviewBox);

  document.getElementById("name").value = "";
  document.getElementById("comment").value = "";
}
