import { cn } from '@/lib/utils';

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={cn(
        'w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm focus:border-primary focus:outline-none',
        props.className
      )}
    />
  );
}
