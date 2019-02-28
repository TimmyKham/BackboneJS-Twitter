<% for(var i = 0, len = locals.length; i < len; i += 1) { %>
<div class="mention">
  <div class="tweetEntry">
    <div class="tweetEntry-content">
      <a class="tweetEntry-account-group">
        <img class="tweetEntry-avatar" src="<%- locals[i].user.avatar %>">
        <span class="tweetEntry-fullname"><%- locals[i].user.name %></span>
        <span class="tweetEntry-username">@<b><%- locals[i].user.screen_name %></b></span>
        <span class="tweetEntry-timestamp">- <span class="tweetEntry-timestamp-val"><%- locals[i].createdAt %></span></span>
      </a>
      <div class="tweetEntry-text-container"><%- locals[i].text %></div>
    </div>
    <div class="tweetEntry-action-list" style="line-height:24px;">
      <i class="fa fa-reply" style="width: 80px;"><span class=rp> <%- locals[i].replyCount %></span></i>
      <i class="fa fa-retweet" style="width: 80px"><span class=rt> <%- locals[i].retweetCount %></span></i>
      <i class="fa fa-heart" style="width: 80px"><span class=fav> <%- locals[i].favoriteCount %></span></i>
      <i class="fas fa-map-marker-alt" style="width: 230px"><span class=loc> <%- locals[i].location %></span></i>
    </div>
  </div>
</div>
<% } %>