<template>
    <div class="hello">
        <span style="font-size: 24px;padding: 24px;">code-mirror vue示例</span>
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

        <button @click="getValueTest()"> getValue</button>

        <button @click="setValueTest()"> setValue</button>
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
                content: `function test(){console.log("hello")}`,
                content2: `select * from bas_company limit 10;
update bas_company set company_name='唯品会';`,
                options: {
                    mode: 'javascript',
                    lineNumbers: true,
                    readOnly: false,
                    extraKeys: {"Ctrl": "autocomplete"}
                },
                options2: {
                    mode: {name: "text/x-mysql"},
                    lineNumbers: true,
                    readOnly: false,
                    extraKeys: {"Ctrl": "autocomplete"},
                    theme: "idea"
                },
            }
        },
        methods: {
            changes(){
                var codemirror = this.$refs.myCm.codemirror;
                console.log(codemirror.getValue());
            },
            getValueTest(){
                console.log(this.$refs.myCm.codemirror);
                console.log(this.$refs.myCm2.codemirror);
                var codemirror = this.$refs.myCm.codemirror;
                var codemirror2 = this.$refs.myCm2.codemirror;
                alert(codemirror2.getValue());

            },
            setValueTest(){
                var codemirror2 = this.$refs.myCm2.codemirror;
                codemirror2.setValue(`select * from bas_company limit 10;\nupdate bas_company set company_name='唯品会' set value;`);
                alert(codemirror2.getValue());
            }
        },
        computed: {
            codemirror() {
                console.log("here");
                return this.$refs.myCm.codemirror
            }
        },
        components: {
            codemirror
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style>
    .CodeMirror {
        font-size: 24px !important;
        height: 160px;
    }
</style>
