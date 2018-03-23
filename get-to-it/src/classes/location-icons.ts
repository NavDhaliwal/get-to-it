import * as L from "leaflet";

export let LeafIcon = L.Icon.extend({
    options: {
        iconSize:     [38, 38],
        iconAnchor:   [22, 22],
        popupAnchor:  [-3, -76]
    }
});