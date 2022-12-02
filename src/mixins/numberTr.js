import store from "./../store/index.js";

window.numberFormat = function (value, lng) {
  value += "";
  value = value.toString().split(",").join("");

  value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  if (store.state.appConfig.dir == "rtl") value = window.toPersian(value);
  if (store.state.appConfig.dir == "ltr") value = window.toEnglish(value);
  return value;
};

window.toEnglish = function (value) {
  var numbers = {
    "۰": 0,
    "۱": 1,
    "۲": 2,
    "۳": 3,
    "۴": 4,
    "۵": 5,
    "۶": 6,
    "۷": 7,
    "۸": 8,
    "۹": 9,
    "٠": 0,
    "١": 1,
    "٢": 2,
    "٣": 3,
    "٤": 4,
    "٥": 5,
    "٦": 6,
    "٧": 7,
    "٨": 8,
    "٩": 9,
  };

  for (const prop in numbers) {
    if (numbers.hasOwnProperty(prop)) {
      value = value.split(prop).join(numbers[prop]);
    }
  }
  return value;
};
window.toPersian = function (value) {
  var numbers = {
    0: "۰",
    1: "۱",
    2: "۲",
    3: "۳",
    4: "۴",
    5: "۵",
    6: "۶",
    7: "۷",
    8: "۸",
    9: "۹",
    "٠": "۰",
    "١": "۱",
    "٢": "۲",
    "٣": "۳",
    "٤": "۴",
    "٥": "۵",
    "٦": "۶",
    "٧": "۷",
    "٨": "۸",
    "٩": "۹",
  };
  for (const prop in numbers) {
    if (numbers.hasOwnProperty(prop)) {
      value = value.split(prop).join(numbers[prop]);
    }
  }

  return value;
};

export default window.numberFormat;
