'use client'

import {zodResolver} from '@hookform/resolvers/zod'
import {Appointment} from '@prisma/client'
import {useEffect} from 'react'
import {Controller, useForm} from 'react-hook-form'
import {z} from 'zod'

import {createAppointment} from '@/actions/appointment'
import {Combobox} from '@/components/molecules/Combobox'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {Label} from '@/components/ui/label'
import {Switch} from '@/components/ui/switch'
import {CITY, DISTRICT, POLYCLINIC} from '@/constants'
import {useServerAction} from '@/hooks'

import {Button} from '../ui/button'
import {Tabs, TabsList, TabsTrigger} from '../ui/tabs'

const validationSchema = z.object({
  cityId: z.number().min(1, 'City is required'),
  districtId: z.number().min(1, 'District is required'),
  polyclinicId: z.number().min(1, 'Polyclinic is required'),
  localHospitals: z.boolean(),
  firstExamination: z.boolean(),
  sex: z.enum(['B', 'E', 'K']),
})

type TValidationSchema = z.infer<typeof validationSchema>

type MhrsSearchFormProps = {
  appointment?: Appointment
}
export function MhrsSearchForm({appointment}: MhrsSearchFormProps) {
  const [createAppointmentAction, createAppointmentIsPending] =
    useServerAction(createAppointment)

  const defaultValues = {
    cityId: 0,
    districtId: 0,
    polyclinicId: 0,
    localHospitals: true,
    firstExamination: false,
    sex: 'B',
  } as TValidationSchema
  const {handleSubmit, formState, control, reset} = useForm<TValidationSchema>({
    defaultValues,
    resolver: zodResolver(validationSchema),
  })

  useEffect(() => {
    reset(appointment || defaultValues)
  }, [appointment])

  const submitHandler = async (data: TValidationSchema) => {
    createAppointmentAction(data)
  }

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(submitHandler)}>
      <h2 className="mb-4 font-semibold">Appointment Informations</h2>
      <div className="mb-2 flex flex-col gap-2 sm:min-w-full md:min-w-[260px]">
        <Controller
          name="cityId"
          control={control}
          rules={{required: true}}
          render={({field}) => (
            <Combobox
              label="City id"
              data={Object.entries(CITY).map(([key, label]) => ({
                value: key,
                label,
              }))}
              {...field}
              onChange={value => {
                field.onChange(Number(value))
              }}
            />
          )}
        />

        <Controller
          name="districtId"
          control={control}
          rules={{required: true}}
          render={({field}) => (
            <Combobox
              label="District id"
              data={Object.entries(DISTRICT).map(([key, label]) => ({
                value: key,
                label,
              }))}
              {...field}
              onChange={value => {
                field.onChange(Number(value))
              }}
            />
          )}
        />

        <Controller
          name="polyclinicId"
          control={control}
          rules={{required: true}}
          render={({field}) => (
            <Combobox
              label="Polyclinic id"
              data={Object.entries(POLYCLINIC).map(([key, label]) => ({
                value: key,
                label,
              }))}
              {...field}
              onChange={value => {
                field.onChange(Number(value))
              }}
            />
          )}
        />

        {Object.keys(formState.errors).length > 0 && (
          <div className="rounded bg-red-500 p-2 text-xs">
            {Object.values(formState.errors).map(error => (
              <p key={error.message}>{error.message}</p>
            ))}
          </div>
        )}
        <Button
          type="submit"
          isLoading={createAppointmentIsPending}
          disabled={createAppointmentIsPending}
          variant="destructive"
          size="sm"
        >
          {appointment ? 'Update' : 'Search'}
        </Button>
      </div>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1" className="border-none">
          <AccordionTrigger className="p-0 pb-2 text-sm">
            Advanced Filters
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-4">
              <Controller
                name="sex"
                control={control}
                render={({field: {value, onChange}}) => (
                  <Tabs defaultValue={value} className="mx-auto w-full">
                    <TabsList className="h-8 w-full rounded-sm">
                      {sexOptions.map(sex => {
                        return (
                          <TabsTrigger
                            value={sex.value}
                            key={sex.value}
                            onClick={() => onChange(sex.value)}
                            className="h-6"
                          >
                            {sex.label}
                          </TabsTrigger>
                        )
                      })}
                    </TabsList>
                  </Tabs>
                )}
              />

              <div className="flex items-center space-x-2">
                <Controller
                  name="localHospitals"
                  control={control}
                  render={({field: {value, onChange}}) => (
                    <Switch
                      id="local-hospitals"
                      checked={value}
                      onClick={() => {
                        onChange(!value)
                      }}
                    />
                  )}
                />
                <Label htmlFor="local-hospitals">Semp Polikinikleri</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Controller
                  name="firstExamination"
                  control={control}
                  render={({field: {value, onChange}}) => (
                    <Switch
                      id="first-examination"
                      checked={value}
                      onClick={() => {
                        onChange(!value)
                      }}
                    />
                  )}
                />
                <Label htmlFor="first-examination">Ilk Muayene</Label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </form>
  )
}

const sexOptions = [
  {value: 'B', label: 'Both'},
  {value: 'E', label: 'Erkek'},
  {value: 'K', label: 'Kadin'},
]
