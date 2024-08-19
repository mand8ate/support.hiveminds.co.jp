"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "お名前の入力が必要です",
  }),
  email: z.string().email({ message: "メールアドレスの入力が必要です" }),
  subject: z.string().min(2, {
    message: "件名の入力が必要です",
  }),
  message: z.string().min(10, {
    message: "メッセージの入力が必要です",
  }),
});

export default function ContactForm() {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setLoading(true);
      const response = await fetch("email.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(values),
      });

      const result = await response.json();

      if (result.success) {
        router.push("/contact/success");
        setLoading(false);
      } else {
        console.log(result.message);
        setLoading(false);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-2 sm:space-y-4"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs font-semibold sm:text-base">
                氏名
              </FormLabel>
              <FormControl>
                <Input
                  className="py-2 text-xs sm:py-4 sm:text-base"
                  placeholder="山田太郎"
                  {...field}
                />
              </FormControl>
              <FormDescription className="text-xs">
                お名前をフルネームで入力してください
              </FormDescription>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs font-semibold sm:text-base">
                メールアドレス
              </FormLabel>
              <FormControl>
                <Input
                  className="py-2 text-xs sm:py-4 sm:text-base"
                  placeholder="taro@hiveminds.co.jp"
                  {...field}
                />
              </FormControl>
              <FormDescription className="text-xs">
                返信して欲しいメールアドレスを入力してください
              </FormDescription>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="xs:text-base text-xs font-semibold">
                件名
              </FormLabel>
              <FormControl>
                <Input
                  className="py-2 text-xs sm:py-4 sm:text-base"
                  placeholder="相談希望"
                  {...field}
                />
              </FormControl>
              <FormDescription className="text-xs">
                問い合わせの理由を入力してください
              </FormDescription>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs font-semibold sm:text-base">
                メッセージ
              </FormLabel>
              <FormControl>
                <Textarea
                  className="py-2 text-xs sm:py-4 sm:text-base"
                  placeholder="ホームページを改善したいので、相談させてください"
                  rows={4 as number}
                  {...field}
                />
              </FormControl>
              <FormDescription className="text-xs">
                問い合わせの内容を入力してください
              </FormDescription>
            </FormItem>
          )}
        />
        <Button
          disabled={loading}
          type="submit"
          className="w-full py-2 text-base font-semibold sm:py-4 sm:text-lg"
        >
          送信
        </Button>
      </form>
    </Form>
  );
}
