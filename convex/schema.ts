import { authTables } from "@convex-dev/auth/server";
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

const schema = defineSchema({
  ...authTables,
  notes: defineTable({
    // Todo: Continue from here
 }),
  messages: defineTable({
    text: v.string(),
  })
});

export default schema;
