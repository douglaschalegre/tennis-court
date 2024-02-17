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
            <Select>
              <SelectTrigger className='w-[280px]'>
                <SelectValue placeholder='Select a location' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>North America</SelectLabel>
                  <SelectItem value='usa'>United States</SelectItem>
                  <SelectItem value='cnd'>Canada</SelectItem>
                  <SelectItem value='mex'>Mexico</SelectItem>
                </SelectGroup>
                <SelectGroup>
                  <SelectLabel>South America</SelectLabel>
                  <SelectItem value='bra'>Brazil</SelectItem>
                  <SelectItem value='arg'>Argentina</SelectItem>
                  <SelectItem value='chl'>Chile</SelectItem>
                </SelectGroup>
                <SelectGroup>
                  <SelectLabel>Asia</SelectLabel>
                  <SelectItem value='chn'>China</SelectItem>
                  <SelectItem value='jpn'>Japan</SelectItem>
                  <SelectItem value='sgp'>Singapore</SelectItem>
                </SelectGroup>
                <SelectGroup>
                  <SelectLabel>Europe</SelectLabel>
                  <SelectItem value='uk'>United Kingdom</SelectItem>
                  <SelectItem value='de'>Germany</SelectItem>
                  <SelectItem value='fr'>France</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className='flex basis-2/3 p-4'>
            <h2>Pick a date and time</h2>
          </div>
        </div>
      </div>
    </main>
  );
}
