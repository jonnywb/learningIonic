import { Preferences } from "@capacitor/preferences";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonRouter,
  useIonLoading,
  IonCol,
  IonGrid,
  IonRow,
} from "@ionic/react";
import { logInOutline, personCircleOutline } from "ionicons/icons";
import React, { useState, useEffect } from "react";

// COMPONENTS
import Intro from "../components/Intro";

// ASSETS
import FCC from "../assets/fcc.svg";

const INTRO_KEY = "intro-seen";

const Login: React.FC = () => {
  const router = useIonRouter();

  const [introSeen, setIntroSeen] = useState(false);
  const [present, dismiss] = useIonLoading();

  const doLogin = async (event: any) => {
    event.preventDefault();
    console.log("doLogin");
    await present("Logging in...");
    setTimeout(async () => {
      dismiss();
      router.push("/app", "root");
    }, 2000);
  };

  const finishIntro = async () => {
    setIntroSeen(true);
    Preferences.set({ key: INTRO_KEY, value: "true" });
  };

  const seeIntroAgain = () => {
    setIntroSeen(false);
    Preferences.remove({ key: INTRO_KEY });
  };

  useEffect(() => {
    const checkStorage = async () => {
      const seen = await Preferences.get({ key: INTRO_KEY });
      setIntroSeen(seen.value === "true");
    };
    checkStorage();
  }, []);

  return (
    <>
      {!introSeen ? (
        <Intro onFinish={finishIntro} />
      ) : (
        <IonPage>
          <IonHeader>
            <IonToolbar color={"success"}>
              <IonTitle>Free Code Camp</IonTitle>
            </IonToolbar>
          </IonHeader>

          <IonContent scrollY={false} className="ion-padding">
            <IonGrid fixed>
              <IonRow className="ion-justify-content-center">
                <IonCol size="12" sizeMd="8" sizeLg="6" sizeXl="4">
                  <div className="ion-text-center ion-padding">
                    <img src={FCC} alt="FFC Logo" width={"50%"} />
                  </div>
                </IonCol>
              </IonRow>
              <IonRow className="ion-justify-content-center">
                <IonCol size="12" sizeMd="8" sizeLg="6" sizeXl="4">
                  <IonCard>
                    <IonCardContent>
                      <form onSubmit={doLogin}>
                        <IonInput
                          label="Email"
                          type="email"
                          placeholder="user@email.com"
                          labelPlacement="floating"
                          fill="outline"
                        ></IonInput>

                        <IonInput
                          className="ion-margin-top"
                          label="Password"
                          type="password"
                          placeholder="Enter your password..."
                          labelPlacement="floating"
                          fill="outline"
                        ></IonInput>

                        <IonButton type="submit" expand="block" className="ion-margin-top">
                          Login
                          <IonIcon icon={logInOutline} slot="end" />
                        </IonButton>

                        <IonButton
                          type="button"
                          color="secondary"
                          expand="block"
                          className="ion-margin-top"
                          routerLink="/register"
                        >
                          Create Account
                          <IonIcon icon={personCircleOutline} slot="end" />
                        </IonButton>

                        <IonButton
                          onClick={seeIntroAgain}
                          fill="clear"
                          size="small"
                          type="button"
                          color="medium"
                          expand="block"
                          className="ion-margin-top"
                        >
                          Watch Intro
                          <IonIcon icon={personCircleOutline} slot="end" />
                        </IonButton>
                      </form>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonContent>
        </IonPage>
      )}
    </>
  );
};

export default Login;
