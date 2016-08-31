<md-nav>
   <nav>
    <div class="nav-wrapper">
      <div class="{container}">
        <a href="#" class="brand-logo {pos}">{brand}</a>
        <yield/>
      </div>
    </div>
  </nav>
  <script>
    var self = this;
    self.brand = opts.brand || '';
    self.pos = opts.position;
    self.container = opts.container === false || opts.container === 'false' ? '' : 'container';
    if(opts.fixed){
      this.root.classList.add('navbar-fixed');
    }
  </script>
</md-nav>