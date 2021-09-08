 AFRAME.registerComponent("listener", {
    init: function() {
      this.target = document.querySelector('#target');
      this.prevPosition = null;
      this.prevRotation = null;
    },
   tick: function() {
     if (this.el.object3D.visible) {
       this.target.setAttribute('visible', 'true')
       if(this.prevPosition) {
         this.target.object3D.position.lerp(this.prevPosition, 0.1)
         let rot = this.target.object3D.rotation.toVector3().lerp(this.prevRotation, 0.1)
         this.target.object3D.rotation.setFromVector3(rot)
       } else {
         this.target.setAttribute('position', this.el.getAttribute('position'))
         this.target.setAttribute('rotation', this.el.getAttribute('rotation'))
       }
       this.prevPosition = this.el.object3D.position
       this.prevRotation = this.el.object3D.rotation

      } else {
       this.target.setAttribute('visible', 'false')
        this.prevPosition = null;
        this.prevRotation = null;
      }
   }
 })
