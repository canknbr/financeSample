import { Model } from "@nozbe/watermelondb";
import { field, text } from "@nozbe/watermelondb/decorators";
import { database } from "../db";
export default class Account extends Model {
  static table = "accounts";

  @text("name") name: string;
  @field("cap") cap: number;
  @field("tap") tap: number;
}
