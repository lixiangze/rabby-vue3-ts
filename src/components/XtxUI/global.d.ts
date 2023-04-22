// import type { XtxBread, XtxSkeleton } from "."
// import type SkeletonVue from "./Skeleton/Skeleton.vue"

// GlobalComponents for Volar
import Button from "./Button/index.vue"
import Bread from "./Bread/index.vue"
import CheckBox from "./CheckBox/index.vue"
import Skeleton from "./Skeleton/Skeleton.vue";
import Slider from "./Slider/index.vue";
import More from "./More/index.vue";
import Bread from "./Bread/index.vue";
import BreadItem from "./Bread/Item.vue";
import City from "./City/index.vue";
import Count from "./Count/index.vue";
import ImageView from "./ImageView/index.vue";
import Sku from "./Sku/index.vue";
import Dialog from "./Dialog/index.vue";
import InfiniteLoad from "./InfiniteLoad/index.vue";
import Tabs from "./Tabs/index.vue";
import TabPane from "./Tabs/pane.vue";
declare module '@vue/runtime-core' {
    export interface GlobalComponents {
        XtxButton:typeof Button,
        XtxBread:typeof Bread,
        XtxCheckBox:typeof CheckBox,
        XtxSkeleton:typeof Skeleton,
        XtxSlider:typeof Slider,
        XtxMore:typeof More,
        XtxBreadItem:typeof BreadItem,
        XtxCity:typeof City,
        XtxCount:typeof Count,
        XtxImageView:typeof ImageView,
        XtxSku:typeof Sku,
        XtxDialog:typeof Dialog,
        XtxInfiniteLoad:typeof InfiniteLoad,
        XtxTabs:typeof Tabs,
        XtxTabPane:typeof TabPane,

    }
  

  }
  
  export {}
  