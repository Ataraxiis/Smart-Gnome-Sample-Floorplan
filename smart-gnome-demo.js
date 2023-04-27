document.getElementById('svg-object').addEventListener('load', function() {
    const svgDocument = this.contentDocument;
    const lightBedroom = svgDocument.getElementById('light_bedroom');
    const buttonBedroom = svgDocument.getElementById('button_bedroom');
    const lightKitchen = svgDocument.getElementById('light_kitchen');
    const buttonKitchenLight = svgDocument.getElementById('button_kitchen_light');
    const lightGarden = svgDocument.getElementById('light_garden');
    const buttonGardenLight = svgDocument.getElementById('button_garden_light');
    const lightCloset = svgDocument.getElementById('light_closet');
    const buttonCloset = svgDocument.getElementById('button_closet');
    const lightSpareRoom = svgDocument.getElementById('light_spareroom');
    const buttonSpareRoom = svgDocument.getElementById('button_spareroom');
    const cameraImage = svgDocument.getElementById('image19542');
    const buttonCamera = svgDocument.getElementById('button_kitchen_camera');
    const buttonLocked = svgDocument.getElementById('button_locked');
    const buttonUnlocked = svgDocument.getElementById('button_unlocked');
    const hexButton = svgDocument.getElementById('button_living_room');
    const hexMenu = svgDocument.getElementById('layer6');
  
    hexButton.addEventListener('click', () => {
      if (hexMenu.style.display === 'none') {
        hexMenu.style.display = 'inline';
      } else {
        hexMenu.style.display = 'none';
      }
    });

  

    /*Turn all the lights on and off with buttons*/
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

    if (lightKitchen && buttonKitchenLight) {
      buttonKitchenLight.addEventListener('click', () => {
        const currentOpacity = lightKitchen.style.opacity;
  
        if (currentOpacity === '0') {
          lightKitchen.style.opacity = '1';
        } else {
          lightKitchen.style.opacity = '0';
        }
      });
    }

    if (lightGarden && buttonGardenLight) {
      buttonGardenLight.addEventListener('click', () => {
        const currentOpacity = lightGarden.style.opacity;
  
        if (currentOpacity === '0') {
          lightGarden.style.opacity = '1';
        } else {
          lightGarden.style.opacity = '0';
        }
      });
    }

    if (lightCloset && buttonCloset) {
      buttonCloset.addEventListener('click', () => {
        const currentOpacity = lightCloset.style.opacity;
  
        if (currentOpacity === '0') {
          lightCloset.style.opacity = '1';
        } else {
          lightCloset.style.opacity = '0';
        }
      });
    }

    if (lightSpareRoom && buttonSpareRoom) {
      buttonSpareRoom.addEventListener('click', () => {
        const currentOpacity = lightSpareRoom.style.opacity;
  
        if (currentOpacity === '0') {
          lightSpareRoom.style.opacity = '1';
        } else {
          lightSpareRoom.style.opacity = '0';
        }
      });
    }
    
    if (cameraImage && buttonCamera) {
      buttonCamera.addEventListener('click', () => {
        const currentOpacity = buttonCamera.style.opacity;
  
        if (currentOpacity === '0') {
          buttonCamera.style.opacity = '1';
        } else {
          buttonCamera.style.opacity = '0';
        }
      });
    }

    
    buttonLocked.addEventListener('click', () => {
      buttonLocked.hidden = true;
      buttonUnlocked.hidden = false;
    });
  
    buttonUnlocked.addEventListener('click', () => {
      buttonUnlocked.hidden = true;
      buttonLocked.hidden = false;
    });

  });
  