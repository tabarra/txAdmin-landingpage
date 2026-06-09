export default function LastUpdated({ ts }: any) {
  const dataTime = new Date(ts).toString();
  return <i className='text-txneutraltext text-md'>Last Update: {dataTime}</i>
}
