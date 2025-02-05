import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import { History, LayoutDashboard, Settings, Shield, Zap } from "lucide-react"

export default function CorporateMarketing() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 pb-2 md:grid-cols-4 md:gap-6">
        <Card className="col-span-3 border-none bg-white/80 shadow-lg backdrop-blur-sm">
          <CardContent className="p-6">
            <h2 className="mb-2 text-2xl font-bold text-primary">Corporate Office Marketing Team Member</h2>
            <p className="mb-4 text-gray-600">
              Supports division level marketing teams, reviews issues, and ensures brand continuity.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-primary">
                <History className="h-5 w-5" />
                <span>Track and audit changes across the website</span>
              </li>
              <li className="flex items-center gap-2 text-primary">
                <Zap className="h-5 w-5" />
                <span>Diagnose and resolve feed issues</span>
              </li>
              <li className="flex items-center gap-2 text-primary">
                <Shield className="h-5 w-5" />
                <span>Ensure data integrity and brand compliance</span>
              </li>
            </ul>
          </CardContent>
        </Card>
        <Card className="overflow-hidden border-none bg-white/80 shadow-lg backdrop-blur-sm">
          <Image
            src="/marketing-team-member.png?height=400&width=600"
            alt="Corporate Marketing Dashboard"
            width={150}
            height={100}
            className="mx-auto h-30 w-30 items-center justify-center md:h-full md:w-full object-cover"
          />
        </Card>
      </div>
      <Card className="border-none bg-white/80 shadow-lg backdrop-blur-sm">
        <CardContent className="p-6">
          <Tabs defaultValue="audit" className="w-full">
            <TabsList className="grid w-full grid-cols-2 rounded-lg bg-secondary p-1 lg:grid-cols-5">
              <TabsTrigger value="audit" className="rounded-md py-2 text-sm">
                Audit History
              </TabsTrigger>
              <TabsTrigger value="diagnostics" className="rounded-md py-2 text-sm">
                Analytics
              </TabsTrigger>
              <TabsTrigger value="customization" className="rounded-md py-2 text-sm">
                No-code Components
              </TabsTrigger>
              <TabsTrigger value="content-blocks" className="rounded-md py-2 text-sm">
                Brand Consistency
              </TabsTrigger>
            </TabsList>
            <TabsContent value="audit" className="mt-6">
              <div className="grid items-center gap-6 md:grid-cols-2">
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-primary">Comprehensive Audit History</h3>
                  <p className="mb-4 text-gray-600">Detailed tracking of all changes made across the website.</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-primary">
                      <History className="h-5 w-5" />
                      <span>Chronological view of all content changes</span>
                    </li>
                    <li className="flex items-center gap-2 text-primary">
                      <LayoutDashboard className="h-5 w-5" />
                      <span>Filter by user, date range, and content type</span>
                    </li>
                    <li className="flex items-center gap-2 text-primary">
                      <Settings className="h-5 w-5" />
                      <span>Diff view to compare versions</span>
                    </li>
                  </ul>
                </div>
                <Image
                  src="/explorer.png?height=300&width=600"
                  alt="Audit History Screenshot"
                  width={600}
                  height={300}
                  className="rounded-lg shadow-md"
                />
              </div>
            </TabsContent>
            <TabsContent value="diagnostics" className="mt-6">
              <div className="grid items-center gap-6 md:grid-cols-2">
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-primary">Advanced Analytics</h3>
                  <p className="mb-4 text-gray-600">Tools to easily diagnose and resolve feed issues.</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-primary">
                      <Zap className="h-5 w-5" />
                      <span>Real-time feed status monitoring</span>
                    </li>
                    <li className="flex items-center gap-2 text-primary">
                      <Shield className="h-5 w-5" />
                      <span>Automated error detection and reporting</span>
                    </li>
                    <li className="flex items-center gap-2 text-primary">
                      <Settings className="h-5 w-5" />
                      <span>Guided troubleshooting workflows</span>
                    </li>
                  </ul>
                </div>
                <Image
                  src="/analytics.png?height=300&width=600"
                  alt="Feed Diagnostics Screenshot"
                  width={600}
                  height={300}
                  className="rounded-lg shadow-md"
                />
              </div>
            </TabsContent>
            <TabsContent value="customization" className="mt-6">
              <div className="grid items-center gap-6 md:grid-cols-2">
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-primary">No-Code Components</h3>
                  <p className="mb-4 text-gray-600">
                    Empower marketing teams to modify CMS functionality without developer support.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-primary">
                      <Settings className="h-5 w-5" />
                      <span>Drag-and-drop interface for creating custom fields</span>
                    </li>
                    <li className="flex items-center gap-2 text-primary">
                      <LayoutDashboard className="h-5 w-5" />
                      <span>Visual workflow builder for content approval processes</span>
                    </li>
                    <li className="flex items-center gap-2 text-primary">
                      <History className="h-5 w-5" />
                      <span>Template editor for creating new page layouts</span>
                    </li>
                  </ul>
                </div>
                <Image
                  src="/component-builder.png?height=300&width=600"
                  alt="CMS Customization Screenshot"
                  width={600}
                  height={300}
                  className="rounded-lg shadow-md"
                />
              </div>
            </TabsContent>
            <TabsContent value="content-blocks" className="mt-6">
              <div className="grid items-center gap-6 md:grid-cols-2">
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-primary">Brand Consistency</h3>
                  <p className="mb-4 text-gray-600">
                    Build and manage reusable content blocks without developer intervention.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-primary">
                      <LayoutDashboard className="h-5 w-5" />
                      <span>Visual component builder</span>
                    </li>
                    <li className="flex items-center gap-2 text-primary">
                      <Settings className="h-5 w-5" />
                      <span>Predefined templates for common block types</span>
                    </li>
                    <li className="flex items-center gap-2 text-primary">
                      <History className="h-5 w-5" />
                      <span>Version control and rollback for content blocks</span>
                    </li>
                  </ul>
                </div>
                <Image
                  src="/brand-assistant.png?height=300&width=600"
                  alt="Custom Content Blocks Screenshot"
                  width={600}
                  height={300}
                  className="rounded-lg shadow-md"
                />
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

