function copyCode() {
    const txt = document.getElementById("codebtn");
    navigator.clipboard.writeText(txt.value)
    .then(() => {
      button.textContent = "Copied!";
      setTimeout(() => button.textContent = "Copy Text", 2000);
    })
    .catch(err => {
      console.error("Copy failed:", err);
    });
}