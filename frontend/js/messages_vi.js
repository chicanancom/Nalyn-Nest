!(function (n) {
  "function" == typeof define && define.amd
    ? define(["jquery", "../jquery.validate"], n)
    : "object" == typeof module && module.exports
    ? (module.exports = n(require("jquery")))
    : n(jQuery);
})(function (n) {
  return (
    n.extend(n.validator.messages, {
      required: "Yêu cầu nhập trường này.",
      remote: "Hãy sửa cho đúng.",
      email: "Vui lòng cung cấp địa chỉ email hợp lệ.",
      url: "Hãy nhập URL.",
      date: "Hãy nhập ngày.",
      dateISO: "Hãy nhập ngày (ISO).",
      number: "Hãy nhập số.",
      digits: "Hãy nhập chữ số.",
      creditcard: "Hãy nhập số thẻ tín dụng.",
      equalTo: "Hãy nhập thêm lần nữa.",
      extension: "Phần mở rộng không đúng.",
      maxlength: n.validator.format("Hãy nhập từ {0} kí tự trở xuống."),
      minlength: n.validator.format("Hãy nhập từ {0} kí tự trở lên."),
      rangelength: n.validator.format("Hãy nhập từ {0} đến {1} kí tự."),
      range: n.validator.format("Hãy nhập từ {0} đến {1}."),
      max: n.validator.format("Hãy nhập từ {0} trở xuống."),
      min: n.validator.format("Hãy nhập từ {1} trở lên."),
    }),
    n
  );
});
