import {Achievement} from "./Achievement";
import {Language} from "./Language";
import {Subscription} from "./Subscription";
import {Rank} from "./Rank";

export class Profile {

  constructor (
    public firstName?: string,
    public lastName?: string,
    public username?: string,
    public language: Language = Language.En,
    public subscription: Subscription = new Subscription(),
    public rank: Rank = new Rank(),
    public achievements: Array<Achievement> = []
  ) {
  }

  withFirstName(firstName: string): Profile {
    this.firstName = firstName;
    return this;
  }

  withLastName(lastName: string): Profile {
    this.lastName = lastName;
    return this;
  }

  withUsername(username: string): Profile {
    this.username = username;
    return this;
  }

  withLanguage(language: Language): Profile {
    this.language = language;
    return this;
  }

  withSubscription(subscription: Subscription): Profile {
    this.subscription = subscription;
    return this;
  }

  withRank(rank: Rank): Profile {
    this.rank = rank;
    return this;
  }

  withAchievement(achievements: Array<Achievement>): Profile {
    this.achievements = achievements;
    return this;
  }

}
