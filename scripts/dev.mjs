import {spawn} from 'node:child_process';
const incoming=process.argv.slice(2);
const portIndex=incoming.indexOf('--port');
const port=portIndex>=0?incoming[portIndex+1]:'3000';
const child=spawn('next',['dev','--hostname','0.0.0.0','--port',port],{stdio:'inherit',shell:false});
child.on('exit',code=>process.exit(code??0));
for(const signal of ['SIGINT','SIGTERM'])process.on(signal,()=>child.kill(signal));
