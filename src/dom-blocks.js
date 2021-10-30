// @ts-nocheck

Blockly.Blocks.dom_element_by_id = {
  init () {
    this.appendValueInput('id', 'text').appendField('get by ID');
    this.setInputsInline(false);
    this.setOutput(true, 'HTMLElement');
    this.setColour(40);
    this.setTooltip('Get element by ID');
  },
};

Blockly.Blocks.dom_element_selector = {
  init () {
    this.appendValueInput('selector', 'text').appendField('match selector');
    this.setInputsInline(false);
    this.setOutput(true, 'HTMLElement');
    this.setColour(40);
    this.setTooltip('Get element by query selector');
  },
};

Blockly.Blocks.dom_element_selector_to_list = {
  init () {
    this.appendValueInput('selector', 'text').appendField('create list from selector');
    this.setInputsInline(false);
    this.setOutput(true, 'Array');
    this.setColour(40);
    this.setTooltip('Get all elements by query selector as list');
  },
};

Blockly.Blocks.dom_create_element = {
  init () {
    this.appendValueInput('tag', 'text').appendField('create element');
    this.setInputsInline(false);
    this.setOutput(true, 'HTMLElement');
    this.setColour(40);
    this.setTooltip('Create element');
  },
};

Blockly.Blocks.dom_tags = {
  init () {
    const tagsList = new Blockly.FieldDropdown(
      [
        'br',
        'button',
        'code',
        'dd',
        'del',
        'details',
        'dialog',
        'div',
        'dl',
        'dt',
        'em',
        'footer',
        'form',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'header',
        'hr',
        'i',
        'iframe',
        'img',
        'input',
        'label',
        'li',
        'link',
        'main',
        'mark',
        'nav',
        'ol',
        'optgroup',
        'option',
        'p',
        'pre',
        'progress',
        'q',
        'script',
        'section',
        'select',
        'span',
        'strong',
        'style',
        'sub',
        'summary',
        'sup',
        'table',
        'tbody',
        'td',
        'template',
        'textarea',
        'tfoot',
        'th',
        'thead',
        'title',
        'tr',
        'u',
        'ul',
        'video',
      ].map((x) => [x, x]),
    );
    tagsList.setValue('div');
    this.appendDummyInput().appendField(tagsList, 'tag');
    this.setInputsInline(false);
    this.setOutput(true, 'text');
    this.setColour(40);
    this.setTooltip('HTML tags');
  },
};

Blockly.Blocks.dom_element_properties = {
  init () {
    const propertiesList = new Blockly.FieldDropdown(
      [
        'className',
        'href',
        'id',
        'innerHTML',
        'innerText',
        'src',
        'style',
        'textContent',
        'target',
        'title',
        'value',
      ].map((x) => [x, x]),
    );
    propertiesList.setValue('textContent');
    this.appendDummyInput().appendField(propertiesList, 'property');
    this.setInputsInline(false);
    this.setOutput(true, 'text');
    this.setColour(40);
    this.setTooltip('Get element properties');
  },
};

Blockly.Blocks.dom_element_methods = {
  init () {
    const methodsList = new Blockly.FieldDropdown(
      [
        'appendChild',
        'blur',
        'click',
        'focus',
        'insertAdjacentElement',
        'insertAdjacentHTML',
        'insertAdjacentText',
        'insertBefore',
        'remove',
        'removeAttribute',
        'removeChild',
        'scrollIntoView',
        'setAttribute',
      ].map((x) => [x, x]),
    );
    this.appendDummyInput().appendField(methodsList, 'method');
    this.setInputsInline(false);
    this.setOutput(true, 'text');
    this.setColour(40);
    this.setTooltip('DOM element methods');
  },
};

Blockly.Blocks.dom_events = {
  init () {
    const eventList = new Blockly.FieldDropdown(
      [
        'blur',
        'change',
        'click',
        'contextmenu',
        'dblclick',
        'focus',
        'hashchange',
        'keydown',
        'keypress',
        'keyup',
        'load',
        'mousedown',
        'mousemove',
        'mouseout',
        'mouseover',
        'mouseup',
        'mousewheel',
        'resize',
        'scroll',
        'submit',
        'unload',
      ].map((x) => [x, x]),
    );
    eventList.setValue('click');
    this.appendDummyInput().appendField(eventList, 'event');
    this.setInputsInline(false);
    this.setOutput(true, 'text');
    this.setColour(40);
    this.setTooltip('DOM events');
  },
};

Blockly.Blocks.dom_get_property = {
  init () {
    this.appendValueInput('element').setCheck('HTMLElement').appendField('get element');
    this.appendValueInput('property', 'text').appendField('property');
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(40);
    this.setTooltip('Get element property');
  },
};

Blockly.Blocks.dom_set_property = {
  init () {
    this.appendValueInput('element').setCheck('HTMLElement').appendField('set element');
    this.appendValueInput('property', 'text').appendField('property');
    this.appendValueInput('value').setCheck(null).appendField('to');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(40);
    this.setTooltip('Set element property');
  },
};

