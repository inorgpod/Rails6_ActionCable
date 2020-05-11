import consumer from "./consumer"

consumer.subscriptions.create("RoomChannel", {
  connected() {
    console.log('woooow')
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    $('#msg').append('<div class="message">' + data.content + '</div>')
    console.log(data)
    // Called when there's incoming data on the websocket for this channel
  }
});

var submit_message;

$(document).on('turbolinks:load', function() {
  submit_message()
})


submit_message = function (){

  $('#message_content').on('keydown', function(e){
    if(e.keyCode === 13){ //enter的(keyCode=13)的反饋效果

      $('input').click()
        e.target.value = '' //指定enter的作用域
        e.preventDefault()  //拔掉enter的原生作用
        console.log('ya we got enter') //印出enter的keydown結果
    }

  })
}