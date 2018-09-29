<template>
  <div class="hello">


      <codemirror
              ref="myCm"
              :value="content"
              :options="options"
              @changes="changes"
              class="code"
      ></codemirror>

      <codemirror
              ref="myCm2"
              :value="content2"
              :options="options2"
              @changes="changes"
              class="code"
      ></codemirror>

      <button @click="getValueTest()"> 获取脚本 </button>
  </div>
</template>

<script>

    import { codemirror } from 'vue-codemirror';
    import 'codemirror/theme/idea.css'
    require("codemirror/mode/python/python.js");
    require("codemirror/mode/javascript/javascript.js");
    require("codemirror/mode/sql/sql.js");
    require('codemirror/addon/hint/show-hint.js');
    require('codemirror/addon/hint/javascript-hint.js');
    require('codemirror/addon/hint/sql-hint.js');

export default {
  name: 'HelloWorld',
    data () {
        return {
            content:
                    `function test(){console.log("hello")}`,
            content2:
`select * from bas_company limit 10;
update bas_company set company_name='唯品会';`,
            options: {
                mode: 'javascript',
                lineNumbers: true,
                readOnly : false,
        extraKeys: {"Ctrl": "autocomplete"}
            },
            options2: {
                mode: {name: "text/x-mysql"},
                lineNumbers: true,
                readOnly : false,
                extraKeys: {"Ctrl": "autocomplete"},
                theme:"idea"
            },
        }
    },
    methods: {
        changes(){
            console.log(this.content);
        },
        getValueTest(){
            alert(this.content);
            alert(this.content2);
        }
    },
    computed: {
        codemirror() {
            console.log("here");
            return this.$refs.myCm.codemirror
        }
    },
    components:{
        codemirror
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style>
    .CodeMirror {
        font-size:24px !important;
        height: 160px;
    }
</style>
