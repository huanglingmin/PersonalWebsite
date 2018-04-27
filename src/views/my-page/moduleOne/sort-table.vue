<template>
  <div class="container">
    <el-col :span="8">
      <ul ref="todoList" class="iview-admin-draggable-list">
        <li v-for="(item, index) in todoArray" :key="index" :data-index="index">{{item.content}}</li>
      </ul>
    </el-col>
    <el-col :span="8" class="h300">
      <div ref="doList" class="iview-admin-draggable-list">
        <p v-for="item in doArray" :key="item">{{item}}</p>
      </div>
    </el-col>
    <el-col :span="8" class="h300">
      <ul ref="todoList3" class="iview-admin-draggable-list">
        <!-- <li v-for="(item, index) in doArray" :key="index" :data-index="index">{{item.content}}</li> -->
        {{doArray}}
      </ul>
    </el-col>
  </div>
</template>

<script>
import Sortable from 'sortablejs';
export default {
  data() {
    return {
      todoArray: [
        {
          content: '选项一'
        },
        {
          content: '选项二'
        },
        {
          content: '选项三'
        },
        {
          content: '选项四'
        },
        {
          content: '选项五'
        },
        {
          content: '选项六'
        },
        {
          content: '选项七'
        },
        {
          content: '选项八'
        }
      ],
      doArray: []
    };
  },
  methods: {
    onEndFun(e) {
      let movedRow = this.doArray[e.oldIndex];
      this.doArray.splice(e.oldIndex, 1);
      this.doArray.splice(e.newIndex, 0, movedRow);
      console.log(e);
    },
    onRemoveFun(e) {
      this.doArray.splice(event.oldIndex, 1);
    }
  },
  mounted() {
    /* eslint-disable */
    const that = this;
    // 需要添加的元素
    Sortable.create(that.$refs.todoList, {
      group: {
        name: 'list',
        // 列表单元移出，移动的为该元素的副本
        pull: 'clone',
      },
      animation: 120,
      // 是否允许表格内拖动
      sort: false,
      // 生成一个副本作为影子单元在加入的列表中显示
      ghostClass: 'placeholder-style',
      fallbackClass: 'iview-admin-cloned-item',
      onRemove(event) {
        // 隐藏拖入列表的数据
        event.item.hidden = true;
        // event.item.style.display = 'none';
        that.doArray.push(`添加的数据${new Date()}`);
        // that.doArray.splice(event.newIndex, 0, that.todoArray[event.item.getAttribute('data-index')]);
      }
    });
    // 添加到的位置
    Sortable.create(that.$refs.doList, {
      group: {
        name: 'list',
        // 是否允许拖动到另一个组名相同的组中
        pull: false
      },
      filter: '.iview-admin-draggable-delete',
      animation: 120,
      // 在doList中只有p单元可以拖动(此处值为类名)
      draggable: 'p',
      fallbackClass: 'iview-admin-cloned-item',
      onEnd: that.onEndFun,
      onRemove: that.onRemoveFun
    });
  }
};
</script>

<style lang="less" scoped>
.container {
  background-color: #fff;
  .h300 {
    height: 350px;
  }
  .iview-admin-draggable-list {
    height: 100%;
    list-style: none;
    li {
      padding: 9px;
      border: 1px solid #ddd;
      border-radius: 3px;
      margin-bottom: 5px;
      cursor: pointer;
      position: relative;
      transition: all .2s;
    }
    li:hover {
      color: #87b4ee;
      border-color: #87b4ee;
      transition: all .2s;
    }
    &.iview-admin-draggable-delete {
      height: 100%;
      position: absolute;
      right: -8px;
      top: 0px;
      display: none;
    }
  }
}
</style>
