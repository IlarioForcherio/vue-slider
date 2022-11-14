
var app = new Vue({
  el: '#root',
  data: {

    link: 'https://picsum.photos/200/300',

    obj: [
      { img: "https://unsplash.it/300/300?image=10" },
      { img: "https://unsplash.it/300/300?image=11" },
      { img: "https://unsplash.it/300/300?image=12" },
    ],

    indice: 0,
  },
  //in mounted richiamo la funzione attivaintervallo
  //dentro attivaintervallo ho richiamato scorriImmagineDx
  mounted(){
    this.attivaIntervallo();
  },
  methods: {

    scorriImmagineDx: function () {

      if (this.indice < this.obj.length - 1) {
        this.indice++;
      } else {
        this.indice = 0;
      }
    },

    scorriImmagineSx: function () {

      if (this.indice < this.obj.length ) {
        this.indice--;
      }
      if(this.indice <= -1){
        this.indice = this.obj.length - 1;
      }

      
    },

     attivaIntervallo: function(){
     setInterval( () => { this.scorriImmagineDx() },2000 );
    },

    dotUno: function () {
      return this.indice = 0;
    },
    dotDue: function () {
      return this.indice = 1;
    },
    dotTre: function () {
      return this.indice = 2;
    },
  }
})

  
  














    


















  










