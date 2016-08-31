<md-sidenav>
  <style scoped>
    :scope.fixed ~ {

    }
    :scope.fixed ~ header, 
    :scope.fixed ~ main, 
    :scope.fixed ~footer {
      padding-left: 300px;
    }
    :scope .logo {
      text-align: center;
      margin-top: 32px;
      margin-bottom: 80px;
    }
    @media only screen and (max-width : 992px) {
      :scope.fixed ~ header, 
      :scope.fixed ~ main, 
      :scope.fixed ~ footer {
        padding-left: 0;
      }
    }
    @media only screen and (min-width: 993px){
      :scope.fixed ~ header .container, 
      :scope.fixed ~ main .container, 
      :scope.fixed ~ footer .container {
          width: 85%;
      }
    }
  </style>
 <div id="slide-out" class="side-nav {fixed}">
  <div class="logo" if="{logo||logoImage}">
    <a id="logo-container" href="{logoLink}" class="brand-logo">
      <img src="{logoImage}"/>
    </a>
  </div>
  <yield/>
</div>
<!-- <a href="#" data-activates="slide-out" class="button-collapse"><i class="material-icons">menu</i></a> -->
  <script>
    var self = this;
    self.fixed = opts.fixed ? 'fixed' : '';
    self.logo = opts.logo;
    self.logoImage = opts.logoImage;//res/materialize.svg
    self.logoLink = opts.logoLink || 'javascript:void(0);';//http://materializecss.com/
    this.root.classList.add(self.fixed);
  </script>
</md-sidenav>