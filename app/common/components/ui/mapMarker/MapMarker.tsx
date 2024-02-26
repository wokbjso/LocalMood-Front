export default function MapMarker(type: string) {
  const markerArray = [
    `<div style="width:5rem; height:5rem; background-image:url(${
      type == "CAFE" ? "/coffee.png" : "/restaurant.png"
    }); background-size: cover; background-position: center; background-repeat: no-repeat;">`,
  ];

  return markerArray.join("");
}
