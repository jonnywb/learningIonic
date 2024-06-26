import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from "@ionic/react";
import React from "react";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import { triangle, ellipse } from "ionicons/icons";
import { Route, Redirect } from "react-router";

const SettingsPage: React.FC = () => {
  return (
    <IonTabs>
      <IonTabBar slot="bottom">
        <IonTabButton tab="tab1" href="/app/settings/tab1">
          <IonIcon icon={triangle} />
          <IonLabel>Tab 1</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab2" href="/app/settings/tab2">
          <IonIcon icon={ellipse} />
          <IonLabel>Tab 2</IonLabel>
        </IonTabButton>
      </IonTabBar>

      <IonRouterOutlet>
        <Route path="/app/settings/tab1" component={Tab1} />
        <Route path="/app/settings/tab2" component={Tab2} />

        <Route exact path="/app">
          <Redirect to="/app/tab1" />
        </Route>
        <Route exact path="/app/settings">
          <Redirect to="/app/settings/tab1" />
        </Route>
      </IonRouterOutlet>
    </IonTabs>
  );
};

export default SettingsPage;
