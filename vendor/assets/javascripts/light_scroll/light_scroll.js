
initLightScroll = function() {
  scroll_fired = null
  window.onscroll = function() {
    if($(window).height() + 600 + document.documentElement.scrollTop > $('body').height()) {
      if(scroll_fired == null) {
        Rails.fire($('.view-more')[0], 'click')
        scroll_fired = 1
      }
    }
  }
  $(document).on('ajax:success', '.view-more', function(e) {
    $(this).closest('.more-items').replaceWith(e.detail[2].responseText)
    scroll_fired = null
  })
}
$(document).on('turbolinks:load', function() {
  initLightScroll()
})
$(document).ready(function(){
  initLightScroll()
})

