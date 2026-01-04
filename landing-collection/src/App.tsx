import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { NexusAIPage } from './pages/nexusai'
import { VitalityPage } from './pages/vitality'
import { HelixBankPage } from './pages/helixbank'
import { SentinelPage } from './pages/sentinel'
import { LuminaPage } from './pages/lumina'
import { CompoundPage } from './pages/compound'
import { DevCanvasPage } from './pages/devcanvas'
import { NomadAtlasPage } from './pages/nomadatlas'
import { KeystonePage } from './pages/keystone'
import { AtelierNoirPage } from './pages/ateliernoir'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/nexusai" element={<NexusAIPage />} />
      <Route path="/vitality" element={<VitalityPage />} />
      <Route path="/helixbank" element={<HelixBankPage />} />
      <Route path="/sentinel" element={<SentinelPage />} />
      <Route path="/lumina" element={<LuminaPage />} />
      <Route path="/compound" element={<CompoundPage />} />
      <Route path="/devcanvas" element={<DevCanvasPage />} />
      <Route path="/nomadatlas" element={<NomadAtlasPage />} />
      <Route path="/keystone" element={<KeystonePage />} />
      <Route path="/ateliernoir" element={<AtelierNoirPage />} />
      
    </Routes>
  )
}

export default App
