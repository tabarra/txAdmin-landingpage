export default function LastUpdated({ ts }: any) {
  const dataTime = new Date(ts).toString();
  return <i className='text-gray-400 text-md'>Last Update: {dataTime}</i>
}
