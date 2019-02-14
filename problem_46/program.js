// find most repeted ip in apache log 
//example :-  input :{ "10.0.0.1-frank [10/dec/17 10:14:27]", "10.0.0.1-frank [10/dec/17 10:14:28]","10.0.0.2-nancy [10/dec/17 10:14:28]", "10.0.0.1-frank [10/dec/17 10:14:27]" };
                     //output 10.0.0.1 ip which mostly repe


function fincdMostRepeatedIP(log) {
    let res = {};
    for (let i = 0; i < log.length; i++) {
        let log_chunk = log[i].split("-");
        if (typeof res[log_chunk[0]] == "undefined") {
            res[log_chunk[0]] = 1;
        } else {
            res[log_chunk[0]]++;
        }
    }
    let sortedFrequency = Objec.keys(res).sort((a,b) => res[a] - res[b]);
    return sortedFrequency.pop();
}