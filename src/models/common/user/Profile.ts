import {Achievement} from "./Achievement";
import {Language} from "./Language";
import {Subscription} from "./Subscription";
import {Rank} from "./Rank";

export class Profile {

  firstName: string;
  lastName: string;
  username: string;
  language: Language;
  subscription: Subscription;
  rank: Rank;
  achievements: Array<Achievement>;

  constructor (firstName: string, lastName: string, username: string, language: Language, subscription: Subscription, rank: Rank, achievements: Array<Achievement>) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.language = language;
    this.subscription = subscription;
    this.rank = rank;
    this.achievements = achievements;
  }

}
