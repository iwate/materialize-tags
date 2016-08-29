<md-pagination>
  <ul class="pagination">
    <li class="disabled"><a href="#!"><i class="material-icons">chevron_left</i></a></li>
    <li class="active"><a href="#!">1</a></li>
    <li class="waves-effect"><a href="#!">2</a></li>
    <li class="waves-effect"><a href="#!">3</a></li>
    <li class="waves-effect"><a href="#!">4</a></li>
    <li class="waves-effect"><a href="#!">5</a></li>
    <li class="waves-effect"><a href="#!"><i class="material-icons">chevron_right</i></a></li>
  </ul>
  <script>
    
  </script>
  <nav aria-label={opts.label}>
    <ul class="pagination">
      <li class="{isPrev ? '' : 'disabled'}">
        <a href="{isPrev ? prefix + prev : 'javascript:void(0)'}" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li each="{p in pages}" class="{p == parent.opts.current ? 'active' : 'waves-effect' }"><a href="{parent.prefix + p}">{p + 1}</a></li>
      <li class="{isNext ? '' : 'disabled'}">
        <a href="{isNext ? prefix + next : 'javascript:void(0)'}" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
  <script>
    var self = this;
    function init(){
      var l = opts.n || 4, len = 2 * n + 1;
      self.isPrev = opts.current > 0;
      self.isNext = opts.current < opts.max;
      self.prefix = opts.prefix || '?';
      self.key = opts.key || 'p';
      self.next = +opts.current + 1;
      self.prev = +opts.current - 1;
      self.pages = [];
      for(
        var i = opts.current - l >= 0 ? opts.current - l : 0, j = i + len;
        i < j && i <= opts.max;
        self.pages.push(i++)
      );
      if(self.pages.length < len){
        for(
          var i = self.pages[0] - 1, j = opts.max - len ? opts.max - len : 0;
          i > j && i >= 0;
          self.pages.unshift(i--)
        );
      }
        
      if(self.prefix != '?')
        self.prefix += '&';
      self.prefix += self.key + '=';
    }
    self.on('mount', init);
    self.on('update', init);
  </script>
</md-pagination>