---
to: src/components/pages/<%= h.changeCase.pascalCase(pageName.toLowerCase()) %>/containers/<%= h.changeCase.pascalCase(containerName.toLowerCase()) %>/<%= h.changeCase.pascalCase(containerName.toLowerCase()) %>.tsx
---
<% name = containerName.toLowerCase() %>import React from 'react';

import <%= h.changeCase.pascalCase(name) %>View from './<%= h.changeCase.pascalCase(name) %>.view';

interface Props {}

const <%= h.changeCase.pascalCase(name) %>: React.FC<Props> = (props: React.PropsWithChildren<Props>) => {
  return <<%= h.changeCase.pascalCase(name) %>View>{props.children}</<%= h.changeCase.pascalCase(name) %>View>;
};

<%= h.changeCase.pascalCase(name) %>.displayName = '<%= h.changeCase.pascalCase(name) %>';
<%= h.changeCase.pascalCase(name) %>.defaultProps = {};

export default React.memo(<%= h.changeCase.pascalCase(name) %>);
