import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProfilePage } from "../pages/profile/profile";
import { ClassroomPage } from "../pages/classroom/classroom";
import { CoursePage } from "../pages/course/course";
import { MarketPage } from "../pages/market/market";
import { OnboardingPage } from "../pages/onboarding/onboarding";
import { SplashPage } from "../pages/splash/splash";
import { OnboardingProvider } from '../providers/onboarding/onboarding';
import { CursusProvider } from '../providers/cursus/cursus';
import { ContextProvider } from '../providers/context/context';
import { CountDownResourceComponent } from "../components/count-down-resource/count-down-resource";
import { EmitterProvider } from '../providers/emitter/emitter';
import { ErrorPage } from "../pages/error/error";
import { LessonComponent } from "../components/lesson/lesson";
import { AchievementProvider } from '../providers/achievement/achievement';
import { TheoryPage } from "../pages/theory/theory";
import { ExercisePage } from "../pages/exercise/exercise";
import { ExamPage } from "../pages/exam/exam";
import { SubscribePage } from "../pages/subscribe/subscribe";
import { MarketProvider } from '../providers/market/market';

@NgModule({
  declarations: [
    MyApp,
    ProfilePage,
    ClassroomPage,
    CoursePage,
    MarketPage,
    OnboardingPage,
    SplashPage,
    ErrorPage,
    TabsPage,
    TheoryPage,
    ExercisePage,
    ExamPage,
    SubscribePage,
    CountDownResourceComponent,
    LessonComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProfilePage,
    ClassroomPage,
    CoursePage,
    MarketPage,
    OnboardingPage,
    SplashPage,
    ErrorPage,
    TheoryPage,
    ExercisePage,
    ExamPage,
    SubscribePage,
    TabsPage,
    CountDownResourceComponent,
    LessonComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    OnboardingProvider,
    CursusProvider,
    ContextProvider,
    EmitterProvider,
    AchievementProvider,
    AchievementProvider,
    MarketProvider
  ]
})
export class AppModule {}