Blockly.Blocks.dom_handle_event = {
  init () {
    this.appendValueInput('element').setCheck('HTMLElement').appendField('on element');
    this.appendValueInput('event', 'text').appendField('event');
    this.appendStatementInput('event_handler').setCheck(null).appendField('do');
    this.setInputsInline(false);
    this.setNextStatement(true, null);
    this.setColour(40);
    this.setTooltip('Handle element event');
  },
};

Blockly.Blocks.dom_call_method = {
  init () {
    this.appendValueInput('element').setCheck('HTMLElement').appendField('call element');
    this.appendValueInput('method', 'text').appendField('method');
    this.appendValueInput('args').appendField('with');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(40);
    this.setTooltip('Call element method');
  },
};

Blockly.Blocks.dom_method_args = {
  ...Blockly.Blocks.lists_create_with,
  updateShape_ () {
    if (this.itemCount_ && this.getInput('EMPTY')) {
      this.removeInput('EMPTY');
    } else if (!this.itemCount_ && !this.getInput('EMPTY')) {
      this.appendDummyInput('EMPTY').appendField('no args');
    }
    for (var i = 0; i < this.itemCount_; i++) {
      if (!this.getInput('ADD' + i)) {
        const input = this.appendValueInput('ADD' + i).setAlign(Blockly.ALIGN_RIGHT);
        if (i == 0) {
          input.appendField('args');
        }
      }
    }
    while (this.getInput('ADD' + i)) {
      this.removeInput('ADD' + i);
      i++;
    }
  },
};

Blockly.JavaScript.dom_element_by_id = function (block) {
  const text_id = Blockly.JavaScript.valueToCode(block, 'id', Blockly.JavaScript.ORDER_NONE);
  const code = `document.getElementById(${text_id})`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.dom_element_selector = function (block) {
  const text_selector = Blockly.JavaScript.valueToCode(
    block,
    'selector',
    Blockly.JavaScript.ORDER_NONE,
  );
  const code = `document.querySelector(${text_selector})`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.dom_element_selector_to_list = function (block) {
  const text_selector = Blockly.JavaScript.valueToCode(
    block,
    'selector',
    Blockly.JavaScript.ORDER_NONE,
  );
  const code = `[...document.querySelectorAll(${text_selector})]`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.dom_tags = function (block) {
  const dropdown_tag = block.getFieldValue('tag');
  const code = `'${dropdown_tag}'`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.dom_element_properties = function (block) {
  const dropdown_property = block.getFieldValue('property');
  const code = `'${dropdown_property}'`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.dom_element_methods = function (block) {
  const dropdown_method = block.getFieldValue('method');
  const code = `'${dropdown_method}'`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.dom_events = function (block) {
  const dropdown_event = block.getFieldValue('event');
  const code = `'${dropdown_event}'`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.dom_get_property = function (block) {
  const value_element = Blockly.JavaScript.valueToCode(
    block,
    'element',
    Blockly.JavaScript.ORDER_NONE,
  );
  const dropdown_property = Blockly.JavaScript.valueToCode(
    block,
    'property',
    Blockly.JavaScript.ORDER_NONE,
  );
  const code = `${value_element}[${dropdown_property}]`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.dom_set_property = function (block) {
  const value_element = Blockly.JavaScript.valueToCode(
    block,
    'element',
    Blockly.JavaScript.ORDER_NONE,
  );
  const dropdown_property = Blockly.JavaScript.valueToCode(
    block,
    'property',
    Blockly.JavaScript.ORDER_NONE,
  );
  const value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_NONE);
  const code = `${value_element}[${dropdown_property}] = ${value_value};\n`;
  return code;
};

Blockly.JavaScript.dom_handle_event = function (block) {
  const value_element = Blockly.JavaScript.valueToCode(
    block,
    'element',
    Blockly.JavaScript.ORDER_NONE,
  );
  const dropdown_event = Blockly.JavaScript.valueToCode(
    block,
    'event',
    Blockly.JavaScript.ORDER_NONE,
  );
  const statements_event_handler = Blockly.JavaScript.statementToCode(block, 'event_handler');

  const code = `${value_element}.addEventListener(${dropdown_event}, function() {
${statements_event_handler}});
`;
  return code;
};

Blockly.JavaScript.dom_call_method = function (block) {
  const value_element = Blockly.JavaScript.valueToCode(
    block,
    'element',
    Blockly.JavaScript.ORDER_NONE,
  );
  const dropdown_method = Blockly.JavaScript.valueToCode(
    block,
    'method',
    Blockly.JavaScript.ORDER_NONE,
  );
  const value_args = Blockly.JavaScript.valueToCode(
    block,
    'args',
    Blockly.JavaScript.ORDER_NONE,
  ).trim();
  let args;
  if (value_args.startsWith('[') && value_args.endsWith(']')) {
    args = value_args.slice(1, -1);
  } else {
    args = value_args;
  }
  const code = `${value_element}[${dropdown_method}](${args});\n`;
  return code;
};

Blockly.JavaScript.dom_create_element = function (block) {
  const value_tag = Blockly.JavaScript.valueToCode(block, 'tag', Blockly.JavaScript.ORDER_NONE);
  const code = `document.createElement(${value_tag})`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.dom_method_args = Blockly.JavaScript.lists_create_with;
