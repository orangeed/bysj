//用户
import Entrance from "../components/entrance.vue"
import Index from "../components/index.vue"
import Goods from "../components/goods.vue"
import Login from "../components/login.vue"
import Registered from "../components/registered.vue"
import My from "../components/my.vue"
import GoodsDetail from "../components/goodsDetail.vue"
import ShoppingCar from "../components/shoppingCar.vue"
import Order from "../components/order.vue"
//商家
import Admin from "../sjviews/admin.vue"
import Home from "../sjviews/home.vue"
import NewIndex from "../sjviews/newindex.vue"
import ReleaseProduction from "../sjviews/Merchandise management/releaseproduction.vue"
import AllGoods from "../sjviews/Merchandise management/allGoods.vue"
import AddedGoods from "../sjviews/Merchandise management/addedGoods.vue"
import NoAddGoods from "../sjviews/Merchandise management/noAddGoods.vue"
import AllOrder from "../sjviews/Order management/allOrder.vue"
import NotShipped from "../sjviews/Order management/notShipped.vue"
import Shipped from "../sjviews/Order management/shipped.vue"
import PendingReceipt from "../sjviews/Order management/pendingReceipt.vue"
import Comment from "../sjviews/Order management/comment.vue"
import PostActivity from "../sjviews/Activity management/postActivity.vue"
import PastActivity from "../sjviews/Activity management/pastActivity.vue"
import DraftActivity from "../sjviews/Activity management/draftActivity.vue"
import AllActivity from "../sjviews/Activity management/allActivity.vue"
import PublishedActivity from "../sjviews/Activity management/publishedActivity.vue"
//管理员
import SuperHome from "../superviews/superHome.vue"
import SuperIndex from "../superviews/newindex.vue"
import AllCommodity from "../superviews/CommodityManagement/allCommodity.vue"
import AddedCommodity from "../superviews/CommodityManagement/addedCommodity.vue"
import NoAddCommodity from "../superviews/CommodityManagement/noAddCommodity.vue"
import AllOrderSuper from "../superviews/OrderManagement/allOrderSuper.vue"
import NotShippedSuper from "../superviews/OrderManagement/notShippedSuper.vue"
import ShippedSuper from "../superviews/OrderManagement/shippedSuper.vue"
import PendingReceiptSuper from "../superviews/OrderManagement/pendingReceiptSuper.vue"
import CommentSuper from "../superviews/OrderManagement/commentSuper.vue"
import AllUser from "../superviews/UserManagement/allUser.vue"
import GoodUser from "../superviews/UserManagement/goodUser.vue"
import OffendingUser from "../superviews/UserManagement/offendingUser.vue"
import PostBusiness from "../superviews/BusinessManagement/postBusiness.vue"
import AllBusiness from "../superviews/BusinessManagement/allBusiness.vue"
import CooperationBusiness from "../superviews/BusinessManagement/cooperationBusiness.vue"
import ExpiredBusiness from "../superviews/BusinessManagement/expiredBusiness.vue"
import AllShare from "../superviews/ShareManagement/allShare.vue"
import PlusShare from "../superviews/ShareManagement/plusShare.vue"
import DeletedShare from "../superviews/ShareManagement/deletedShare.vue"


