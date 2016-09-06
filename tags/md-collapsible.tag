<md-collapsible>
  <style scoped>
    :scope {
      width: 100%;
    }
  </style>
  <ul class="{klass}">
    <li each="{items}" class="{bold ? 'bold' : ''} {active ? 'active' : ''}">
        <a href="{href}" class="waves-effect waves-teal" if="{type=='link'}">{text}</a>
        <a href="{href}" class="collapsible-header waves-effect waves-teal" if="{type=='link-header'}">{text}</a>
        <a class="collapsible-header waves-effect waves-teal" if="{type=='header'}">{text}</a>      
        <md-collapsible items="{nested}" nested="true" class="collapsible-body" if="{type=='header'||type=='link-header'}"></md-collapsible>
    </li>
  </ul>
  <script>
    var self = this;
    /**
     * items = [
     *  { 
     *    type: 'link'|'header'|'link-header',
     *    href: '//contoso.com/...',
     *    text: text,
     *    nested: [...] 
     *  }
     * ]
     */
    self.items = opts.items;
    self.klass = !opts.nested ? 'collapsible collapsible-accordion' : '';
  </script>
</md-collapsible>