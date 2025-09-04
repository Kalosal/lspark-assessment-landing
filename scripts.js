document.addEventListener("DOMContentLoaded", (event) => {
  const iframe = document.querySelector(".chat-container iframe");
  if (iframe) {
    const urlParams = new URLSearchParams(window.location.search);
    const userParam = urlParams.get("u");

    console.log({ userParam });
    if (userParam) {
      const currentSrc = iframe.src;
      const newSrc = currentSrc + `&u=${userParam}`;
      iframe.src = newSrc;
    }
  }
});

function startConversation() {
  const button = document.querySelector(".cta-button");
  const iframe = document.querySelector(".chat-container");

  if (button && iframe) {
    button.style.display = "none";
    iframe.style.display = "block";
  }
}
