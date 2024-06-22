import {
  IonContent,
  IonHeader,
  IonMenu,
  IonPage,
  IonRouterOutlet,
  IonTitle,
  IonToolbar,
  IonItem,
  IonMenuToggle,
  IonSplitPane,
  IonIcon,
  IonButton,
} from "@ionic/react";
import React from "react";
import { Redirect, Route } from "react-router";
import { newspaperOutline, homeOutline, logOutOutline } from "ionicons/icons";

import List from "./List";
import Settings from "./Settings";

const Menu: React.FC = () => {
  const paths = [
    { name: "Home", url: "/app/List", icon: homeOutline },
    { name: "Settings", url: "/app/Settings", icon: newspaperOutline },
  ];

  return (
    <IonPage>
      <IonSplitPane contentId="main">
        <IonMenu contentId="main">
          <IonHeader>
            <IonToolbar color={"secondary"}>
              <IonTitle>Menu</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            {paths.map((item, index) => (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem detail={false} routerLink={item.url} routerDirection="none">
                  <IonIcon slot="start" icon={item.icon} />
                  {item.name}
                </IonItem>
              </IonMenuToggle>
            ))}

            <IonMenuToggle autoHide={false}>
              <IonButton expand="full" routerLink="/" routerDirection="root">
                <IonIcon slot="start" icon={logOutOutline} />
                Logout
              </IonButton>
            </IonMenuToggle>
          </IonContent>
        </IonMenu>
        <IonRouterOutlet id="main">
          <Route exact path="/app/list" component={List} />
          <Route path="/app/settings" component={Settings} />
          <Route exact path="/app">
            <Redirect to="/app/list" />
          </Route>
        </IonRouterOutlet>
      </IonSplitPane>
    </IonPage>
  );
};

export default Menu;
