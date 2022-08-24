$(function(){
    // 通过ajax发起get请求
    // 封装一个getmessage函数
    function getmsg(text){
        $.ajax({
            method: 'GET',
            url: 'http://www.liulongbin.top:3006/api/robot',
            data : {
                spoken : text
            },
            success : function(res){

                $('.talk_list').append(`
                <li class="left_word">
                    <img src="img/person01.png" /> <span>${res.data.info.text}</span>
                </li>
        `)
            }
        })
    }

    // 初始化右侧滚动条
    // 这个方法定义在scroll.js中
    resetui()
    // 给按钮绑定事件
    $('.input_sub').on('click',function(){
        // 获取用户输入
        let text = $('#ipt').val()
        // console.log(text)
        // 将用户输入添加到右侧
        $('.talk_list').append(`
        <li class="right_word">
            <img src="img/person02.png" /> <span>${text}</span>
          </li>
        `)
        // 追加完内容后 需要重置滚动条
        resetui()
        $('#ipt').val('')
        getmsg(text)
    })
  })