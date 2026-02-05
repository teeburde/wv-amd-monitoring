ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-9023951.858212, 4631239.725541, -8682057.274879, 4852378.475541]);
var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_CheatWatershedHU8_1 = new ol.format.GeoJSON();
var features_CheatWatershedHU8_1 = format_CheatWatershedHU8_1.readFeatures(json_CheatWatershedHU8_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CheatWatershedHU8_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CheatWatershedHU8_1.addFeatures(features_CheatWatershedHU8_1);
var lyr_CheatWatershedHU8_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CheatWatershedHU8_1, 
                style: style_CheatWatershedHU8_1,
                popuplayertitle: 'Cheat Watershed (HU8)',
                interactive: false,
                title: '<img src="styles/legend/CheatWatershedHU8_1.png" /> Cheat Watershed (HU8)'
            });
var format_WVStateBoundary_2 = new ol.format.GeoJSON();
var features_WVStateBoundary_2 = format_WVStateBoundary_2.readFeatures(json_WVStateBoundary_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WVStateBoundary_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WVStateBoundary_2.addFeatures(features_WVStateBoundary_2);
var lyr_WVStateBoundary_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WVStateBoundary_2, 
                style: style_WVStateBoundary_2,
                popuplayertitle: 'WV State Boundary',
                interactive: false,
                title: '<img src="styles/legend/WVStateBoundary_2.png" /> WV State Boundary'
            });
var format_RiversandStreams_3 = new ol.format.GeoJSON();
var features_RiversandStreams_3 = format_RiversandStreams_3.readFeatures(json_RiversandStreams_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RiversandStreams_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiversandStreams_3.addFeatures(features_RiversandStreams_3);
var lyr_RiversandStreams_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiversandStreams_3, 
                style: style_RiversandStreams_3,
                popuplayertitle: 'Rivers and Streams',
                interactive: false,
                title: '<img src="styles/legend/RiversandStreams_3.png" /> Rivers and Streams'
            });
var format_MainRivers_4 = new ol.format.GeoJSON();
var features_MainRivers_4 = format_MainRivers_4.readFeatures(json_MainRivers_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MainRivers_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MainRivers_4.addFeatures(features_MainRivers_4);
var lyr_MainRivers_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MainRivers_4, 
                style: style_MainRivers_4,
                popuplayertitle: 'Main Rivers',
                interactive: false,
                title: '<img src="styles/legend/MainRivers_4.png" /> Main Rivers'
            });
var format_MiningPermitLocations_5 = new ol.format.GeoJSON();
var features_MiningPermitLocations_5 = format_MiningPermitLocations_5.readFeatures(json_MiningPermitLocations_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MiningPermitLocations_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MiningPermitLocations_5.addFeatures(features_MiningPermitLocations_5);
var lyr_MiningPermitLocations_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MiningPermitLocations_5, 
                style: style_MiningPermitLocations_5,
                popuplayertitle: 'Mining Permit Locations',
                interactive: true,
                title: '<img src="styles/legend/MiningPermitLocations_5.png" /> Mining Permit Locations'
            });
var group_Hydrology = new ol.layer.Group({
                                layers: [lyr_RiversandStreams_3,lyr_MainRivers_4,],
                                fold: 'open',
                                title: 'Hydrology'});

