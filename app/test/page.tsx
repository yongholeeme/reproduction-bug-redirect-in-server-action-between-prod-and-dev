import { headers } from "next/headers"
import { BackButton } from "../_components/BackButton"

export default async function Page() {
  const headerList = await headers()

  const existsActionHeader = headerList.get('x-action-redirect')

  console.log('x-action-redirect header is', existsActionHeader)
    
  return (
      <>
        <div>node_env is {process.env.NODE_ENV}</div>
        <div>x-action-redirect header is {existsActionHeader ?? 'empty'}</div>
        <BackButton />
      </>
    );
}