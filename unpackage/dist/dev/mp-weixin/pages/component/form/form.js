"use strict";
const common_vendor = require("../../../common/vendor.js");
const common_graceChecker = require("../../../common/graceChecker.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    formSubmit: function(e) {
      console.log("form发生了submit事件，携带数据为：" + JSON.stringify(e.detail.value));
      var rule = [
        { name: "nickname", checkType: "string", checkRule: "1,3", errorMsg: "姓名应为1-3个字符" },
        { name: "gender", checkType: "in", checkRule: "男,女", errorMsg: "请选择性别" },
        { name: "loves", checkType: "notnull", checkRule: "", errorMsg: "请选择爱好" }
      ];
      var formData = e.detail.value;
      var checkRes = common_graceChecker.graceChecker.check(formData, rule);
      if (checkRes) {
        common_vendor.index.showToast({ title: "验证通过!", icon: "none" });
      } else {
        common_vendor.index.showToast({ title: common_graceChecker.graceChecker.error, icon: "none" });
      }
    },
    formReset: function(e) {
      console.log("清空数据");
    }
  }
};
if (!Array) {
  const _component_lable = common_vendor.resolveComponent("lable");
  _component_lable();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.formSubmit && $options.formSubmit(...args)),
    b: common_vendor.o((...args) => $options.formReset && $options.formReset(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
