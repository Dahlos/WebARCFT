(() => {
  const modelViewer = document.querySelector('#printer-model');

  self.setInterval(() => {
    modelViewer.animationName = modelViewer.animationName === 'Cylinder.014Action' ?
      'Cube.033Action' : 'Cylinder.014Action';
  }, 5500.0);
})();