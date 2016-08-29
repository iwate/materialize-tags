<md-actions>
  <div class="fixed-action-btn {dir} {toggle}" style="{style}" onclick="{onClick}">
    <yield/>
  </div>
  <script>
    var self = this;
    self.dir = opts.dir || 'horizontal '; // horizontal|vertical
    self.style = opts.fixed ? '' : 'position: absolute; display:inline-block';
    self.toggle = opts.toggle == 'click' ? 'click-to-toggle' : '';
    self.onClick = function(ev){
      var $this = $(self.root.querySelector('.fixed-action-btn'));
      if($this.hasClass('active'))
        $this.closeFAB();
      else
        $this.openFAB();
    };
  </script>
</md-actions>