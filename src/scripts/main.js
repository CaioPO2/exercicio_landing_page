AOS.init();

const dataDoEnvento = new Date("mar 1, 2025 19:00:00");
const timeStampDoEvento = dataDoEnvento.getTime();

const contaAsHoras = setInterval(function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteoEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60* 60;
    const minutoEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(distanciaAteoEvento / diaEmMs);
    const horasAteOEvento = Math.floor((distanciaAteoEvento % diaEmMs) / horaEmMs);
    const minutosAteOEvento = Math.floor((distanciaAteoEvento % horaEmMs) / minutoEmMs);
    const segundoAteOEvento = Math.floor((distanciaAteoEvento % minutoEmMs)/ 1000);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundoAteOEvento}s`;
    
    if(distanciaAteoEvento < 0){
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Evento expirado';
    }
},1000)