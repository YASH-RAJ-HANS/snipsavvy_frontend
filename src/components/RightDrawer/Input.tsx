import { ChangeEventHandler } from "react"

interface InputProps {
    onChange:  ChangeEventHandler,
    placeholder: string,
    className: string
}

export function Input({placeholder, onChange, className}:InputProps) {
    return <div>
      <div className="text-white text-sm font-medium text-left py-2">
        
      </div>
      <input onChange={onChange} placeholder={placeholder} className={`w-full px-2 py-1 rounded-lg border-slate-200 bg-zinc-900 text-slate-200 ${className}`} />
    </div>
}