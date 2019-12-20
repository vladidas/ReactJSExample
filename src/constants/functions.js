import React from "react";
import businessRoutes from "../routes/Business";
import env from "../.env";

export const getRegisterPathByStep = (props, step) => {
  for (let businessRoute of businessRoutes) {
    if (step === businessRoute.step) {
      return businessRoute.path;
    }
  }
};

export const getOnlyDigits = (value) => {
  return value.replace(/[^0-9]/g, '');
};

export const initGoogleMaps = ($this) => {
  window.initMap = $this.initMap;
  const gmapScriptEl = document.createElement(`script`);

  gmapScriptEl.src = `https://maps.googleapis.com/maps/api/js?key=${env.GOOGLE_MAPS_API}&libraries=places`;
  document.querySelector(`body`).insertAdjacentElement(`beforeend`, gmapScriptEl)
};

export const sliceString = (string, length) => {
  if (string && string.toString().length > length) {
    return string.slice(0, length) + '...'
  }
  return string;
};
