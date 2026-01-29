import { Schema, Document } from "mongoose";

export interface Message extends Document {
  content: string;
  createAt: Date;
}

const messageSchema: Schema<Message> = new Schema({
  content: {
    type: String,
    required: true,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});
