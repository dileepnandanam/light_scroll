Light Scroll

Light scroll is a lite gem for infinite scroll
To get started:

.. code:: bash

    #Gemfile
    gem 'light_scroll'
    
    #application.js
    //= require light_scroll/light_scroll
    
    #example view
    = light_scroll(Post.paginate(page: params[:page], per_page: 10), post_path(filter: 'archived'), params)
    
    
 Todo
 
 Call a global javascript function on success for ajax request for next page, to init masonry etc.
 here <https://github.com/dileepnandanam/light_scroll/blob/master/vendor/assets/javascripts/light_scroll/light_scroll.js#L8>
 Write specs

