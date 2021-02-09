interface IRegex {
    text: RegExp
    zip: RegExp
    email: RegExp
}

const regex: IRegex = {
    text: /^[éěëščřžýáäíïťďňöúůüÿÉĚËŠČŘŽÝÁÄÍÏŤĎŇÖÚŮÜŸ \-,.?!'"\w\s\d]+$/,
    zip: /^\d{3}(\s)?\d{2}$/,
    email: /^("([ !#-[\]-~]|\\[ -~])+"|[-a-z0-9!#$%&'*+/=?^_`{|}~]+(\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*)@([0-9a-z\u00C0-\u02FF\u0370-\u1EFF]([-0-9a-z\u00C0-\u02FF\u0370-\u1EFF]{0,61}[0-9a-z\u00C0-\u02FF\u0370-\u1EFF])?\.)+[a-z\u00C0-\u02FF\u0370-\u1EFF]([-0-9a-z\u00C0-\u02FF\u0370-\u1EFF]{0,17}[a-z\u00C0-\u02FF\u0370-\u1EFF])?$/i,
};

export default regex;
