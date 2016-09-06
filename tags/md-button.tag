<md-button>
  <a class="{klass}" if="{!submitName}">
    <i class="material-icons" if="{icon}">{icon}</i>
    <i class="material-icons left" if="{leftIcon}">{leftIcon}</i>
    {text}
    <i class="material-icons right" if="{rightIcon}">{rightIcon}</i>    
  </a>
  <button class="{klass}" type="submit" name="{submitName}" if="{submitName}">
    <i class="material-icons left" if="{leftIcon}">{leftIcon}</i>
    {text}
    <i class="material-icons right" if="{rightIcon}">{rightIcon}</i> 
  </button>
  <script>
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
  </script>
</md-button>