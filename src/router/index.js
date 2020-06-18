import Vue from 'vue'
import Router from 'vue-router'
import ShopDetail from '../components/shopDetail.vue'
import ShopList from '../components/shoplist.vue'
import ShopView from '../components/shopView.vue'
import Record from '../components/record.vue'
import SellerList from '../components/sellerlist.vue'
import sellRecord from '../components/sellRecord.vue'
import sellEdit from '../components/sellEdit.vue'
import shopDelete from '../components/sellDelete.vue'

Vue.use(Router)

const router = new Router({
	mode:'history',
	routes:[
		{
			path:'/',
			component:ShopList,
			hidden:true,
			children:[
				{
					path:'/',
					name:"shopIndex",
					component:ShopView
				},{
					path:'/:shop',
					name:'shopView',
					component:ShopView
				},{
					path:'/shops/:shopID',
					name:'shopDetail',
					component:ShopDetail
				}
			]
		},
		{
			path:'/adminstrator/shopDelete',
			name:'shopDelete',
			component:shopDelete,
			
		},
		{
			path:'/record/:userName',
			name:"buyRecord",
			component:Record
		},
		{
			path:'/seller',
			component:SellerList,
			hidden:true,
			children:[
				{
					path:'/',
					name:'sellerIndex',
					component:SellerList
				},{
					path:'/sellRecord/:userName',
					name:'sellRecord',
					component:sellRecord
				},{
					path:'/sellEdit/:userName',
					name:'sellEdit',
					component:sellEdit
				}
			]
		},
	]
});

export default router;