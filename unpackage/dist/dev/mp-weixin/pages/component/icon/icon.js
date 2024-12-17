"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      iconType: ["success", "success_no_circle", "info", "warn", "waiting", "cancel", "download", "search", "clear"]
    };
  },
  onLoad() {
    this.iconType = ["success", "success_no_circle", "info", "warn", "waiting", "cancel", "download", "search", "clear"];
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.iconType, (value, index, i0) => {
      return {
        a: value,
        b: common_vendor.t(value),
        c: index
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
