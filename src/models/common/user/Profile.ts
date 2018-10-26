import {Achievement} from "./Achievement";
import {Language} from "./Language";
import {Subscription} from "./Subscription";
import {Rank} from "./Rank";
import {Bag} from "./Bag";

export class Profile {

  private _firstName: string;
  private _lastName: string;
  private _username: string;
  private _language: Language = Language.English;
  private _subscription: Subscription = new Subscription();
  private _rank: Rank = new Rank();
  private _achievements: Array<Achievement> = [];
  private _bag: Bag;

  constructor (profile: Profile = <Profile>{}) {
    this
      .withFirstName(profile.firstName)
      .withLastName(profile.lastName)
      .withUsername(profile.username)
      .withLanguage(profile.language)
      .withRank(new Rank(profile.rank))
      .withSubscription(new Subscription(profile.subscription))
      .withAchievements((profile.achievements || []).map((data) => new Achievement(data)))
      .withBag(new Bag(profile.bag));
  }

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

  get language(): Language {
    return this._language;
  }

  set language(value: Language) {
    this._language = value || Language.English;
  }

  get subscription(): Subscription {
    return this._subscription;
  }

  set subscription(value: Subscription) {
    this._subscription = value;
  }

  get rank(): Rank {
    return this._rank;
  }

  set rank(value: Rank) {
    this._rank = value;
  }

  get achievements(): Array<Achievement> {
    return this._achievements;
  }

  set achievements(value: Array<Achievement>) {
    this._achievements = value;
  }

  get bag(): Bag {
    return this._bag;
  }

  set bag(value: Bag) {
    this._bag = value;
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

  withAchievements(achievements: Array<Achievement>): Profile {
    this.achievements = achievements;
    return this;
  }

  withBag(bag: Bag = <Bag>{}): Profile {
    this.bag = bag;
    return this;
  }

}