lyr_GoogleHybrid_0.setVisible(true);lyr_CheatWatershedHU8_1.setVisible(true);lyr_WVStateBoundary_2.setVisible(true);lyr_RiversandStreams_3.setVisible(true);lyr_MainRivers_4.setVisible(true);lyr_MiningPermitLocations_5.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_CheatWatershedHU8_1,lyr_WVStateBoundary_2,group_Hydrology,lyr_MiningPermitLocations_5];
lyr_CheatWatershedHU8_1.set('fieldAliases', {'tnmid': 'tnmid', 'metasource': 'metasource', 'sourcedata': 'sourcedata', 'sourceorig': 'sourceorig', 'sourcefeat': 'sourcefeat', 'loaddate': 'loaddate', 'referenceg': 'referenceg', 'areaacres': 'areaacres', 'areasqkm': 'areasqkm', 'states': 'states', 'huc8': 'huc8', 'name': 'name', 'shape_Leng': 'shape_Leng', 'shape_Area': 'shape_Area', 'ObjectID': 'ObjectID', });
lyr_WVStateBoundary_2.set('fieldAliases', {'Id': 'Id', });
lyr_RiversandStreams_3.set('fieldAliases', {'permanent_': 'permanent_', 'fdate': 'fdate', 'resolution': 'resolution', 'gnis_id': 'gnis_id', 'gnis_name': 'gnis_name', 'lengthkm': 'lengthkm', 'reachcode': 'reachcode', 'flowdir': 'flowdir', 'wbarea_per': 'wbarea_per', 'ftype': 'ftype', 'fcode': 'fcode', 'mainpath': 'mainpath', 'innetwork': 'innetwork', 'visibility': 'visibility', 'SHAPE_Leng': 'SHAPE_Leng', 'Enabled': 'Enabled', 'ObjectID': 'ObjectID', });
lyr_MainRivers_4.set('fieldAliases', {'permanent_': 'permanent_', 'fdate': 'fdate', 'resolution': 'resolution', 'gnis_id': 'gnis_id', 'gnis_name': 'gnis_name', 'areasqkm': 'areasqkm', 'elevation': 'elevation', 'ftype': 'ftype', 'fcode': 'fcode', 'visibility': 'visibility', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'ObjectID': 'ObjectID', });
lyr_MiningPermitLocations_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'PERMIT_ID': 'PERMIT_ID', 'PERMITTEE': 'PERMITTEE', 'FACILITY': 'FACILITY', 'ISSUEDATE': 'ISSUEDATE', 'EXPIREDATE': 'EXPIREDATE', 'TYPE': 'TYPE', 'INSPSTATUS': 'INSPSTATUS', 'INSPDATE': 'INSPDATE', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'ACRES_NEW': 'ACRES_NEW', 'ACRES_NOW': 'ACRES_NOW', 'ACRES_DIST': 'ACRES_DIST', 'ACRES_RECL': 'ACRES_RECL', 'PER_STATUS': 'PER_STATUS', });
lyr_CheatWatershedHU8_1.set('fieldImages', {'tnmid': 'TextEdit', 'metasource': 'TextEdit', 'sourcedata': 'TextEdit', 'sourceorig': 'TextEdit', 'sourcefeat': 'TextEdit', 'loaddate': 'DateTime', 'referenceg': 'TextEdit', 'areaacres': 'TextEdit', 'areasqkm': 'TextEdit', 'states': 'TextEdit', 'huc8': 'TextEdit', 'name': 'TextEdit', 'shape_Leng': 'TextEdit', 'shape_Area': 'TextEdit', 'ObjectID': 'Range', });
lyr_WVStateBoundary_2.set('fieldImages', {'Id': 'Range', });
lyr_RiversandStreams_3.set('fieldImages', {'permanent_': 'TextEdit', 'fdate': 'DateTime', 'resolution': 'Range', 'gnis_id': 'TextEdit', 'gnis_name': 'TextEdit', 'lengthkm': 'TextEdit', 'reachcode': 'TextEdit', 'flowdir': 'Range', 'wbarea_per': 'TextEdit', 'ftype': 'Range', 'fcode': 'Range', 'mainpath': 'Range', 'innetwork': 'Range', 'visibility': 'Range', 'SHAPE_Leng': 'TextEdit', 'Enabled': 'Range', 'ObjectID': 'Range', });
lyr_MainRivers_4.set('fieldImages', {'permanent_': 'TextEdit', 'fdate': 'DateTime', 'resolution': 'Range', 'gnis_id': 'TextEdit', 'gnis_name': 'TextEdit', 'areasqkm': 'TextEdit', 'elevation': 'TextEdit', 'ftype': 'Range', 'fcode': 'Range', 'visibility': 'Range', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'ObjectID': 'Range', });
lyr_MiningPermitLocations_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'PERMIT_ID': 'TextEdit', 'PERMITTEE': 'TextEdit', 'FACILITY': 'TextEdit', 'ISSUEDATE': 'TextEdit', 'EXPIREDATE': 'TextEdit', 'TYPE': 'TextEdit', 'INSPSTATUS': 'TextEdit', 'INSPDATE': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'ACRES_NEW': 'TextEdit', 'ACRES_NOW': 'TextEdit', 'ACRES_DIST': 'TextEdit', 'ACRES_RECL': 'TextEdit', 'PER_STATUS': 'TextEdit', });
lyr_CheatWatershedHU8_1.set('fieldLabels', {'tnmid': 'no label', 'metasource': 'no label', 'sourcedata': 'no label', 'sourceorig': 'no label', 'sourcefeat': 'no label', 'loaddate': 'no label', 'referenceg': 'no label', 'areaacres': 'no label', 'areasqkm': 'no label', 'states': 'no label', 'huc8': 'no label', 'name': 'no label', 'shape_Leng': 'no label', 'shape_Area': 'no label', 'ObjectID': 'no label', });
lyr_WVStateBoundary_2.set('fieldLabels', {'Id': 'no label', });
lyr_RiversandStreams_3.set('fieldLabels', {'permanent_': 'no label', 'fdate': 'no label', 'resolution': 'no label', 'gnis_id': 'no label', 'gnis_name': 'no label', 'lengthkm': 'no label', 'reachcode': 'no label', 'flowdir': 'no label', 'wbarea_per': 'no label', 'ftype': 'no label', 'fcode': 'no label', 'mainpath': 'no label', 'innetwork': 'no label', 'visibility': 'no label', 'SHAPE_Leng': 'no label', 'Enabled': 'no label', 'ObjectID': 'no label', });
lyr_MainRivers_4.set('fieldLabels', {'permanent_': 'no label', 'fdate': 'no label', 'resolution': 'no label', 'gnis_id': 'no label', 'gnis_name': 'no label', 'areasqkm': 'no label', 'elevation': 'no label', 'ftype': 'no label', 'fcode': 'no label', 'visibility': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'ObjectID': 'no label', });
lyr_MiningPermitLocations_5.set('fieldLabels', {'OBJECTID': 'hidden field', 'PERMIT_ID': 'inline label - visible with data', 'PERMITTEE': 'inline label - visible with data', 'FACILITY': 'inline label - visible with data', 'ISSUEDATE': 'hidden field', 'EXPIREDATE': 'hidden field', 'TYPE': 'hidden field', 'INSPSTATUS': 'hidden field', 'INSPDATE': 'hidden field', 'LATITUDE': 'hidden field', 'LONGITUDE': 'hidden field', 'ACRES_NEW': 'hidden field', 'ACRES_NOW': 'hidden field', 'ACRES_DIST': 'hidden field', 'ACRES_RECL': 'hidden field', 'PER_STATUS': 'inline label - visible with data', });
lyr_MiningPermitLocations_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});