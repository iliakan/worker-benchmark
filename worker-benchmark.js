export default class WorkerBenchmark {

  constructor({
    runTimes = 1000,
    url
  } = {}) {
    this.url = url;
    this.runTimes = runTimes;
  }

  async run() {
    
    let timeTotal = 0;

    for(let i=0; i<this.runTimes; i++) {
      let timeStart = performance.now();
 
      let worker = new Worker(this.url);
      
      await new Promise(resolve => {
        worker.addEventListener('message', event => {
          //console.log(event);
          if (event.data == 'ready') {
            resolve();
          }
        }, {once: true});
      });

      timeTotal += performance.now() - timeStart;

      worker.terminate();
    }
    
    return timeTotal / this.runTimes;
  }
}