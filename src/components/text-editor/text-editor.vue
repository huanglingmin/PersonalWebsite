<template>
  <textarea class='tinymce-textarea' id="tinymceEditer">
  </textarea>
</template>

<script>
import tinymce from 'tinymce';
import { plugins, toolbar1 } from './setting';
export default {
  name: 'text-editor',
  data() {
    return {
      spinShow: true
    };
  },
  methods: {
    init() {
      this.$nextTick(() => {
        let vm = this;
        let height = document.body.offsetHeight - 200;
        tinymce.init({
          selector: '#tinymceEditer',
          branding: false,
          elementpath: false,
          height: height,
          language: 'zh_CN.GB2312',
          menubar: 'edit insert view format table tools',
          plugins,
          toolbar1,
          autosave_interval: '20s',
          image_advtab: true,
          imageupload_url: '',
          table_default_styles: {
            width: '100%',
            borderCollapse: 'collapse'
          },
          setup: function(editor) {
            editor.on('init', function(e) {
              vm.spinShow = false;
              if (localStorage.editorContent) {
                tinymce.get('tinymceEditer').setContent(localStorage.editorContent);
              }
            });
            editor.on('keydown', function(e) {
              localStorage.editorContent = tinymce.get('tinymceEditer').getContent();
            });
          }
        });
      });
    }
  },
  mounted() {
    this.init();
  },
  destroyed() {
    tinymce.get('tinymceEditer').destroy();
  }
};
</script>

<style>

</style>
