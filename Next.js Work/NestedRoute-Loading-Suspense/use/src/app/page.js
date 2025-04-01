
import Loading from '@/component/product/loading'

import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <Suspense fallback={<Loading />}>
          <Product />
      </Suspense>
      {/* <Suspense fallback={<Loading />}>
       <Description />
      </Suspense> */}
    </div>
  )
}

export default page
