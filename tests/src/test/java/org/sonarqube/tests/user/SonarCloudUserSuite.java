/*
 * SonarQube
 * Copyright (C) 2009-2018 SonarSource SA
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

package org.sonarqube.tests.user;

import com.sonar.orchestrator.Orchestrator;
import org.junit.ClassRule;
import org.junit.runner.RunWith;
import org.junit.runners.Suite;

import static util.ItUtils.newOrchestratorBuilder;
import static util.ItUtils.pluginArtifact;
import static util.ItUtils.xooPlugin;

@RunWith(Suite.class)
@Suite.SuiteClasses({
  OrganizationIdentityProviderTest.class,
  SonarCloudHomepageTest.class,
  SonarCloudNotificationsWsTest.class
})
public class SonarCloudUserSuite {

  @ClassRule
  public static final Orchestrator ORCHESTRATOR = newOrchestratorBuilder()
    .addPlugin(xooPlugin())

    // Used by OrganizationIdentityProviderTest
    .addPlugin(pluginArtifact("base-auth-plugin"))

    .setServerProperty("sonar.sonarcloud.enabled", "true")

    // reduce memory for Elasticsearch
    .setServerProperty("sonar.search.javaOpts", "-Xms128m -Xmx128m")

    .build();

}
