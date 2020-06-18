<template>
	<div>
		<el-table
		  :data="tableData"
		  style="width: 100%"
		   height="500">
		  <el-table-column
		    label="商品编号"
		    width="200">
		    <template slot-scope="scope">
		      <span style="margin-left: 10px">{{ scope.row.shopID }}</span>
		    </template>
		  </el-table-column>
		  <el-table-column
		    label="商品名称"
		    width="200">
		    <template slot-scope="scope">
		      <span style="margin-left: 10px">{{ scope.row.shopName }}</span>
		    </template>
		  </el-table-column>
		  <el-table-column
		    label="商品存货"
		    width="200">
		    <template slot-scope="scope">
		      <span style="margin-left: 10px">{{ scope.row.left }}</span>
		    </template>
		  </el-table-column>
		  <el-table-column
		    label="商品价格"
		    width="200">
		    <template slot-scope="scope">
		       
		      <span style="margin-left: 10px">{{ scope.row.price }}</span>
		    </template>
		  </el-table-column>
			<el-table-column
			  label="商品图片"
			  width="200">
			  <template slot-scope="scope">
			    <img :src="scope.row.url" width="200"  /> 
			    <!-- <span style="margin-left: 10px">{{ scope.row.shopName }}</span> -->
			  </template>
			</el-table-column>
		  <el-table-column label="操作">
		    <template slot-scope="scope">
		      <el-button
		        size="mini"
		        @click="handleDelete(scope.$index, scope.row)">删除</el-button>
		    </template>
		  </el-table-column>
		</el-table>

	</div>
</template>

<script>
	import editForm from './form/editShop.vue'
	import addForm from'./form/addForm.vue'
	
  export default {
    data() {
      return {
        tableData: [],
		tempID:0,
		tempIndex:0,
      }
    },
    methods: {
      handleDelete(index, row) {
        this.tempID = row.shopID;
		this.tempIndex = index;
		this.$api.deleteShop(this.tempID).then((res)=>{
			alert("删除成功");
			this.tableData.pop(row);
		})
      }
    },
	created() {
		this.$api.getAllShops().then((res)=>{
			this.tableData = res;	
		})
	},

  }
</script>