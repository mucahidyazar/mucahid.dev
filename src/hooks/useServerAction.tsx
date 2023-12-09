import {useRouter} from 'next/navigation'
import {useEffect, useRef, useState, useTransition} from 'react'

type ActionOptions = {
  redirectPath?: string
  onSuccess?: () => void
}
export const useServerAction = <P, R>(
  action: (_: P) => Promise<R>,
): [
  (_a0: P, _a1?: ActionOptions) => Promise<R | undefined>,
  boolean,
  boolean,
  boolean,
] => {
  const router = useRouter()

  const [isPending, startTransition] = useTransition()
  const [result, setResult] = useState<R>()
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<Error | undefined>(undefined)
  const resolver = useRef<(value?: R | PromiseLike<R>) => void>()

  useEffect(() => {
    if (!isSuccess || error === undefined) return

    resolver.current?.(result)
  }, [result, isSuccess])

  const runAction = async (
    args: P,
    options?: ActionOptions,
  ): Promise<R | undefined> => {
    startTransition(() => {
      action(args)
        .then(data => {
          setResult(data)
          setIsSuccess(true)
          setError(undefined)
          if (options?.redirectPath) {
            router.push(options?.redirectPath)
          }
          if (options?.onSuccess) {
            options?.onSuccess()
          }
        })
        .catch(error => {
          setError(error)
          setIsSuccess(false)
        })
    })

    return new Promise(resolve => {
      resolver.current = resolve
    })
  }

  const isError = !!error

  return [runAction, isPending, isSuccess, isError]
}
