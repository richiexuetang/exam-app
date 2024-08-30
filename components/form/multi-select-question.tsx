"use client"

import { Question } from "@/lib/api/exam"
import { Checkbox } from "@/components/ui/checkbox"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

interface MultiSelectQuestionProps {
  form: any
  question: Question
  index: number
}

export function MultiSelectQuestion({
  form,
  question,
  index,
}: MultiSelectQuestionProps) {
  return (
    <FormField
      control={form.control}
      name={`q${(index + 1).toString()}`}
      render={() => (
        <FormItem>
          <div className="mb-4">
            <FormLabel>
              {index + 1}. {question.prompt}
            </FormLabel>
          </div>
          {question.options.map((item) => (
            <FormField
              key={item.value}
              control={form.control}
              name={`q${(index + 1).toString()}`}
              render={({ field }) => {
                return (
                  <FormItem
                    key={item.value}
                    className="flex flex-row items-start space-x-3 space-y-0"
                  >
                    <FormControl>
                      <Checkbox
                        checked={field.value?.includes(item.value)}
                        onCheckedChange={(checked) => {
                          return checked
                            ? field.onChange([...field.value, item.value])
                            : field.onChange(
                                field.value?.filter(
                                  (value: string) => value !== item.value
                                )
                              )
                        }}
                      />
                    </FormControl>
                    <FormLabel className="font-normal">{item.value}</FormLabel>
                  </FormItem>
                )
              }}
            />
          ))}
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
