require([
    "esri/Map",
    "esri/views/SceneView",
    "esri/layers/FeatureLayer",
    "esri/widgets/BasemapGallery",
    "esri/widgets/Expand",
    "esri/widgets/Search",
    "esri/widgets/Measurement",
    "esri/widgets/Legend",
    "esri/widgets/LayerList"
], (Map, SceneView,FeatureLayer,MapGallery,Expand,Search,Measurement,Legend,LayerList) =>{
    
    let lublin = document.getElementById("lublin");

    let warszawa = document.getElementById("warszawa");

    const popTemplate ={
        title:"Dane",
        content: "Nazwa: {NazwaPunkt} <br>Adres: {ADRES}<br> Miasto: {Miasto}<br> Kod pocztowy: {KodPocztow} <br> Lokalizacja: {Lokalizacj}"
    };

    const layer = new FeatureLayer({
        url:"https://services1.arcgis.com/YmCK8KfESHdxUQgm/ArcGIS/rest/services/stacje_krwiodawstwa/FeatureServer/0",
        popupTemplate: popTemplate,
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
    
    
    
    const basemapGallerywg = new MapGallery({
        view : view ,
    });
    const searchWg = new Search({
        view: view
      });
      
    view.ui.add(searchWg, {
          position: "top-right",
          index: 2
        });
    const measurement = new Measurement({
        view: view,
        activeTool: "distance"
      });
    view.ui.add(measurement, "top-right");
    function switchTool() {
        const tool = measurement.activeTool === "distance" ? "area" : "distance";
        measurement.activeTool = tool;
       }
       
    let legend = new Legend({
        view: view
      });
      
    view.ui.add(legend, "bottom-right");   
    
    
    let layerlist = new LayerList({
        view: view
    });
   
    const expWg = new Expand({
        view:view,
        content: basemapGallerywg,
        
    });
    view.ui.add(expWg,{position:"top-right"});


    const expWg2 = new Expand({
        view:view,
        content: layerlist,
        
    });
    view.ui.add(expWg2,{position:"top-right"});

    lublin.addEventListener("click", function(){

        view.goTo({
            center: [22.556149,51.248760,]
          })

    });



    warszawa.addEventListener("click", function(){

        view.goTo({
            center: [21.002882,52.226054,]
          })

    });
    



    
    //map1.graphics.add(graph);

    
    
    
    
    
})