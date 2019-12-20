export default {
  email: (value) => {
    const rex = '^(([^<>()\\[\\]\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\.,;:\\s@"]+)*)|(".+"))@'
      + '((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$';
    return new RegExp(rex).test(value)
  },

  phone: (value) => {
    const rex = /^((\+380)([0-9]){9})$/;
    return rex.test(value)
  },

  required: (value) => {
    return value && String(value).length > 0
  },

  onlyLetters: (value) => {
    const rex = /^[a-zA-Zа-яА-ЯЭэЪъЫы\s\-'`ЇїЄєІі]*$/;
    return rex.test(value)
  },

  moreThan: (value, length) => {
    return value && value.length > length
  },

  servicesNotEmpty: (values) => {
    return values && values.filter(item => item.is_checked).length > 0
  },
};
