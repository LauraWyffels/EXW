AFRAME.registerComponent(`crash-plane`, {
  init() {
    const $el = this.el; 
    $el.addEventListener(`click`, handleClick);
  }
});

const handleClick = () => {
  const planeParts = [...document.querySelectorAll(`.plane-part`)];
  const cockpit = planeParts[0];
  const inside = planeParts[1];
  const sky = document.querySelector(`.sky`);

  const cockPitAttributes = {
    duration: `5000`,
    position: `5 5 -5`,
    rotation: `-10 0 3000`
  };

  const insideAttributes = {
    Duration: `5000`,
    Position: `5 5 -15`,
    Rotation: `-180 0 3000`
  };

  const skyAttributes = {
    duration: `5000`,
    position: `0 4500 -1000`,
    rotation: `0 0 1100`
  };

  setAttributes(cockpit, cockPitAttributes);
  setAttributes(inside, insideAttributes);
  setAttributes(sky, skyAttributes);

  [...planeParts, sky].forEach(part => {
    part.setAttribute(`template`, `src: #crashAnimation`);
  });
};

const setAttributes = (el, attrs) => {
  Object.keys(attrs).forEach(attr => {
    console.log(attr, attrs[attr]);
    el.setAttribute(`data-${attr}`, attrs[attr]);
  });
};

