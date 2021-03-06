import Head from '../components/head'
import GoHome from '../components/go-home'
import CopyBlock from '../components/doge-copy'
import DogeFooter from '../components/doge-footer'

import copy from '../lib/charities-copy'

const DogeHistory = () => {
  return (
    <>
      <Head
        title="Charities"
        description="A portion of the proceeds from these auctions are being donated to charities across the world."
      />
      <GoHome />
      <CopyBlock
        title="Charities"
        copy={copy}
      />
      <aside className="doge-history_bg"></aside>
      <DogeFooter location="product"/>
    </>
  )
}

export default DogeHistory
