﻿
(function ($) {

    $(document).ready(function ($) {

        (function getPosts() {
            $.ajax({
                type: 'GET',
                url: `https://graph.facebook.com/v3.3/${
                    credentials.page_id
                    }?fields=posts{message,full_picture,created_time,permalink_url}&access_token=${credentials.access_token}`,
                success: function ({ posts }) {
                    let data = posts['data']
                        .filter(item => {
                            if ('message' in item) {
                                return item
                            }
                        })
                        .filter((item, key) => (key < 10 ? item : null))
                        .filter(item => item)

                    let html = ''
                    var i = 0;
                    
                    if (data.length) {
                        data.map(item => {

                            if (i == 0) {
                                html += `
                         <div class="carousel-item col-md-4 active">  
                          <a href="${item.permalink_url}">
                                 <div class="card card_site_slide">
                                <div class="card-body card_site_slide">
                                  <div class="card-body_img card_site_slide">
                                    <img src="${item.full_picture}"  alt="">
                                  </div>
                                <div class="card-body_desc">
                                  <div class="body_desc_chil">
                                  <p style="white-space: pre-line" class="first-line">${item.message}</p>
                                  <a href="${item.permalink_url}" class="ver-mais">ver mais</a>
                                  </div>
                                  </div>
                                </div>
                              </div>
                            </a>
                        </div>
                        `
                            }
                            else {
                                html += `
                         <div class="carousel-item col-md-4">  
                            <a href="${item.permalink_url}">
                                 <div class="card card_site_slide">
                                <div class="card-body card_site_slide">
                                  <div class="card-body_img card_site_slide">
                                    <img src="${item.full_picture}"  alt="">
                                  </div>
                                <div class="card-body_desc">
                                  <div class="body_desc_chil">
                                  <p style="white-space: pre-line" class="first-line">${item.message}</p>
                                  <a href="${item.permalink_url}" class="ver-mais">ver mais</a>
                                  </div>
                                  </div>
                                </div>
                              </div>
                            </a>
                        
                        </div>
                        `
                            }

                            i++;

                        })
                        if (document.querySelector('#slide_carousel'))
                            document.querySelector('#slide_carousel').innerHTML = html
                    }
                    else {
                        $('#hide_no_posts').hide();

                        let withoutPost = `
  
                              <h3 class="lang" key="key38" style="color:#fff;text-align:center;">Sem notícias disponíveis.</h3>
                        `
                        if (document.querySelector('.slide_carousel'))
                            document.querySelector('.slide_carousel').innerHTML = withoutPost
                    }
                }
            })
        })()
    })

})(jQuery)

var credentials = {
    page_id: '121907249209420',
    access_token:
        'EAAFa0GjjnJgBAJkStPLrSzmT9TZASegpsgGaTnYfQYzs9VGjGZBubQM0dZA7toW2tPG4ihgxZCKUBZBAvXU4lB1ivaZB8kkV3WGGRUDCA1ilzyaQt2iZCRksJZClHibNZBoEq133ZCjlZAE4zSaYrpEocdVVk5QtvhEZAx8UKHArZA2S1twZDZD'

}
