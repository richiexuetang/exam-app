"use client"

import * as React from "react"
import { Anchor, Col, FloatButton, Modal, Row, Tag } from "antd"
import { useForm } from "react-hook-form"
import { useTimer } from "react-timer-hook"

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
  expiryTimestamp: Date
}

interface AnchorItem {
  key: string
  href: string
  title: string | React.ReactNode
}

export const QuestionForm = ({
  questions,
  expiryTimestamp,
}: QuestionFormProps) => {
  const [incorrectAnswers, setIncorrectAnswers] = React.useState<string[]>([])
  const initialValues = {} as any
  const anchorItems: AnchorItem[] = []
  const [isModalOpen, setIsModalOpen] = React.useState(false)

  const { seconds, minutes, hours, pause, resume } = useTimer({
    expiryTimestamp,
    onExpire: () => {
      onSubmit(form.getValues())
      setIsModalOpen(true)
    },
  })

  questions.map((question, index) => {
    const questionNumber = (index + 1).toString()

    initialValues[`q${questionNumber}`] = question.isMultiSelect ? [] : ""
    const anchorItem = {
      key: questionNumber,
      href: "#" + questionNumber,
      title: (
        <Tag color="default">
          {"Q" + (questionNumber.length === 1 ? " " : "") + questionNumber}
        </Tag>
      ),
    }
    anchorItems.push(anchorItem)
  })

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

  return (
    <>
      <Modal
        title="Time is up!"
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
      >
        <h2>You scored: </h2>
        <p>{50 - incorrectAnswers.length}/50</p>
      </Modal>
      <div className="my-2 flex flex-col items-center">
        <div className="text-lg">
          <span>
            {hours < 10 && "0"}
            {hours}
          </span>
          :
          <span>
            {minutes < 10 && "0"}
            {minutes}
          </span>
          :<span>{seconds}</span>
        </div>
        <div className="flex gap-2">
          <button onClick={pause}>Pause</button>
          <button onClick={resume}>Resume</button>
        </div>
      </div>
      <div className="my-5">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <Row>
              <Col span={22}>
                {questions?.map((question, index) => {
                  return (
                    <div id={(index + 1).toString()} className="m-6">
                      <FormField
                        control={form.control}
                        key={question.prompt}
                        // @ts-ignore
                        name={`q${(index + 1).toString()}`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base">
                              # {index + 1}. {question.prompt}
                            </FormLabel>
                            {question.isMultiSelect ? (
                              <MultiSelectQuestion
                                key={question.prompt}
                                form={form}
                                question={question}
                                index={index}
                              />
                            ) : (
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
                                      <Label htmlFor={option.value}>
                                        {option.value}
                                      </Label>
                                    </FormItem>
                                  ))}
                                </RadioGroup>
                              </FormControl>
                            )}
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  )
                })}
              </Col>
              <Col span={2}>
                <Anchor items={anchorItems} />
              </Col>
            </Row>
            <Button type="submit">Submit</Button>
          </form>
        </Form>
        <FloatButton.BackTop />
        {incorrectAnswers.length > 0 && (
          <div>{50 - incorrectAnswers.length}/50</div>
        )}
      </div>
    </>
  )
}
