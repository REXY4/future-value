exports.Fv = function(rate, nper, pmt, pv, type) {
    let pow = Math.pow(1 + rate, nper),
      fv = null;
    if (rate) {
     fv = (pmt*(1+rate*type)*(1-pow)/rate)-pv*pow;
    } else {
     fv = -1 * (pv + pmt * nper);
    }
    return fv.toFixed(2);
}

exports.Fvga = function(rate,nper,pmt, pv, growth) {
  let pvif = rate === 0 ? nper : Math.pow(1 + rate, nper);
  let fvga = -(pmt*(Math.pow(1+rate,nper)-Math.pow(1+growth,nper))/(rate-growth)+pv*pvif);
  return fvga.toFixed(2);
}  

exports.Pmt = function(rate, nperiod, pv, fv, type) {
    if (!fv) fv = 0;
    if (!type) type = 0;
    if (rate == 0) return -(pv + fv)/nperiod;
    var pvif = Math.pow(1 + rate, nperiod);
    var pmt = rate / (pvif - 1) * -(pv * pvif + fv);
    if (type == 1) {
        pmt /= (1 + rate);
    };
    return pmt;
}