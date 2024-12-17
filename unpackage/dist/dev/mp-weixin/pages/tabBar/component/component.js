"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      list: [
        {
          id: "view",
          name: "视图容器",
          open: false,
          pages: [
            "view",
            "scroll-view",
            "swiper",
            "match-media"
          ]
        },
        {
          id: "content",
          name: "基础内容",
          open: false,
          pages: ["icon", "text", "rich-text", "progress"]
        },
        {
          id: "form",
          name: "表单组件",
          open: false,
          pages: [
            "button",
            "checkbox",
            "input",
            "label",
            "picker",
            "picker-view",
            "radio",
            "slider",
            "switch",
            "textarea",
            "form",
            ""
          ]
        },
        {
          id: "nav",
          name: "导航",
          open: false,
          pages: ["navigator"]
        },
        {
          id: "media",
          name: "媒体组件",
          open: false,
          pages: [
            "image",
            "camera",
            "audio",
            "video"
          ]
        },
        {
          id: "map",
          name: "地图",
          open: false,
          pages: ["map"]
        },
        {
          id: "canvas",
          name: "画布",
          open: false,
          pages: ["canvas"]
        }
      ]
    };
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
      console.log(panel);
      console.log(e);
      if (typeof e === "string") {
        const url = "/pages/component/" + e + "/" + e;
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
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.list, (item, index, i0) => {
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
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
