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
		        @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
		    </template>
		  </el-table-column>
		</el-table>
		<el-button @click="ChangeAddForm">添加商品</el-button>
		
		<editForm @disshow="hideForm" @updateInfo="updateInfo" :editVisible='this.showEditForm' :shopID = 'this.tempID'></editForm>
		<addForm  @disshow='hideAddForm' addInfo="addInfo" :FormVisible = "this.showAddForm"></addForm>
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
		showEditForm:false,
		showAddForm:false
      }
    },
    methods: {
      handleEdit(index, row) {
        this.tempID = row.shopID;
		this.tempIndex = index;
		this.showEditForm = !this.showEditForm;
		// this.tableData.push({
  //         date: '2016-05-03',
  //         name: '王小虎',
  //         address: '上海市普陀区金沙江路 1516 弄'
  //       })
      },
	  hideForm(){
		  this.showEditForm = false;
	  },
	  hideAddForm(){
		  this.showAddForm = false;
	  },
	  updateInfo(form){

		  this.$set(this.tableData[this.tempIndex],'left',form.left);
		  this.$set(this.tableData[this.tempIndex],'shopName',form.shopName);
		  this.$set(this.tableData[this.tempIndex],'price',form.price);
	  },
	  ChangeAddForm(){
		  this.showAddForm = !this.showAddForm
	  },
	  addInfo(data){
		  this.tableData.push(data)
	  }
    },
	created() {
		this.$api.getsellshops(this.$store.state.userName).then((res)=>{
			this.tableData = res;	
		})
	},
	components:{
		editForm,
		addForm
	}
  }
</script>