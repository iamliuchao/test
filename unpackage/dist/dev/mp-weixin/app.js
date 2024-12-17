"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/tabBar/component/component.js";
  "./pages/tabBar/API/API.js";
  "./pages/tabBar/extUI/extUI.js";
  "./pages/tabBar/template/template.js";
  "./pages/component/testButton/testButton.js";
  "./pages/component/view/view.js";
  "./pages/component/swiper/swiper.js";
  "./pages/component/image/image.js";
  "./pages/component/icon/icon.js";
  "./pages/component/form/form.js";
  "./pages/component/map/map.js";
  "./pages/extUI/uni-combox/uni-combox.js";
  "./pages/API/get-location/get-location.js";
  "./pages/API/choose-location/choose-location.js";
  "./pages/API/open-location/open-location.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
function createApp() {
  const app = common_vendor.createSSRApp(_sfc_main);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
