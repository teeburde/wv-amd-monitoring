# West Virginia AMD Monitoring Web Map

An interactive web mapping application for monitoring Acid Mine Drainage (AMD) and NPDES (National Pollutant Discharge Elimination System) compliance in West Virginia's Cheat Watershed (v2 will update for compliance within the whole state).

## 🌊 Overview

This web-based GIS application provides visualization and monitoring of water quality data and compliance status for mining-related discharge permits in the Cheat River Watershed (HUC-8) of West Virginia. The map displays NPDES permit locations with color-coded compliance status indicators, helping stakeholders track environmental compliance across the region.

## ✨ Features

- **Interactive Map Interface**: Pan, zoom, and explore the Cheat Watershed region
- **Layer Switching**: Toggle between multiple data layers including:
  - Cheat Watershed (HU8 boundary)
  - West Virginia State Boundary
  - Rivers and Streams
  - Main Rivers
  - Mining Permit Locations
  
- **NPDES Compliance Visualization**: Color-coded markers indicating:
  - 🔴 **Red**: Not in Compliance
  - 🟢 **Green**: In Compliance
  - 🟠 **Orange**: Unknown Status
  - ⚪ **Gray**: No Discharge
  - 🔺 **Blue Triangle**: Ambient Monitoring Sites

- **Mobile-Responsive**: Optimized for both desktop and mobile devices
- **Search Functionality**: Geocoder with autocomplete for location search
- **Popup Information**: Click on features to view detailed information

## 🗺️ Technologies Used

- **OpenLayers**: Core mapping library for interactive web maps
- **JavaScript** (84.5%): Application logic and interactivity
- **CSS** (9.9%): Styling and responsive design
- **HTML** (5.6%): Page structure
- **QGIS2Web**: Generated base map configuration from QGIS
- **Photon Geocoder**: Location search and autocomplete
- **Proj4js**: Coordinate projection handling

## 📊 Data Source

All data is sourced from publicly available datasets from the [EPA ECHO (Enforcement and Compliance History Online) database](https://echo.epa.gov/), providing transparency and access to environmental compliance information.

## 🚀 Usage

Simply open `index.html` in a modern web browser to launch the application. The map will load with all layers and provide immediate access to water quality monitoring data across the Cheat Watershed.

### Live Demo

If GitHub Pages is enabled, the map can be accessed at:
`https://teeburde.github.io/wv-amd-monitoring/`

## 📁 Project Structure

```
wv-amd-monitoring/
├── index.html              # Main application file
├── layers/                 # GeoJSON data layers
├── styles/                 # Layer styling definitions
├── resources/              # Libraries and dependencies
│   ├── ol.js              # OpenLayers library
│   ├── qgis2web.js        # QGIS2Web utilities
│   └── ...                # Additional resources
└── webfonts/              # Font files for icons
```

## 🎯 Use Cases

- Environmental compliance monitoring
- Watershed management and planning
- Public access to mining permit compliance data
- Research and analysis of water quality impacts
- Educational resource for understanding AMD issues in West Virginia

## ⚠️ Disclaimer

This map is for informational purposes only. Users should verify all information with official sources and not rely solely on this application for regulatory or legal decisions.

## 📝 License

Data sourced from EPA ECHO database (public domain).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

Created by [@teeburde](https://github.com/teeburde)

---

*Last Updated: February 2026*
