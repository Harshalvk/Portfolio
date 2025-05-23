"use client";

import React, { useEffect, useState } from "react";
import Title from "../Title";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ArrowRight, AtSign, Loader, Loader2, Send } from "lucide-react";
import { AutosizeTextarea } from "../ui/auto-resize-textarea";
import { Discord, LinkedIn, X } from "../logos";
import Link from "next/link";
import { useMutation } from "@tanstack/react-query";
import { SendMail } from "@/actions/sendMail";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string().max(500),
});

const ContactMe = () => {
  const [isSubmit, setIsSubmit] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  useEffect(() => {
    form.reset({
      email: "",
      message: "",
      name: "",
    });
  }, [isSubmit]);

  const { mutate, isPending } = useMutation({
    mutationFn: SendMail,
    onMutate: () => {
      toast.loading("Sending...", { id: "send-email" });
    },
    onSuccess: () => {
      setIsSubmit(true);
      toast.success("Thanks for reaching out!", { id: "send-email" });
    },
    onError: () => {
      toast.error("Mail not sent.", { id: "send-email" });
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    mutate(values);
  };

  return (
    <section className="my-5">
      <Title text="Contact Me." />
      <p className="font-mono text-muted-foreground mb-5 leading-5">
        I&apos;m always eager to explore new opportunities and take an exciting
        projects. If you have a project in mind, or just want to say hi, feel
        free to send me a message.
      </p>
      <div className="border p-4 rounded-md">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-5 font-mono"
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <FormField
                disabled={isPending}
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your Name"
                        {...field}
                        className="text-sm"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                disabled={isPending}
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="harshal@xyz.com"
                        {...field}
                        className="text-sm"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="message"
              disabled={isPending}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <AutosizeTextarea
                      placeholder="Hello there, I would like to ask you about..."
                      {...field}
                      className="min-h-36 resize-none text-sm"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              disabled={isPending}
              variant={"secondary"}
              className="border w-full sm:w-fit"
            >
              {isPending ? (
                <Loader className="animate-spin transition-all" />
              ) : (
                <Send />
              )}
              Send
            </Button>
          </form>
        </Form>
      </div>
      <p className="text-muted-foreground font-mono my-5">
        Or contact me with...
      </p>
      <div className="flex gap-2 flex-wrap">
        <OtherContacts />
      </div>
    </section>
  );
};

function OtherContacts() {
  return (
    <>
      <Button variant={"outline"} className="group text-md">
        <Link
          href={"mailto:harshalvkhobragade@gmail.com"}
          target="_blank"
          className="flex items-center gap-1"
        >
          <AtSign size={5} />
          Email
          <ArrowRight
            size={5}
            className="-translate-x-0 group-hover:translate-x-0.5 transition duration-200"
          />
        </Link>
      </Button>
      <Button variant={"outline"} className="group text-md">
        <Link
          href={"https://discord.com/users/harsshal."}
          target="_blank"
          className="flex items-center gap-1"
        >
          <Discord className="h-5 w-5" />
          Discord
          <ArrowRight
            size={5}
            className="-translate-x-0 group-hover:translate-x-0.5 transition duration-200"
          />
        </Link>
      </Button>
      <Button variant={"outline"} className="group text-md">
        <Link
          href={"https://x.com/Harshalvk_"}
          target="_blank"
          className="flex items-center gap-1"
        >
          <X className="h-5 w-5" />
          Twitter / X
          <ArrowRight
            size={5}
            className="-translate-x-0 group-hover:translate-x-0.5 transition duration-200"
          />
        </Link>
      </Button>
      <Button variant={"outline"} className="group text-md">
        <Link
          href={"https://www.linkedin.com/in/harshalvk/"}
          target="_blank"
          className="flex items-center gap-1"
        >
          <LinkedIn className="h-5 w-5" />
          LinkedIn
          <ArrowRight
            size={5}
            className="-translate-x-0 group-hover:translate-x-0.5 transition duration-200"
          />
        </Link>
      </Button>
    </>
  );
}

export default ContactMe;
