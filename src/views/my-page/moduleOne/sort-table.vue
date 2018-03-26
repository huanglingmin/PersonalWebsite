<template>
  <div class="container">
    <el-col :span="8">
      <ul ref="todoList" class="iview-admin-draggable-list">
        <li v-for="(item, index) in todoArray" :key="index" :data-index="index">{{item.content}}</li>
      </ul>
    </el-col>
    <el-col :span="8" class="h300">
      <ul ref="doList" class="iview-admin-draggable-list">
      </ul>
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
          content: '完成iview-admin基本开发'
        },
        {
          content: '对iview-admin进行性能优化'
        },
        {
          content: '对iview-admin的细节进行优化'
        },
        {
          content: '完成iview-admin开发'
        },
        {
          content: '解决发现的bug'
        },
        {
          content: '添加更多组件'
        },
        {
          content: '封装更多图表'
        },
        {
          content: '增加更多人性化功能'
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
        pull: true
      },
      animation: 120,
      // 是否允许表格内拖动
      sort: false,
      ghostClass: 'placeholder-style',
      fallbackClass: 'iview-admin-cloned-item',
      onRemove(event) {
        that.doArray.splice(event.newIndex, 0, that.todoArray[event.item.getAttribute('data-index')]);
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
      border: 1px solid #e7ebee;
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
