const {createApp}= Vue;

createApp({
  data(){
    return{

      task : [
        {
          text:'Comprare la pizza',
          doneTask : false
        },
        {
          text:'Comprare latte',
          doneTask : false
        },
        {
          text:'Allenamento',
          doneTask : false
        },
      ],




    }
  }

}).mount('#app');