import { z } from "zod";
import { ReadOnlyBehavior, ReadOnlyBehaviorComposite } from "../../interfaces/behaviors";
import { User } from "../../Users/types";
import EventLogSchema from "../schemas/EventLogSchema";

export type EventLogId = string;

export type EventLog = z.infer<typeof EventLogSchema> & ReadOnlyBehavior & {
  _id: EventLogId;
}

export type EventLogComposite = EventLog & ReadOnlyBehaviorComposite & {
  user?: User;
}