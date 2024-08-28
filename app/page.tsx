import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          AWS Cloud Practitioner Notes and Practice Exams
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          The AWS Certified Cloud Practitioner (CLF-C02) exam is intended for
          individuals who can effectively demonstrate overall knowledge of the
          AWS Cloud, independent of a specific job role.
        </p>
      </div>
      <div className="flex gap-4">
        <Link href="/notes" className={buttonVariants()}>
          Notes
        </Link>
        <Link href="/exams" className={buttonVariants({ variant: "outline" })}>
          Exams
        </Link>
      </div>
    </section>
  )
}
