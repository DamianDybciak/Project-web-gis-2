require(['esri/Map','esri/views/SceneView','dijit/form/Button','esri/layers/FeatureLayer','esri/Graphic',
'esri/layers/GraphicsLayer', 'esri/widget/basemapGallery','esri/widgets/Expand'],
(Map, SceneView, Button,FeatureLayer,Graphic, GraphicsLayer,MapGallery,Expand)=>{
    
    const layer = new FeatureLayer({
        url : "https://sampleserver6.arcgisonline.com/arcgis/rest/services/USAMapServer/0"
    });

    let graphLayer = new GraphicsLayer();

    const map1= new Map({
        basemap :"topo",
        layers: [layer, graphLayer]
    });
    

    const view = new SceneView({
        map : map1,
        container: "mapD",
        center : [52,31],
        zoom : 13,
    
    });

    const geom = {
        type: "point",
        longitude: 52,
        latitude: 31
    };

    const symbol = {
        
        color: "red"
    };

    const attr = {
        name: "Polska",
        code: "POL"
    };


    const popTemplate={
        title :"Aplikacja Web-gis2",
        content:"Kraj: [name]",
    };



    const graph = new Graphic({
        geomoetry : geom,
        attributes : attr,
        symbol : symbol,
        popupTemplate : popTemplate,
    });


    graphLayer.add(graph);
    



    



});