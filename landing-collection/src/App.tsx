import { Routes, Route } from 'react-router-dom'
import { ScrollToTop, PageLayout } from './shared/components'
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
// New 15 landings
import { DeployZeroPage } from './pages/deployzero'
import { UXPulsePage } from './pages/uxpulse'
import { APIShieldPage } from './pages/apishield'
import { MicroSaaSPage } from './pages/microsaas'
import { DesignTokensPage } from './pages/designtokens'
import { FeatureFlagPage } from './pages/featureflag'
import { PerformanceLabPage } from './pages/performancelab'
import { A11yScanPage } from './pages/a11yscan'
import { FrontendMonitorPage } from './pages/frontendmonitor'
import { SEOStackPage } from './pages/seostack'
import { SaaSOnboardingPage } from './pages/saasonboarding'
import { AuthlessPage } from './pages/authless'
import { CloudCostPage } from './pages/cloudcost'
import { DocsAPIPage } from './pages/docsapi'
import { IndieMetricsPage } from './pages/indiemetrics'

function App() {
  return (
    <PageLayout>
      <ScrollToTop />
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
        {/* New 15 landings */}
        <Route path="/deployzero" element={<DeployZeroPage />} />
        <Route path="/uxpulse" element={<UXPulsePage />} />
        <Route path="/apishield" element={<APIShieldPage />} />
        <Route path="/microsaas" element={<MicroSaaSPage />} />
        <Route path="/designtokens" element={<DesignTokensPage />} />
        <Route path="/featureflag" element={<FeatureFlagPage />} />
        <Route path="/performancelab" element={<PerformanceLabPage />} />
        <Route path="/a11yscan" element={<A11yScanPage />} />
        <Route path="/frontendmonitor" element={<FrontendMonitorPage />} />
        <Route path="/seostack" element={<SEOStackPage />} />
        <Route path="/saasonboarding" element={<SaaSOnboardingPage />} />
        <Route path="/authless" element={<AuthlessPage />} />
        <Route path="/cloudcost" element={<CloudCostPage />} />
        <Route path="/docsapi" element={<DocsAPIPage />} />
        <Route path="/indiemetrics" element={<IndieMetricsPage />} />
      </Routes>
    </PageLayout>
  )
}

export default App
