import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function Home() {
  return (
    <main>
      <div className='h-lvh flex justify-center items-center'>
        <div className='flex w-4/5 justify-center items-center shadow-[0px_0px_5px_1px_rgba(0,0,0,0.2)] p-4 rounded'>
          <div className='flex flex-col basis-1/3 p-4'>
            <h1>Book a Court</h1>
          </div>
          <div className='flex basis-2/3 p-4'>
            <h2>Pick a date and time</h2>
          </div>
        </div>
      </div>
    </main>
  );
}
