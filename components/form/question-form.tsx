"use client"

import * as React from "react"
import { useForm } from "react-hook-form"

import { Question } from "@/lib/api/exam"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

import { Button } from "../ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form"
import { Label } from "../ui/label"
import { MultiSelectQuestion } from "./multi-select-question"

interface QuestionFormProps {
  questions: Question[]
}

export const QuestionForm = ({ questions }: QuestionFormProps) => {
  const initialValues = {
    q1: "",
    q2: "",
    q3: "",
    q4: [],
    q5: "",
    q6: "",
  }

  const form = useForm({
    // resolver: zodResolver(formSchema),
    defaultValues: { ...initialValues },
  })

  const onSubmit = (values: any) => {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {questions?.map((question, index) => {
          if (question.isMultiSelect) {
            return (
              <MultiSelectQuestion
                key={question.prompt}
                form={form}
                question={question}
                index={index}
              />
            )
          }
          return (
            <FormField
              control={form.control}
              key={question.prompt}
              // @ts-ignore
              name={`q${(index + 1).toString()}`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{question.prompt}</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value as string}
                      className="flex flex-col space-y-1"
                    >
                      {question.options.map((option, index) => (
                        <FormItem
                          className="flex items-center space-x-3 space-y-0"
                          key={`${option.value}${index}`}
                        >
                          <FormControl>
                            <RadioGroupItem
                              value={option.value}
                              id={option.value}
                            />
                          </FormControl>
                          <Label htmlFor={option.value}>{option.value}</Label>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )
        })}
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
