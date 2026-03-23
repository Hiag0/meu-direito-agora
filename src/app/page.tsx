import { Hero } from '@/features/hero/components/hero'
import { ServicesGrid } from '@/features/services/components/services-grid'
import { HealthComplaints } from '@/features/health/components/health-complaints'
import { EligibilityChecker } from '@/features/eligibility/components/eligibility-checker'
import { QuickLinksGrid } from '@/features/quick-links/components/quick-links-grid'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <HealthComplaints />
      <EligibilityChecker />
      <QuickLinksGrid />
    </>
  )
}