export default [
    {
        path: '/', //首页
        component: Entrance,
        meta: { auth: false },
        children: [
            {
                path: "/",
                component: Index
            },
            {
                path: "/goods:goodsStr",//生鲜水果
                component: Goods
            },
            {
                path:"/detail:id",
                component:GoodsDetail,
                name:"detail"
            },{
                path:"/shoppingCar",
                component:ShoppingCar
            },
            {
                path:"/order",
                component:Order,
                name:"order"
            },
            {
                path: "/login",
                component: Login
            },
            {
                path: "/my",
                component: My
            },
            {
                path: "/registered",
                component: Registered
            },
        ]
    },
    {
        path: "/admin",
        component: Admin,
        meta: { auth: false }
    }, {
        path: "/home",
        component: Home,
        meta: { auth: true },
        children: [{
            path: "/home",
            component: NewIndex
        }, {
            path: "/releaseproduction",
            component: ReleaseProduction,
            meta: { name: "发布商品" }
        }, {
            path: "/allGoods",
            component: AllGoods,
            meta: { name: "全部商品" }
        }, {
            path: "/addedGoods",
            component: AddedGoods,
            meta: { name: "已上架商品" }
        }, {
            path: "/noAddGoods",
            component: NoAddGoods,
            meta: { name: "未上架商品" }
        }, {
            path: "/allOrder",
            component: AllOrder,
            meta: { name: "全部订单" }
        }, {
            path: "/notShipped",
            component: NotShipped,
            meta: { name: "未发货" }
        }, {
            path: "/shipped",
            component: Shipped,
            meta: { name: "已发货" }
        }, {
            path: "/pendingReceipt",
            component: PendingReceipt,
            meta: { name: "待签收" }
        }, {
            path: "/comment",
            component: Comment,
            meta: { name: "待评价" }
        }, {
            path: "/postActivity",
            component: PostActivity,
            meta: { name: "发布活动" }
        }, {
            path: "/allActivity",
            component: AllActivity,
            meta: { name: "全部活动" }
        }, {
            path: "/publishedActivity",
            component: PublishedActivity,
            meta: { name: "进行中活动" }
        }, {
            path: "/pastActivity",
            component: PastActivity,
            meta: { name: "已过期活动" }
        }, {
            path: "/draftActivity",
            component: DraftActivity,
            meta: { name: "未进行活动" }
        }]
    },{
        path: "/superHome",
        component: SuperHome,
        meta: { auth: true },
        children: [{
            path: "/superHome",
            component: SuperIndex,
        }, {
            path: "/allCommodity",
            component: AllCommodity,
            meta: { name: "全部商品" }
        }, {
            path: "/addedCommodity",
            component: AddedCommodity,
            meta: { name: "已上架商品" }
        }, {
            path: "/noAddCommodity",
            component: NoAddCommodity,
            meta: { name: "未上架商品" }
        }, {
            path: "/allOrderSuper",
            component: AllOrderSuper,
            meta: { name: "全部订单" }
        }, {
            path: "/notShippedSuper",
            component: NotShippedSuper,
            meta: { name: "待发货" }
        }, {
            path: "/shippedSuper",
            component: ShippedSuper,
            meta: { name: "已发货" }
        }, {
            path: "/pendingReceiptSuper",
            component: PendingReceiptSuper,
            meta: { name: "待签收" }
        }, {
            path: "/commentSuper",
            component: CommentSuper,
            meta: { name: "待评价" }
        }, {
            path: "/allUser",
            component: AllUser,
            meta: { name: "全部用户" }
        }, {
            path: "/goodUser",
            component: GoodUser,
            meta: { name: "优质用户" }
        }, {
            path: "/offendingUser",
            component: OffendingUser,
            meta: { name: "违规用户" }
        }, {
            path: "/postBusiness",
            component: PostBusiness,
            meta: { name: "添加商家" }
        }, {
            path: "/allBusiness",
            component: AllBusiness,
            meta: { name: "全部商家" }
        }, {
            path: "/cooperationBusiness",
            component: CooperationBusiness,
            meta: { name: "合作商家" }
        }, {
            path: "/expiredBusiness",
            component: ExpiredBusiness,
            meta: { name: "过期商家" }
        }, {
            path: "/allShare",
            component: AllShare,
            meta: { name: "全部分享" }
        }, {
            path: "/plusShare",
            component: PlusShare,
            meta: { name: "加精分享" }
        }, {
            path: "/deletedShare",
            component: DeletedShare,
            meta: { name: "已删除分享" }
        }]
    }
]
