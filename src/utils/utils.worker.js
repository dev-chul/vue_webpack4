export const helloWorld = async (params) => {
  // heavy computing goes here
  setInterval(function(){
      this.changes = ((Math.random() * 100).toFixed(2))+'%';
      console.log ('worker : ' + this.changes);
  }, 3000);
}
