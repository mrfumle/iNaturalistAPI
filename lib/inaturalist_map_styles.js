var _ = require( "underscore" ),
    carto = require( "carto" ),
    Taxon = require( "./models/taxon" ),
    InaturalistMapStyles = { };

InaturalistMapStyles.mmlForStyle = function( style ) {
  return {
    Layer: [ { id: "style", name: "style" } ],
    Stylesheet: [ { id: "style.mss", data: "#style{ "+ style +" }" } ]
  };
};

InaturalistMapStyles.extractMMLStyle = function( style ) {
  try {
    var extractedStyle;
    var mml = InaturalistMapStyles.mmlForStyle( style )
    var cartoRenderer = new carto.Renderer({ });
    var xml = cartoRenderer.render( mml );
    var styleMatch = xml.match(/<Style[\s\S]*<\/Style>/);
    if( styleMatch ) {
      extractedStyle = styleMatch[0].replace("\n", "");
      return extractedStyle;
    }
  } catch( err ) {
    // do nothing
  }
};

InaturalistMapStyles.heatmap = function( colors ) {
  colors = colors || "violet 0.4, blue 0.5, green 0.6, yellow 0.9, orange 0.97, red 0.99";
  return "\
  <Style name='style' image-filters='colorize-alpha(" + colors + ")' opacity='0.7'>\
    <Rule>\
      <MarkersSymbolizer file='lib/assets/marker_15px.png' allow-overlap='true' opacity='0.4' />\
    </Rule>\
  </Style>";
};

var placesStyle;
InaturalistMapStyles.places = function( ) {
  placesStyle = placesStyle || InaturalistMapStyles.extractMMLStyle(
    "polygon-fill: #daa520; " +
    "polygon-opacity: 0.3; " +
    "line-width: 2; " +
    "line-opacity: 0.9; " +
    "line-color: #daa520;"
  );
  return placesStyle;
};

var taxonRangeStyles = { };
InaturalistMapStyles.taxonRange = function( color ) {
  color = color || "#ff5eb0";
  if( taxonRangeStyles[ color ] ) {
    return taxonRangeStyles[ color ];
  }
  taxonRangeStyles[ color ] = InaturalistMapStyles.extractMMLStyle(
    "polygon-fill: "+ color +"; " +
    "polygon-opacity: 0.4; " +
    "line-width: 1; " +
    "line-opacity: 0.9; " +
    "line-color: "+ color +";"
  );
  return taxonRangeStyles[ color ];
};

var taxonPlacesStyle;
InaturalistMapStyles.taxonPlaces = function( ) {
  taxonPlacesStyle = taxonPlacesStyle || InaturalistMapStyles.extractMMLStyle(
    "polygon-fill: #daa520; " +
    "polygon-opacity: 0.3; " +
    "line-width: 1; " +
    "line-opacity: 0.9; " +
    "line-color: #daa520; " +
    "[last_observation_id > 0] { polygon-fill: #73ac13; line-color: #73ac13; } " +
    "[occurrence_status_level=10] { polygon-fill:#2E2E2E; line-color: #2E2E2E; } " +
    "[establishment_means='introduced'] { line-dasharray: 10, 6; }"
  );
  return taxonPlacesStyle;
};

var coloredHeatmapStyles = { };
InaturalistMapStyles.coloredHeatmap = function( color, width, opacity ) {
  width = width || 14;
  color = color || "#6E6E6E";
  opacity = opacity || 0.35;
  var key = [ color, width, opacity ].join(",")
  if( coloredHeatmapStyles[ key ] ) {
    return coloredHeatmapStyles[ key ];
  }
  coloredHeatmapStyles[ key ] = InaturalistMapStyles.extractMMLStyle(
    "marker-fill: "+ color +"; " +
    "marker-fill-opacity: "+ opacity +"; " +
    "marker-width: "+ width +"; " +
    "marker-line-color: #ffffff; " +
    "marker-line-width: 2; " +
    "marker-allow-overlap: true; " +
    "marker-comp-op: darken;"
  );
  return coloredHeatmapStyles[ key ];
};

var markersAndCirclesStyles = { };
InaturalistMapStyles.markersAndCircles = function( color, options ) {
  options = options || { };
  if( options.resetCache ) { markersAndCirclesStyles = { }; }
  if( markersAndCirclesStyles[ color ] ) {
    return markersAndCirclesStyles[ color ];
  }
  var style =
    "marker-width: 8; " +
    "marker-line-color: #D8D8D8; " +
    "marker-line-width: 150; " +
    "marker-line-opacity: 0.7; " +
    "marker-allow-overlap: true; " +
    "marker-file: 'lib/assets/map-marker.svg'; " +
    "marker-transform: translate(0,-21); ";
  if( color ) {
    style += "marker-fill: "+ color + "; ";
  } else {
    style += InaturalistMapStyles.taxonColorCSS( options );
  }
  style +=
    "[captive='true'] { marker-fill-opacity: 0.3; marker-line-opacity: 0.4; } " +
    "[quality_grade='research'] { fg/marker-line-width: 0; fg/marker-width: 2; fg/marker-fill: #ffffff; " +
    "  fg/marker-fill-opacity: 1; fg/marker-allow-overlap: true; fg/marker-transform: translate(0,-26); " +
    "  marker-line-color: #ffffff; } " +
    "[geoprivacy='obscured'],[private_location!='']{ marker-file: ''; marker-line-width: 1.5; marker-transform: translate(0,0); " +
    "  marker-width: 10; marker-line-color: #BDBDBD; marker-fill-opacity: 0.3; fg/marker-transform: translate(0,0); } " +
    "['taxon.iconic_taxon_id'=''][geoprivacy='obscured'],['taxon.iconic_taxon_id'=''][private_location!=''] { " +
    "  marker-file: 'lib/assets/mm_34_stemless_unknown.png'; marker-width: 11; marker-opacity: 0.6; } " +
    "['taxon.iconic_taxon_id'=''] { marker-file: 'lib/assets/mm_34_unknown.png'; marker-width: 9; } ";
  markersAndCirclesStyles[ color ] = InaturalistMapStyles.extractMMLStyle( style );
  return markersAndCirclesStyles[ color ];
};

var taxonColorStyle;
InaturalistMapStyles.taxonColorCSS = function( options ) {
  options = options || { };
  if( options.resetCache ) { taxonColorStyle = null; }
  taxonColorStyle = taxonColorStyle || "marker-fill: #585858; ";
  _.each( Taxon.iconicTaxaByID, function( t, id ) {
    taxonColorStyle = taxonColorStyle +
      `['taxon.iconic_taxon_id'=${ id }] { marker-fill: ${ Taxon.iconicTaxonColor( id ) }; } `;
  });
  return taxonColorStyle;
};

module.exports = InaturalistMapStyles;
