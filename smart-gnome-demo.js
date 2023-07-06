document.getElementById('svg-object').addEventListener('load', function() {
  const svgDocument = this.contentDocument;


  /*Door Lock & Unlock*/
  const buttonDoorLock = svgDocument.getElementById('button_door_lock');
  const bgDoorLocked = svgDocument.getElementById('bg_door_locked');
  const bgDoorUnlocked = svgDocument.getElementById('bg_door_unlocked');
  const itemLock = svgDocument.getElementById('item_lock');
  const itemLocked = svgDocument.getElementById('item_locked');
  const itemUnlocked = svgDocument.getElementById('item_unlocked');
  /*Rooms, Lights, & Camera on Home Layout*/
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
  const itemizedView = svgDocument.getElementById('itemized_view');
  const itemizedViewButton = svgDocument.getElementById('button_itemized_view')
  const floorPlanViewButton = svgDocument.getElementById('button_floor_plan_view')
  const item_closet = svgDocument.getElementById('item_closet');
  const item_kitchen = svgDocument.getElementById('item_kitchen');
  const item_garden = svgDocument.getElementById('item_garden');
  const item_spareroom = svgDocument.getElementById('item_spareroom');
  const item_bedroom = svgDocument.getElementById('item_bedroom');
  const item_livingroom = svgDocument.getElementById('item_livingroom');
  const itemClosetOff = svgDocument.getElementById('item_closet_off');
  const itemClosetOn = svgDocument.getElementById('item_closet_on');
  const itemKitchenOff = svgDocument.getElementById('item_kitchen_off');
  const itemKitchenOn = svgDocument.getElementById('item_kitchen_on');
  const itemGardenOff = svgDocument.getElementById('item_garden_off');
  const itemGardenOn = svgDocument.getElementById('item_garden_on');
  const itemSpareroomOff = svgDocument.getElementById('item_spareroom_off');
  const itemSpareroomOn = svgDocument.getElementById('item_spareroom_on');
  const itemBedRoomOff = svgDocument.getElementById('item_bedroom_off');
  const itemBedRoomOn = svgDocument.getElementById('item_bedroom_on');
  const itemLivingRoomOff = svgDocument.getElementById('item_living_room_off');
  const itemLivingRoomOn = svgDocument.getElementById('item_living_room_on');
  const floorPlan2ViewButton = svgDocument.getElementById('button_floor2_plan_view');
  const floorPlan2View = svgDocument.getElementById('floor_2');
  const floor2Bedroom = svgDocument.getElementById('button_floor2_bedroom');
  const light_floor2Bedroom = svgDocument.getElementById('floor_2_bed_light');
  const floor2Main = svgDocument.getElementById('button_floor2_main');
  const light_floor2Main = svgDocument.getElementById('floor_2_main_light');
  const floor2Computer = svgDocument.getElementById('button_floor2_computer');
  const light_floor2Computer = svgDocument.getElementById('floor_2_computer_light');
  const item_computer = svgDocument.getElementById('item_computer');
  const item_floor2_bed = svgDocument.getElementById('item_floor2_bed');
  const item_floor2_main = svgDocument.getElementById('item_floor2_main');
  const itemFloor2BedOn = svgDocument.getElementById('item_floor2_bed_on');
  const itemFloor2BedOff = svgDocument.getElementById('item_floor2_bed_off');
  const itemFloor2MainOn = svgDocument.getElementById('item_floor2_main_on');
  const itmeFloor2MainOff = svgDocument.getElementById('item_floor2_main_off');
  const itemFloor2ComputerOn = svgDocument.getElementById('item_computer_on');
  const itemFloor2ComputerOff = svgDocument.getElementById('item_computer_off');
  const itemizedbutton = svgDocument.getElementById('itemizedButton');
  const FloorPlan2Button = svgDocument.getElementById('FloorPlan2Button');
  const FloorPlanButton = svgDocument.getElementById('FloorPlanButton');
  const button_theaterLight = svgDocument.getElementById('hex_theater_light');
  const button_theaterMovie = svgDocument.getElementById('hex_theater_movie');
  const hex2Button = svgDocument.getElementById('button_floor2_theater');
  const hex2Menu = svgDocument.getElementById('floor_2_hexmenu');
  const itemFloor2TheaterOn = svgDocument.getElementById('item_theater_on');
  const itemFloor2TheaterOff = svgDocument.getElementById('item_theater_off');
  const itemTheater = svgDocument.getElementById('item_theater');
  const lightTheater = svgDocument.getElementById('floor_2_theater_light');
  /*Routines*/
  const routineLightsOn = svgDocument.getElementById('button_routine_lightson');
  const routineLightsOff = svgDocument.getElementById('item_routine_lightsoff');
  const routineMovie = svgDocument.getElementById('item_routine_movie');
  const routineBed = svgDocument.getElementById('item_routine_bed');


  /*set starting states*/
  let hexLightButtonOpacity = 0.28;
  let hex2LightButtonOpacity = 0.28;
  let hexMovieButtonOPacity = 0.28;
  bgDoorUnlocked.style.display = 'none';
  itemUnlocked.style.display = 'none';
  bgDoorUnlocked.style.opacity = 1;
  itemizedView.style.display = 'none';
  floorPlan2View.style.display = 'none';
  floorPlanViewButton.style.opacity = 1;
  floorPlan2ViewButton.style.opacity = .24;
  itemizedViewButton.style.opacity = .24;
  itemClosetOff.style.display = 'inline';
  itemClosetOn.style.display = 'none';
  itemKitchenOff.style.display = 'inline';
  itemKitchenOn.style.display = 'none';
  itemGardenOff.style.display = 'inline';
  itemGardenOn.style.display = 'none';
  itemSpareroomOff.style.display = 'inline';
  itemSpareroomOn.style.display = 'none';
  itemLivingRoomOff.style.display = 'inline';
  itemLivingRoomOn.style.display = 'none';
  itemBedRoomOff.style.display = 'inline';
  itemBedRoomOn.style.display = 'none';

  /*swap views*/
  itemizedbutton.addEventListener('click', () => {
    itemizedView.style.display = 'inline';
    floorPlan2View.style.display = 'none';
    itemizedViewButton.style.opacity = 1;
    floorPlanViewButton.style.opacity = .24;
    floorPlan2ViewButton.style.opacity = .24;
  });

  FloorPlanButton.addEventListener('click', () => {
    itemizedView.style.display = 'none';
    floorPlan2View.style.display = 'none';
    floorPlanViewButton.style.opacity = 1;
    itemizedViewButton.style.opacity = .24;
    floorPlan2ViewButton.style.opacity = .24;
  });

  FloorPlan2Button.addEventListener('click', () => {
    itemizedView.style.display = 'none';
    floorPlan2View.style.display = 'inline';
    floorPlanViewButton.style.opacity = .24;
    itemizedViewButton.style.opacity = .24;
    floorPlan2ViewButton.style.opacity = 1;
  });
  /*interactions*/
  
  buttonDoorLock.addEventListener('click', () => {
    if (bgDoorLocked.style.display === 'none') {
      bgDoorLocked.style.display = 'inline';
      itemLocked.style.display = 'inline';
      bgDoorUnlocked.style.display = 'none';
      itemUnlocked.style.display = 'none';
    } else {
      bgDoorLocked.style.display = 'none';
      itemLocked.style.display = 'none';
      bgDoorUnlocked.style.display = 'inline';
      itemUnlocked.style.display = 'inline';
    }
  });

  /*interactions*/
  
  itemLock.addEventListener('click', () => {
    if (bgDoorLocked.style.display === 'none') {
      bgDoorLocked.style.display = 'inline';
      itemLocked.style.display = 'inline';
      bgDoorUnlocked.style.display = 'none';
      itemUnlocked.style.display = 'none';
    } else {
      bgDoorLocked.style.display = 'none';
      itemLocked.style.display = 'none';
      bgDoorUnlocked.style.display = 'inline';
      itemUnlocked.style.display = 'inline';
    }
  });


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
        itemBedRoomOn.style.display = 'none';
        itemBedRoomOff.style.display = 'inline';
      } else {
        lightBedroom.style.opacity = '0';
        itemBedRoomOn.style.display = 'inline';
        itemBedRoomOff.style.display = 'none';
      }
    });
  }


  if (lightKitchen && buttonKitchenLight) {
    buttonKitchenLight.addEventListener('click', () => {
      const currentOpacity = lightKitchen.style.opacity;

      if (currentOpacity === '0') {
        lightKitchen.style.opacity = '1';
        itemKitchenOn.style.display = 'none';
        itemKitchenOff.style.display = 'inline';
      } else {
        lightKitchen.style.opacity = '0';
        itemKitchenOn.style.display = 'inline';
        itemKitchenOff.style.display = 'none';
      }
    });
  }

  if (lightGarden && buttonGardenLight) {
    buttonGardenLight.addEventListener('click', () => {
      const currentOpacity = lightGarden.style.opacity;

      if (currentOpacity === '0') {
        lightGarden.style.opacity = '1';
        itemGardenOn.style.display = 'none';
        itemGardenOff.style.display = 'inline';
      } else {
        lightGarden.style.opacity = '0';
        itemGardenOn.style.display = 'inline';
        itemGardenOff.style.display = 'none';
      }
    });
  }

  if (lightCloset && buttonCloset) {
    buttonCloset.addEventListener('click', () => {
      const currentOpacity = lightCloset.style.opacity;

      if (currentOpacity === '0') {
        lightCloset.style.opacity = '1';
        itemClosetOn.style.display = 'none';
        itemClosetOff.style.display = 'inline';
      } else {
        lightCloset.style.opacity = '0';
        itemClosetOn.style.display = 'inline';
        itemClosetOff.style.display = 'none';
      }
    });
  }

  if (lightSpareRoom && buttonSpareRoom) {
    buttonSpareRoom.addEventListener('click', () => {
      const currentOpacity = lightSpareRoom.style.opacity;

      if (currentOpacity === '0') {
        lightSpareRoom.style.opacity = '1';
        itemSpareroomOn.style.display = 'none';
        itemSpareroomOff.style.display = 'inline';
      } else {
        lightSpareRoom.style.opacity = '0';
        itemSpareroomOn.style.display = 'inline';
        itemSpareroomOff.style.display = 'none';
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

      if (lightLivingRoom && hexLightButton) {
        hexLightButton.addEventListener('click', () => {
          const currentOpacity = lightLivingRoom.style.opacity;
    
          if (currentOpacity === '0') {
            lightLivingRoom.style.opacity = '1';
            itemLivingRoomOn.style.display = 'none';
            itemLivingRoomOff.style.display = 'inline';
            hexLightButton.style.opacity = 0.28;
            hexLightButtonOpacity = 0.28;
          } else {
            lightLivingRoom.style.opacity = '0';
            itemLivingRoomOn.style.display = 'inline';
            itemLivingRoomOff.style.display = 'none';
            hexLightButton.style.opacity = 1;
            hexLightButtonOpacity = 1;
          }
        });
      }


      if (floor2Bedroom && light_floor2Bedroom) {
        floor2Bedroom.addEventListener('click', () => {
          const currentOpacity = light_floor2Bedroom.style.opacity;
    
          if (currentOpacity === '0') {
            light_floor2Bedroom.style.opacity = '1';
            itemFloor2BedOn.style.display = 'none';
            itemFloor2BedOff.style.display = 'inline';
          } else {
            light_floor2Bedroom.style.opacity = '0';
            itemFloor2BedOn.style.display = 'inline';
            itemFloor2BedOff.style.display = 'none';
          }
        });
      }

      item_floor2_bed.addEventListener('click', () => {
        const currentOpacity = light_floor2Bedroom.style.opacity;
  
        if (currentOpacity === '0') {
          light_floor2Bedroom.style.opacity = '1';
          itemFloor2BedOn.style.display = 'none';
          itemFloor2BedOff.style.display = 'inline';
        } else {
          light_floor2Bedroom.style.opacity = '0';
          itemFloor2BedOn.style.display = 'inline';
          itemFloor2BedOff.style.display = 'none';
        }
      });


      if (floor2Main && light_floor2Main) {
        floor2Main.addEventListener('click', () => {
          const currentOpacity = light_floor2Main.style.opacity;
    
          if (currentOpacity === '0') {
            light_floor2Main.style.opacity = '1';
            itemFloor2MainOn.style.display = 'none';
            itmeFloor2MainOff.style.display = 'inline';
          } else {
            light_floor2Main.style.opacity = '0';
            itemFloor2MainOn.style.display = 'inline';
            itmeFloor2MainOff.style.display = 'none';
          }
        });
      }

      item_floor2_main.addEventListener('click', () => {
        const currentOpacity = light_floor2Main.style.opacity;
  
        if (currentOpacity === '0') {
          light_floor2Main.style.opacity = '1';
          itemFloor2MainOn.style.display = 'none';
          itmeFloor2MainOff.style.display = 'inline';
        } else {
          light_floor2Main.style.opacity = '0';
          itemFloor2MainOn.style.display = 'inline';
          itmeFloor2MainOff.style.display = 'none';
        }
      });


      if (floor2Computer && light_floor2Computer) {
        floor2Computer.addEventListener('click', () => {
          const currentOpacity = light_floor2Computer.style.opacity;
    
          if (currentOpacity === '0') {
            light_floor2Computer.style.opacity = '1';
            itemFloor2ComputerOn.style.display = 'none';
            itemFloor2ComputerOff.style.display = 'inline';
          } else {
            light_floor2Computer.style.opacity = '0';
            itemFloor2ComputerOn.style.display = 'inline';
            itemFloor2ComputerOff.style.display = 'none';
          }
        });
      }

      item_computer.addEventListener('click', () => {
        const currentOpacity = light_floor2Computer.style.opacity;
  
        if (currentOpacity === '0') {
          light_floor2Computer.style.opacity = '1';
          itemFloor2ComputerOn.style.display = 'none';
          itemFloor2ComputerOff.style.display = 'inline';
        } else {
          light_floor2Computer.style.opacity = '0';
          itemFloor2ComputerOn.style.display = 'inline';
          itemFloor2ComputerOff.style.display = 'none';
        }
      });


  item_bedroom.addEventListener('click', () => {
      const currentOpacity = lightBedroom.style.opacity;

      if (currentOpacity === '0') {
        lightBedroom.style.opacity = '1';
        itemBedRoomOn.style.display = 'none';
        itemBedRoomOff.style.display = 'inline';
      } else {
        lightBedroom.style.opacity = '0';
        itemBedRoomOn.style.display = 'inline';
        itemBedRoomOff.style.display = 'none';
      }
    });

    
  
  item_kitchen.addEventListener('click', () => {
      const currentOpacity = lightKitchen.style.opacity;

      if (currentOpacity === '0') {
        lightKitchen.style.opacity = '1';
        itemKitchenOn.style.display = 'none';
        itemKitchenOff.style.display = 'inline';
      } else {
        lightKitchen.style.opacity = '0';
        itemKitchenOn.style.display = 'inline';
        itemKitchenOff.style.display = 'none';
      }
    });


  item_garden.addEventListener('click', () => {
      const currentOpacity = lightGarden.style.opacity;

      if (currentOpacity === '0') {
        lightGarden.style.opacity = '1';
        itemGardenOn.style.display = 'none';
        itemGardenOff.style.display = 'inline';
      } else {
        lightGarden.style.opacity = '0';
        itemGardenOn.style.display = 'inline';
        itemGardenOff.style.display = 'none';
      }
    });


  item_closet.addEventListener('click', () => {
      const currentOpacity = lightCloset.style.opacity;

      if (currentOpacity === '0') {
        lightCloset.style.opacity = '1';
        itemClosetOn.style.display = 'none';
        itemClosetOff.style.display = 'inline';
      } else {
        lightCloset.style.opacity = '0';
        itemClosetOn.style.display = 'inline';
        itemClosetOff.style.display = 'none';
      }
    });

  
  item_spareroom.addEventListener('click', () => {
      const currentOpacity = lightSpareRoom.style.opacity;

      if (currentOpacity === '0') {
        lightSpareRoom.style.opacity = '1';
        itemSpareroomOn.style.display = 'none';
        itemSpareroomOff.style.display = 'inline';
      } else {
        lightSpareRoom.style.opacity = '0';
        itemSpareroomOn.style.display = 'inline';
        itemSpareroomOff.style.display = 'none';
      }
    });


  item_livingroom.addEventListener('click', () => {
      const currentOpacity = lightLivingRoom.style.opacity;

      if (currentOpacity === '0') {
        lightLivingRoom.style.opacity = '1';
        itemLivingRoomOn.style.display = 'none';
        itemLivingRoomOff.style.display = 'inline';
        hexLightButton.style.opacity = 0.28;
        hexLightButtonOpacity = 0.28;
      } else {
        lightLivingRoom.style.opacity = '0';
        itemLivingRoomOn.style.display = 'inline';
        itemLivingRoomOff.style.display = 'none';
        hexLightButton.style.opacity = 1;
        hexLightButtonOpacity = 1;
      }
    });

    itemTheater.addEventListener('click', () => {
      const currentOpacity = lightTheater.style.opacity;

      if (currentOpacity === '0') {
        lightTheater.style.opacity = '1';
        itemFloor2TheaterOn.style.display = 'none';
        itemFloor2TheaterOff.style.display = 'inline';
        button_theaterLight.style.opacity = 0.28;
        hex2LightButtonOpacity = 0.28;
      } else {
        lightTheater.style.opacity = '0';
        itemFloor2TheaterOn.style.display = 'inline';
        itemFloor2TheaterOff.style.display = 'none';
        button_theaterLight.style.opacity = 1;
        hex2LightButtonOpacity = 1;
      }
    });

    hex2Button.addEventListener('click', () => {
      if (hex2Menu.style.display === 'none') {
        hex2Menu.style.display = 'inline';
      } else {
        hex2Menu.style.display = 'none';
      }
    });

    /*Add Routines*/
    routineLightsOn.addEventListener('click', () => {
      
      lightBedroom.style.opacity = '0';
      itemBedRoomOn.style.display = 'inline';
      itemBedRoomOff.style.display = 'none';
      lightCloset.style.opacity = '0';
      itemClosetOn.style.display = 'inline';
      itemClosetOff.style.display = 'none';
      lightGarden.style.opacity = '0';
      itemGardenOn.style.display = 'inline';
      itemGardenOff.style.display = 'none';
      lightKitchen.style.opacity = '0';
      itemKitchenOn.style.display = 'inline';
      itemKitchenOff.style.display = 'none';
      lightLivingRoom.style.opacity = '0';
      itemLivingRoomOn.style.display = 'inline';
      itemLivingRoomOff.style.display = 'none';
      lightSpareRoom.style.opacity = '0';
      itemSpareroomOn.style.display = 'inline';
      itemSpareroomOff.style.display = 'none';
      light_floor2Bedroom.style.opacity = '0';
      itemFloor2BedOn.style.display = 'inline';
      itemFloor2BedOff.style.display = 'none';
      light_floor2Computer.style.opacity = '0';
      itemFloor2ComputerOn.style.display = 'inline';
      itemFloor2ComputerOff.style.display = 'none';
      light_floor2Main.style.opacity = '0';
      itemFloor2MainOn.style.display = 'inline';
      itmeFloor2MainOff.style.display = 'none';
      hexLightButton.style.opacity = 1;
      hexLightButtonOpacity = 1;
      button_theaterLight.style.opacity = 1;
      lightTheater.style.opacity = '0';

    });

});

