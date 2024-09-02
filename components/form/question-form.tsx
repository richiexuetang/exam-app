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
  const [incorrectAnswers, setIncorrectAnswers] = React.useState<string[]>([])
  const initialValues = {} as any

  questions.map(
    (question, index) =>
      (initialValues[`q${index + 1}`] = question.isMultiSelect ? [] : "")
  )

  const form = useForm<typeof initialValues>({
    defaultValues: { ...initialValues },
  })

  const onSubmit = (values: typeof initialValues) => {
    setIncorrectAnswers([])

    for (const [key, _] of Object.entries(values)) {
      const questionNumber = parseInt(key.slice(1))
      const question = questions[questionNumber - 1]
      const userAnswer = values[key]

      if (question.isMultiSelect) {
        if (userAnswer.length != 2) {
          setIncorrectAnswers((prev) => [...prev, key])
        } else {
          for (var i = 0; i < question.options.length; i++) {
            const option = question.options[i]
            if (option.isAnswer && !userAnswer.includes(option.value)) {
              setIncorrectAnswers((prev) => [...prev, key])
              break
            }
          }
        }
      } else {
        const correctAnswer = question.options.find(
          (option) => option.isAnswer
        )?.value
        const isMatch = userAnswer === correctAnswer
        if (!isMatch) {
          setIncorrectAnswers((prev) => [...prev, key])
        }
      }
    }
  }

  const onClick = () => {
    window.location.href = "#10"
  }

  return (
    <>
      <button onClick={onClick}>10</button>
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
                    <FormLabel>
                      <h2 id={`#${index + 1}`}>
                        <a href={`#${index + 1}`} aria-hidden="true">
                          #
                        </a>
                        {index + 1}. {question.prompt}
                      </h2>
                    </FormLabel>
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
      {incorrectAnswers.length > 0 && (
        <div>{50 - incorrectAnswers.length}/50</div>
      )}
    </>
  )
}
