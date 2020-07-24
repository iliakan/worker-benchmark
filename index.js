import WorkerBenchmark from './worker-benchmark.js';
import IframeBenchmark from './iframe-benchmark.js';

document.querySelector('#runWorker').onclick = async function() {

  /*
  let blob = new Blob([`self.postMessage('worker-ready')`], {type: 'application/javascript'});
  let url = URL.createObjectURL(blob);
  */

  let url = 'worker.js';

  let benchmark = new WorkerBenchmark({
    url
  });

  alert(await benchmark.run());
}

document.querySelector('#runIframe').onclick = async function() {

  /*
  let blob = new Blob([`self.postMessage('worker-ready')`], {type: 'application/javascript'});
  let url = URL.createObjectURL(blob);
  */

  let url = 'iframe.html';

  let benchmark = new IframeBenchmark({
    url
  });

  alert(await benchmark.run());
}