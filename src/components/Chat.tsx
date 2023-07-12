"use client";

import { useChat } from "ai/react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat",
  });

  return (
    <Card className="w-full max-w-[468px] flex flex-col mx-2">
      <CardHeader>
        <CardTitle>Chat AI</CardTitle>
        <CardDescription>
          Using Vercel SDK to create a chat bot.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <ScrollArea className="h-[calc(100vh-15rem)] space-y-4 pr-3">
          {messages.map((message) => {
            return (
              <div
                key={message.id}
                className="flex gap-3 text-slate-600 text-sm mb-4"
              >
                {message.role === "user" && (
                  <Avatar>
                    <AvatarFallback>PH</AvatarFallback>
                    <AvatarImage src="https://github.com/DevPedroHB.png" />
                  </Avatar>
                )}

                {message.role === "assistant" && (
                  <Avatar>
                    <AvatarFallback>AI</AvatarFallback>
                    <AvatarImage src="data:image/jpeg;base64,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" />
                  </Avatar>
                )}
                <p className="leading-relaxed">
                  <span className="block font-bold text-slate-700">
                    {message.role === "user" ? "Usuário" : "AI"}:
                  </span>
                  {message.content}
                </p>
              </div>
            );
          })}
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <form className="w-full flex gap-2" onSubmit={handleSubmit}>
          <Input
            placeholder="How can I help you?"
            value={input}
            onChange={handleInputChange}
          />
          <Button type="submit">Send</Button>
        </form>
      </CardFooter>
    </Card>
  );
}
