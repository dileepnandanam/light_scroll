module LightScroll
  module Rails
    # add vendor/assets to Rails asset pipeline
    class Engine < ::Rails::Engine
    end
  end

  module ActionView
    def light_scroll(collection, path, params)
      params[:page] = params[:page].present? ? params[:page].to_i + 1 : 2
      if collection.next_page
        %{

          <div class="more-items">
            <a class="view-more" data-remote="true" href="#{path}?#{params.permit(params.keys).to_hash.map{|k,v| "#{k}=#{v}"}.join("&")}" />
          </div>

        }.html_safe
      end
    end
    ::ActionView::Base.send :include, self
  end
end