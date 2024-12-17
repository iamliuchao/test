"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  components: {
    // setTabBar
  },
  data() {
    return {
      list: [
        {
          id: "log",
          name: "基础API",
          open: false,
          pages: [
            "log",
            "timer",
            "ArrayToBase64"
          ]
        },
        {
          id: "network",
          name: "网络",
          open: false,
          pages: [
            "request",
            "uploadFile",
            "downloadFile",
            "websocket"
          ]
        },
        {
          id: "location",
          name: "位置",
          open: false,
          pages: [
            "get-location",
            "choose-location",
            "open-location",
            "mapContext"
          ]
        },
        {
          id: "navigate",
          name: "路由与页面跳转",
          open: false,
          pages: [
            "navigateTo",
            "redirectTo",
            "reLaunch",
            "switchTab",
            "navigateBack"
          ]
        },
        {
          id: "media",
          name: "媒体",
          open: false,
          pages: [
            "image",
            "file",
            "audio",
            "video"
          ]
        },
        {
          id: "device",
          name: "设备",
          open: false,
          pages: [
            "getSystemInfo",
            "makePhoneCall",
            "scanCode",
            "openBluetoothAdapter"
          ]
        },
        {
          id: "boundar",
          name: "界面",
          open: false,
          pages: [
            "show",
            "tabbar",
            "animation",
            "pullDownRefresh"
          ]
        },
        {
          id: "services",
          name: "服务",
          open: false,
          pages: [
            "provider",
            "login",
            "share"
          ]
        }
      ],
      showSetTabBarPage: false
    };
  },
  onShow() {
    this.navigateFlag = false;
    this.leaveSetTabBarPage();
  },
  onHide() {
    this.leaveSetTabBarPage();
  },
  methods: {
    triggerCollapse(e, id) {
      if (!this.list[e].pages) {
        this.goDetailPage("", this.list[e].url);
        return;
      }
      for (var i = 0; i < this.list.length; ++i) {
        if (e === i) {
          this.list[i].open = !this.list[i].open;
        } else {
          this.list[i].open = false;
        }
      }
    },
    goDetailPage(panel, e) {
      if (e === "tabbar") {
        this.showSetTabBarPage = true;
        return;
      }
      if (typeof e === "string") {
        const url = "/pages/API/" + e + "/" + e;
        console.log(url);
        if (this.hasLeftWin) {
          common_vendor.index.reLaunch({
            url
          });
        } else {
          common_vendor.index.navigateTo({
            url
          });
        }
      } else {
        if (this.hasLeftWin) {
          common_vendor.index.reLaunch({
            url: e.url
          });
        } else {
          common_vendor.index.navigateTo({
            url: e.url
          });
        }
      }
    },
    leaveSetTabBarPage() {
      this.showSetTabBarPage = false;
    }
  }
};
if (!Array) {
  const _component_set_tab_bar = common_vendor.resolveComponent("set-tab-bar");
  _component_set_tab_bar();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.showSetTabBarPage
  }, $data.showSetTabBarPage ? {
    b: common_vendor.o($options.leaveSetTabBarPage)
  } : {
    c: common_vendor.f($data.list, (item, index, i0) => {
      return common_vendor.e({
        a: common_vendor.t(item.name),
        b: common_vendor.o(($event) => $options.triggerCollapse(index, item.id), item.id),
        c: item.open
      }, item.open ? {
        d: common_vendor.f(item.pages, (item2, key, i1) => {
          return {
            a: common_vendor.t(item2.name ? item2.name : item2),
            b: key,
            c: common_vendor.o(($event) => $options.goDetailPage(item.id, item2), key)
          };
        })
      } : {}, {
        e: item.id
      });
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
