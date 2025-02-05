import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import { History, LayoutDashboard, Settings, Shield, Zap } from "lucide-react"

export default function CorporateMarketing() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="col-span-3 bg-white/80 backdrop-blur-sm border-none shadow-lg">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-2 text-primary">Corporate Office Marketing Team Member</h2>
            <p className="text-gray-600 mb-4">
              Supports division level marketing teams, reviews issues, and ensures brand continuity.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-primary">
                <History className="w-5 h-5" />
                <span>Track and audit changes across the website</span>
              </li>
              <li className="flex items-center gap-2 text-primary">
                <Zap className="w-5 h-5" />
                <span>Diagnose and resolve feed issues</span>
              </li>
              <li className="flex items-center gap-2 text-primary">
                <Shield className="w-5 h-5" />
                <span>Ensure data integrity and brand compliance</span>
              </li>
            </ul>
          </CardContent>
        </Card>
        <Card className="bg-white/80 backdrop-blur-sm border-none shadow-lg overflow-hidden">
          <Image
            src="/marketing-team-member.png?height=400&width=600"
            alt="Corporate Marketing Dashboard"
            width={600}
            height={400}
            className="object-cover w-full h-full"
          />
        </Card>
      </div>
      <Card className="bg-white/80 backdrop-blur-sm border-none shadow-lg">
        <CardContent className="p-6">
          <Tabs defaultValue="audit" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 rounded-lg bg-secondary p-1">
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
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Comprehensive Audit History</h3>
                  <p className="text-gray-600 mb-4">Detailed tracking of all changes made across the website.</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-primary">
                      <History className="w-5 h-5" />
                      <span>Chronological view of all content changes</span>
                    </li>
                    <li className="flex items-center gap-2 text-primary">
                      <LayoutDashboard className="w-5 h-5" />
                      <span>Filter by user, date range, and content type</span>
                    </li>
                    <li className="flex items-center gap-2 text-primary">
                      <Settings className="w-5 h-5" />
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
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Advanced Analytics</h3>
                  <p className="text-gray-600 mb-4">Tools to easily diagnose and resolve feed issues.</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-primary">
                      <Zap className="w-5 h-5" />
                      <span>Real-time feed status monitoring</span>
                    </li>
                    <li className="flex items-center gap-2 text-primary">
                      <Shield className="w-5 h-5" />
                      <span>Automated error detection and reporting</span>
                    </li>
                    <li className="flex items-center gap-2 text-primary">
                      <Settings className="w-5 h-5" />
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
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">No-Code Components</h3>
                  <p className="text-gray-600 mb-4">
                    Empower marketing teams to modify CMS functionality without developer support.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-primary">
                      <Settings className="w-5 h-5" />
                      <span>Drag-and-drop interface for creating custom fields</span>
                    </li>
                    <li className="flex items-center gap-2 text-primary">
                      <LayoutDashboard className="w-5 h-5" />
                      <span>Visual workflow builder for content approval processes</span>
                    </li>
                    <li className="flex items-center gap-2 text-primary">
                      <History className="w-5 h-5" />
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
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Brand Consistency</h3>
                  <p className="text-gray-600 mb-4">
                    Build and manage reusable content blocks without developer intervention.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-primary">
                      <LayoutDashboard className="w-5 h-5" />
                      <span>Visual component builder</span>
                    </li>
                    <li className="flex items-center gap-2 text-primary">
                      <Settings className="w-5 h-5" />
                      <span>Predefined templates for common block types</span>
                    </li>
                    <li className="flex items-center gap-2 text-primary">
                      <History className="w-5 h-5" />
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

