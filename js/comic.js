AFRAME.registerComponent("tour", {
  init: function(){
      this.createThumbNails();
  },

  createThumbNails: function(){
      const smallimages=[
          {
              id:"taj-mahal",
              title:"TajMahal",
              url:"./assets/thumbnails/ACTIONCOMICS_Cv1033.jpg"
          },

          {
              id:"eiffel-tower",
              title:"EiffelTower",
              url:"./assets/thumbnails/STL184810.jpg"
          },


      ]

      console.log(smallimages)
      var positionx = -50
      for (var item of smallimages){
          const posx=positionx + 35
          const posy = 5
          const posz = -20
          const position={x:posx, y:posy, z:posz}

          positionx = posx

          const images= this.createThumbNail(position,item)
          this.el.appendChild(images)
      }
  },


  createThumbNail: function (position,id) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width: 15,
      height: 20,
    });
    entityEl.setAttribute("material", { src: id.url });
    entityEl.setAttribute("visible",true)
    entityEl.setAttribute("position", position)

    return entityEl;
  },

  
  
});
