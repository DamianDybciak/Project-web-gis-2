require([
    "esri/Map",
    "esri/views/SceneView",
    "dijit/form/Button",
    "esri/layers/FeatureLayer",
    "esri/Graphic",
    "esri/layers/GraphicsLayer",
    "esri/widgets/BasemapGallery",
    "esri/widgets/Expand"
], (Map, SceneView,Button,FeatureLayer,Graphic,GraphicsLayer,MapGallery,Expand) =>{


    

    const layer = new FeatureLayer({
        url:"https://services1.arcgis.com/YmCK8KfESHdxUQgm/arcgis/rest/services/stacje_krwiodawstwa/FeatureServer",
    });


    
    const map1 = new Map({
        basemap:"osm",
        layers :[layer]
    });

    

    const view = new SceneView({
        map: map1,
        container: "mapD",
        zoom: 13,
        center :[21,52.15] 
    });
    
    
    const geom = {
        type:"point",
        longitude:21,
        latitude: 52.15,
        
    };
    
    const symbol = {
        type: "simple-marker",
        style: "X",
        size: 14,
        color: "green",
        
    
    }; 
    
    const attr= {
        name : "Polska",
        code: "POL"
    };


    const graph = new Graphic({
        geometry: geom,
        attributes : attr,
        symbol : symbol,
    });
    
    const basemapGallerywg = new MapGallery({
        view : view ,
    });

    const expWg = new Expand({
        view:view,
        content: basemapGallerywg,
    });


    view.ui.add(expWg,{position:"top-right"});


    //graphLayer.graphics.push(graph);
    
    //map1.graphics.add(graph);

    
    
    
    
    
})