<md-input>
  <div class="input-field" if="{isOther}">
    <i class="material-icons prefix" if="{icon}">{icon}</i>
    <input placeholder="{ph}" id="{id}" name="{name}" type="{type}" class="validate {state}" onkeyup="{onKeyup}" length={length} disabled={disabled} />
    <label for="{id}" if="{label}">{label}</label>
  </div>
  <div class="input-field" if="{isTextarea}">
    <i class="material-icons prefix" if="{icon}">{icon}</i>
    <textarea id="{id}" name="{name}" class="materialize-textarea validate {state}" onkeyup="{onKeyup}" length={length} disabled={disabled}></textarea>
    <label for="{id}" if="{label}">{label}</label>
  </div>
  <div if="{isDate}">
    <label for="{id}" if="{label}">{label}</label>
    <input placeholder="{ph}" id="{id}" name="{name}" type="{type}" class="{type=='date' ? 'datepicker':''}" disabled={disabled} />
  </div>
  <div class="file-field input-field" if="{isFile}">
    <div class="btn">
      <span>{label}</span>
      <input type="file" multiple={multiple} name="{name}" id="{id}">
    </div>
    <div class="file-path-wrapper">
      <input class="file-path validate" type="text" placeholder="{ph}">
    </div>
  </div>
  <script>
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
  </script>
</md-input>