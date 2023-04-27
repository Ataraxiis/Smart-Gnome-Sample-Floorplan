document.getElementById('svg-object').addEventListener('load', function() {
    const svgDocument = this.contentDocument;
    const lightBedroom = svgDocument.getElementById('light_bedroom');
    const buttonBedroom = svgDocument.getElementById('button_bedroom');
  
    if (lightBedroom && buttonBedroom) {
      buttonBedroom.addEventListener('click', () => {
        const currentOpacity = lightBedroom.style.opacity;
  
        if (currentOpacity === '0') {
          lightBedroom.style.opacity = '1';
        } else {
          lightBedroom.style.opacity = '0';
        }
      });
    }
  });
  