"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      "buttonText": "按钮",
      //组件内容值
      "bd": false
      //组件属性值
    };
  },
  methods: {
    goto(url) {
      common_vendor.index.showToast({
        //弹窗
        title: "触发了按钮点击事件，跳转到" + url,
        icon: "success",
        duration: 2e3
      });
      setTimeout(function() {
        common_vendor.index.redirectTo({
          //页面重定向
          url
        });
      }, 2e3);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.buttonText),
    b: $data.bd,
    c: common_vendor.o(($event) => $options.goto("../../index/index"))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
