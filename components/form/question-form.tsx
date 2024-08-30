"use client"

import * as React from "react"
import { useForm } from "react-hook-form"

import { Question } from "@/lib/api/exam"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

import { Checkbox } from "../ui/checkbox"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form"
import { Label } from "../ui/label"

interface QuestionFormProps {
  questions: Question[]
}

export const QuestionForm = ({ questions }: QuestionFormProps) => {
  // 1. Define your form.
  // <z.infer<typeof formSchema>></z.infer>
  const [defaultValues, setDefaultValues] = React.useState<object | null>(null)

  React.useEffect(() => {
    if (!defaultValues && questions) {
      questions.map((question) => {
        setDefaultValues((prev) => ({ ...prev, [question.prompt]: "" }))
      })
    }
  }, [defaultValues, questions])

  const form = useForm({
    // resolver: zodResolver(formSchema),
    defaultValues: { ...defaultValues },
  })

  const onSubmit = (values: any) => {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {questions?.map((question) => (
          <FormField
            control={form.control}
            // @ts-ignore
            name={question.prompt}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{question.prompt}</FormLabel>
                <FormControl>
                  {question.isMultiSelect ? (
                    <div></div>
                  ) : (
                    <div>
                      <RadioGroup defaultValue="">
                        {question.options.map((option, index) => (
                          <div
                            className="flex items-center space-x-2"
                            key={`${option.value}${index}`}
                          >
                            <RadioGroupItem
                              value={option.value}
                              id={option.value}
                            />
                            <Label htmlFor={option.value}>{option.value}</Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                  )}
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
      </form>
    </Form>
  )
}
