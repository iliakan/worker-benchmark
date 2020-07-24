export default class IframeBenchmark {

  constructor({
    runTimes = 100,
    url
  } = {}) {
    this.url = url;
    this.runTimes = runTimes;
  }

  async run() {
    
    let timeTotal = 0;

    let iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    document.body.append(iframe);

    for(let i=0; i<this.runTimes; i++) {
      let timeStart = performance.now();
 
      iframe.src = this.url;
      
      await new Promise(resolve => {
        window.addEventListener('message', event => {
          //console.log(event);
          if (event.data == 'ready') {
            resolve();
          }
        }, {once: true});
      });

      timeTotal += performance.now() - timeStart;
    }
    
    return timeTotal / this.runTimes;
  }
}