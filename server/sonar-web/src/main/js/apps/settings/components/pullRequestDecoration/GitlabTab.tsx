/*
 * SonarQube
 * Copyright (C) 2009-2019 SonarSource SA
 * mailto:info AT sonarsource DOT com
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 3 of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program; if not, write to the Free Software Foundation,
 * Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 */
import * as React from 'react';
import { createGitlabConfiguration, updateGitlabConfiguration } from '../../../../api/almSettings';
import { ALM_KEYS, GitlabBindingDefinition } from '../../../../types/alm-settings';
import AlmTab from './AlmTab';
import GitlabForm from './GitlabForm';

export interface GitlabTabProps {
  definitions: GitlabBindingDefinition[];
  loading: boolean;
  multipleAlmEnabled: boolean;
  onDelete: (definitionKey: string) => void;
  onUpdateDefinitions: () => void;
}

export default function GitlabTab(props: GitlabTabProps) {
  const { multipleAlmEnabled, definitions, loading } = props;

  return (
    <AlmTab
      alm={ALM_KEYS.GITLAB}
      createConfiguration={createGitlabConfiguration}
      defaultBinding={{ key: '', personalAccessToken: '' }}
      definitions={definitions}
      form={childProps => <GitlabForm {...childProps} />}
      loading={loading}
      multipleAlmEnabled={multipleAlmEnabled}
      onDelete={props.onDelete}
      onUpdateDefinitions={props.onUpdateDefinitions}
      updateConfiguration={updateGitlabConfiguration}
    />
  );
}
