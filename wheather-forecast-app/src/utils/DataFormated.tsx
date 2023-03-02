export function valuesFormat(dataToFormat: any, type:string) {
    let data = new Date(dataToFormat),
        dia = data.getDate().toString(),
        diaF = (dia.length === 1) ? '0' + dia : dia,
        mes = (data.getMonth() + 1).toString(),
        mesF = (mes.length === 1) ? '0' + mes : mes,
        anoF = data.getFullYear().toString();

    switch (type){
        case "dateFull":
            return `${diaF}/${mesF}/${anoF}`;
        case "day":
            return diaF
        case "hour":
            return GetHour(dataToFormat)
        case "temper":
            return GetTemper(dataToFormat)
    }
}

function GetHour(data: any) {
    let hour = new Date(data);
    let houtFormated = `${hour.getHours()}`
    return houtFormated
}
function GetTemper(data: any) {
    let temper = data.toString().split(".");
    return temper[0]
}