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
    const hexButton = svgDocument.getElementById('button_living_room');
    const hexMenu = svgDocument.getElementById('layer6');
    const hexLightButton = svgDocument.getElementById('hex_light_button');
    const lightLivingRoom = svgDocument.getElementById('light_livingroom')
    let hexLightButtonOpacity = 0.28;
    const buttonDoorLock = svgDocument.getElementById('button_door_lock');
    const bgDoorLocked = svgDocument.getElementById('bg_door_locked');
    const bgDoorUnlocked = svgDocument.getElementById('bg_door_unlocked');
    const roombaDocked = svgDocument.getElementById('roomba_docked');
    const roombaRunning = svgDocument.getElementById('roomba_running');
    let roombaPositionX = 0;
    let roombaPositionY = 0;

  // Hide the roomba_docked element and show the roomba_running element
  roombaDocked.style.display = 'none';
  roombaRunning.style.display = 'inline';

  // Set the initial position of the roomba_running element
  roombaRunning.setAttribute('x', roombaPositionX);
  roombaRunning.setAttribute('y', roombaPositionY);

  roombaRunning.addEventListener('click', () => {
    // Hide the roomba_running element and show the roomba_docked element
    roombaRunning.style.display = 'none';
    roombaDocked.style.display = 'inline';

    // Reset the position of the roomba_running element
    roombaPositionX = 0;
    roombaPositionY = 0;
    roombaRunning.setAttribute('x', roombaPositionX);
    roombaRunning.setAttribute('y', roombaPositionY);
  });

  setInterval(() => {
    // Move the roomba_running element
    roombaPositionX += 1;
    roombaPositionY += 1;
    roombaRunning.setAttribute('x', roombaPositionX);
    roombaRunning.setAttribute('y', roombaPositionY);
  }, 100);


    buttonDoorLock.addEventListener('click', () => {
      if (bgDoorLocked.style.display === 'none') {
        bgDoorLocked.style.display = 'inline';
        bgDoorUnlocked.style.display = 'none'
      } else {
        bgDoorLocked.style.display = 'none';
        bgDoorUnlocked.style.display = 'inline';
      }
    });
    
    
    hexButton.addEventListener('click', () => {
      if (hexMenu.style.display === 'none') {
        hexMenu.style.display = 'inline';
      } else {
        hexMenu.style.display = 'none';
      }
    });

    hexLightButton.addEventListener('click', () => {
      if (hexLightButtonOpacity === 1) {
        hexLightButton.style.opacity = 0.28;
        hexLightButtonOpacity = 0.28;
      } else {
        hexLightButton.style.opacity = 1;
        hexLightButtonOpacity = 1;
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
        const currentOpacity = cameraImage.style.opacity;
  
        if (currentOpacity === '0') {
          cameraImage.style.opacity = '1';
        } else {
          cameraImage.style.opacity = '0';
        }
      });
    }

        /*Turn all the lights on and off with buttons*/
        if (lightLivingRoom && hexLightButton) {
          hexLightButton.addEventListener('click', () => {
            const currentOpacity = lightLivingRoom.style.opacity;
      
            if (currentOpacity === '0') {
              lightLivingRoom.style.opacity = '1';
            } else {
              lightLivingRoom.style.opacity = '0';
            }
          });
        }

    


  });
  