'use client'

import {zodResolver} from '@hookform/resolvers/zod'
import {Controller, useForm} from 'react-hook-form'
import {z} from 'zod'

import {Combobox} from '@/components/molecules/Combobox'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {Label} from '@/components/ui/label'
import {RadioGroup, RadioGroupItem} from '@/components/ui/radio-group'
import {Switch} from '@/components/ui/switch'
import {
  city as cities,
  district as districts,
  polyclinic as polyclinics,
} from '@/constants'

const validationSchema = z.object({
  city: z.string().nonempty('Please select a city'),
  district: z.string().nonempty('Please select a district'),
  polyclinic: z.string().nonempty('Please select a polyclinic'),
  localHospitals: z.boolean().optional(),
  firstExamination: z.boolean().optional(),
  sex: z.string().optional(),
})

type TValidationSchema = z.infer<typeof validationSchema>

export function MhrsSearchForm() {
  const {handleSubmit, formState, control} = useForm<TValidationSchema>({
    defaultValues: {
      city: '',
      district: '',
      polyclinic: '',
      localHospitals: true,
      firstExamination: false,
      sex: 'both',
    },
    resolver: zodResolver(validationSchema),
  })

  const submitHandler = async (data: TValidationSchema) => {
    console.log({data})
  }

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(submitHandler)}>
      <div className="flex flex-col gap-2 sm:min-w-full md:min-w-[260px] mb-4">
        <Controller
          name="city"
          control={control}
          rules={{required: true}}
          render={({field}) => (
            <Combobox label="city" data={Object.values(cities)} {...field} />
          )}
        />

        <Controller
          name="district"
          control={control}
          rules={{required: true}}
          render={({field}) => (
            <Combobox
              label="district"
              data={Object.values(districts)}
              {...field}
            />
          )}
        />

        <Controller
          name="polyclinic"
          control={control}
          rules={{required: true}}
          render={({field}) => (
            <Combobox
              label="polyclinic"
              data={Object.values(polyclinics)}
              {...field}
            />
          )}
        />

        {Object.keys(formState.errors).length > 0 && (
          <div className="bg-red-500 p-2 rounded text-xs">
            {Object.values(formState.errors).map(error => (
              <p key={error.message}>{error.message}</p>
            ))}
          </div>
        )}
        <button
          className="px-4 py-2 bg-blue-500 rounded-md uppercase font-semibold text-sm"
          // onClick={createUrlShortenerHandler}
        >
          Search
        </button>
      </div>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1" className="border-none">
          <AccordionTrigger>Advanced Filters</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-4">
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

              <Controller
                name="sex"
                control={control}
                render={({field: {value, onChange}}) => (
                  <RadioGroup defaultValue={value}>
                    <div
                      className="flex items-center space-x-2"
                      onClick={() => onChange('both')}
                    >
                      <RadioGroupItem value="both" id="r1" />
                      <Label htmlFor="r1">Both</Label>
                    </div>
                    <div
                      className="flex items-center space-x-2"
                      onClick={() => onChange('E')}
                    >
                      <RadioGroupItem value="man" id="r2" />
                      <Label htmlFor="r2">Sadece Erkek Doktorlar</Label>
                    </div>
                    <div
                      className="flex items-center space-x-2"
                      onClick={() => onChange('F')}
                    >
                      <RadioGroupItem value="woman" id="r3" />
                      <Label htmlFor="r3">Sadece Kadin Doktorlar</Label>
                    </div>
                  </RadioGroup>
                )}
              />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </form>
  )
}
