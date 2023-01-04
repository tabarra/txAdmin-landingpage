export default function LastUpdated({ ts }: any) {
  const dataTime = new Date(ts).toString();
  return <i className='text-neutral-400 text-md'>Last Update: {dataTime}</i>
}
