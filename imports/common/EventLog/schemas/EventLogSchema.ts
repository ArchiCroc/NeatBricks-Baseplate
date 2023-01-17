import { z, ZodType } from "zod";
import { UserId } from "../../Users/types";
import { EventLogId } from "../interfaces";

const _id: ZodType<EventLogId> = z.string().length(17);
const userId: ZodType<UserId> = z.string().length(17);

export const EventLogSchema = z.object({
  _id: _id.optional(),
  level: z.enum([
    "Silly",
    "Debug",
    "Verbose",
    "Info",
    "Warning",
    "Error"]),
  message: z.string().max(1024),
  path: z.string().max(1024).optional(),
  userAgent: z.string().max(1024).optional(),
  stack: z.string().array().optional(),
  reactStack: z.string().array().optional(),
  userId: userId.optional(),
});

export default EventLogSchema;
