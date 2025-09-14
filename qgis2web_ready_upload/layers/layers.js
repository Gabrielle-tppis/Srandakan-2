var wms_layers = [];


        var lyr_GSateliteHybrid_0 = new ol.layer.Tile({
            'title': 'G Satelite Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_POLYSRANDAKAN2kmz_1 = new ol.format.GeoJSON();
var features_POLYSRANDAKAN2kmz_1 = format_POLYSRANDAKAN2kmz_1.readFeatures(json_POLYSRANDAKAN2kmz_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POLYSRANDAKAN2kmz_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POLYSRANDAKAN2kmz_1.addFeatures(features_POLYSRANDAKAN2kmz_1);
var lyr_POLYSRANDAKAN2kmz_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POLYSRANDAKAN2kmz_1, 
                style: style_POLYSRANDAKAN2kmz_1,
                popuplayertitle: 'POLY SRANDAKAN 2.kmz',
                interactive: true,
                title: 'POLY SRANDAKAN 2.kmz'
            });
var format_SHPPP_2 = new ol.format.GeoJSON();
var features_SHPPP_2 = format_SHPPP_2.readFeatures(json_SHPPP_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SHPPP_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SHPPP_2.addFeatures(features_SHPPP_2);
var lyr_SHPPP_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SHPPP_2, 
                style: style_SHPPP_2,
                popuplayertitle: 'SHPPP',
                interactive: true,
                title: '<img src="styles/legend/SHPPP_2.png" /> SHPPP'
            });

lyr_GSateliteHybrid_0.setVisible(true);lyr_POLYSRANDAKAN2kmz_1.setVisible(true);lyr_SHPPP_2.setVisible(true);
var layersList = [lyr_GSateliteHybrid_0,lyr_POLYSRANDAKAN2kmz_1,lyr_SHPPP_2];
lyr_POLYSRANDAKAN2kmz_1.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_SHPPP_2.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_POLYSRANDAKAN2kmz_1.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_SHPPP_2.set('fieldImages', {'id': '', 'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_POLYSRANDAKAN2kmz_1.set('fieldLabels', {'id': 'inline label - always visible', 'Name': 'inline label - always visible', 'description': 'inline label - always visible', 'timestamp': 'inline label - always visible', 'begin': 'inline label - always visible', 'end': 'inline label - always visible', 'altitudeMode': 'inline label - always visible', 'tessellate': 'inline label - always visible', 'extrude': 'inline label - always visible', 'visibility': 'inline label - always visible', 'drawOrder': 'inline label - always visible', 'icon': 'inline label - always visible', });
lyr_SHPPP_2.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_SHPPP_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});