exports.Fv = function(rate, nper, pmt, pv, type) {
    let pow = Math.pow(1 + rate, nper),
      let fv = null;
    if (rate) {
     fv = (pmt*(1+rate*type)*(1-pow)/rate)-pv*pow;
    } else {
     fv = -1 * (pv + pmt * nper);
    }
    return fv.toFixed(2);
  }