<template>
  <div class="hello">
    aaa
  </div>
</template>

<script>

  export default {
    name: 'HelloWorld',
    data() {
      return {}
    },
    created(){
      // this.fn1();
      // this.fn2();
      // this.fn3();
      // this.fn4();
      // this.fn5();
      // this.fn6();
      // this.fn7();
      this.fn8();
    },
    methods: {
      fn1() {
        try{
          throw "业务处理异常"
        }catch(err){
          console.log(err)
        }
      },
      fn2() {
          throw "Vue.config.errorHandler处理异常"
        console.log("执行不到");
      },
      fn3() {
        setTimeout(function(){
          throw "Vue.config.errorHandler处理不了异步异常"
        },2000);
        console.log("===fn3===");
      },
      async fn4(){
        // throw "系统处理异常"
      },
      async fn5(){
        await new Promise((resolve, reject) => {
          return reject('VueGlobalError处理异步异常');
        })
        console.log("===fn5===");
        // await setTimeout(function(){
        //   throw "Vue.config.errorHandler处理不了异步异常"
        // },2000);
      },
      fn6(){
        for (let i = 1; i <= 5; i++) {
          setTimeout(function() {
            console.log( i );
          }, i*1000);
        }
        // 1
        // 2
        // 3
        // 4
        // 5

        // for (var i = 1; i <= 5; i++) {
        //   setTimeout(function() {
        //     console.log( i );
        //   }, i*5000);
        // }
        // 6
        // 6
        // 6
        // 6
        // 6
      },
      fn7() {

        var date = new Date();
        console.log('first time: ' + date.getTime());
        setTimeout(function () {
          var date1 = new Date();
          console.log('second time: ' + date1.getTime());
          console.log(date1.getTime() - date.getTime());
        }, 1000);
        for (var i = 0; i < 10000; i++) {
          console.log(1);
        }
        // 运行结果
        // first time: 1524540272462
        // （10000）1
        // second time: 1524540274346
        // 1884
      },
      fn8(){
        setTimeout(function() {console.log(4)}, 0);
        new Promise(function executor(resolve) {
          console.log(1);
          for( var i=0 ; i<10000 ; i++ ) {
            i == 9999 && resolve();
          }
          console.log(2);
        }).then(function() {
          console.log(5);
        });
        console.log(3);
//         大概过程如下：
// 1. 遇到setTimeout，交给其他模块执行，执行完后回调放入macro-task中
//         2. 遇到Promise，立即执行里面的function，输出1。
// 3. 循环开始，遇到resolve()，修改Promise状态为fulfill。继续执行，输出2。
// 4. 遇到then，将回调放入micro-task中。
// 5. 继续执行，输出3。
// 6. call stack执行完毕了。开始执行micro-task中的回调函数，输出5。
// 7. micro-task执行完毕，开始执行macro-task中的回调函数，输出4。
// 8. 结束。
// ---------------------

      }
    }
    ,
    computed: {
    }
    ,
    components: {}
  }
</script>

