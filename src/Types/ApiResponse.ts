import { Message } from "@/model/User";

export interface ApiResponse {
  success: boolean;
  message: string;
  acceptingMessage?: boolean;
  messages?: Array<Message>;
}
