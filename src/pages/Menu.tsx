import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import React from "react";

const Menu: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Menu </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">UI goes here...</IonContent>
    </IonPage>
  );
};

export default Menu;
