<md-sidenav>
  <style scoped>
    :scope.fixed ~ {
      
    }
    :scope.fixed ~ header, 
    :scope.fixed ~ main, 
    :scope.fixed ~ footer,
    :scope.fixed ~ md-footer footer {
      padding-left: 300px;
    }
    :scope .logo {
      text-align: center;
      margin-top: 32px;
      margin-bottom: 40px;
    }
    @media only screen and (max-width : 992px) {
      :scope.fixed ~ header, 
      :scope.fixed ~ main, 
      :scope.fixed ~ footer,
      :scope.fixed ~ md-footer footer {
        padding-left: 0;
      }
    }
    @media only screen and (min-width: 993px){
      :scope.fixed ~ header .container, 
      :scope.fixed ~ main .container, 
      :scope.fixed ~ footer .container,
      :scope.fixed ~ md-footer footer .container{
          width: 85%;
      }
    }
    :scope #logo-container span{
      font-size: 32px;
      font-weight: 300;
    }
  </style>
 <div id="slide-out" class="side-nav {fixed}">
  <div class="logo" if="{logoText||logoImage}">
    <a id="logo-container" href="{logoLink}" class="brand-logo">
      <img src="{logoImage}" if="{logoImage}"/>
      <span class="{logoColor}" if="{logoText}">
        {logoText}
      </span>
    </a>
  </div>
  <yield/>
</div>
<!-- <a href="#" data-activates="slide-out" class="button-collapse"><i class="material-icons">menu</i></a> -->
  <script>
    var self = this;
    self.fixed = opts.fixed ? 'fixed' : '';
    self.logoImage = opts.logoImage;//res/materialize.svg
    self.logoLink = opts.logoLink || 'javascript:void(0);';//http://materializecss.com/
    self.logoText = opts.logoText;
    self.logoColor = opts.logoColor || 'red-text text-lighten-2';
    this.root.classList.add(self.fixed);
  </script>
</md-sidenav>