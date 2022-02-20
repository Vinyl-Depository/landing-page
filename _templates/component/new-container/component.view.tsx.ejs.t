---
to: src/components/containers/<%= h.changeCase.pascalCase(pageName.toLowerCase()) %>/<%= h.changeCase.pascalCase(containerName.toLowerCase()) %>/<%= h.changeCase.pascalCase(containerName.toLowerCase()) %>.view.tsx
---
<% name = containerName.toLowerCase() %>import React from 'react';
import { Trans, useTranslation } from 'react-i18next';

import classes from './<%= h.changeCase.pascalCase(name) %>.module.scss';

interface IProps {}

const <%= h.changeCase.pascalCase(name) %>View: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  const { t } = useTranslation();

  return <React.Fragment></React.Fragment>;
};

<%= h.changeCase.pascalCase(name) %>View.displayName = '<%= h.changeCase.pascalCase(name) %>View';
<%= h.changeCase.pascalCase(name) %>View.defaultProps = {};

export default React.memo(<%= h.changeCase.pascalCase(name) %>View);
