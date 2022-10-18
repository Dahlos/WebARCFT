document.addEventListener("DOMContentLoaded", () => {
  // const modelViewer = document.getElementById("printer-model");
  // const modelViewer = document.querySelector("model-viewer#printer-model");

  playAnimations();
});

const playAnimations = () => {
  let nextAnimation = "Cube.017Action";
  const modelViewer = document.getElementById("printer-model");
  modelViewer.setAttribute("animation-name", nextAnimation);
  setInterval(() => {
    modelViewer.setAttribute("animation-name", nextAnimation);
    if (nextAnimation === "Cube.017Action") {
      nextAnimation = "Cube.033Action";
    } else {
      nextAnimation = "Cube.017Action";
    }
    console.log(modelViewer.scale);
  }, 6000);
};
