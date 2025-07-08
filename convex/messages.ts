import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const list = query(async ({ db }) => {
  return await db.query("messages").collect();
});

export const send = mutation({
  args: { text: v.string() },
  handler: async ({ db }, { text }) => {
    await db.insert("messages", { text });
  },
});
