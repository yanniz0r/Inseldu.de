import { createFormHook, createFormHookContexts } from '@tanstack/react-form'

export const { fieldContext, formContext, useFieldContext, useFormContext } =
  createFormHookContexts()

const inputClass =
  'w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-primary transition-colors text-white'
const labelClass =
  'font-label-caps text-[10px] text-surface-container-highest uppercase'

function errorMessage(e: unknown): string {
  if (typeof e === 'string') return e
  if (e && typeof e === 'object' && 'message' in e) return String((e as { message: unknown }).message)
  return String(e)
}

function FieldErrors({ errors }: { errors: unknown[] }) {
  const messages = errors.map(errorMessage).filter(Boolean)
  if (messages.length === 0) return null
  return <p className="mt-1 text-xs text-red-400">{messages.join('. ')}</p>
}

export function TextField({
  label,
  placeholder,
  type = 'text',
}: {
  label: string
  placeholder?: string
  type?: string
}) {
  const field = useFieldContext<string>()
  return (
    <div className="space-y-2">
      <label htmlFor={field.name} className={labelClass}>
        {label}
      </label>
      <input
        id={field.name}
        name={field.name}
        type={type}
        placeholder={placeholder}
        value={field.state.value}
        onBlur={field.handleBlur}
        onChange={(e) => field.handleChange(e.target.value)}
        className={inputClass}
      />
      <FieldErrors errors={field.state.meta.errors} />
    </div>
  )
}

export function TextareaField({
  label,
  placeholder,
  rows = 4,
}: {
  label: string
  placeholder?: string
  rows?: number
}) {
  const field = useFieldContext<string>()
  return (
    <div className="space-y-2">
      <label htmlFor={field.name} className={labelClass}>
        {label}
      </label>
      <textarea
        id={field.name}
        name={field.name}
        rows={rows}
        placeholder={placeholder}
        value={field.state.value}
        onBlur={field.handleBlur}
        onChange={(e) => field.handleChange(e.target.value)}
        className={`${inputClass} resize-none`}
      />
      <FieldErrors errors={field.state.meta.errors} />
    </div>
  )
}

export function SelectField({
  label,
  options,
}: {
  label: string
  options: readonly string[]
}) {
  const field = useFieldContext<string>()
  return (
    <div className="space-y-2">
      <label htmlFor={field.name} className={labelClass}>
        {label}
      </label>
      <select
        id={field.name}
        name={field.name}
        value={field.state.value}
        onBlur={field.handleBlur}
        onChange={(e) => field.handleChange(e.target.value)}
        className={`${inputClass} appearance-none cursor-pointer`}
      >
        {options.map((opt) => (
          <option key={opt} value={opt} className="text-on-surface">
            {opt}
          </option>
        ))}
      </select>
      <FieldErrors errors={field.state.meta.errors} />
    </div>
  )
}

export const { useAppForm } = createFormHook({
  fieldContext,
  formContext,
  fieldComponents: {
    TextField,
    TextareaField,
    SelectField,
  },
  formComponents: {},
})
