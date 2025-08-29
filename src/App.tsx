import React from 'react'
import { TonConnectButton, useTonAddress, useTonWallet } from '@tonconnect/ui-react'

export default function App() {
  const userFriendlyAddress = useTonAddress()
  const rawAddress = useTonAddress(false)
  const wallet = useTonWallet()

  return (
    <div style={{ fontFamily: 'Inter, system-ui, Arial, sans-serif', padding: 24, maxWidth: 720, margin: '0 auto' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <h1 style={{ margin: 0, fontSize: 24 }}>TON Connect React UI Demo</h1>
        <TonConnectButton />
      </header>

      <section style={{ padding: 16, border: '1px solid #eee', borderRadius: 12 }}>
        <h2 style={{ marginTop: 0 }}>Status</h2>
        {wallet ? (
          <div>
            <p>Connected wallet: <b>{wallet.device.appName}</b></p>
            <p>Your address (friendly): <code>{userFriendlyAddress}</code></p>
            <p>Your address (raw): <code>{rawAddress}</code></p>
          </div>
        ) : (
          <p>Click <b>Connect</b> to link your wallet.</p>
        )}
      </section>

      <footer style={{ marginTop: 32, fontSize: 12, opacity: 0.7 }}>
        <p>This app follows the official TON Connect React UI quick-start structure.</p>
      </footer>
    </div>
  )
}
