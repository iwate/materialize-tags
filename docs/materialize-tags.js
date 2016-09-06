riot.tag2('md-actions', '<div class="fixed-action-btn {dir} {toggle}" riot-style="{style}" onclick="{onClick}"> <yield></yield> </div>', '', '', function(opts) {
    var self = this;
    self.dir = opts.dir || 'horizontal ';
    self.style = opts.fixed ? '' : 'position: absolute; display:inline-block';
    self.toggle = opts.toggle == 'click' ? 'click-to-toggle' : '';
    self.onClick = function(ev){
      var $this = $(self.root.querySelector('.fixed-action-btn'));
      if($this.hasClass('active'))
        $this.closeFAB();
      else
        $this.openFAB();
    };
});
riot.tag2('md-badge', '<span class="{_new}badge" data-badge-caption="{caption}"> <yield></yield> </span>', '', '', function(opts) {
    var self = this;
    self._new = opts.new ? 'new ': '';
    self.caption = opts.caption || '';
});
riot.tag2('md-button', '<a class="{klass}" if="{!submitName}"> <i class="material-icons" if="{icon}">{icon}</i> <i class="material-icons left" if="{leftIcon}">{leftIcon}</i> {text} <i class="material-icons right" if="{rightIcon}">{rightIcon}</i> </a> <button class="{klass}" type="submit" name="{submitName}" if="{submitName}"> <i class="material-icons left" if="{leftIcon}">{leftIcon}</i> {text} <i class="material-icons right" if="{rightIcon}">{rightIcon}</i> </button>', '', '', function(opts) {
    var self = this,
        types = { btn: 'btn ', flat: 'btn-flat ', floating: 'btn-floating ' },
        type = opts.type ? types[opts.type] || types.btn : types.btn,
        waves = opts.waves ? `waves-effect waves-${opts.waves} ` : '' ,
        color = opts.color || '',
        size = opts.large ? 'btn-large ' : '',
        disabled = opts.disabled ? 'disabled ' : '';
    self.klass = `${type}${waves}${size}${disabled}${color}`;
    self.text = opts.text || '';
    self.icon = opts.icon || '';
    self.leftIcon = opts.leftIcon || '';
    self.rightIcon = opts.rightIcon || '';
    self.href = opts.href || 'javascript:void(0)';
    self.submitName = opts.submit || '';
});
riot.tag2('md-card-action', '<div class="card-action"> <yield></yield> </div>', '', '', function(opts) {
});
riot.tag2('md-card-content', '<div class="card-content {textColor}"> <span class="card-title {activator} {titleColor}">{title}<i class="material-icons right" if="{activator}">{icon}</i></span> <yield></yield> </div>', 'md-card-content,[riot-tag="md-card-content"],[data-is="md-card-content"]{ flex-grow: 1; }', '', function(opts) {
    var self = this;
    self.title = opts.title || '';
    self.titleColor = opts.titleColor || '';
    self.textColor = opts.textColor || '';
    self.activator = opts.activator ? 'activator' : '';
    self.icon = opts.icon || 'more_vert';
});
riot.tag2('md-card-image', '<div class="card-image {waves}"> <img class="{activator}" riot-src="{src}" if="{src}"> <span class="card-title" if="{title}">{title}</span> </div>', '', '', function(opts) {
    var self = this,
        wavesType = opts.wavesType ? `waves-${opts.wavesType}` : 'waves-block',
        wavesColor = opts.wavesColor ? `waves-${opts.wavesColor}` : 'waves-light';
    self.src = opts.src;
    self.title = opts.title;
    self.waves = opts.waves ? `waves-effect ${wavesType} ${wavesColor}` : '';
    self.activator = opts.activator ? 'activator' : '';
});
riot.tag2('md-card-panel', '<div class="card-panel {size} {color}"> <span class="{textColor}"> <yield></yield> </span> </div>', '', '', function(opts) {
    var self = this;
    self.size = opts.size || '';
    self.color = opts.color || 'teal';
    self.textColor = opts.textColor || 'white-text';
});
riot.tag2('md-card-reveal', '<div class="card-reveal {textColor}"> <span class="card-title {titleColor}">{title}<i class="material-icons right">{icon}</i></span> <yield></yield> </div>', '', '', function(opts) {
    var self = this;
    self.title = opts.title || '';
    self.titleColor = opts.titleColor || '';
    self.textColor = opts.textColor || '';
    self.icon = opts.icon || 'close';
});
riot.tag2('md-card-stacked', '<div class="card-stacked"> <yield></yield> </div>', 'md-card-stacked,[riot-tag="md-card-stacked"],[data-is="md-card-stacked"]{ display: flex; }', '', function(opts) {
});
riot.tag2('md-card', '<div class="card {size} {color} {stickyAction} {dir}" onclick="{onClick}"> <yield></yield> </div>', 'md-card .card.horizontal md-card-image .card-image img,[riot-tag="md-card"] .card.horizontal md-card-image .card-image img,[data-is="md-card"] .card.horizontal md-card-image .card-image img{ max-width: initial; }', '', function(opts) {
    var self = this;
    self.size = opts.size || '';
    self.color = opts.color || '';
    self.stickyAction = opts.stickyAction ? 'sticky-action' : '';
    self.dir = opts.horizontal ? "horizontal" : ''
    self.onClick = function(e){
      var $root = $(self.root)
      if ($root.find('.card-reveal').length) {
        if ($(e.target).is($('.card-reveal .card-title')) || $(e.target).is($('.card-reveal .card-title i'))) {

          $root.find('.card-reveal').velocity(
            {translateY: 0}, {
              duration: 225,
              queue: false,
              easing: 'easeInOutQuad',
              complete: function() { $(this).css({ display: 'none'}); }
            });
        }
        else if ($(e.target).is($('.card .activator')) || $(e.target).is($('.card .activator i')) ) {
          $root.find('.card').css('overflow', 'hidden');
          $root.find('.card-reveal')
            .css({ display: 'block'})
            .velocity("stop", false)
            .velocity(
              {translateY: '-100%'}, {
                duration: 300,
                queue: false,
                easing: 'easeInOutQuad'
              });
        }
      }
    }
});
riot.tag2('md-chip', '<div class="chip"> <img riot-src="{image}" if="{image}"> <yield></yield> <i class="close material-icons" if="{closable}">close</i> </div>', '', '', function(opts) {
    var self = this;
    self.image = opts.image;
    self.closable = opts.closable || false;
});
riot.tag2('md-col', '<div class="col{s}{m}{l}{offsetS}{offsetM}{offsetL}{pushS}{pushM}{pushL}{pullS}{pullM}{pullL}"> <yield></yield> </div>', '', '', function(opts) {
    var self = this
      , sizelist = ['s', 'm', 'l']
      , prefixies = ['', 'offset-', 'push-', 'pull-'];

    sizelist.forEach(function(s){
      prefixies.forEach(function(p){
        var prefix = p + s;
        var key = p ? p.slice(0, p.length-1) + s.toUpperCase() : s;
        self[key] = self.opts[key] ? ' ' + prefix + self.opts[key] : '';
      })
    })
});
riot.tag2('md-collapsible', '<ul class="{klass}"> <li each="{items}" class="{bold ? \'bold\' : \'\'} {active ? \'active\' : \'\'}"> <a href="{href}" class="waves-effect waves-teal" if="{type==\'link\'}">{text}</a> <a href="{href}" class="collapsible-header waves-effect waves-teal" if="{type==\'link-header\'}">{text}</a> <a class="collapsible-header waves-effect waves-teal" if="{type==\'header\'}">{text}</a> <md-collapsible items="{nested}" nested="true" class="collapsible-body" if="{type==\'header\'||type==\'link-header\'}"></md-collapsible> </li> </ul>', 'md-collapsible,[riot-tag="md-collapsible"],[data-is="md-collapsible"]{ width: 100%; }', '', function(opts) {
    var self = this;

    self.items = opts.items;
    self.klass = !opts.nested ? 'collapsible collapsible-accordion' : '';
});
riot.tag2('md-collection-item', '<a href="{href}" class="collection-item"> <yield></yield> </a>', '', '', function(opts) {
    var self = this;
    self.href = opts.href || 'javascript:void(0)';
});
riot.tag2('md-collection', '<div class="collection"> <yield></yield> </div>', '', '', function(opts) {
});
riot.tag2('md-container', '<div class="container"> <yield></yield> </div>', '', '', function(opts) {
});
riot.tag2('md-divider', '<div class="divider"></div>', '', '', function(opts) {
});
riot.tag2('md-footer', '<footer class="page-footer"> <div class="container"> <div class="row"> <yield from="content"></yield> </div> </div> <div class="footer-copyright"> <div class="container"> <yield from="copyright"></yield> </div> </div> </footer>', '', '', function(opts) {
});
riot.tag2('md-input', '<div class="input-field" if="{isOther}"> <i class="material-icons prefix" if="{icon}">{icon}</i> <input placeholder="{ph}" id="{id}" name="{name}" type="{type}" class="validate {state}" onkeyup="{onKeyup}" length="{length}" __disabled="{disabled}"> <label for="{id}" if="{label}">{label}</label> </div> <div class="input-field" if="{isTextarea}"> <i class="material-icons prefix" if="{icon}">{icon}</i> <textarea id="{id}" name="{name}" class="materialize-textarea validate {state}" onkeyup="{onKeyup}" length="{length}" __disabled="{disabled}"></textarea> <label for="{id}" if="{label}">{label}</label> </div> <div if="{isDate}"> <label for="{id}" if="{label}">{label}</label> <input placeholder="{ph}" id="{id}" name="{name}" type="{type}" class="{type==\'date\' ? \'datepicker\':\'\'}" __disabled="{disabled}"> </div> <div class="file-field input-field" if="{isFile}"> <div class="btn"> <span>{label}</span> <input type="file" __multiple="{multiple}" name="{name}" id="{id}"> </div> <div class="file-path-wrapper"> <input class="file-path validate" type="text" placeholder="{ph}"> </div> </div>', '', '', function(opts) {
    var self = this;
    self.ph = opts.placeholder;
    self.name = opts.name;
    self.id = opts.id || unique();
    self.type = opts.type || 'text';
    self.icon = opts.icon;
    self.label = opts.label;
    self.state = opts.state || '';
    self.validator = opts.validator;
    self.disabled = opts.disabled || false;
    self.length = opts.length || false;
    self.multiple = opts.multiple || false;
    self.onKeyup = function(e){
      if(!!self.validator){
        if(!e.target.value.match(self.validator) || (self.length && e.target.value.length > self.length)){
          e.target.classList.add('invalid')
          e.target.classList.remove('valid')
        } else {
          e.target.classList.add('valid')
          e.target.classList.remove('invalid')
        }
      }
    }
    self.isTextarea = self.type == 'textarea';
    self.isDate = self.type == 'date';
    self.isFile = self.type == 'file';
    self.isOther = !self.isTextarea && !self.isDate && !self.isFile;

    if(self.isDate){
      this.on('updated', function(){
        $('.datepicker', this.root).pickadate({
          selectYears: true,
          selectMonths: true,
          format: 'yyyy/m/d'
        });
      })
    }

    function unique(){
      if(window.__md_unique_index)
        window.__md_unique_index = 0;
      return 'md-input-' + (++window.__md_unique_index);
    }
});
riot.tag2('md-nav', '<nav> <div class="nav-wrapper"> <div class="{container}"> <a href="#" class="brand-logo {pos}">{brand}</a> <yield></yield> </div> </div> </nav>', '', '', function(opts) {
    var self = this;
    self.brand = opts.brand || '';
    self.pos = opts.position;
    self.container = opts.container === false || opts.container === 'false' ? '' : 'container';
    if(opts.fixed){
      this.root.classList.add('navbar-fixed');
    }
});
riot.tag2('md-pagination', '<ul class="pagination"> <li class="disabled"><a href="#!"><i class="material-icons">chevron_left</i></a></li> <li class="active"><a href="#!">1</a></li> <li class="waves-effect"><a href="#!">2</a></li> <li class="waves-effect"><a href="#!">3</a></li> <li class="waves-effect"><a href="#!">4</a></li> <li class="waves-effect"><a href="#!">5</a></li> <li class="waves-effect"><a href="#!"><i class="material-icons">chevron_right</i></a></li> </ul> <nav aria-label="{opts.label}"> <ul class="pagination"> <li class="{isPrev ? \'\' : \'disabled\'}"> <a href="{isPrev ? prefix + prev : \'javascript:void(0)\'}" aria-label="Previous"> <span aria-hidden="true">&laquo;</span> </a> </li> <li each="{p in pages}" class="{p == parent.opts.current ? \'active\' : \'waves-effect\'}"><a href="{parent.prefix + p}">{p + 1}</a></li> <li class="{isNext ? \'\' : \'disabled\'}"> <a href="{isNext ? prefix + next : \'javascript:void(0)\'}" aria-label="Next"> <span aria-hidden="true">&raquo;</span> </a> </li> </ul> </nav>', '', '', function(opts) {
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
});
riot.tag2('md-preloader', '<div class="preloader-wrapper big active"> <div class="spinner-layer spinner-blue-only"> <div class="circle-clipper left"> <div class="circle"></div> </div><div class="gap-patch"> <div class="circle"></div> </div><div class="circle-clipper right"> <div class="circle"></div> </div> </div> </div>', '', '', function(opts) {
});
riot.tag2('md-row', '<div class="row"> <yield></yield> </div>', '', '', function(opts) {
});
riot.tag2('md-section', '<div class="section"> <yield></yield> </div>', '', '', function(opts) {
});
riot.tag2('md-sidenav', '<div id="slide-out" class="side-nav {fixed}"> <div class="logo" if="{logoText||logoImage}"> <a id="logo-container" href="{logoLink}" class="brand-logo"> <img riot-src="{logoImage}" if="{logoImage}"> <span class="{logoColor}" if="{logoText}"> {logoText} </span> </a> </div> <yield></yield> </div>', 'md-sidenav.fixed ~,[riot-tag="md-sidenav"].fixed ~,[data-is="md-sidenav"].fixed ~{ } md-sidenav.fixed ~ header,[riot-tag="md-sidenav"].fixed ~ header,[data-is="md-sidenav"].fixed ~ header,md-sidenav.fixed ~ main,[riot-tag="md-sidenav"].fixed ~ main,[data-is="md-sidenav"].fixed ~ main,md-sidenav.fixed ~ footer,[riot-tag="md-sidenav"].fixed ~ footer,[data-is="md-sidenav"].fixed ~ footer,md-sidenav.fixed ~ md-footer footer,[riot-tag="md-sidenav"].fixed ~ md-footer footer,[data-is="md-sidenav"].fixed ~ md-footer footer{ padding-left: 300px; } md-sidenav .logo,[riot-tag="md-sidenav"] .logo,[data-is="md-sidenav"] .logo{ text-align: center; margin-top: 32px; margin-bottom: 40px; } @media only screen and (max-width : 992px) { md-sidenav.fixed ~ header,[riot-tag="md-sidenav"].fixed ~ header,[data-is="md-sidenav"].fixed ~ header,md-sidenav.fixed ~ main,[riot-tag="md-sidenav"].fixed ~ main,[data-is="md-sidenav"].fixed ~ main,md-sidenav.fixed ~ footer,[riot-tag="md-sidenav"].fixed ~ footer,[data-is="md-sidenav"].fixed ~ footer,md-sidenav.fixed ~ md-footer footer,[riot-tag="md-sidenav"].fixed ~ md-footer footer,[data-is="md-sidenav"].fixed ~ md-footer footer{ padding-left: 0; } } @media only screen and (min-width: 993px){ md-sidenav.fixed ~ header .container,[riot-tag="md-sidenav"].fixed ~ header .container,[data-is="md-sidenav"].fixed ~ header .container,md-sidenav.fixed ~ main .container,[riot-tag="md-sidenav"].fixed ~ main .container,[data-is="md-sidenav"].fixed ~ main .container,md-sidenav.fixed ~ footer .container,[riot-tag="md-sidenav"].fixed ~ footer .container,[data-is="md-sidenav"].fixed ~ footer .container,md-sidenav.fixed ~ md-footer footer .container,[riot-tag="md-sidenav"].fixed ~ md-footer footer .container,[data-is="md-sidenav"].fixed ~ md-footer footer .container{ width: 85%; } } md-sidenav #logo-container span,[riot-tag="md-sidenav"] #logo-container span,[data-is="md-sidenav"] #logo-container span{ font-size: 32px; font-weight: 300; }', '', function(opts) {
    var self = this;
    self.fixed = opts.fixed ? 'fixed' : '';
    self.logoImage = opts.logoImage;
    self.logoLink = opts.logoLink || 'javascript:void(0);';
    self.logoText = opts.logoText;
    self.logoColor = opts.logoColor || 'red-text text-lighten-2';
    this.root.classList.add(self.fixed);
});
riot.tag2('md-tags', '<div class="chips chips-placeholder"></div>', 'md-tags .chips-placeholder input,[riot-tag="md-tags"] .chips-placeholder input,[data-is="md-tags"] .chips-placeholder input{ margin-bottom: 0px; }', '', function(opts) {
    this.on("updated", function(){
      $('.chips-placeholder',this.root).material_chip({
        placeholder: 'Enter a tag',
        secondaryPlaceholder: '+Tag',
      });
    })
});