import { Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import { ScrollToTop, PageLayout } from './shared/components'
import { HomePage } from './pages/HomePage'

// Lazy load all landing pages for better initial load performance
const NexusAIPage = lazy(() => import('./pages/nexusai').then(m => ({ default: m.NexusAIPage })))
const VitalityPage = lazy(() => import('./pages/vitality').then(m => ({ default: m.VitalityPage })))
const HelixBankPage = lazy(() => import('./pages/helixbank').then(m => ({ default: m.HelixBankPage })))
const SentinelPage = lazy(() => import('./pages/sentinel').then(m => ({ default: m.SentinelPage })))
const LuminaPage = lazy(() => import('./pages/lumina').then(m => ({ default: m.LuminaPage })))
const CompoundPage = lazy(() => import('./pages/compound').then(m => ({ default: m.CompoundPage })))
const DevCanvasPage = lazy(() => import('./pages/devcanvas').then(m => ({ default: m.DevCanvasPage })))
const NomadAtlasPage = lazy(() => import('./pages/nomadatlas').then(m => ({ default: m.NomadAtlasPage })))
const KeystonePage = lazy(() => import('./pages/keystone').then(m => ({ default: m.KeystonePage })))
const AtelierNoirPage = lazy(() => import('./pages/ateliernoir').then(m => ({ default: m.AtelierNoirPage })))
// New 15 landings
const DeployZeroPage = lazy(() => import('./pages/deployzero').then(m => ({ default: m.DeployZeroPage })))
const UXPulsePage = lazy(() => import('./pages/uxpulse').then(m => ({ default: m.UXPulsePage })))
const APIShieldPage = lazy(() => import('./pages/apishield').then(m => ({ default: m.APIShieldPage })))
const MicroSaaSPage = lazy(() => import('./pages/microsaas').then(m => ({ default: m.MicroSaaSPage })))
const DesignTokensPage = lazy(() => import('./pages/designtokens').then(m => ({ default: m.DesignTokensPage })))
const FeatureFlagPage = lazy(() => import('./pages/featureflag').then(m => ({ default: m.FeatureFlagPage })))
const PerformanceLabPage = lazy(() => import('./pages/performancelab').then(m => ({ default: m.PerformanceLabPage })))
const A11yScanPage = lazy(() => import('./pages/a11yscan').then(m => ({ default: m.A11yScanPage })))
const FrontendMonitorPage = lazy(() => import('./pages/frontendmonitor').then(m => ({ default: m.FrontendMonitorPage })))
const SEOStackPage = lazy(() => import('./pages/seostack').then(m => ({ default: m.SEOStackPage })))
const SaaSOnboardingPage = lazy(() => import('./pages/saasonboarding').then(m => ({ default: m.SaaSOnboardingPage })))
const AuthlessPage = lazy(() => import('./pages/authless').then(m => ({ default: m.AuthlessPage })))
const CloudCostPage = lazy(() => import('./pages/cloudcost').then(m => ({ default: m.CloudCostPage })))
const DocsAPIPage = lazy(() => import('./pages/docsapi').then(m => ({ default: m.DocsAPIPage })))
const IndieMetricsPage = lazy(() => import('./pages/indiemetrics').then(m => ({ default: m.IndieMetricsPage })))

// Minimal loading fallback - no layout shift
function PageLoader() {
  return (
    <div className="min-h-screen bg-[#030303] flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-white/20 border-t-white/80 rounded-full animate-spin" />
    </div>
  )
}

function App() {
  return (
    <PageLayout>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
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
      </Suspense>
    </PageLayout>
  )
}

export default App
